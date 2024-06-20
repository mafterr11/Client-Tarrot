"use client";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Despre = () => {
  return (
    <section className="w-[95%] mx-auto md:container py-[5rem] md:py-[8rem] md:max-xl:max-w-[90%] overflow-x-hidden">
      {/* Under hero */}
      <div>
        <p className="text-[25px] text-center mb-14">
          Edera Sierra este{" "}
          <span className="text-white bg-accent p-[1px] rounded-sm">
            singura cu adevărat acceptată de BISERICĂ
          </span>{" "}
          pentru a dezlega oamenii de farmece și blesteme.
        </p>
        <div className="flex items-center justify-center max-md:flex-col gap-x-20 max-md:gap-y-20">
          <Image
            src="/7.jpg"
            width={500}
            height={500}
            alt="hero image"
            className="rounded-md"
          />
          <Image
            src="/10.jpg"
            width={500}
            height={500}
            alt="hero image"
            className="rounded-md"
          />
        </div>
        <p className="text-[20px] text-center my-14">
          Făcătoarea de minuni Edera Sierra vă poate ajuta în orice problemă
          dacă aveți speranță și încredere deplină. O să reușiți să treceți
          peste toate necazurile din viața dumneavoastră. Încă de la naștere{" "}
          <span className="bg-accent p-[1px] rounded-sm text-white">
            am fost aleasă de Dumnezeu
          </span>{" "}
          și binecuvântată cu HAR SFÂNT, trimisă pentru a face bine. Edera
          Sierra este singura tămăduitoare din lume ce deține CARTEA MAGIEI
          ALBE, care conține cele mai puternice descântece pentru dragoste,
          noroc, sănătate și dezlegări de farmece, vrăji și blesteme.
        </p>
      </div>
      <div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="relative flex max-md:flex-col max-md:gap-y-4 items-center justify-center gap-x-10 underline decoration-4 underline-offset-8 decoration-accent mb-12 md:mb-32 "
        >
          <h2 className="max-md:text-center">Ghidul Tău în Lumea Spirituală</h2>{" "}
          <Image
            src="/globe.png"
            width={120}
            height={120}
            alt="Icon glob descriere"
            className="md:absolute right-[18%] -top-9"
          />
        </motion.div>
      </div>
      {/* Text */}
      <div className="flex flex-col items-start gap-x-24 gap-y-10 xl:flex-row">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
        >
          <Image
            src="/3.jpg"
            width={800}
            height={800}
            alt="about section"
            className="rounded-md"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex max-w-2xl flex-col gap-y-8 xl:gap-y-8"
        >
          <p>
            <span className="text-accent">&#9679;</span> Viața este valoare
            supremă și ai obligația să o trăiești chiar dacă te afli într-un
            mare impas.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Vrajitoarea Edera
            Sierra este ajutorul și speranța tuturor celor care au probleme și
            necazuri. Sierra, premiată cu Globul Magic🪄🔮 pentru sutele de
            cazuri dificile rezolvate cu succes, este cunoscătoarea celor mai
            puternice ritualuri de magie albă, deținătoarea tainelor în
            astrologie, chiromanție și parapsihologie.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Cu sute de cazuri
            încheiate cu succes, aceste două mâini miraculoase aduc în viața
            oamenilor rezolvarea problemelor. Ceea ce alții nu au reușit să
            facă, ea a realizat, oferind soluții și ajutor acolo unde alții au
            eșuat.
          </p>
          <p>
            {" "}
            <span className="text-accent">&#9679;</span> Sunt cunoscută pentru
            abilitatea mea de a combina înțelepciunea tarotului cu tehnici
            moderne de vindecare spirituală. Fiecare sesiune este adaptată
            nevoilor tale individuale, asigurându-mă că primești exact ceea ce
            ai nevoie pentru a progresa spiritual.
          </p>
          <p className="flex flex-col items-start gap-y-2">
            <span className="mb-4">
              <span className="text-white">&#9679;</span>{" "}
              <span className=" bg-accent px-1 font-semibold text-white rounded-sm">
                Ce poți aștepta:
              </span>{" "}
            </span>
            <span>- Citiri precise și detaliate de tarot</span>
            <span>- Ritualuri de vindecare personalizate</span>
            <span>- Sprijin continuu și consiliere spirituală</span>
          </p>
          <Link
            href="/despre-mine"
            className="hover:text-accent hover:font-bold text-xl transition-all ease-in-out duration-500 hover"
          >
            <span>Mai multe...</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Despre;
