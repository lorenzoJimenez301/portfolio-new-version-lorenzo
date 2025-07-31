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
          sizes="180x180"
          href="images/Icon-180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="images/Icon-144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="images/Icon-114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="images/Icon-72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="images/Icon-57.png"
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
