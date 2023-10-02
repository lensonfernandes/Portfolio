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
  },
  {
    id: 2,
    title: "House Of Ferns",
    description: "Repository of articles which help to solve some common Tech challenges",
    image: "/images/blogScreen.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "The Daily News",
    description: "News fetched from various sources and displayed in a beautiful way",
    image: "/images/newsScreen.png",
    tag: ["All", "Web"],
  },
  
  {
    id: 4,
    title: "Type Master",
    description: "App to undertake Typing Tests and get Analysis of Performance",
    image: "/images/typeScreen.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "Budgets",
    description: "Budget and Expense tracking app with custom Cards showing the current monetary status with Progress Bar and by saving data in Local Storage.",
    image: "/images/budgetScreen.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Weather Lens",
    description: "Helps find the weather forecast of a City for the next 7 days",
    image: "/images/weatherScreen.png",
    tag: ["All", "Web"],
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" id="projects">
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsSection;
