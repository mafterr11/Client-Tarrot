"use client";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Despre = () => {
  return (
    <section className="container py-[5rem] md:py-[12rem] md:max-xl:max-w-[90%] overflow-x-hidden">
      <div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="relative flex max-md:flex-col max-md:gap-y-4 items-center justify-center gap-x-10 underline decoration-4 underline-offset-8 decoration-accent mb-12 md:mb-32 "
        >
          <h2 className="max-md:text-center">Ghidul Tău în Lumea Spirituală</h2>{" "}
          <Image
            src="/globe.png"
            width={120}
            height={120}
            alt="Icon glob descriere"
            className="md:absolute right-[18%] -top-9"
          />
        </motion.div>
      </div>
      {/* Text */}
      <div className="flex flex-col items-start gap-x-24 gap-y-10 xl:flex-row">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
        >
          <Image
            src="/about.jpg"
            width={800}
            height={800}
            alt="about section"
            className="rounded-md"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex max-w-2xl flex-col gap-y-8 xl:gap-y-[54px]"
        >
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="bg-accent px-1 font-semibold text-white rounded-sm">
              Edera Sierra
            </span>{" "}
            este expertă în arta vindecării spirituale și a tarotului,
            ajutându-te să îți descoperi potențialul și să depășești provocările
            vieții. Cu o abordare blândă și plină de înțelegere, Edera oferă
            servicii personalizate pentru a-ți aduce liniște și claritate.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Indiferent de
            obstacolele cu care te confrunți, Edera este aici să te ajute să
            găsești lumina și pacea interioară.
          </p>
          <p>
            {" "}
            <span className="text-accent">&#9679;</span> Edera este cunoscută
            pentru abilitatea sa de a combina înțelepciunea străveche a
            tarotului cu tehnici moderne de vindecare spirituală, creând astfel
            o experiență transformatoare pentru fiecare client. Fiecare sesiune
            cu Edera este unică, adaptată nevoilor și circumstanțelor
            individuale, asigurându-se că primești exact ceea ce ai nevoie
            pentru a progresa pe calea ta spirituală.
          </p>
          <p className="flex flex-col items-start gap-y-2">
            <span className="mb-4">
              <span className="text-white">&#9679;</span>{" "}
              <span className=" bg-accent px-1 font-semibold text-white rounded-sm">
                Ce poți aștepta:
              </span>{" "}
            </span>
            <span>- Citiri precise și detaliate de tarot</span>
            <span>- Ritualuri de vindecare personalizate</span>
            <span>- Sprijin continuu și consiliere spirituală</span>
          </p>
          <Link
            href="/despre-mine"
            className="hover:text-accent hover:font-bold text-xl transition-all ease-in-out duration-500 hover"
          >
            <span>Mai multe...</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Despre;
