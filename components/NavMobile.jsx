"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { Dumbbell, Home } from "lucide-react";

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const links = [
    {
      path: "/",
      name: "Acasa",
    },
    {
      path: "/despre-mine",
      name: "Despre mine",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-4xl transition-all duration-200" />
      </div>
      <aside
        className={`${
          isMenuOpen ? "right-0" : "-right-full"
        } fixed bottom-0 top-0 z-50 h-screen w-full border-l-2 border-accent bg-[#191919] px-8 transition-all duration-500`}
      >
        <div className="flex h-full flex-col items-center justify-between text-white pt-12 pb-16">
          {/* close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-3 top-2 flex h-8 w-8 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <div onClick={() => setIsMenuOpen(false)} className="mt-3">
            <Logo source={"/header-mobile2.png"} size={"h-[3.75rem]"} />
          </div>
          {/* links */}
          <div className="flex flex-col gap-y-12">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="justify-base hover:text-orange flex items-center gap-x-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </Link>
              );
            })}
          </div>
          {/* bottom part */}
          <div className="flex items-center justify-center gap-x-7 pb-2">
            <Socials />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
