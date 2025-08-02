import React from "react";
import Link from "next/link";
import { Logotipo } from "./Logotipo";

export const Footer = () => {
const date = new Date().getFullYear() 

  return (
    <footer className="container mx-auto flex items-center justify-center lg:justify-between py-15 text-center z-100 ">
      <div>
        <div className="flex flex-col gap-3">
          <Link href="/"><Logotipo className={'fill-lorenzo-dark dark:fill-lorenzo-gray'} /></Link>
          <p className="font-light">
            ©{date}, ALL RIGHT RESERVED.
          </p>
        </div>
      </div>
      <div>
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
    </footer>
  );
};
