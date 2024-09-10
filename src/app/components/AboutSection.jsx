"use client"; // Add this line at the top

import React, { useState } from 'react';
import ComputersCanvas from '../canvas/Computers'; // Ensure this path is correct
import { styles } from '../styles/style'; // Ensure this path is correct
import TabButton from "./TabButton";

// Component for each work experience item
const WorkExperienceItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="mb-4">
      <button
        className="text-left w-full font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <p className="mt-1 text-sm">
          {description}
        </p>
      )}
    </li>
  );
};

// Data for each tab
const TAB_DATA = [
  {
    id: "skills",
    content: (
      <div>
        <ul className="list-disc ml-5 mt-2">
          <li>Javascript (MERN Stack: React, NodeJs, ExpressJs, NextJs)</li>
          <li>Java</li>
          <li>C++</li>
          <li>Kotlin</li>
          <li>Python (Pytorch, scikit, matplotlib, numpy, pandas)</li>
          <li>MATLAB</li>
          <li>Arduino</li>
          <li>Databases: MySQL, MongoDB</li>
        </ul>
      </div>
    ),
  },
  {
    id: "education",
    content: (
      <div>
        <h3 className="text-xl font-semibold">BEng Software Engineering (Sept 2023 - June 2027)</h3>
        <p className="mt-1">Lassonde School of Engineering, York University, Toronto, Ontario</p>
        <h4 className="text-lg font-semibold mt-4">Relevant Coursework</h4>
        <ul className="list-disc ml-5 mt-2">
          <li>Computer Science</li>
          <li>Object Oriented Programming</li>
          <li>Big Data</li>
          <li>Machine Learning</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Calculus</li>
          <li>Artificial Intelligence</li>
        </ul>
      </div>
    ),
  },
  {
    id: "certifications",
    content: (
      <div>
        <h3 className="text-xl font-semibold">Work Experience</h3>
        <ul className="list-disc ml-5 mt-2">
          <WorkExperienceItem
            title="Software Engineer Intern at Managemate (May 2024 - Aug 2024)"
            description="Enhanced SaaS apps with Bubble.io, cutting page load time by 60%. Developed with HTML, CSS, JavaScript, and MERN stack, boosting user retention by 30%. Optimized MySQL, improving query efficiency by 40%."
          />
          <WorkExperienceItem
            title="Software Engineer and Data Analysis & Reporting Team Member at ITREB Canada (May 2024 - Present)"
            description="Built dynamic apps with JSP, servlets, and MVC, reducing load times by 30%. Developed RESTful APIs with Spring and Spring Boot. Improved model accuracy from 75% to 85% through advanced data preprocessing and machine learning."
          />
          <WorkExperienceItem
            title="Vice President Technology Business Development at AIESEC (Jan 2022 - Aug 2023)"
            description="Led a team generating 250+ SaaS opportunities with a 98% conversion rate. Organized The Youth Speak Forum 2022, raising $2,000 and selling 400 tickets in 2 weeks. The event achieved 87% profitability."
          />
          <WorkExperienceItem
            title="Software Engineering Intern (Virtual) at Walmart (May 2023)"
            description="Implemented a max heap in Java, improving insertion times by 30%. Designed a UML diagram for a scalable data processor and optimized a relational database for the pet department, reducing query times by 40%."
          />
          <WorkExperienceItem
            title="Software and IT Intern at Prince Aly Khan Hospital (May 2020 - Dec 2020)"
            description="Modernized paper-based systems with C/C++, enhancing data access speed. Managed MySQL databases and improved hospital efficiency through optimized software performance and staff training."
          />
        </ul>
        {/* Additional message below the work experience list */}
        <p className="mt-4 text-sm text-gray-300">
          Please click on a job title to show the job description.
        </p>
      </div>
    ),
  },
];

// Main About Section component
export const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <ComputersCanvas />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-purple-500 to-pink-600 mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a full stack software engineer/developer with a passion for creating
            interactive and responsive web and mobile applications. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications and memories!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-blue-500 text-red-500 border-4 border-transparent hover:bg-black hover:text-white hover:border-white"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-blue-500 text-red-500 border-4 border-transparent hover:bg-black hover:text-white hover:border-white"
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-blue-500 text-red-500 border-4 border-transparent hover:bg-black hover:text-white hover:border-white"
            >
              Work Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
