"use client";

import Image from "next/image";
import { FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobecreativecloud, SiBlender } from "react-icons/si";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import { RiArrowDownWideLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="hero snap-start container mx-auto pt-28 flex flex-col lg:flex-row justify-center items-center h-screen max-h-[54rem] z-50 relative">
        <div className="section1 flex-3 uppercase flex flex-col justify-center gap-20  ">
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
              <h2 className="text-xl font-semibold">
                I'm a web developer – UX/UI designer – graphic designer
              </h2>
              <div className="mt-4 flex justify-center gap-4 ">
                <p className="flex-10/12 font-light ">
                  Creative Web Developer building fast, accessible, and <br />{" "}
                  engaging experiences.
                </p>
                
              </div>
              <div className="mt-5">
                <button className="bg-transparent border border-lorenzo-dark p-3 px-10 font-bold text-sm cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-lorenzo-dark hover:text-lorenzo-lightgray">
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
              className="flex flex-col justify-center items-center w-max uppercase font-medium group relative"
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
          />
        </div>
      </section>
      <section className=" h-20 flex justify-evenly items-center bg-lorenzo-medigray text-lorenzo-lightgray font-medium text-xl">
        <p>Design</p>
        <p>Development</p>
        <p>Deploy</p>
      </section>
      <section id="new-work" className="h-screen bg-red-500 snap-start">
        Hola
      </section>
    </main>
  );
}
