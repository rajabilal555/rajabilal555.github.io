"use client";

import developer from "@/app/data";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroCircles from "./HeroCircles";
import PageLink from "./helpers/PageLink";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: developer.typings,
    // loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="pt-5">
      <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
        <HeroCircles />
        <div id="userImg" className="relative darkenImg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={developer.picture}
            alt="My Picture"
            className="relative object-cover w-32 h-32 mx-auto rounded-full"
          />
        </div>
        <div className="z-20 ">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
            {developer.title}
          </h2>
          <h1 className="px-10 text-4xl font-semibold ">
            <span>{text}</span>
            <Cursor />
          </h1>
          <div className="flex flex-wrap items-center justify-center pt-5">
            <PageLink to="about">
              <button className="heroButton w-[100%]">About</button>
            </PageLink>
            <PageLink to="experience" position="start">
              <button className="heroButton w-[100%]">Experience</button>
            </PageLink>
            <PageLink to="projects" position="start">
              <button className="heroButton w-[100%]">Projects</button>
            </PageLink>
            <PageLink to="skills">
              <button className="heroButton w-[100%]">Skills</button>
            </PageLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
