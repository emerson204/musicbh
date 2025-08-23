import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import "aos/dist/aos.css";
import "./globals.css";

const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.woff2",
  variable: "--font-montserrat-regular",
  display: "swap",
});

const montserratMedium = localFont({
  src: "./fonts/Montserrat-Medium.woff2",
  variable: "--font-montserrat-medium",
  display: "swap",
});

const montserratSemibold = localFont({
  src: "./fonts/Montserrat-SemiBold.woff2",
  variable: "--font-montserrat-semibold",
  display: "swap",
});

const montserratExtraBold = localFont({
  src: "./fonts/Montserrat-ExtraBold.woff2",
  variable: "--font-montserrat-extrabold",
  display: "swap",
});

const bowlbyOne = localFont({
  src: "./fonts/BowlbyOne-Regular.woff2",
  variable: "--font-bowlby-one",
  display: "swap",
});

export const metadata = {
  title: "B&H Music",
  description:
    "Explora B&H Music, tu destino para la mejor música y experiencia sonora. Descubre nuevas tendencias, artistas y contenido exclusivo.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?=4"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserratRegular.variable} ${montserratMedium.variable} ${montserratSemibold.variable} ${montserratExtraBold.variable} ${bowlbyOne.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
