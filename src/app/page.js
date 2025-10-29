"use client";

import Image from "next/image";
import { FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobecreativecloud, SiBlender } from "react-icons/si";
import { VscArrowRight } from "react-icons/vsc";
import { RiArrowDownWideLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SliderComponent } from "./Components/Slider";
import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import { ButtonStroke } from "./Components/ButtonStroke";
import { ButtonFill } from "./Components/ButtonFill";
import heroImg from "../../public/images/setup-hero.webp";
import heroImgMobile from "../../public/images/setup-hero-mobile.jpg";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(heroImg);
  const [projects, setProjects] = useState();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1019px)");
    const handleChange = (e) =>
      setImageSrc(e.matches ? heroImgMobile : heroImg);
    handleChange(mq);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  const { ref, inView } = useInView({ threshold: 0 });

  const rotatingRoles = [
    "Web Developer",
    "Graphic Designer",
    "3D Modelator",
    "UX/UI Designer",
  ];

  return (
    <section className="flex flex-col gap-20 text-lorenzo-gray">
      <section className="hero">
        <div className="relative w-full h-[45rem] overflow-hidden flex flex-col lg:flex-row justify-center items-center lg:justify-start">
          <div className="absolute h-full w-full object-cover bg-lorenzo-dark/70 -z-5"></div>
          <Image
            ref={ref}
            className={`w-full object-cover object-center -z-10 absolute ${
              inView
                ? "scale-125 transition-transform duration-[15s] ease-in"
                : "scale-100"
            }`}
            src={imageSrc}
            alt="hero-image"
            fill
            priority
            quality={80}
            placeholder="blur"
          />
          <div className="section1 container mx-auto px-4 h-full flex flex-col lg:flex-row justify-center items-center lg:justify-start z-10">
            <div className="text-justify w-max lg:w-full">
              {/* ICONOS */}
              <ul className="lg:pl-3 flex justify-center lg:justify-start text-2xl gap-9 w-full py-2">
                {[
                  FaNodeJs,
                  FaReact,
                  SiAdobecreativecloud,
                  SiBlender,
                  FaFigma,
                ].map((Icon, i) => (
                  <li key={i}>
                    <Icon />
                  </li>
                ))}
              </ul>

              {/* TITULO */}
              <div className="flex items-center justify-center lg:justify-start">
                <h2 className="text-[7rem] md:text-[10rem] lg:text-[8rem] xl:text-[10rem] leading-none whitespace-nowrap">
                  Hello
                </h2>
              </div>

              {/* SUBTITULO */}
              <div className="flex flex-col justify-center items-center lg:items-start lg:pl-3 w-full">
                <div className="flex items-center justify-center font-semibold lg:justify-start gap-2 w-full text-xl md:text-3xl lg:text-[1.4rem] xl:text-3xl">
                  <p className="min-w-max">I`m Lorenzo,</p>
                  <RotatingText
                    texts={rotatingRoles}
                    mainClassName="text-center bg-lorenzo-green text-lorenzo-dark p-1 lg:p-2"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                    rotationInterval={5000}
                  />
                </div>

                {/* DESCRIPCION */}
                <div className="mt-2 lg:mt-4 hidden lg:flex justify-center gap-4 text-center lg:text-justify lg:w-80 xl:w-96">
                  <p className="lg:flex-10/12 font-light text-xs lg:text-sm xl:text-base">
                    Creative Web Developer building fast, accessible, and
                    engaging experiences.
                  </p>
                </div>

                {/* BOTON */}
                <div className="mt-5 flex justify-center lg:justify-start">
                  <ButtonStroke href="/about" className="border-lorenzo-gray">
                    View Portfolio
                  </ButtonStroke>
                </div>
              </div>

              {/* SCROLL DOWN */}
              <div className="h-44 lg:h-36 lg:pl-3 hidden lg:flex justify-start items-end">
                <div className="w-full flex items-center lg:h-20">
                  <button
                    onClick={() =>
                      document
                        .getElementById("new-work")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex flex-col justify-center items-center w-max font-medium group"
                  >
                    <p className="text-md">Scroll Down</p>
                    <RiArrowDownWideLine className="text-3xl group-hover:mt-3 transition-all duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="h-20 flex justify-evenly items-center bg-lorenzo-lightgray dark:bg-lorenzo-lightdark text-lorenzo-medigray dark:text-lorenzo-medidark font-medium text-md lg:text-xl">
          {["Design", "Development", "Deploy"].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>
      </section>

      <section id="new-work" className="lg:h-[60rem]">
        <article className="pt-20 flex flex-col gap-23 justify-center items-center ">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <h2 className="text-5xl lg:text-6xl whitespace-nowrap text-lorenzo-dark dark:text-lorenzo-gray">
                Latest Work
              </h2>
              <hr className="w-44 hidden border-lorenzo-dark dark:border-lorenzo-gray lg:inline-block h-0.7" />
            </div>
          </div>

          <div className="container mx-auto relative min-h-[25rem]">
            <div className="flex md:mask-l-from-70% md:mask-r-from-70%">
              <SliderComponent />
            </div>
          </div>

          <ButtonFill href="/work" icon={VscArrowRight}>More projects</ButtonFill>
        </article>
      </section>
    </section>
  );
}
