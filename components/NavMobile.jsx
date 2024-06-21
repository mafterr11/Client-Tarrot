"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import Image from "next/image";

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const links = [
    {
      path: "/",
      name: "Acasa",
      icon: "/nav-home.png",
    },
    {
      path: "/despre",
      name: "Despre",
      icon: "/nav-card.png",
    },
    {
      path: "/contact",
      name: "Contact",
      icon: "/nav-globe.png",
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
        <div className="xs:pt-24 xs:pb-20 flex h-full flex-col items-center justify-between pb-12 pt-16 text-white">
          {/* close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-3 top-2 flex h-8 w-8 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <div onClick={() => setIsMenuOpen(false)} className="container">
            <Logo source={"/header-mobile2.png"} size={"h-[3.75rem]"} />
          </div>
          {/* links */}
          <div className="xs:gap-y-12 flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="justify-base hover:text-orange flex items-center gap-x-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src={link.icon}
                    height={50}
                    width={50}
                    className={`${iconStyles}`}
                    alt="butoane navigatia mobila"
                  />
                  <div className={`${linkStyles}`}>{link.name}</div>
                </Link>
              );
            })}
          </div>
          {/* bottom part */}
          <div className="flex items-center justify-center gap-x-7 pb-8">
            <Socials
              linkStyles="xs:text-xl"
              containerStyles="flex-col gap-y-4"
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
