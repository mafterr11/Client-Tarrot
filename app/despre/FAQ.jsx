"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const FAQ = () => {
  return (
    <section className="py-12 pb-40 flex items-center max-xl:flex-col max-md:gap-y-6 md:max-xl:gap-y-20 justify-center max-w-[90%] xl:max-w-[80%] mx-auto">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
      >
        <Image
          src="/about-img.jpg"
          alt="About image"
          width={600}
          height={600}
          className="rounded-md"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="container mx-auto px-0"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start">
              Ce este tarotul și cum funcționează?
            </AccordionTrigger>
            <AccordionContent>
              Tarotul este un set de cărți cu simboluri și imagini folosite
              pentru a oferi îndrumare și claritate în diverse aspecte ale
              vieții. În timpul unei ședințe de tarot, un clarvăzător
              interpretează semnificația cărților în funcție de întrebările și
              energiile clientului.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start">
              Cum mă poate ajuta tarotul?
            </AccordionTrigger>
            <AccordionContent>
              Tarotul poate oferi perspective noi, îndrumare și claritate în
              momentele dificile sau confuze. Prin interpretarea cărților de
              tarot, puteți primi răspunsuri la întrebări importante și puteți
              descoperi aspecte necunoscute ale personalității și vieții
              dumneavoastră.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start">
              Cât de precisă este o citire de tarot?
            </AccordionTrigger>
            <AccordionContent>
              Precizia unei citiri de tarot depinde de interpretarea
              clarvăzătorului și de conexiunea energetică cu clientul. Tarotul
              oferă în principal îndrumare și înțelegere, iar rezultatele pot
              varia în funcție de experiența și abilitățile clarvăzătorului.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-start">
              Cum pot programa o ședință de tarot?
            </AccordionTrigger>
            <AccordionContent>
              Pentru a programa o ședință de tarot, contactați-ne telefonic sau
              completați formularul de contact de pe site-ul nostru. Vom găsi
              împreună un moment potrivit pentru ambele părți și vom discuta
              detaliile ședinței.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
      >
        <Image
          src="/about-img2.jpg"
          alt="About image"
          width={600}
          height={600}
          className="rounded-md"
        />
      </motion.div>
    </section>
  );
};

export default FAQ;
