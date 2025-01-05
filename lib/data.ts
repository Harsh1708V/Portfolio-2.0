import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import ktlink from "@/public/project/5.jpg";
import drowsiness from "@/public/project/drowsiness.jpg";
import assetTradingImg from "@/public/asset-trading.jpg";
import gemini from "@/public/project/gemini.jpg";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import nivranweb from "@/public/project/nivaranweb.png";
import nivranapp from "@/public/project/nivrana.jpg";
import swatantradev from "@/public/project/portfolio.png";
import utthanitsolution from "@/public/project/utthanitsolution.png"
import resonance from "@/public/project/resonance.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Freelancer",
    description:
      "I specialize in full-scale freelance projects, with a focus on crafting solutions like URL shorteners, e-commerce platforms, and foundational company websites, delivering tailored and comprehensive solutions for diverse client requirements.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - January 2023",
  },
  {
    title: "Full Stack Developer | Internship",
    location: "COZINCO INNOVATIONS",
    description:
      "Developed a React.js chatbot with Firebase authentication and an online survey website, and currently engaged in crafting a React-Native app for purchasing online gift cards.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 - February 2024",
  },
  {
    title: "Front-End Developer",
    location: "CSRBOX",
    description:
      "Front End Developer in the Support team. Worked on web applications such as Personal Website And portfolio.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - October 2024",
  },
] as const;

export const projectsData = [

  {
    title: "Drowsiness Detection System",
    description:
      "Designed a drowsiness detection system with real-time monitoring, leading to a 40% decrease in fatigue-related accidents in simulated driving environments.",
    tags: ["Python", "OpenCV", "Dlib"],
    icons: [
      "logos:python",
    ],
    imageUrl: drowsiness,
    urlLink: "",
    githubLink: "https://github.com/Harsh1708V/Drowsiness-Detection.git",
  },
  {
    title: "Gemini LLM Chatbot",
    description:
      "Gemini LLM Chatbot is an interactive chatbot application built using Streamlit, Google Generative AI, and dotenv libraries. This chatbot provides intelligent responses to user prompts leveraging the power of large language models.",
    tags: ["Python", "Streamlit"],
    icons: [
      "logos:python",
      "logos:streamlit",
    ],
    imageUrl: gemini,
    urlLink: "",
    githubLink: "https://github.com/Harsh1708V/Gemini-LLM-chatbot.git",
  },
  {
    title: "POSTURE Detection System",
    description:
      "This project contains a posture detection program that utilizes YOLOv5, an advanced object detection algorithm, to detect and predict lateral sitting postures. The program is designed to analyze the user's sitting posture in real-time and provide feedback on whether the posture is good or bad based on predefined criteria. The goal of this project is to promote healthy sitting habits and prevent potential health issues associated with poor posture.",
    tags: ["Python", "Streamlit"],
    icons: [
      "logos:python",
      "logos:streamlit",
    ],
    imageUrl: resonance,
    urlLink: "",
    githubLink: "https://github.com/Harsh1708V/Posture-Detection.git",
  },
  {
    title: "Utthan IT Solution",
    description:
      'Developed the "Utthan IT Solution" website using HTML, CSS, Bootstrap, and core PHP, showcasing comprehensive front-end and back-end skills to deliver a responsive and user-friendly platform.',
    tags: ["PHP", "HTML", "JavaScript", "Bootstrap", "Css"],
    icons: [
      "logos:php",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
      "devicon:bootstrap"
    ],
    imageUrl: utthanitsolution,
    urlLink: "https://utthanitsolutions.com/",
  },
  {
    title: "Nivaran Complaint Register | Website For Government",
    description:
      'Developed the "Nivaran" website for government services using HTML, CSS, JavaScript, and Laravel. The platform enables users to file complaints, allows district officials to assign inspectors for verification, and facilitates resolution tracking by district heads, ensuring efficient and transparent problem-solving.',
    tags: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:bootstrap",
      "logos:mysql",
    ],
    imageUrl: nivranweb,
    urlLink: 'https://nivaran.utthanitsolutions.com/'
  },
  {
    title: "Nivaran Inspector Complaint Verification | App",
    description:'Developed the "Inspector App" for complaint verification using React Native, streamlining the process of field inspections and providing seamless updates for complaint resolutions.',
    tags: ["React"],
    icons: ["logos:react"],
    imageUrl: nivranapp,
    // githubLink: "https://github.com/ben04rogers/breadth-first-search",
    // demoLink: "A",
  },
  {
    title: "Swatantra Dev Singh Portfolio | Webiste",
    description:
      'Developed the "Swatantra Dev Singh" fully dynamic portfolio website utilizing HTML, CSS, JavaScript, and Laravel, showcasing a comprehensive range of projects, skills, and achievements with seamless navigation and interactive design elements.',
    tags: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:bootstrap",
      "logos:mysql",
    ],
    imageUrl: swatantradev,
    urlLink: "https://dave.utthanitsolutions.com/",
    // demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  },
  {
    title: "KTLink",
    description:
      "Developed an admin application using React Native and Redux, facilitating seamless integration with external APIs. Additionally, conceptualized and built KTLink, a comprehensive URL shortener, utilizing HTML, CSS, and JavaScript for the frontend, and Laravel for the backend. Implemented advanced URL shortening functionalities such as referral tracking, withdrawal management, and dynamic URL generation, enhancing user engagement and interaction.",
    tags: ["JavaScript", "React Native", "Laravel" , "Mysql"],
    icons: [
      "logos:laravel",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:mysql",
    ],
    imageUrl: ktlink,
    // githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
] as const;

export const skillsData = [
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Bootstrap",
    icon: "devicon:bootstrap",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "React Native",
    icon: "logos:react",
  },
  {
    name: "Next Js",
    icon: "devicon:nextjs",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },

  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Git",
    icon: "logos:github-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Node.js",
    icon: "logos:flutter",
  },
] as const;
