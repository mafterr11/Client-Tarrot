"use client";
import Image from "next/image";

const Despre = () => {
  return (
    <div className="container py-[8rem] md:max-xl:max-w-[90%]">
      <div>
        <div className="flex max-md:flex-col max-md:gap-y-4 items-center justify-center gap-x-10 underline decoration-4 underline-offset-8 decoration-accent mb-20 ">
          <h2 className="max-md:text-center">Ghidul Tău în Lumea Spirituală</h2>{" "}
          <Image
            src="/globe.png"
            width={120}
            height={120}
            alt="Icon glob descriere"
          />
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col items-start gap-x-24 gap-y-10 xl:flex-row">
        <div>
          <Image
            src="/about.jpg"
            width={800}
            height={800}
            alt="about section"
            className="rounded-md"
          />
        </div>
        <div className="flex max-w-2xl flex-col gap-y-8 xl:gap-y-14">
          <p>
            <span className="text-accent">&#9679;</span> <span className="bg-accent px-1 font-semibold text-white rounded-sm">Edera Sierra</span> este
            expertă în arta vindecării spirituale și a tarotului, ajutându-te să
            îți descoperi potențialul și să depășești provocările vieții. Cu o
            abordare blândă și plină de înțelegere, Edera oferă servicii
            personalizate pentru a-ți aduce liniște și claritate.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Indiferent de
            obstacolele cu care te confrunți, Edera este aici să te ajute să
            găsești lumina și pacea interioară.
          </p>
          <p>
            {" "}
            <span className="text-accent">&#9679;</span> Edera este cunoscută
            pentru abilitatea sa de a combina înțelepciunea străveche a
            tarotului cu tehnici moderne de vindecare spirituală, creând astfel
            o experiență transformatoare pentru fiecare client. Fiecare sesiune
            cu Edera este unică, adaptată nevoilor și circumstanțelor
            individuale, asigurându-se că primești exact ceea ce ai nevoie
            pentru a progresa pe calea ta spirituală.
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
        </div>
      </div>
    </div>
  );
};

export default Despre;
