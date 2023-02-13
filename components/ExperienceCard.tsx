import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src=""
        alt="Exp Card"
        className="w-32 h-32 rounded-full xl:w-[200] object-cover object-center"
      />
    </article>
  );
};

export default ExperienceCard;
