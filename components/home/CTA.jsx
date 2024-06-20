"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const CTA = () => {
  return (
    <section className="xs:py-24 relative mb-12 bg-CTA bg-[bottom_-50rem_center] xs:bg-[bottom_-45rem_center] bg-no-repeat py-12 xl:bg-[bottom_-45rem_center]">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative mx-auto">
        <div className="flex flex-col items-center">
          <motion.h2
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="mb-6 flex w-full flex-col items-center justify-center gap-y-2 text-center"
          >
            <span className="">
              Sunteți gata să începeți călătoria spirituală?
            </span>
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
              <Button className="group gap-x-2 font-semibold">
                Descoperă destinul{" "}
                <Send
                  size={18}
                  className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
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
