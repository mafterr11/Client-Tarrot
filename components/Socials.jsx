// Link
import Link from "next/link";
// Icons
import { RiYoutubeLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { BiPhone } from "react-icons/bi";
const Socials = ({ containerStyles, linkStyles }) => {
  return (
    <div
      className={`${containerStyles} flex items-start gap-x-5 text-[1.7rem]`}
    >
      <a
        href="tel:+40727585558"
        target="blank"
        className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-95"
      >
        <BiPhone size={35} />{" "}
        <span className={`text-[16px] ${linkStyles} text-accent`}>Sunati-ma</span>
      </a>
      <a
        href="http://wa.me/+40727585558"
        target="blank"
        className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-95"
      >
        <RiWhatsappLine size={35} />{" "}
        <span className={`text-[16px] ${linkStyles} text-accent`}>Lasati un mesaj</span>
      </a>
      <Link
        href={"https://youtube.com/@izabelastanescu-yx2rb?si=GEHqVYvRSWTWNLs5"}
        target="blank"
        className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-95"
      >
        <RiYoutubeLine size={35} />
        <span className={`text-[16px] ${linkStyles} text-accent`}>Youtube</span>{" "}
      </Link>
    </div>
  );
};

export default Socials;
