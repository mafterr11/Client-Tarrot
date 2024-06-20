import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-accent bg-[#0f0f0f] py-4">
      <div className="relative flex flex-col items-center justify-between gap-y-4 px-20 xl:flex-row">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
          <h4 className="flex flex-col items-center justify-center -space-y-2 font-bold leading-7 text-accent">
            Edera Sierra Astromagie
          </h4>
        </Link>
        {/* Socials */}
        <Socials containerStyles="flex-col" />
        {/* Copyright */}
        <div className="inset-x-0 my-2 flex flex-col items-center justify-center gap-x-1 text-center xl:absolute">
          <span>
            Edera Sierra &copy; {currentYear} - Toate drepturile rezervate
          </span>
          <div>
            Site realizat de{" "}
            <a href="https://myriad-tech.ro" target="_blank" className="hover">
              <span className="font-medium hover:font-semibold">
                Myriad Tech
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
