"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
type Props = {
  label: string;
  icon: IconType;
  delay: number;
};

const Skill = ({ label, icon: Icon, delay }: Props) => {
  return (
    <motion.div
      initial={{
        x: 120,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
          <Icon size={24} />
        </div>
        <div className="hidden ml-3 text-sm font-normal sm:block">{label}</div>
      </div>
    </motion.div>
  );
};

export default Skill;
