"use client";

import Image from "next/image";
import { FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobecreativecloud, SiBlender } from "react-icons/si";
import { VscArrowRight } from "react-icons/vsc";
import { RiArrowDownWideLine } from "react-icons/ri";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SplitText from "../TextAnimations/SplitText/SplitText";
import TextType from "../TextAnimations/TextType/TextType";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main>
      <section className="hero lg:h-[54rem] container mx-auto pt-28 flex flex-col lg:flex-row justify-center items-center z-50 relative">
        <div className="section1 flex-3 flex flex-col justify-center items-center gap-20 bg-orange-400 px-4 w-full lg:w-auto">
          <div className="text-justify">
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
            <div className="flex items-center justify-center lg:justify-start bg-red-500">
              <SplitText
                text="Hello"
                className="text-[7rem] md:text-[10rem] lg:text-[12.5rem] leading-none whitespace-nowrap"
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
              <TextType
                text={[
                  "I`m Lorenzo, web developer – UX/UI designer – graphic designer",
                ]}
                typingSpeed={30}
                showCursor={true}
                cursorCharacter="_"
                className="text-center lg:text-justify md:text-lg lg:text-xl font-semibold max-w-[30rem] lg:max-w-full bg-fuchsia-700"
                textColors={["var(--foreground)"]}
              />
              <div className="mt-2 lg:mt-4 hidden lg:flex justify-center gap-4 text-center lg:text-justify">
                <p className="lg:flex-10/12 font-light text-xs lg:text-base">
                  Creative Web Developer building fast, accessible, and <br />{" "}
                  engaging experiences.
                </p>
              </div>
              <div className="mt-5 flex justify-center lg:justify-start">
                <button className=" bg-transparent border border-lorenzo-dark dark:border-lorenzo-gray p-3 px-10 font-bold text-xs cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
          <div className="h-20 lg:pl-3 hidden lg:block">
            <button
              onClick={() => {
                const seccion = document.getElementById("new-work");
                seccion?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col justify-center items-center w-max font-medium group relative"
            >
              <p>Scroll Down</p>
              <RiArrowDownWideLine className="text-3xl top-6 group-hover:mt-3 transition-all duration-200 " />
            </button>
          </div>
        </div>
        <div className="section2 flex-2/5 relative lg:overflow-hidden lg:h-full">
          <Image
            className="object-cover object-center lg:scale-[230%] lg:absolute lg:top-[26rem] hidden"
            src={"/images/hero-image.png"}
            alt="Hero Image"
            height={2302}
            width={2302}
            priority
          />
        </div>
      </section>
      <section className=" h-20 flex justify-evenly items-center bg-lorenzo-medigray dark:bg-lorenzo-medidark text-lorenzo-lightgray dark:text-lorenzo-lightdark font-medium text-xl">
        <p>Design</p>
        <p>Development</p>
        <p>Deploy</p>
      </section>
      <section id="new-work" className="h-screen max-h-[60rem]">
        <article className=" pt-20 flex flex-col gap-23 justify-center items-center h-screen max-h-[54rem] ">
          <div className=" container mx-auto">
            <div className="flex items-center gap-4">
              <h2 className="text-6xl whitespace-nowrap">Latest Work</h2>
              <hr className="w-44 bg-lorenzo-dark h-0.5" />
            </div>
          </div>
          <div className="container mx-auto overflow-hidden">
            <div className="flex mask-slider mask-slider2">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                {projects.map((project) => {
                  return (
                    <Image
                      key={project.id}
                      width={1920}
                      height={1080}
                      className="w-[30rem] pr-10 hover:scale-105 transition-transform duration-300 ease-in-out"
                      src={project.image}
                      alt="slider image"
                    />
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                {projects.map((project) => {
                  return (
                    <Image
                      key={project.id}
                      width={1920}
                      height={1080}
                      className="w-[30rem] pr-10 hover:scale-105 transition-transform duration-300 ease-in-out"
                      src={project.image}
                      alt="slider image"
                      priority
                    />
                  );
                })}
              </motion.div>
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
