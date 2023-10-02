"use client";

import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Goals",
    description: "Trello Inspired Task Tracker with OpenAI summary",
    image: "/images/goalsScreen.png",
    tag: ["All", "Web"],
    link: "https://goals-one.vercel.app/",
    content: (
      <ul className="flex flex-wrap gap-2">
        <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">
          Next.js
        </li>
        <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">
          React.js
        </li>
        <li className="bg-yellow-500 text-white rounded-full px-3 py-2 text-sm">
          OpenAI API
        </li>
        <li className="bg-indigo-500 text-white rounded-full px-3 py-2 text-sm">
          Tailwind
        </li>
        <li className="bg-pink-500 text-white rounded-full px-3 py-2 text-sm">
          Headless UI
        </li>
        <li className="bg-purple-500 text-white rounded-full px-3 py-2 text-sm">
          TypeScript
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "House Of Ferns",
    description:
      "Repository of articles which help to solve some common Tech challenges",
    image: "/images/blogScreen.png",
    tag: ["All", "Web"],
    link: "https://blog-blue-kappa.vercel.app/",
    content: (
      <ul className="flex flex-wrap gap-2">
        <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">
          Next.js
        </li>
        <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">
          React.js
        </li>
        <li className="bg-yellow-500 text-white rounded-full px-3 py-2 text-sm">
          TypeScript
        </li>
        <li className="bg-indigo-500 text-white rounded-full px-3 py-2 text-sm">
          Tailwind CSS
        </li>
        <li className="bg-pink-500 text-white rounded-full px-3 py-2 text-sm">
          Sanity
        </li>
        <li className="bg-purple-500 text-white rounded-full px-3 py-2 text-sm">
          GROQ
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "The Daily News",
    description:
      "News fetched from various sources and displayed in a beautiful way",
    image: "/images/newsScreen.png",
    tag: ["All", "Web"],
    link: "https://news-eta-seven.vercel.app/",
    content: (
      <ul className="flex flex-wrap gap-2">
        <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">
          Next.js
        </li>
        <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">
          React.js
        </li>
        <li className="bg-yellow-500 text-white rounded-full px-3 py-2 text-sm">
          TypeScript
        </li>
        <li className="bg-indigo-500 text-white rounded-full px-3 py-2 text-sm">
          Tailwind CSS
        </li>
        <li className="bg-pink-500 text-white rounded-full px-3 py-2 text-sm">
          StepZen
        </li>
        <li className="bg-purple-500 text-white rounded-full px-3 py-2 text-sm">
          MediaStack API
        </li>
      </ul>
    ),
  },

  {
    id: 4,
    title: "Type Master",
    description:
      "App to undertake Typing Tests and get Analysis of Performance",
    image: "/images/typeScreen.png",
    tag: ["All", "Mobile"],
    link: "https://typemasterlen.netlify.app/",
    content: (
      <ul className="flex flex-wrap gap-2">
        <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">
          ReactJs
        </li>
        <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">
          JavaScript
        </li>
        <li className="bg-yellow-500 text-white rounded-full px-3 py-2 text-sm">
          MaterialUI
        </li>
        <li className="bg-indigo-500 text-white rounded-full px-3 py-2 text-sm">
          Firebase
        </li>
        <li className="bg-pink-500 text-white rounded-full px-3 py-2 text-sm">
          React-chart
        </li>
        <li className="bg-purple-500 text-white rounded-full px-3 py-2 text-sm">
          Styled Components
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    title: "Budgets",
    description:
      "Budget and Expense tracking app with custom Cards showing the current monetary status with Progress Bar and by saving data in Local Storage.",
    image: "/images/budgetScreen.png",
    tag: ["All", "Web"],
    link: "https://budget-expense-len.netlify.app/",
    content: (
      <ul className="flex flex-wrap gap-2">
        <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">
          React.js
        </li>
        <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">
          JavaScript
        </li>
        <li className="bg-yellow-500 text-white rounded-full px-3 py-2 text-sm">
          Bootstrap
        </li>
        <li className="bg-indigo-500 text-white rounded-full px-3 py-2 text-sm">
          ContextAPI
        </li>
        <li className="bg-pink-500 text-white rounded-full px-3 py-2 text-sm">
          Local Storage
        </li>
        <li className="bg-purple-500 text-white rounded-full px-3 py-2 text-sm">
          JSX
        </li>
      </ul>
    ),
  },
  {
    id: 6,
    title: "Weather Lens",
    description:
      "Helps find the weather forecast of a City for the next 7 days",
    image: "/images/weatherScreen.png",
    tag: ["All", "Web"],
    link: "https://weatherlen.netlify.app/",
    content: (
      <ul className="flex flex-wrap gap-2">
        <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">
          React.js
        </li>
        <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">
          JavaScript
        </li>
        <li className="bg-yellow-500 text-white rounded-full px-3 py-2 text-sm">
          GeoDB Cities
        </li>
        <li className="bg-indigo-500 text-white rounded-full px-3 py-2 text-sm">
          OpenWeather API
        </li>
        <li className="bg-pink-500 text-white rounded-full px-3 py-2 text-sm">
          CSS
        </li>
        <li className="bg-purple-500 text-white rounded-full px-3 py-2 text-sm">
          HTML (JSX)
        </li>
      </ul>
    ),
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
        id="projects"
      >
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              link={project.link}
              content={project?.content}
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsSection;
