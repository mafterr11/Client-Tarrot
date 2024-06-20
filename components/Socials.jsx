// Link
import Link from "next/link";
// Icons
import { RiYoutubeLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { BiPhone } from "react-icons/bi";
const Socials = ({ containerStyles }) => {
  return (
    <div
      className={`${containerStyles} xs:text-2xl flex items-start gap-x-5 text-[1.7rem] lg:text-3xl xl:text-2xl`}
    >
      <a
        href="tel:+40727585558"
        target="blank"
        className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-95"
      >
        <BiPhone size={35}/> <span className="text-xl text-accent text-[16px]">Sunati-ma</span>
      </a>
      <a
        href="http://wa.me/+40727585558"
        target="blank"
        className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-95"
      >
        <RiWhatsappLine size={35}/>{" "}
        <span className="text-xl text-accent text-[16px]">Lasati un mesaj</span>
      </a>
      <Link
        href={"https://youtube.com/@izabelastanescu-yx2rb?si=GEHqVYvRSWTWNLs5"}
        target="blank"
        className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-95"
      >
        <RiYoutubeLine size={35} />
        <span className="text-xl text-accent text-[16px]">Youtube</span>{" "}
      </Link>
    </div>
  );
};

export default Socials;
