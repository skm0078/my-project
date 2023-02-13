import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Test 1 T", "Test 2 TA", "Test 3 TAlala"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCirles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C5603AQHNog-NIY8Yrw/profile-displayphoto-shrink_800_800/0/1627844791068?e=2147483647&v=beta&t=9_0kfvrNQgjdWk8abdAYhmdQMUzAKNSoXOVbStG_dp8"
        alt="display-picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" cursorBlinking />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="hero-btn">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-btn">Experience</button>
          </Link>
          <Link href="skills">
            <button className="hero-btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-btn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
