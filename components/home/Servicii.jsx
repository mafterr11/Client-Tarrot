"use client"
import { fadeIn } from "@/variants";
import { CheckCheck } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Servicii = () => {
  return (
    <section className="text-white py-24 px-4 flex flex-col md:flex-row items-start justify-evenly container max-md:gap-y-5">
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6">Probleme tratate de ea:</h2>
        <ul className="list-none space-y-2 text-lg ">
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
        className="mt-8 md:mt-0 flex flex-col items-center"
      >
        <h3 className="text-xl font-bold mb-4">
          Contactează-mă în privat si haide sa colaborăm!
        </h3>
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
