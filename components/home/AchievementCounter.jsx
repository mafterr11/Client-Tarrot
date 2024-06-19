"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "@/variants";

const AchievementCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <motion.section
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, ammount: 0.4 }}
      ref={ref}
      className="flex w-full items-center justify-center py-12 md:py-[6rem]"
    >
      {/* container */}
      <div className="flex flex-col justify-evenly items-center gap-y-20 lg:flex-row w-screen">
        <div >
          <div className="flex items-end text-3xl lg:text-[2.8rem] xl:pt-4">
            <CountUp start={0} end={inView ? 20 : 0} duration={5} />+
            <div className="ml-[3px] max-w-[150px] text-lg font-bold uppercase leading-[1.4] tracking-[1px] text-accent lg:text-base xl:max-w-[200px] xl:text-3xl xl:leading-[1]">
              Ani
            </div>
          </div>
          <div className="max-w-[150px] text-lg font-bold uppercase tracking-[1px] text-accent lg:text-base xl:max-w-[200px] xl:text-xl xl:text-[22px]">
            Experiența
          </div>
        </div>
        <div >
          <div className="text-3xl lg:text-[2.8rem] mb-2">
            <CountUp start={0} end={inView ? 10584 : 0} duration={5} />+
          </div>
          <div className="max-w-[150px] text-lg font-bold uppercase leading-[1.4] tracking-[1px] text-accent lg:text-base xl:max-w-[200px] xl:text-xl">
            Clienți mulțumiți
          </div>
        </div>
        <div >
          <div className="text-3xl lg:text-[2.8rem] mb-2">
            <CountUp start={0} end={inView ? 6 : 0} duration={5} />+
          </div>
          <div className="max-w-[150px] text-lg font-bold uppercase leading-[1.4] tracking-[1px] text-accent lg:text-base xl:max-w-[200px] xl:text-xl">
            Cabinete personale
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AchievementCounter;
