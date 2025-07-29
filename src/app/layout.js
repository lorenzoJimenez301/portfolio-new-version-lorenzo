import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import AnimatedCursor from "react-animated-cursor";

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
        <AnimatedCursor
          color="255,255,255" // blanco puro para mejor efecto de exclusión
          innerSize={10}
          outerSize={40}
          outerAlpha={1}
          innerScale={0.9}
          outerScale={2}
          trailingSpeed={1}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
