"use client";
import developer from "@/app/data";
import { motion } from "framer-motion";
import { BsFilePdf } from "react-icons/bs";
import { SiMailgun } from "react-icons/si";
import { SocialIcon } from "react-social-icons";
import PageLink from "./helpers/PageLink";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between mx-auto max-w-7xl xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-center">
        <SocialIcon
          url="https://play.google.com/store/apps/dev?id=7096445146314947153"
          network="google_play"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="hover:scale-110"
        />

        {developer.socials.map((link) => (
          <SocialIcon
            key={link}
            url={link}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            className="hover:scale-110"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-center p-4">
        <PageLink to="contact">
          <div className="flex flex-row items-center mr-1 cursor-pointer">
            <SiMailgun size={18} color="gray" />
            <p className="hidden pl-2 pr-4 text-sm text-gray-400 uppercase md:inline-flex">
              Get in touch
            </p>
          </div>
        </PageLink>
        <a download={true} href={developer.resumeUrl} target="_blank">
          <div className="flex flex-row items-center cursor-pointer">
            <BsFilePdf size={18} color="gray" />
            <p className="hidden pl-2 pr-4 text-sm text-gray-400 uppercase md:inline-flex">
              Get Resume
            </p>
          </div>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
