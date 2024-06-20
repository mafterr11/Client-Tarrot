"use client";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import React from "react";

const Intro = () => {
  return (
    <section className="mx-auto px-6 py-32 text-white max-md:container xl:container">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="mb-20 text-center xl:mb-40"
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
            className="mb-6 text-3xl font-bold"
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
            className="mb-14 text-lg"
          >
            Vă ofer consultație și tarot pentru a vă lumina calea spre bine cu
            informații din trecut, prezent și viitor
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="mb-14 text-lg"
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="relative grid h-[350px] grid-cols-subgrid rounded-lg bg-[#c08332] p-6 text-center"
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center text-5xl text-[20rem] text-black/10">
              01
            </div>
            <h3 className="mb-2 text-xl font-semibold">
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
            className="relative grid h-[350px] grid-cols-subgrid rounded-lg bg-[#c08332] p-6 text-center"
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center text-5xl text-[20rem] text-black/10">
              02
            </div>
            <h3 className="mb-2 text-xl font-semibold">
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
            className="relative grid h-[350px] grid-cols-subgrid rounded-lg bg-[#c08332] p-6 text-center"
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center text-5xl text-[20rem] text-black/10">
              03
            </div>
            <h3 className="mb-2 text-xl font-semibold">Puteri inegalabile</h3>
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
