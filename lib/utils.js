import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Astromagie Edera Sierra",
  description = "Descoperă-ți viitorul și găsește armonia interioară cu Edera Sierra, expertă în tarot și vindecare spirituală, oferind citiri precise și sesiuni personalizate pentru a te ajuta să depășești provocările vieții.",
  keywords = "tarot, Edera Sierra, citiri tarot, vindecare spirituală, spiritualitate, armonie, ghidare spirituală, citiri personalizate, energii pozitive, claritate, pace interioară, destin, transformare spirituală, București",
  image = "/hero-img.jpg",
  icons = "/icon.jpg",
} = {}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: "https://mbody.ro",
      description,
      images: [image],
      creator: "@micky_bordeianu",
    },
    icons,
    metadataBase: new URL("https://mbody.vercel.app"),
  };
}
