"use client"
import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Reviews = () => {
  const testimonials = [
    {
      text: "M-a ajutat să îmi găsesc liniștea interioară și să clarific problemele care mă frământau. Citirile ei de tarot sunt extrem de precise, iar sfaturile ei m-au ajutat să fac alegeri mai bune în viață. Sunt recunoscător pentru tot sprijinul pe care mi l-a oferit.",
      nume: "Alexandru",
      icon: "/reviews/alex.jpeg",
    },
    {
      text: "Am apelat la ea într-o perioadă dificilă și, datorită ei, am reușit să îmi recâștig încrederea și să găsesc soluții la problemele mele. Mi-ai schimbat viața în bine, îți multumesc incă odată.",
      nume: "Ioana",
      icon: "/reviews/ioana.jpeg",
    },
    {
      text: "Edera a fost o binecuvântare în viața mea. M-a ajutat să depășesc momente dificile și să găsesc pacea interioară. Vindecarea spirituală și citirile de tarot pe care mi le-a oferit au fost esențiale pentru transformarea mea personală.",
      nume: "Ana",
      icon: "/reviews/ana.jpeg",
    },
    {
      text: "Am apelat la Edera pentru citiri de tarot și am fost impresionat de acuratețea și profunzimea analizelor sale. Sfaturile ei m-au ajutat să îmi clarific direcția în viață și să iau decizii mai bune. Recomand cu încredere serviciile ei!",
      nume: "George",
      icon: "/reviews/george.jpeg",
    },
    {
      text: "Am fost sceptică la început, dar Edera m-a convins cu abilitățile sale remarcabile. Citirile ei de tarot sunt precise și detaliate, iar sfaturile sale m-au ajutat să iau decizii importante. O adevărată expertă în tarot și spiritualitate!",
      nume: "Laura",
      icon: "/reviews/laura.jpeg",
    },
    {
      text: "Edera mi-a oferit soluții personalizate și m-a ajutat să depășesc problemele personale. Citirile de tarot și consilierea ei spirituală au fost de mare ajutor în momentele dificile. Sunt recunoscător pentru tot sprijinul și recomand!",
      nume: "Vasile",
      icon: "/reviews/vasile.jpeg",
    },
  ];
  return (
    <section className="max-md:px-0 max-md:container xl:container px-5 py-24 mx-auto">
      <motion.h2
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="text-center underline decoration-4 underline-offset-8 decoration-accent mb-32"
      >
        Experiențe transformatoare
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="p-4"
            key={index}
          >
            {/* c08332 */}
            {/* 634319 */}
            <div className="h-[430px] md:max-xl:w-full md:max-xl:mx-auto bg-[#b1983f] p-8 rounded grid grid-cols-subgrid hover:-translate-y-2 hover:scale-[1.02] transition-all ease-in-out duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <p className="leading-relaxed mb-6 text-white">
                {testimonial.text}
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial.icon}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    {testimonial.nume}
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
