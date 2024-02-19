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
  resumeUrl: "https://rajabilal555.github.io/Bilal%20Pervez%20Resume%20v2.2.pdf",
  typings: ["Hi! my name is Bilal Pervez"],
  socials: [
    "https://github.com/rajabilal555",
    "https://www.linkedin.com/in/bilalraja555/",
    // "https://stackoverflow.com/users/5040558/raja-bilal",
  ],
  phone: "+92 3334513312",
  email: "rajabilal555@gmail.com",
  location: "Karachi, Pakistan",
  about: `A Final year student driven by relentless curiosity. I have immersed myself in the world of Software Development for more than 4 years. My expertise spans across languages including PHP, Dart, and Nodejs as well as front-end technologies like Typescript, React and Vuejs. I have hands-on experience with frameworks such as Laravel, Flutter, Tailwind, and Nextjs and managing databases like MySQL and MongoDB. I have tackled various projects, ranging from web development to mobile app development. I am highly motivated, fast learner, self-taught and continuously learning to enhance my skills and staying up-to-date with industry trends.

🔭 Currently I'm freelancing and in the final year of my bachelors.
🌱 I'm currently looking for good career startup opportunities.
⚡ Fun fact: I've been passionate about tech since the age of 12`,
  experiences: [
    {
      period: "Oct 2023 – Present",
      company: "Carly",
      position: "Flutter Developer",
      icons: [DiVisualstudio, BiLogoFlutter, DiAndroid, DiGit, TbApi],
      description: `- Boosted project development efficiency by 60%.
- Collaborated with the backend design team, providing valuable input to improve the overall system architecture and efficiency.
- Collaborated with the design team to implement user-friendly and practical designs.
- Helped add a real-time web sockets feature by working closely with the team.`,
    },
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
      - A hero draft helper using previous match data to suggest hero picks during the drafting phase.
      - A heroes glossary page providing detailed information on each hero and recommended play style.`,
    },
    {
      name: "Next Expense (Flutter App)",
      image: "/images/nextExpense_preview.jpg",
      sourceUrl:
        "https://play.google.com/store/apps/details?id=com.flowdevelopers.nextexpense",
      icons: [DiAndroid, BiLogoFlutter, BiLogoFirebase],
      tags: ["Flutter", "Firebase", "Freelance"],
      description: `A flutter app made to track and manage expenses offline and on the go. User can scan and add their receipts and view insights on their expenses. The receipts can also be grouped into events for even more management options. The data can also be exported in pdf format for sharing with supervisors.
- I managed the technical side of the project and developed 90% of the app myself.
- While the designs were provided by the client, I converted the design images into functional flutter components.`,
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
