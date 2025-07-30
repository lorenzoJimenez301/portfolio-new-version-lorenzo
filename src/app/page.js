"use client";

import Image from "next/image";
import { FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobecreativecloud, SiBlender } from "react-icons/si";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import { VscArrowRight } from "react-icons/vsc";
import { RiArrowDownWideLine } from "react-icons/ri";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "./Components/Footer";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory text-lorenzo-dark">
      <section className="hero snap-start h-[54rem] container mx-auto pt-28 flex flex-col lg:flex-row justify-center items-center z-50 relative ">
        <div className="section1 flex-3  flex flex-col justify-center gap-20  ">
          <div className="text-justify">
            <ul className="pl-3 flex text-2xl gap-9">
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
            <div className="flex items-center justify-start">
              <DecryptedText
                text="Hello"
                speed={100}
                maxIterations={100}
                sequential={true}
                revealDirection="start"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className="text-[12.5rem] leading-none"
                parentClassName="text-[12.5rem] leading-none"
                encryptedClassName="text-[12.5rem] leading-none"
                animateOn="view"
              />
            </div>
            <div className="flex flex-col justify-center gap-0 pl-3">
              <h1 className="text-xl font-semibold">
                I`m a web developer – UX/UI designer – graphic designer
              </h1>
              <div className="mt-4 flex justify-center gap-4 ">
                <p className="flex-10/12 font-light ">
                  Creative Web Developer building fast, accessible, and <br />{" "}
                  engaging experiences.
                </p>
              </div>
              <div className="mt-5">
                <button className=" bg-transparent border border-lorenzo-dark p-3 px-10 font-bold text-xs cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-lorenzo-dark hover:text-lorenzo-lightgray">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
          <div className="h-20 pl-3">
            <button
              onClick={() => {
                const seccion = document.getElementById("new-work");
                seccion?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col justify-center items-center w-max  font-medium group relative"
            >
              <p>Scroll Down</p>
              <RiArrowDownWideLine className="text-3xl top-6 group-hover:mt-3 transition-all duration-200 " />
            </button>
          </div>
        </div>
        <div className="section2 flex-2/5 relative overflow-hidden h-full ">
          <Image
            className="object-cover object-center scale-[230%] absolute top-[26rem]"
            src={"/images/hero-image.png"}
            alt="Hero Image"
            height={2302}
            width={2302}
            priority
          />
        </div>
      </section>
      <section className=" h-20 flex justify-evenly items-center bg-lorenzo-medigray text-lorenzo-lightgray font-medium text-xl">
        <p>Design</p>
        <p>Development</p>
        <p>Deploy</p>
      </section>
      <section id="new-work" className="snap-start h-screen max-h-[60rem]">
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
                    />
                  );
                })}
              </motion.div>
            </div>
          </div>
          <div>
            <button className="flex items-center justify-center  gap-3  text-xs bg-lorenzo-dark text-lorenzo-gray p-3 px-10 font-bold cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ">
              More projects
              <VscArrowRight className="text-xl mb-0.5"/>
            </button>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
