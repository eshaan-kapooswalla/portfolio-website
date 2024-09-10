import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl }) => {
  return (
    <div className="rounded-xl bg-[#181818] transition-transform transform hover:scale-105 relative group overflow-hidden">
      <Link
        href={gitUrl}
        className="flex items-center justify-center h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <CodeBracketIcon className="h-14 w-14 text-[#ADB7BE] group-hover:text-white" />
      </Link>
      <div className="text-white py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
