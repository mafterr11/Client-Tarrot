"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = ({ linkStyles, containerStyles }) => {
  const links = [
    {
      path: "/",
      name: "Acasă",
    },
    {
      path: "/despre",
      name: "Despre",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${linkStyles} ${
              currentRoute === link.path
                ? "active-link font-semibold underline decoration-accent decoration-4 underline-offset-[1rem]"
                : "hover"
            } text-base`}
          >
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
