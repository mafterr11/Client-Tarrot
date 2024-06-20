"use client";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import React from "react";

const Intro = () => {
  return (
    <section className=" text-white py-32 container mx-auto px-6">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="text-center mb-20 xl:mb-40"
      >
        Despre mine
      </motion.h1>
      <div className="">
        <div className="text-center">
          <motion.h5
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            Vă pot oferi bon fiscal
          </motion.h5>
          <motion.h2
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="text-3xl font-bold mb-6"
          >
            <span className="text-accent">ATESTATĂ</span> și{" "}
            <span className="text-accent">ACREDITATĂ</span> în domeniul
            CLARVIZIUNII VRĂJITORIEI și PARAPSIHOLOGIEI
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="text-lg mb-14"
          >
            Vă ofer consultație și tarot pentru a vă lumina calea spre bine cu
            informații din trecut, prezent și viitor
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="text-lg mb-14"
          >
            Cu cabinete atât în România, cât și în Europa, făcătoarea de minuni
            Edera Sierra vă poate ajuta în orice problemă dacă aveți speranță și
            încredere deplină. O să reușiți să treceți peste toate necazurile
            din viața dumneavoastră. Încă de la naștere am fost aleasă de
            Dumnezeu și binecuvântată cu HAR SFÂNT, trimisă pentru a face bine.
            Edera Sierra este singura tămăduitoare din lume ce deține CARTEA
            MAGIEI ALBE, care conține cele mai puternice descântece pentru
            dragoste, noroc, sănătate și dezlegări de farmece, vrăji și
            blesteme. Este singura cu adevărat acceptată de BISERICĂ pentru a
            dezlega oamenii de farmece și blesteme.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="relative text-center p-6 bg-[#c08332] h-[350px] grid-cols-subgrid grid rounded-lg"
          >
            <div className="absolute inset-0 text-black/10 z-0 text-5xl flex items-center justify-center text-[20rem]">
              01
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Ghidare personală și dezvoltare spirituală
            </h3>
            <p>
              Celebra maestră și renumita Edera Sierra este ajutorul și speranța
              tuturor celor cu probleme și necazuri. Este cunoscută în întreaga
              țară, cât și peste hotare, pentru puterile sale inegalabile.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="relative text-center p-6 bg-[#c08332] h-[350px] grid-cols-subgrid grid rounded-lg"
          >
            <div className="absolute inset-0 text-black/10 z-0 text-5xl flex items-center justify-center text-[20rem]">
              02
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Asistență de la distanță
            </h3>
            <p>
              Vă ajută indiferent de distanța la care sunteți, puterea
              clarviziunii și a harului magic vă poate ajuta fie că sunteți la
              celălalt colț al lumii!
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="relative text-center p-6 bg-[#c08332] h-[350px] grid-cols-subgrid grid rounded-lg"
          >
            <div className="absolute inset-0 text-black/10 z-0 text-5xl flex items-center justify-center text-[20rem]">
              03
            </div>
            <h3 className="text-xl font-semibold mb-2">Puteri inegalabile</h3>
            <p>
              Este considerată una dintre cele mai puternice și bine-știutoare
              în ceea ce privește leacurile și licorile din întreaga lume.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
