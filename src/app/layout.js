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
          color="230,230,230" 
          innerSize={10}
          outerSize={30}
          outerAlpha={1}
          innerScale={0.9}
          outerScale={1.5}
          trailingSpeed={1}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
                clickables={[
        'a',
        'svg',
        'button',
      ]}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
