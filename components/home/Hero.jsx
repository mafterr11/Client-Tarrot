"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-start bg-hero bg-cover bg-center bg-no-repeat max-xl:justify-center xl:flex-row border-b-2 border-accent">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Hero container */}
      <div className="relative z-30 max-xl:text-center max-xl:pt-20 xl:p-36">
        <h4 className="hero__subtitle font-semibold text-accent">
          Îndrumare <span className="font-bold uppercase">astromagică</span>{" "}
          pentru o viață armonioasă
        </h4>
        <h1 className="mb-6  md:max-xl:px-7 xl:max-w-4xl">
          Ghidare spirituală prin tarot pentru destinul tău!
        </h1>
        <Link href="/">
          <Button>
            <span>Contactează-mă</span>
          </Button>
        </Link>
      </div>
      {/* Image */}
      <div className="z-30 hidden md:flex md:pt-24">
        <Image
          src="/hero-img.jpg"
          width={500}
          height={500}
          alt="Hero Astromagie Edera Sierra"
          className="rounded-md"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;
