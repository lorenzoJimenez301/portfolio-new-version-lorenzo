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
        <link
          rel="apple-touch-icon"
          href="images/Light Logo.png"
        />
      </head>
      <body
        className={`${roboto.className} antialiased select-none bg-lorenzo-gray`}
      >
        <Navbar />
        <div className="h-screen w-screen absolute -z-100">
          <Particles
            className={"opacity-30"}
            particleColors={["#E0E0E0", "#C5C5C5"]}
            particleCount={400}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        <CursorCustom />
        {children}
        <Footer />
      </body>
    </html>
  );
}
