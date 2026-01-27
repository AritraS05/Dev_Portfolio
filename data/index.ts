export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-10 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AritraDocs",
    des: "Live Collaborative Document Tool ready for storing, sharing, commenting, live chatting and much more all in one place.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://aritra-docs.vercel.app/",
  },
  {
    id: 2,
    title: "AI Shopping Assistant",
    des: "Designed and implemented a full-stack, API-driven system supporting text, image, and audio inputs.",
    img: "/p_ai.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/sparkathon221/spark-app",
  },
  {
    id: 3,
    title: "Encryted chat application",
    des: "Enjoy fully encryted one to one chats on the go.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://whatsup-u96e.onrender.com/",
  },
  {
    id: 4,
    title: "Cabify",
    des: "Android and IOS app for booking cabs with inbuilt live location fetching.",
    img: "/p_cabify.jpg",
    iconLists: [],
    link: "https://github.com/AritraS05/cabify_app",
  },
  {
    id: 5,
    title: "Feather",
    des: "Make PDFs talk to you and enjoy reading interactively.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/AritraS05/feather",
  },
  {
    id: 6,
    title: "Voting dapp",
    des: "A decentralized voting dapp built on Solana blockchain.",
    img: "/p4.png",
    iconLists: [],
    link: "https://github.com/AritraS05/voting-dapp",
  },
  {
    id: 7,
    title: "Onchain Journal",
    des: "Publish Journals on the Solana blockchain.",
    img: "/p5.png",
    iconLists: [],
    link: "https://github.com/AritraS05/onchain-journal",
  },
  {
    id: 8,
    title: "Subscription Tracker API",
    des: "A custom api  which maintains the subscriptions and sends email alerts before the subscription expires to remove unwanted subscriptions and keep the user updated.",
    img: "/p6.png",
    iconLists: [],
    link: "https://github.com/AritraS05/subscription-tracker",
  },
  {
    id: 9,
    title: "Code Execution Engine",
    des: "A custom sandboxed environment for executing code in various programming languages",
    img: "/p_edit.png",
    iconLists: [],
    link: "https://github.com/AritraS05/code-execution-engine",
  },
  {
    id: 10,
    title: "Document Validator",
    des: "A data driven Document Validator using gen ai models",
    img: "/p_validator.png",
    iconLists: [],
    link: "https://github.com/AritraS05/ai-document-validator-backend",
  },
];

export const testimonials = [
  {
    quote:
      "Qualified INMO 2022",
    name: " INMO",
    title: "Indian National Mathematical Olympiad",
  },
  {
    quote:
      "Qualified RMO 2019",
    name: " RMO",
    title: "Regional Mathematical Olympiad",
  }, {
    quote:
      "Qualified INPHO 2023",
    name: " INPHO",
    title: "Indian National Physics Olympiad",
  }, {
    quote:
      "1st in HackForge 2025",
    name: " HackForge",
    title: "Developed a web3 based metaverse 2-dimensional game",
  }
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },

];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: ` – Developing scalable, production-grade frontend systems for customer-facing platforms and internal business dashboards.
    – Built modular, reusable UI components with strong focus on maintainability, accessibility, and performance.
    – Implemented form validation, schema enforcement, and type safety to reduce runtime errors across releases.
    – Collaborated closely with backend teams to integrate API-driven interfaces and handle edge cases gracefully.
    – Actively participated in code reviews, debugging, and feature prioritization in a fast-paced environment.`,
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "App Dev",
    desc: ` – Delivered an end-to-end mobile solution including frontend app, backend APIs, and admin dashboard.
    – Integrated authentication, REST APIs, state management, and automated build pipelines.
    – Debugged and resolved cross-platform issues, ensuring stability across Android and iOS`,
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 3,
    img: "/link.svg",
  },
];

// skills
export const SKILLS = [
  {
    title: "Languages",
    stacks: ["C++", "JAVA", "JavaScript", "TypeScript", "Python", "Rust"],
  },
  {
    title: "Frontend Frameworks",
    stacks: ["React JS", "Next.js"],
  },
  {
    title: "React Ecosystems",
    stacks: [
      "React Testing Library",
      "Framer Motion",
      "Motion",
      "React Router Dom",
      "React Hook Form",
      "Radix UI",
      "Headless UI",
      "Zod",
    ],
  },
  {
    title: "Components Libraries",
    stacks: [
      "Shadcn UI",
      "Material UI",
      "Mantine UI",
      "Chakra UI",
      "React Native Paper",
    ],
  },
  {
    title: "CSS Styling",
    stacks: [
      "Tailwind CSS",
      "Emotion",
      "Styled Components",
      "CSS Modules",
      "SASS",
    ],
  },
  {
    title: "Cross-Platform",
    stacks: ["React Native", "Expo"],
  },
  {
    title: "Backend",
    stacks: [
      "Node.js",
      "Socket.io",
      "Express.js",
      "Mongoose",
      "Prisma",
    ],
  },
  {
    title: "Databases/BASS/CMS",
    stacks: [
      "MongoDB",
      "PostgreSQL",
      "SQLite",
      "Appwrite",
      "Sanity.IO",
      "Payload CMS",
    ],
  },
  {
    title: "Blockchain",
    stacks: [
      "Solidity",
      "Web3.js",
      "Ethers.js",
      "wagmi",
      "IPFS",
      "Foundry",
    ],
  },
  {
    title: "Other Technologies",
    stacks: [
      "WebRTC",
      "WebSockets",
      "Socket.io",
      "Cloudinary",
      "Vercel",
      "Netlify",
    ],
  },
  {
    title: "Other Tools",
    stacks: ["VS Code", "Git", "GitHub", "Eslint", "Figma"],
  },
];