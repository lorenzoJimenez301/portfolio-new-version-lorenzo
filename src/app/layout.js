import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Particles from "@/Backgrounds/Particles/Particles";
import { ThemeProvider } from "next-themes";
import { NavProvider } from "./Components/NavProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Portfolio Lorenzo Jiménez",
  description:
    "Portfolio of Lorenzo Jiménez – UI/UX designer and front-end developer focused on clean, user-centered digital experiences.",
  icons: {
    icon: [
      {
        url: "/images/LogoGray.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/FullGray.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    title: "Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/images/LogoGray.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/images/FullGray.svg"
          media="(prefers-color-scheme: dark)"
        />

        <meta name="apple-mobile-web-app-title" content="Portfolio" />
      </head>
      <body
        translate="no"
        className={`${roboto.className} font-sans antialiased select-none text-lorenzo-dark dark:text-lorenzo-gray min-w-sm dark:bg-lorenzo-dark bg-lorenzo-gray`}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none ">
          <Particles
            className="w-full h-full opacity-20"
            particleColors={["#E0E0E0", "#C5C5C5"]}
            particleCount={400}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        <NavProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        </NavProvider>
      </body>
    </html>
  );
}
