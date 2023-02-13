import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://media.licdn.com/dms/image/C5603AQHNog-NIY8Yrw/profile-displayphoto-shrink_800_800/0/1627844791068?e=2147483647&v=beta&t=9_0kfvrNQgjdWk8abdAYhmdQMUzAKNSoXOVbStG_dp8"
        alt="about-img"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
          temporibus quia maxime, quos magni cumque, iure minus id enim non
          alias delectus quis. Adipisci maxime dolorem sapiente sunt ipsa
          minima. Repudiandae optio quae, voluptatibus ad quibusdam fugit rerum
          accusantium animi inventore pariatur deserunt error? Libero quibusdam,
          aspernatur in soluta tenetur animi eaque! Cumque, at itaque
          accusantium quasi officia fuga eaque? Aliquid eveniet consectetur
          praesentium natus ad dicta quod illo officiis labore ipsa facere id
          porro voluptate repudiandae aliquam molestias odit, excepturi sequi
          quasi? Dolores sint, assumenda distinctio quae doloribus tempora. Quod
          est pariatur consequatur exercitationem nihil, quis a fuga suscipit
          iste blanditiis officiis, sint sed. Ut, dolorum. Perspiciatis sunt
          excepturi quia quas inventore laborum alias ut ratione dignissimos,
          eum et. Praesentium consequuntur nostrum, explicabo ducimus similique,
          velit perspiciatis voluptas assumenda impedit aut iusto harum
          architecto repudiandae cupiditate porro a odio? Asperiores itaque,
          placeat aliquam deleniti quia odit beatae eum suscipit.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
