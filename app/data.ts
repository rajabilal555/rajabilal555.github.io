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
import { SiNodedotjs } from "react-icons/si";
import {
  TbApi,
  TbBrandCSharp,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandPython,
  TbBrandReact,
  TbBrandTypescript,
} from "react-icons/tb";
interface Developer {
  picture: string;
  name: string;
  title: string;
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
  typings: ["Hi! my name is Bilal Pervez"],
  socials: [
    "https://github.com/rajabilal555",
    "https://www.linkedin.com/in/bilalraja555/",
    // "https://stackoverflow.com/users/5040558/raja-bilal",
  ],
  phone: "+92 3334513312",
  email: "rajabilal555@gmail.com",
  location: "Karachi, Pakistan",
  about: `A results driven Software Developer with 5+ years of experience building high quality web applications. Specialized in backend web services. Self-taught and continuously enhancing skills to stay up-to-date with industry trends. Adaptable and knowledgeable, leveraging valuable project insights to deliver efficient solutions.

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
      description: `- Developed and deployed web applications, mobile apps, and custom software, utilizing a variety of programming languages, frameworks, and technologies.
- Collaborated closely with clients to understand their specific needs and translate them into practical software solutions.
- Demonstrated proficiency in problem-solving and troubleshooting, ensuring efficient resolution of technical issues.
- Acquired expertise in project management and communication, effectively coordinating with clients, stakeholders, and team members.
- Continuously expanded technical knowledge and skills through self-learning and staying up-to-date with industry trends.`,
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
- Developed and maintained scalable and robust backend systems, ensuring optimal performance and reliability.
- Effectively worked remotely, demonstrating strong time management skills and consistently meeting project deadlines.`,
    },
  ],
  projects: [
    {
      name: "Dota 2 Helper (Flutter App)",
      image: "https://rajabilal555.github.io/images/dota_helper.png",
      sourceUrl:
        "https://play.google.com/store/apps/details?id=com.rajabilal555.dota_helper",
      icons: [
        DiVisualstudio,
        DiLaravel,
        DiAndroid,
        BiLogoFlutter,
        BiLogoFirebase,
      ],
      tags: ["Flutter", "Firebase"],
      description: `- Demonstrated proficiency in Flutter development, API integration, data analysis, and algorithm development.
      - Showcased ability to create practical solutions and cater to the needs of the gaming community.
      - Created a Timer page for in-game event reminders.
      - Implemented a Dota 2 news page utilizing data from the Steam API.
      - Designed a hero draft helper using historical match data and an intelligent algorithm for hero picks during the drafting phase.
      - Developed a heroes glossary page providing detailed information on each hero and recommended play style.`,
    },
    {
      name: "Content Server",
      icons: [DiVisualstudio, DiCodeigniter, DiJsBadge],
      tags: ["PHP"],
      description: `- A side project using PHP (Codeigniter) and MySQL database, showcasing proficiency in these technologies.
      - Tested the project with a large volume of dummy Movies and Shows, ensuring efficient performance and functionality.
      - Implemented an Admin Panel to control both the front-end and the content/files of the project, providing easy management and customization capabilities.`,
    },
    {
      name: "Castle Defense (Unity Game)",
      image: "https://rajabilal555.github.io/images/csdf.png",
      sourceUrl:
        "https://play.google.com/store/apps/details?id=com.rajabilal555.CastleDefense",
      icons: [BiLogoUnity, TbBrandCSharp, DiAndroid],
      tags: ["Unity", "C#"],
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
