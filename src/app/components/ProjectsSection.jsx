"use client"; // Add this line at the top

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 5,
    title: "Automated plant watering system using arduino",
    description:
      "This automated plant watering system uses Java and an Arduino to monitor soil moisture and control a water pump accordingly. A moisture sensor detects soil conditions, and based on the readings, the system toggles the pump on or off. An SSD1306 OLED display shows real-time data like pump status and moisture levels, while the Firmata4J library enables seamless communication between the Arduino and Java. Additionally, the system generates a moisture graph for easy tracking, ensuring plants receive the right amount of water.",
    tag: ["Java"],
    gitUrl: "https://github.com/eshaan-kapooswalla/PlantWateringSystem",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Cabiee",
    description:
      "Cabiee is a sleek and efficient ride-hailing app inspired by Uber, developed using React Native for mobile platforms. It leverages the same robust JavaScript backend technologies—Node.js and Express—with MongoDB for data storage. With real-time location tracking, booking rides, and secure payment options, Cabiee offers a smooth, user-friendly experience. Its intuitive design and responsiveness make it a standout solution in the mobile space, providing both drivers and passengers with a seamless, connected journey.",
    tag: ["Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Book Store",
    description:
      "Book Store is a comprehensive e-commerce platform for purchasing books. It is built using React for the frontend, Node.js and Express for the backend, and MongoDB as the database. The application includes features like user authentication, book browsing, shopping cart, and payment integration. The admin panel allows for inventory management and order tracking. The interface is designed to be intuitive, providing users with a seamless book-buying experience while ensuring scalability for larger inventories.",
    tag: ["Web"],
    gitUrl: "https://github.com/eshaan-kapooswalla/Book-Store",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This portfolio website, which you're currently exploring, is crafted using modern web technologies like Next.js, React, and Node.js. It showcases my work and projects in a clean and elegant interface, blending performance with aesthetics. The seamless navigation and smooth transitions are designed to enhance your experience as you learn more about my skills and accomplishments.",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Gideon AI",
    description:
      "Gideon AI is an interactive, voice-activated AI assistant that responds to your voice commands. Built with Python and integrated with Google Speech Recognition and OpenAI, Gideon can perform tasks like opening websites, playing music, telling the time, and even having intelligent conversations. With the power of OpenAI's GPT model, Gideon offers a smart and engaging interaction. Simply give voice commands like 'Open YouTube' or 'What's the time?', and Gideon will respond. It's a personal AI assistant designed to simplify everyday tasks.",
    tag: ["Artificial Intelligence"],
    gitUrl: "https://github.com/eshaan-kapooswalla/Gideon-AI-Desktop-Assistant",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Tetris Play",
    description:
      "I developed a fully functional Tetris game in C++ as part of my personal projects. The game features classic Tetris mechanics, including smooth block movement, rotation, and a dynamic scoring system that increases in difficulty over time. The project demonstrates my proficiency in C++ programming and my understanding of game development principles. I plan to extend the game with features like sound effects, high-score tracking, and enhanced graphics using libraries like SDL or OpenGL. This project was a great opportunity to refine my problem-solving skills and work on an engaging, interactive application.",
    tag: ["C++"],
    gitUrl: "https://github.com/eshaan-kapooswalla/TetrisPlay",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("C++"); // Default to C++
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* Added white color to the message */}
      <p className="text-center text-white mb-6">
        Hover over the project to reveal the GitHub link
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("C++")}
          name="C++"
          isSelected={tag === "C++"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Java")}
          name="Java"
          isSelected={tag === "Java"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Artificial Intelligence")}
          name="Artificial Intelligence"
          isSelected={tag === "Artificial Intelligence"}
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
              gitUrl={project.gitUrl}
              hoverGit // pass a prop for hover GitHub link visibility
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
