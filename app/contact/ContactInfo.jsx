"use client";
import Socials from "@/components/Socials";
import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <section className="grid grid-cols-1 pb-20 xl:container xl:grid-cols-2">
      {/* CONTACT INFO */}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="flex flex-col items-center px-4 text-white"
      >
        <div className="mb-6 text-center">
          <h3 className="mb-2">Astromagia Edera Sierra</h3>
          <p className="mb-2 text-lg">
            Forțele întunecate există și pot provoca multe necazuri, dar{" "}
            <span className="text-accent">magia albă este aici</span> pentru a
            le învinge și a aduce lumina.
          </p>
          <p className="mb-2 text-lg">
            Multe persoane sunt disperate și se simt copleșite de problemele
            vieții, dar există și oameni capabili să le ofere sprijinul de care
            au nevoie.
          </p>
          <p className="mb-2 text-lg">
            <span className="text-accent">Edera Sierra</span> este o femeie cu
            abilități extraordinare, care poate schimba destinul dumneavoastră
            în bine.
          </p>
          <Socials containerStyles="max-md:flex-col items-center justify-center gap-y-4 py-4" />
        </div>
        <div className="w-full max-w-md">
          <img
            src="/5.jpg"
            alt="Edera Sierra"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
      {/* FORM */}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.6 }}
        className="flex flex-col items-center"
      >
        <h3 className="mb-20 max-xl:mt-14 max-md:mb-12">
          Lasati-mi un mesaj oricand!
        </h3>
        <form
          action="https://formsubmit.co/ab707de94e073d0149749f3bd27b300e "
          method="POST"
          className="w-[95%] md:w-[500px]"
          name="Solicitare noua de la un client"
        >
          <div className="mb-4 xl:mb-10">
            <label htmlFor="nume" className="mb-2 block font-semibold">
              Nume
            </label>
            <input
              type="text"
              id="nume"
              name="name"
              className="w-full rounded-lg border border-accent/50 bg-accent/15 px-3 py-2 focus:border-accent focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 xl:mb-10">
            <label htmlFor="email" className="mb-2 block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-accent/50 bg-accent/15 px-3 py-2 focus:border-accent focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 xl:mb-10">
            <label htmlFor="phone" className="mb-2 block font-semibold">
              Număr de telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-lg border border-accent/50 bg-accent/15 px-3 py-2 focus:border-accent focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 xl:mb-10">
            <label htmlFor="mesaj" className="mb-2 block font-semibold">
              Mesaj
            </label>
            <textarea
              id="mesaj"
              name="message"
              rows="4"
              className="w-full rounded-lg border border-accent/50 bg-accent/15 px-3 py-2 focus:border-accent focus:outline-none"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-4 py-2 font-semibold text-black transition-all duration-500 ease-in-out hover:bg-accent-light"
            >
              Trimite
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
