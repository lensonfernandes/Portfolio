"use client";

import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Pro 1",
    description: "Project 1 description",
    image: "/images/astro.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Pro 2",
    description: "Project 2 description",
    image: "/images/astro.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Pro3",
    description: "Project 3 description",
    image: "/images/astro.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Pro4",
    description: "Project 4 description",
    image: "/images/astro.jpg",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "Pro5",
    description: "Pro 5",
    image: "/images/astro.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Pto6",
    description: "Project 5 description",
    image: "/images/astro.jpg",
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
