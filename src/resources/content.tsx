import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Arun",
  lastName: "Et",
  name: 'Arun Et',
  role: "Software Engineer | Interface Builder | Performance Optimizer",
  avatar: "/images/avatar.webp",
  email: "arunet008@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Et-008",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/arun-elanthamil-801663133/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/arun_elanthamil",
    essential: false,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/et_arun",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Zorb UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Arun, a <Text as="span" size="xl" weight="strong">senior software engineer</Text> by profession, I craft intuitive <br /> user experiences. After work, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/arun-et-5erxoc/quick-chat",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I specialize in turning complex product challenges into clean, accessible web applications.
        Right at the intersection of design and technology, focusing on writing elegant code that delivers fast, intuitive user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Superops.ai",
        timeframe: "2021 - Present",
        role: "Senior Frontend developer",
        achievements: [
          <>Led frontend development for PSA modules (invoicing, ticketing, projects) used by MSPs globally.</>,
          <>Led and mentored frontend team, overseeing code reviews and sprint goal alignment.</>,
          <>Worked on a orginisation-wide design system, accelerating new feature development by 40%.</>,
          <>Worked with design team to standardize design tokens and UI components, for a seamless, consistent, AI-driven UI development.</>,
          <>Refactored frontend codebase to boost Lighthouse performance scores by 45%.</>,
          <>Used WebSockets to implement live ticketing collaboration, background email sync, and real-time payment updates.</>,
          <>Built a AI native - Incident response extension, reducing support team and dev team effort for issue analysis and issue fixes.</>,
          // <>
          //   Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
          //   engagement and 30% faster load times.
          // </>,
          // <>
          //   Spearheaded the integration of AI tools into design workflows, enabling designers to
          //   iterate 50% faster.
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-001.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Cognizant technologies",
        timeframe: "2018 - 2021",
        role: "Junior developer",
        achievements: [
          <>Enhanced Cognizant Learn platform using React and Redux, ensuring reliable performance for enterprise users.</>,
          <>Maintained ServiceNow websites, resolving high-priority bugs to ensure platform stability.</>,
          <>Improved frontend components via HTML, CSS, Bootstrap, and jQuery to eliminate UI inconsistencies.</>,
          <>Collaborated in 10+ member Agile teams, consistently meeting deadlines and delivering quality code.</>,
          // <>
          //   Developed a design system that unified the brand across multiple platforms, improving
          //   design consistency by 40%.
          // </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "DMI college of engineering",
        description: <>Studied civil engineering.</>,
      },
      {
        name: "Youtube",
        description: <>Self taught Software engineer.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "WHYChoose?",
        description: (
          <>Indexed Insurance policies into HNSW vector embeddings.</>
        ),
        url: "https://chooseinsurance.netlify.app/",
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "LlamaIndex",
            icon: "llama",
          },
          {
            name: "HF",
            icon: "hf",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "EC2",
            icon: "awsecc",
          },
          {
            name: 'Chroma DB',
            icon: 'chromadb'
          },
          {
            name: 'Colab',
            icon: 'colab'
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/zorb/image-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/zorb/image-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/zorb/image-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/zorb/image-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Patchy",
        description: (
          <>Built a AI native - Incident response extension.</>
        ),
        url: "https://chromewebstore.google.com/detail/patchy-ai-ready-incident/nbhnpnhknhjnhjjiidbikgnoofgndhgh?pli=1",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Express",
            icon: "expressjs",
          },
          {
            name: "Claude API",
            icon: "claude",
          },
          {
            name: "Slack API",
            icon: "slack",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: 'Chrome extension',
            icon: 'extension'
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/patchy/image-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/patchy/image-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/patchy/image-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/patchy/image-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Lang Q",
        description: (
          <>Built a language translation Saas.</>
        ),
        url: "https://lang-q.com/",
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: 'CRA',
            icon: 'react'
          },
          {
            name: 'Gemini',
            icon: 'google'
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/langQ/image-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/langQ/image-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/langQ/image-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Deep dives into design systems, code, and cutting-edge tech.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
