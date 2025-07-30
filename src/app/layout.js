import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Particles from "@/Backgrounds/Particles/Particles";
import { CursorCustom } from "./Components/CursorCustom";

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
      <body className={`${roboto.className} antialiased select-none`}>
        <div className="h-screen w-screen absolute -z-50">
          <Particles
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
