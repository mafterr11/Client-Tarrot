import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-x-2">
      <Image src="/logo.png" width={100} height={100} alt="Logo" />
      <h3 className="flex flex-col items-center justify-center -space-y-2 font-bold leading-7 text-accent">
        Edera Sierra Astromagie
      </h3>
    </Link>
  );
};

export default Logo;
