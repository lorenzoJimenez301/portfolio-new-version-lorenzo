"use client";

import { RiCloseLargeFill, RiMenuFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const svg = (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 1080"
      className="fill-lorenzo-dark dark:fill-lorenzo-gray w-14 lg:w-16"
    >
      <g>
        <path d="M256.1579,108.0588l235.345,235.3451c-52.7509,12.9819-97.3765,46.6308-124.7778,91.8824-10.4436,17.2243-18.3719,36.1293-23.3212,56.2167l-56.2167-56.2167L108.0588,256.1579,256.1579,108.0588Z" />
        <path d="M971.9412,823.8421l-148.0991,148.099-235.345-235.345c52.7509-12.982,97.3765-46.6308,124.7778-91.8824,10.4436-17.2243,18.3719-36.1293,23.3212-56.2167l235.3451,235.3451Z" />
        <path d="M491.5029,736.5961l-235.345,235.345-148.0991-148.099,235.3451-235.3451c4.9493,20.0873,12.8777,38.9924,23.3212,56.2167,27.4013,45.2516,72.0269,78.9004,124.7778,91.8824Z" />
        <path d="M971.9412,256.1579l-179.1284,179.1284-56.2167,56.2167c-4.9493-20.0873-12.8777-38.9924-23.3212-56.2167-27.4013-45.2515-72.0269-78.9004-124.7778-91.8824l235.345-235.3451,148.0991,148.0991Z" />
        <path d="M343.4039,491.503c-3.8135,15.5437-5.8419,31.7827-5.8419,48.4971s2.0284,32.9534,5.8419,48.497c4.9493,20.0873,12.8777,38.9924,23.3212,56.2167H33.8644v-209.4274H366.7251c-10.4436,17.2243-18.3719,36.1293-23.3212,56.2167Z" />
        <path d="M1046.1356,435.2863v209.4274h-332.8607c10.4436-17.2243,18.3719-36.1293,23.3212-56.2167,3.8135-15.5436,5.8419-31.7827,5.8419-48.497s-2.0284-32.9534-5.8419-48.4971c-4.9493-20.0873-12.8777-38.9924-23.3212-56.2167h332.8607Z" />
      </g>
      <path d="M670.0245,540.0001c0,10.7355-1.3029,21.1657-3.7522,31.1493-3.1789,12.902-8.2712,25.0445-14.9791,36.1076-17.5997,29.0648-46.2624,50.6772-80.1439,59.0154-9.9836,2.4493-20.4138,3.7522-31.1493,3.7522s-21.1657-1.3029-31.1493-3.7522c-33.8815-8.3383-62.5443-29.9507-80.1439-59.0154-6.7078-11.0631-11.8001-23.2056-14.9791-36.1076-2.4494-9.9835-3.7522-20.4138-3.7522-31.1493s1.3029-21.1657,3.7522-31.1493c3.1789-12.902,8.2712-25.0445,14.9791-36.1076,17.5997-29.0647,46.2624-50.6772,80.1439-59.0154,9.9836-2.4494,20.4138-3.7522,31.1493-3.7522s21.1657,1.3029,31.1493,3.7522c33.8815,8.3382,62.5443,29.9507,80.1439,59.0154,6.7078,11.0631,11.8001,23.2056,14.9791,36.1076,2.4494,9.9836,3.7522,20.4138,3.7522,31.1493Z" />
    </svg>
  );

  return (
    <nav className="w-full min-w-sm bg-lorenzo-gray dark:bg-lorenzo-dark text-lorenzo-dark dark:text-lorenzo-gray px-5 py-4 lg:px-12 flex items-center justify-between fixed lg:relative z-100">
      <div className="flex justify-between lg:justify-start w-full gap-7 md:gap-12">
        <div className="cursor-pointer">{svg}</div>
        <div className="flex justify-between items-center gap-10 lg:hidden ">
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 1, rotate: 0 }}
              animate={{ opacity: 1, rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            >
              {isOpen ? (
                <RiCloseLargeFill className="text-4xl" />
              ) : (
                <RiMenuFill className="text-4xl" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ x: -1000 }}
              animate={{ x: -20 }}
              exit={{
                x: -1000,
                transition: { duration: 0.3 },
              }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.3,
              }}
              className="uppercase absolute top-[5rem] flex lg:hidden flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 w-full z-50 px-8 py-10 md:p-10 bg-lorenzo-gray dark:bg-lorenzo-dark shadow-lg"
            >
              <li className="h-max">
                <a className="group" href="">
                  HOME
                  <hr className="hidden md:block w-0 rounded-full h-[2px] bg-black border-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li className="h-max">
                <a className="group" href="">
                  ABOUT
                  <hr className="hidden md:block w-0 rounded-full h-[2px] bg-black border-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li className="h-max">
                <a className="group" href="">
                  WORK
                  <hr className="hidden md:block w-0 rounded-full h-[2px] bg-black border-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li className="h-max">
                <a className="group" href="">
                  CONTACT
                  <hr className="hidden md:block w-0 rounded-full h-[2px] bg-black border-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <ul className="desktop hidden uppercase lg:flex flex-col md:flex-row md:items-center relative z-50 lg:gap-5">
          <li className="flex items-center h-max w-18 ">
            <a
              className="inline-block hover:font-black transition-all duration-200 group"
              href="/"
            >
              HOME
            </a>
          </li>
          <li className="flex items-center h-max w-18 ">
            <a
              className="inline-block hover:font-black transition-all duration-200 group"
              href="/"
            >
              ABOUT
            </a>
          </li>
          <li className="flex items-center h-max w-18 ">
            <a
              className="inline-block hover:font-black transition-all duration-300 group"
              href="/"
            >
              WORK
            </a>
          </li>
          <li className="flex items-center h-max w-18 ">
            <a
              className="inline-block hover:font-black transition-all duration-200 group"
              href="/"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center">
        <ul className="flex items-center space-x-7">
          <li className="hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110">
            <FaBehanceSquare />
          </li>
          <li>
            <FaGithub className="hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110" />
          </li>
          <li>
            <FaLinkedin className="hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
