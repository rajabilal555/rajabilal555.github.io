"use client";
import developer from "@/app/data";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h3 className="pt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="max-w-screen-md mt-12 mb-[25vh]">
        <div className="container w-full px-4 mx-auto">
          <div className="flex flex-col w-full -m-3 space-y-6">
            {developer.projects.map((proj) => (
              <Project key={proj.name} {...proj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
