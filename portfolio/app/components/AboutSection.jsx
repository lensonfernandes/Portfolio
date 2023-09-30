"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      // <ul className="list-disc pl-2">
      //   <li>NextJs</li>
      //   <li>ReactJS</li>
      //   <li>JavaScript</li>
      //   <li>Tailwind</li>
      //   <li>CSS</li>
      //   <li>HTML</li>
      // </ul>
      // <ul className="flex flex-wrap gap-2">
      //   <li className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
      //     Next.js
      //   </li>
      //   <li className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
      //     React.js
      //   </li>
      //   <li className="bg-yellow-500 text-white rounded-full px-2 py-1 text-xs">
      //     JavaScript
      //   </li>
      //   <li className="bg-indigo-500 text-white rounded-full px-2 py-1 text-xs">
      //     Tailwind CSS
      //   </li>
      //   <li className="bg-pink-500 text-white rounded-full px-2 py-1 text-xs">
      //     CSS
      //   </li>
      //   <li className="bg-purple-500 text-white rounded-full px-2 py-1 text-xs">
      //     HTML
      //   </li>
      // </ul>
      <ul className="flex flex-wrap gap-2">
  <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">Next.js</li>
  <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">React.js</li>
  <li className="bg-yellow-500 text-white rounded-full px-3 py-2 text-sm">JavaScript</li>
  <li className="bg-indigo-500 text-white rounded-full px-3 py-2 text-sm">Tailwind CSS</li>
  <li className="bg-pink-500 text-white rounded-full px-3 py-2 text-sm">CSS</li>
  <li className="bg-purple-500 text-white rounded-full px-3 py-2 text-sm">HTML</li>
</ul>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      // <ul className="list-disc pl-2">
      //   <li>Canara Engineering College</li>
      //   <li>St. Aloysius College</li>
      // </ul>
      <ul className="flex flex-wrap gap-2">
  <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">Canara Engineering College</li>
  <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">St. Aloysius College</li>
</ul>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      // <ul className="list-disc pl-2">
      //   <li>Citrix Cloud Fundamentals</li>
      //   <li>Citrix Certified Associate - Virtualization</li>
      // </ul>
      <ul className="flex flex-wrap gap-2">
  <li className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm">Citrix Cloud Fundamentals</li>
  <li className="bg-green-500 text-white rounded-full px-3 py-2 text-sm">Citrix Certified Associate - Virtualization</li>
</ul>

    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white " id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/aboutSection.svg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg ">
            I&apos;m Lenson, a skilled web developer with expertise in Next.js,
            React.js, JavaScript, Tailwind CSS, HTML, and CSS. I&apos;ve collaborated
            with top companies like Citrix, Webonise, and AccioJob. Passionate
            about crafting user-friendly web solutions and staying updated with
            the latest web development trends. Let&apos;s build something amazing
            together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
