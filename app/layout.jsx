import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { constructMetadata } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} overflow-x-hidden bg-gradient-to-b from-[#91221E] to-[#030202]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
