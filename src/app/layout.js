import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Particles from "@/Backgrounds/Particles/Particles";
import { CursorCustom } from "./Components/CursorCustom";
import "keen-slider/keen-slider.min.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio Lorenzo Jiménez",
  description:
    "Portfolio of Lorenzo Jiménez – UI/UX designer and front-end developer focused on clean, user-centered digital experiences.",
  icons: {
    icon: [
      {
        url: "images/svg/Logo Gray.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "images/svg/Full Gray.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "./apple-icon.png",
  },
  appleWebApp: {
    title: "Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="images/svg/Logo Gray.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="images/svg/Full Gray.svg"
          media="(prefers-color-scheme: dark)"
        />

        <meta name="apple-mobile-web-app-title" content="Portfolio" />
      </head>
      <body
        className={`${roboto.className} antialiased select-none text-lorenzo-dark dark:text-lorenzo-gray min-w-sm dark:bg-lorenzo-dark bg-lorenzo-gray`}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Particles
            className="w-full h-full"
            particleColors={["#E0E0E0", "#C5C5C5"]}
            particleCount={400}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        <Navbar />
        <CursorCustom />
        {children}
        <Footer />
      </body>
    </html>
  );
}
