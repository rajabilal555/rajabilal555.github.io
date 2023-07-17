import { IconType } from "react-icons";
import {
  DiAndroid,
  DiCodeigniter,
  DiDatabase,
  DiGit,
  DiJsBadge,
  DiLaravel,
  DiLinux,
  DiPhp,
  DiReact,
  DiVisualstudio,
} from "react-icons/di";
// import { TbBrandFirebase, TbBrandFlutter } from "react-icons/tb";
import {
  BiLogoFirebase,
  BiLogoFlutter,
  BiLogoUnity,
  BiLogoVuejs,
} from "react-icons/bi";
import { IoLogoElectron } from "react-icons/io5";
import { SiNodedotjs } from "react-icons/si";
import {
  TbApi,
  TbBrandCSharp,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
interface Developer {
  picture: string;
  name: string;
  title: string;
  resumeUrl: string;
  typings: string[];
  about: string;
  socials: string[];
  phone?: string;
  email?: string;
  location?: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}

interface Experience {
  period: string;
  position: string;
  company: string;
  icons: IconType[];
  description: string;
}

interface Project {
  name: string;
  image?: string;
  icons: IconType[];
  description: string;
  tags: string[];
  sourceUrl?: string;
}

interface Skill {
  label: string;
  icon: IconType;
}

const developer: Developer = {
  picture: "images/me.jpg",
  name: "Bilal Pervez",
  title: "Full stack Developer",
  resumeUrl: "https://rajabilal555.github.io/Bilal%20Pervez%20Resume%20v5.pdf",
  typings: ["Hi! my name is Bilal Pervez"],
  socials: [
    "https://github.com/rajabilal555",
    "https://www.linkedin.com/in/bilalraja555/",
    // "https://stackoverflow.com/users/5040558/raja-bilal",
  ],
  phone: "+92 3334513312",
  email: "rajabilal555@gmail.com",
  location: "Karachi, Pakistan",
  about: `A Final year student driven by relentless curiosity. I have immersed myself in the world of Software Development for over 5 years. Self-taught and continuously learning to enhance my skills and staying up-to-date with industry trends. Adaptable and well-versed, I have tackled various projects, ranging from web development to mobile app development and beyond.
  
🔭 Currently I'm freelancing and in the final year of my bachelors.
🌱 I'm currently looking for good career startup opportunities.
⚡ Fun fact: I've been passionate about tech since the age of 12`,
  experiences: [
    {
      period: "Dec 2018 – Present",
      company: "Freelance",
      position: "Full stack Engineer",
      icons: [
        DiVisualstudio,
        DiLaravel,
        DiJsBadge,
        DiReact,
        BiLogoVuejs,
        DiAndroid,
        BiLogoFlutter,
        BiLogoFirebase,
      ],
      description: `- Developed and deployed diverse web applications, mobile apps, and custom software using various programming languages, frameworks, and technologies.
- Collaborated closely with clients to understand and meet their specific software needs.
- Proficient in problem-solving, troubleshooting, and efficiently resolving technical issues.
- Skilled in project management and communication, ensuring effective coordination with clients, stakeholders, and team members.`,
    },
    {
      period: "Oct 2020 – Sep 2022",
      company: "Softologics",
      position: "Backend Engineer",
      icons: [
        DiVisualstudio,
        DiPhp,
        DiLaravel,
        DiDatabase,
        DiJsBadge,
        DiGit,
        TbApi,
      ],
      description: `- Successfully completed numerous projects, showcasing a track record of delivering quality software solutions.
- Implemented and improved software development workflows, including the introduction of Git, automated code deployment, code checks (CI/CD), and an API documentation framework.
- Developed and maintained scalable and robust backend systems, ensuring optimal performance and reliability.`,
    },
  ],
  projects: [
    {
      name: "Developer Portfolio",
      sourceUrl: "https://github.com/rajabilal555/rajabilal555.github.io",
      icons: [TbBrandTypescript, TbBrandNextjs, TbBrandTailwind, TbBrandReact],
      tags: ["Nextjs", "Typescript", "Tailwind"],
      description: `This website itself which was made with Nextjs, Typescript and Tailwind over the weekend.`,
    },
    {
      name: "Look Away Reminder",
      image: "/images/lar.png",
      sourceUrl: "https://github.com/rajabilal555/LAR",
      icons: [TbBrandTypescript, TbBrandNextjs, IoLogoElectron, TbBrandReact],
      tags: ["Nextjs", "Typescript", "Electronjs"],
      description: `LAR (Look Away Reminder) is a cross-platform application built with Next.js and Electron.js.
      Its primary goal is to prevent eye fatigue by sending periodic reminders to users, encouraging them to take breaks and divert their attention away from the screen.`,
    },
    {
      name: "Dota 2 Helper (Flutter App)",
      image: "https://rajabilal555.github.io/images/dota_helper.png",
      sourceUrl:
        "https://play.google.com/store/apps/details?id=com.rajabilal555.dota_helper",
      icons: [DiAndroid, BiLogoFlutter, BiLogoFirebase],
      tags: ["Flutter", "Firebase"],
      description: `A Flutter application published on Playstore.
      
      - Has a Timer page for in-game event reminders.
      - A Dota 2 news page utilizing data from the Steam API.
      - A hero draft helper using historical match data and an intelligent algorithm for hero picks during the drafting phase.
      - A heroes glossary page providing detailed information on each hero and recommended play style.`,
    },
    {
      name: "Content Server",
      icons: [DiVisualstudio, DiCodeigniter, DiJsBadge],
      tags: ["PHP"],
      description: `A side project using PHP (Codeigniter) and MySQL database.
      
      - Tested the project with a large volume of dummy Movies and Shows, ensuring efficient performance and functionality.
      - Implemented an Admin Panel to control both the front-end and the content/files of the project, providing easy management and customization capabilities.`,
    },
    {
      name: "Castle Defense (Unity Game)",
      image: "https://rajabilal555.github.io/images/csdf.png",
      sourceUrl:
        "https://play.google.com/store/apps/details?id=com.rajabilal555.CastleDefense",
      icons: [BiLogoUnity, TbBrandCSharp, DiAndroid],
      tags: ["Unity", "Game", "C#"],
      description: ``,
    },
  ],
  skills: [
    {
      label: "Flutter",
      icon: BiLogoFlutter,
    },
    {
      label: "Typescript",
      icon: TbBrandTypescript,
    },
    // {
    //   label: "JavaScript",
    //   icon: RiJavascriptLine,
    // },
    {
      label: "Nodejs",
      icon: SiNodedotjs,
    },
    {
      label: "React",
      icon: TbBrandReact,
    },
    {
      label: "Firebase",
      icon: BiLogoFirebase,
    },
    {
      label: "Laravel",
      icon: DiLaravel,
    },
    {
      label: "API Development",
      icon: TbApi,
    },
    {
      label: "MySQL",
      icon: TbBrandMysql,
    },
    {
      label: "MongoDb",
      icon: TbBrandMongodb,
    },
    {
      label: "Linux Environments",
      icon: DiLinux,
    },
    {
      label: "Python",
      icon: TbBrandPython,
    },
    {
      label: "Git",
      icon: DiGit,
    },
  ],
};

export default developer;
