"use client";
// import { TbBrandFirebase, TbBrandFlutter } from "react-icons/tb";
import developer from "@/app/data";
import Experience from "./Experience";

type Props = {};

const Experiences = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h3 className="pt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="max-w-screen-md p-16 mb-[25vh]">
        <ol className="border-l border-neutral-500 ">
          {developer.experiences.map((exp) => (
            <Experience
              key={exp.period}
              period={exp.period}
              company={exp.company}
              position={exp.position}
              icons={exp.icons}
              description={exp.description}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experiences;
