// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import appwritelogo from "./assets/tech_logo/appwrite.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
//import redislogo from "./assets/tech_logo/redis.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import shadcnlogo from "./assets/tech_logo/shadcn.webp";
import zodlogo from "./assets/tech_logo/zod.png";
import zustandlogo from "./assets/tech_logo/zustand.svg";
import daisyuilogo from "./assets/tech_logo/daisyui.png";
import renderlogo from "./assets/tech_logo/Render.jpg";
import socketlogo from "./assets/tech_logo/socket.svg";
import supabaselogo from "./assets/tech_logo/supabase.png";
import clerklogo from "./assets/tech_logo/clerk.png";

// Experience Section Logo's
import etechlogo from "./assets/company_logo/etechlogo.jpeg";
//import freelancelogo from "./assets/company_logo/freelancelogo.png";

// Education Section Logo's
import choukseylogo from "./assets/education_logo/choukseylogo.jpeg";
import jainlogo from "./assets/education_logo/jgi.png";

// Project Section Logo's
import dinedashlogo from "./assets/work_logo/DineDash.png";
import chatuplogo from "./assets/work_logo/ChatUp.png";
import trelloClone from "./assets/work_logo/trelloClone.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "ShadCn", logo: shadcnlogo },
      { name: "Zod", logo: zodlogo },
      { name: "Zustand", logo: zustandlogo },
      { name: "Daisyui", logo: daisyuilogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Appwrite", logo: appwritelogo },
      //{ name: "Redis", logo: redislogo },
      { name: "Socket.io", logo: socketlogo },
      { name: "Supabase", logo: supabaselogo },
      { name: "Clerk", logo: clerklogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Render", logo: renderlogo },
    ],
  },
];

export const experiences = [
  // {
  //   id: 0,
  //   img: freelancelogo,
  //   role: "Fullstack Developer",
  //   company: "Self Employed",
  //   date: "October 2022 - Present",
  //   desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.  Build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment. The most significant impact Is I developed a billing software in Nextjs for a spare parts bussiness for handling transactions and filter them through dates with an responsive ui.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React JS",
  //     "TypeScript",
  //     "Node JS",
  //     "Tailwind CSS",
  //     "MongoDb",
  //     "Express",
  //     " Next Js",
  //   ],
  // },
  {
    id: 1,
    img: etechlogo,
    role: "Web Developer Internship",
    company: "E-tech",
    date: "July 2024 -  August 2024",
    desc: "Web developer internship at Etech , where i had amazing mentors that guide me on implementing theory concepts to practical projects . I learned react in dept along with several packages in the react library and how to use them , which then helped me to create responsive and catchy Uis.",
    skills: [
      "ReactJS",
      "Redux Toolkit",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: choukseylogo,
    school: "Chouksey Engineering College, Bilaspur",
    date: "October 2021 - June 2025",
    grade: "80%",
    desc: "I completed my Bachelor's of technology degree in Computer Science (B.Tech.) from Chouksey Engineering College, Bilaspur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Chouksey Engineering College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: jainlogo,
    school: "The Jain International School, Bilaspur",
    date: "Apr 2020 - March 2021",
    grade: "80%",
    desc: "I completed my class 12 education from The Jain International School, Bilaspur , under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
    degree: "CBSE Board(XII) - PCM ",
  },
  {
    id: 2,
    img: jainlogo,
    school: "The Jain International School, Bilaspur",
    date: "Apr 2018 - March 2019",
    grade: "77%",
    desc: "I completed my class 10 education from The Jain International School, Bilaspur, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Dine Dash - Online Food & Delivery Platform",
    description:
      "An online food & delivery fullstack application with email verification and high level authentication. DineDash is equipped with completely responsive ui with dark and light mode functionality.Dine Dash provides user an interface to order dishes , as well as a admin panel for restaurant owners. DineDash uses mongodb for storage, Typescript for robust code , zod for form validation, along with various tools such as Cloudinary , mailtrap , stripe webhooks and Zustand for state management.Dine Dash is a completely scalable platform developed to scale efficiently",
    image: dinedashlogo,
    tags: ["React Js", "Express", "Typescript", "Stripe", "Zustand", "MongoDb"],
    github: "https://github.com/Aman-Dixit07/DineDash-official",
    webapp: "https://dinedash-official.onrender.com/",
  },
  {
    id: 1,
    title: "ChatUp - Real Time Chat Application",
    description:
      "This MERN stack and Socket.io powered application delivers real-time messaging with a fully responsive design, customizable themes, and robust tools like Zustand and Cloudinary for a superior chat experience.I developed this project specifically to deepen my understanding and practice with the MERN stack and Socket.io",
    image: chatuplogo,
    tags: ["React Js", "Express", "Node Js", "Socket.io", "Zustand", "MongoDb"],
    github: "https://github.com/Aman-Dixit07/Chat-App",
    webapp: "https://chat-app-p069.onrender.com/",
  },
  {
    id: 2,
    title: "Trello Clone - Advanced Task Management & Team Collaboration",
    description:
      "Trello is an advanced Trello-inspired task management and collaboration tool designed to help teams move work forward seamlessly. It provides drag-and-drop boards, real-time updates, and enterprise-level authentication for secure collaboration. With support for membership plans, billing options, and smooth payments.Built with Next.js, TypeScript, Supabase, Clerk, ShadCn, React DnD, and deployed on Vercel, it delivers lightning-fast performance and a modern, intuitive UI.",
    image: trelloClone,
    tags: ["Next Js", "Supabase", "React Js", "TypeScript", "Clerk", "ShadCn"],
    github: "https://github.com/Aman-Dixit07/Trello-Clone",
    webapp: "https://trello-clone-omega-orcin.vercel.app/",
  },
];
