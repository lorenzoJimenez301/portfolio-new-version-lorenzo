"use client";

import Image from "next/image";
import { FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobecreativecloud, SiBlender } from "react-icons/si";
import { VscArrowRight } from "react-icons/vsc";
import { RiArrowDownWideLine } from "react-icons/ri";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { SliderComponent } from "./Components/Slider";
import SplitText from "../TextAnimations/SplitText/SplitText";
import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 1028 });

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main>
      <section className="hero lg:h-[45rem] container mx-auto  flex flex-col lg:flex-row justify-center items-center z-50 relative ">
        <div className="section1 lg:h-full flex-3 flex flex-col justify-center items-center gap-20 py-10 w-full ">
          <div className="text-justify lg:pl-14 w-full">
            <ul className="lg:pl-3 flex justify-center lg:justify-start text-2xl gap-9 w-full py-2">
              <li>
                <FaNodeJs />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <SiAdobecreativecloud />
              </li>
              <li>
                <SiBlender />
              </li>
              <li>
                <FaFigma />
              </li>
            </ul>
            <div className="flex items-center justify-center lg:justify-start ">
              <SplitText
                text="Hello"
                className="text-[7rem] md:text-[10rem] lg:text-[8rem] xl:text-[10rem] leading-none whitespace-nowrap"
                delay={90}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start lg:pl-3 w-full">
              <div className="flex items-center justify-center font-semibold lg:justify-start gap-2 w-full text-xl md:text-3xl lg:text-[1.4rem] xl:text-3xl">
                <p className=" min-w-max">I`m Lorenzo,</p>
                <RotatingText
                  texts={[
                    "Web Developer",
                    "Graphic Designer",
                    "3D Modelator",
                    "UX/UI Designer",
                  ]}
                  mainClassName="text-center bg-lorenzo-dark text-lorenzo-gray dark:text-lorenzo-dark dark:bg-lorenzo-green p-1 lg:p-2"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={5000}
                />
              </div>
              <div className="mt-2 lg:mt-4 hidden lg:flex justify-center gap-4 text-center lg:text-justify lg:w-80 xl:w-96 ">
                <p className="lg:flex-10/12 font-light text-xs lg:text-sm xl:text-base">
                  Creative Web Developer building fast, accessible, and engaging experiences.
                </p>
              </div>
              <div className="mt-5 flex justify-center lg:justify-start">
                <button className=" bg-transparent border border-lorenzo-dark dark:border-lorenzo-gray p-3 px-10 font-bold text-xs cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="h-44 lg:h-28 lg:pl-3 hidden lg:flex justify-start items-end">
              <div className="w-full flex items-center lg:h-20">
                <button
                  onClick={() => {
                    const seccion = document.getElementById("new-work");
                    seccion?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex flex-col justify-center items-center w-max font-medium group relative"
                >
                  <p>Scroll Down</p>
                  <RiArrowDownWideLine className="text-3xl top-6 group-hover:mt-3 transition-all duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/6 h-[30rem] sm:h-[30rem] lg:h-full overflow-hidden relative">
          <Image
            className="object-cover object-center h-[70rem] sm:h-[78rem] md:h-[69rem] lg:h-[100rem] xl:h-[110rem] top-[-3rem] lg:top-[3rem] xl:top-[-4rem]  absolute"
            src={"/images/hero-image.png"}
            alt="Hero Image"
            height={2302}
            width={2302}
            priority
          />
        </div>
      </section>
      <section className="h-20 flex justify-evenly items-center bg-lorenzo-medigray dark:bg-lorenzo-medidark text-lorenzo-lightgray dark:text-lorenzo-lightdark font-medium text-md lg:text-xl">
        <p>Design</p>
        <p>Development</p>
        <p>Deploy</p>
      </section>
      <section id="new-work" className="h-[60rem]">
        <article className=" pt-20 flex flex-col gap-23 justify-center items-center h-[55rem] ">
          <div className=" container mx-auto">
            <div className="flex items-center justify-center lg:justify-start gap-4 ">
              <h2 className=" text-5xl lg:text-6xl whitespace-nowrap">
                Latest Work
              </h2>
              <hr className="w-44 bg-lorenzo-dark hidden lg:inline-block h-0.5" />
            </div>
          </div>
          <div className="container mx-auto relative">
            <div className="flex lg:mask-l-from-70% lg:mask-r-from-70%">
              <SliderComponent />
            </div>
          </div>
          <div>
            <button className="flex items-center justify-center gap-3  text-xs font-bold bg-lorenzo-dark dark:bg-lorenzo-green text-lorenzo-gray dark:text-lorenzo-dark p-3 px-10 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ">
              More projects
              <VscArrowRight className="text-xl mb-0.5" />
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
