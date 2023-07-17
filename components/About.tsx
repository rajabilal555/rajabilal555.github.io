"use client";
import developer from "@/app/data";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-10 mx-auto space-y-20 text-center max-w-7xl">
      {/* <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3> */}
      {/* <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://media.licdn.com/dms/image/D4D35AQEQqWmp-i25LQ/profile-framedphoto-shrink_200_200/0/1688411572448?e=1689760800&v=beta&t=P9OgavkFA3V6UO0Da4aV8FxPvzD6nArZvJuZuqftOdQ"
        className="flex-shrink-0 object-cover w-48 h-48 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-64 xl"
      /> */}
      <div className="max-w-screen-md px-0 space-y-10 md:px-10">
        <motion.h4
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold">
          {/* Here is a{" "}
          <span className="underline decoration-blue-900">short</span>{" "}
          background about me */}
          {/* A <span className="underline decoration-blue-900">Brief</span>{" "}
          Introduction */}
          <span className="underline decoration-blue-900">
            Getting Personal
          </span>
          : A Glimpse into &apos;Who I Am&apos;
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-base whitespace-pre-line">
          {developer.about}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
