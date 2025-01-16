import { Inter, Roboto_Mono } from "next/font/google";
import { Lusitana } from "next/font/google";

export const lusitana = Lusitana({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-lusitana",
});
export const lusitanaBold = Lusitana({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-lusitana-bold",
});

export const lusitanaMultiWeight = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lusitana-multi-weight",
});
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
