"use client";
import { fadeIn } from "@/variants";
import { CheckCheck, PhoneCallIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Servicii = () => {
  return (
    <section className="container flex flex-col items-start justify-evenly px-4 py-24 text-white max-md:gap-y-5 md:flex-row">
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.6 }}
      >
        <h2 className="mb-6 text-2xl font-bold">Probleme tratate de ea:</h2>
        <ul className="list-none space-y-4 text-lg">
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Dezleagă farmece
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Dezleagă blesteme
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Aduce persoana iubită înapoi
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Dezleagă cununiile legate
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Rezolvă impotența
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Aduce spor în casă
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Redresează firme
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Aduce reușite în examene
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Împreunează persoanele despărțite
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Scoate argintul viu
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Alungă drogurile
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Alungă beția
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Alungă durerea și amețeala
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Întărește memoria
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Vindecă leșinul
          </li>
          <li className="flex items-center gap-x-3">
            <CheckCheck color="#e4b373" /> Convulsiile, negii, epilepsia
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.6 }}
        className="mt-8 flex flex-col items-center md:mt-0"
      >
        <h3 className="mb-4 text-xl font-bold">
          Contactează-mă în privat si haide sa colaborăm!
        </h3>
        <a
          href="tel:+40727585558"
          target="blank"
          className="mb-4 flex items-center justify-center gap-x-2 self-start"
        >
          <PhoneCallIcon size={24} /> Telefon:{" "}
          <span className="font-bold text-accent">+40 727 585 558</span>
        </a>
        <img
          src="/8.jpg"
          alt="Danusia Florica"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Servicii;
