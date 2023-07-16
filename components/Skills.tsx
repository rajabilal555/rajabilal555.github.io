"use client";
import developer from "@/app/data";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center min-h-screen">
      <h3 className="pt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="max-w-screen-lg p-16">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {developer.skills.map((skill, i) => (
            <Skill key={i} {...skill} delay={i / 2} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
