import AchievementCounter from "@/components/home/AchievementCounter";
import Despre from "@/components/home/Despre";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Despre />
      <AchievementCounter />
      <Reviews />
    </>
  );
}
