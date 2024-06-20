import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import { PhoneCallIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full border-b-[0.5px] border-black/50 bg-gradient-to-t from-[#91221E] to-[#030202] py-[12px] filter backdrop-blur-md transition-all duration-100 ease-in-out max-md:px-[25px] md:max-xl:px-[40px] xl:px-[55px]">
      <div className="relative z-40 flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center">
          <NavBar containerStyles="hidden xl:flex gap-x-12 mr-20" />
          <a
              href="tel:+40727585558"
              target="blank"
              className="flex items-center justify-center gap-x-2 max-xl:hidden"
            >
               <PhoneCallIcon size={24}/> Telefon: <span className="text-accent font-bold">+40 727 585 558</span>
            </a>
        </div>
        <NavMobile
          containerStyles="xl:hidden"
          iconStyles="text-accent"
          linkStyles="uppercase"
        />
      </div>
    </div>
  );
};

export default Header;
