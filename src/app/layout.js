import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

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
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
