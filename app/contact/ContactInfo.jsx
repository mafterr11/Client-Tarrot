"use client"
import Socials from "@/components/Socials";
import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <section className="pb-20 xl:container grid grid-cols-1 xl:grid-cols-2 ">
      {/* CONTACT INFO */}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="text-white px-4 flex flex-col items-center"
      >
        <div className="mb-6  text-center">
          <h3 className="mb-2">Astromagia Edera Sierra</h3>
          <p className="text-lg mb-2">
            Forțele întunecate există și pot provoca multe necazuri, dar{" "}
            <span className="text-accent">magia albă este aici</span> pentru a
            le învinge și a aduce lumina.
          </p>
          <p className="text-lg mb-2">
            Multe persoane sunt disperate și se simt copleșite de problemele
            vieții, dar există și oameni capabili să le ofere sprijinul de care
            au nevoie.
          </p>
          <p className="text-lg mb-2">
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
        <h3 className="mb-20 max-md:mb-12 max-xl:mt-14">
          Lasati-mi un mesaj oricand!
        </h3>
        <form
          action="https://formsubmit.co/ab707de94e073d0149749f3bd27b300e "
          method="POST"
          className="w-[95%] md:w-[500px]"
          name="Solicitare noua de la un client"
        >
          <div className="mb-4 xl:mb-10">
            <label htmlFor="nume" className="block font-semibold mb-2">
              Nume
            </label>
            <input
              type="text"
              id="nume"
              name="name"
              className="w-full px-3 py-2 border border-accent/50 rounded-lg bg-accent/15 focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div className="mb-4 xl:mb-10">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-accent/50 rounded-lg bg-accent/15 focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div className="mb-4 xl:mb-10">
            <label htmlFor="phone" className="block font-semibold mb-2">
              Număr de telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-accent/50 rounded-lg bg-accent/15 focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div className="mb-4 xl:mb-10">
            <label htmlFor="mesaj" className="block font-semibold mb-2">
              Mesaj
            </label>
            <textarea
              id="mesaj"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-accent/50 rounded-lg bg-accent/15 focus:outline-none focus:border-accent"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:bg-accent-light transition-all ease-in-out duration-500"
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
