import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import drowsiness from "@/public/project/drowsiness.jpg";
import gemini from "@/public/project/gemini.jpg";
import weather from "@/public/project/weather.jpg"
import sittingposture from "@/public/project/sittingposture.jpg"


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
    imageUrl: sittingposture,
    urlLink: "",
    githubLink: "https://github.com/Harsh1708V/Posture-Detection.git",
  },
  {
    title: "Weather Shark",
    description:
      "Weather Shark is an Android application that provides real-time weather updates using the OpenWeather API. It allows users to check the current weather conditions, including temperature, humidity, and weather descriptions.",
    tags: ["Android", "Java"],
    icons: [
      "logos:android",
      "logos:java",
    ],
    imageUrl: weather,
    urlLink: "",
    githubLink: "https://github.com/Harsh1708V/Weather-Shark.git",
  },
] as const;

export const skillsData = [
  {
    name: "Android",
    icon: "logos:android",
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
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Git",
    icon: "logos:github-icon",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Flutter",
    icon: "logos:flutter",
  },
] as const;
