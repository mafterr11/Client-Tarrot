import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h3 className="flex flex-col items-center justify-center -space-y-2 text-accent font-bold">
        Edera Sierra
      </h3>
    </Link>
  );
};

export default Logo;
