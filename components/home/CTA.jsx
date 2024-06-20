"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const CTA = () => {
  return (
    <section className="relative mb-12 bg-CTA py-24 bg-fixed bg-[bottom_-32rem_center]">
      <div className="bg-black/30 absolute inset-0"/>
      <div className="relative container mx-auto">
        <div className="flex flex-col items-center">
          <motion.h2
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="mb-6 flex  flex-col items-center justify-center gap-y-2 text-center  w-full"
          >
            <span className="">
            Sunteți gata să începeți călătoria spirituală?</span>
            <span className="text-3xl font-medium">
              Programează o sesiune cu Edera Sierra și descoperă-ți destinul
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <Link href="/contact">
              <Button className="gap-x-2 group">
                Descoperă destinul{" "}
                <Send
                  size={18}
                  className="transition-all ease-in-out duration-300 group-hover:rotate-[20deg]"
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
