import AchievementCounter from "@/components/home/AchievementCounter";
import CTA from "@/components/home/CTA";
import Despre from "@/components/home/Despre";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";
import Servicii from "@/components/home/Servicii";

export default function Home() {
  return (
    <>
      <Hero />
      <Despre />
      <AchievementCounter />
      <Servicii />
      <Reviews />
      <CTA />
    </>
  );
}
