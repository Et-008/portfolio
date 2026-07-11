import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Basic configuration - normally imported from @/resources
// We'll use placeholders or read a config file if available
const config = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'https://et-008.in',
  person: {
    name: 'Arun Elanthamil',
    email: 'arunet008@gmail.com',
    avatar: '/images/avatar.webp',
  },
  blog: {
    title: 'Arun Elanthamil',
    description: 'Insights and thoughts',
  }
};

function getPosts(dir) {
  if (!fs.existsSync(dir)) return [];
  
  return fs.readdirSync(dir)
    .filter(file => path.extname(file) === '.mdx')
    .map(file => {
      const rawContent = fs.readFileSync(path.join(dir, file), 'utf-8');
      const { data } = matter(rawContent);
      return {
        slug: path.basename(file, path.extname(file)),
        metadata: {
          title: data.title || '',
          publishedAt: data.publishedAt || new Date().toISOString(),
          summary: data.summary || '',
          image: data.image || '',
          tag: data.tag || '',
        },
        draft: data.draft || false
      };
    })
    .filter(post => !post.draft);
}

async function generateRSS() {
  const postsDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  const posts = getPosts(postsDir);

  const sortedPosts = posts.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.blog.title}</title>
    <link>${config.baseURL}/blog</link>
    <description>${config.blog.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${config.baseURL}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>${config.person.email} (${config.person.name})</managingEditor>
    <webMaster>${config.person.email} (${config.person.name})</webMaster>
    <image>
      <url>${config.baseURL}${config.person.avatar}</url>
      <title>${config.blog.title}</title>
      <link>${config.baseURL}/blog</link>
    </image>
    ${sortedPosts.map(post => `
    <item>
      <title>${post.metadata.title}</title>
      <link>${config.baseURL}/blog/${post.slug}</link>
      <guid>${config.baseURL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.metadata.summary}]]></description>
      ${post.metadata.image ? `<enclosure url="${config.baseURL}${post.metadata.image}" type="image/jpeg" />` : ""}
      ${post.metadata.tag ? `<category>${post.metadata.tag}</category>` : ""}
      <author>${config.person.email} (${config.person.name})</author>
    </item>`).join('')}
  </channel>
</rss>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml);
  console.log('✅ RSS feed generated at public/rss.xml');
}

generateRSS().catch(console.error);
