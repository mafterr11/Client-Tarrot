"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Intro = () => {
  return (
    <div className="mb-12 mt-[7.7rem] max-md:mt-[7.6rem] xl:mb-24">
      <div className="relative h-[65vh] w-full overflow-hidden bg-contact bg-cover bg-no-repeat xl:h-[28rem] xl:bg-[top_-35rem_center]">
        <div className="absolute inset-0 border-b border-accent bg-black/60" />
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4"
        >
          <div className="flex flex-col items-start justify-center space-x-0 text-4xl font-bold text-white xl:flex-row xl:justify-start xl:space-x-2">
            <span className="inline-block tracking-wide">Astromagia</span>
            <span className="inline-block tracking-wide text-accent">
              Edera Sierra
            </span>
          </div>

          <h3 className="flex flex-row items-center justify-center text-xl font-normal text-white/80 max-md:text-center xl:text-2xl">
            Nu ai găsit răspunsul? Ia legătura cu mine chiar acum!
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
