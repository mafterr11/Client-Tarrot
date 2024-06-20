"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section className="mt-[6.7rem] relative flex h-screen w-screen flex-col items-center justify-start bg-hero bg-cover bg-center bg-no-repeat max-xl:justify-center xl:flex-row border-b-2 border-accent">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Hero container */}
      <div className="relative z-30 max-xl:text-center max-xl:pt-20 xl:p-36">
        <motion.h4
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className=" font-semibold text-accent"
        >
          Îndrumare <span className="font-bold uppercase">astromagică</span>{" "}
          pentru o viață armonioasă
        </motion.h4>
        <motion.h1
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-6  md:max-xl:px-7 xl:max-w-4xl"
        >
          Ghidare spirituală prin tarot pentru destinul tău!
        </motion.h1>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
        >
          <Link href="/despre">
            <Button>
              <span>Află mai multe</span>
            </Button>
          </Link>
        </motion.div>
      </div>
      {/* Image */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="z-30 hidden md:flex md:pt-24"
      >
        <Image
          src="/hero-img.jpg"
          width={500}
          height={500}
          alt="Hero Astromagie Edera Sierra"
          className="rounded-md"
          quality={100}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
