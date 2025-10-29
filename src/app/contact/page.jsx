"use client";

import React from "react";
import Image from "next/image";
import logoContact from "../../../public/images/icons/logo-green-lorenzo.svg";
import contactImage from "../../../public/images/set-up.jpg";
import { useState } from "react";
import { TitleSection } from "../about/page";
import { ButtonFill } from "../Components/ButtonFill";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success((t) => (
          <div className="font-bold flex items-center justify-between gap-4 p-4 bg-lorenzo-green text-lorenzo-dark ">
            <span>¡Mensaje enviado con éxito!</span>
          </div>
        ));
        setStatus("");
        e.target.reset();
      } else {
        toast.error((t) => (
          <div className="font-bold flex items-center justify-between gap-4 p-4 bg-lorenzo-green text-lorenzo-dark ">
            <span>¡Error al enviar el mensaje!</span>
          </div>
        ));
        setStatus("Error al enviar ❌");
      }
    } catch (err) {
      console.error(err);
      toast.error((t) => (
        <div className="font-bold flex items-center justify-between gap-4 p-4 bg-lorenzo-green text-lorenzo-dark ">
          <span>¡Error al enviar el mensaje!</span>
        </div>
      ));
      setStatus("Error al enviar ❌");
    }
  };
  return (
    <section className="flex flex-col justify-items-center items-center gap-20">
      <article className="overflow-hidden relative w-full h-[20rem] lg:h-[40rem] flex justify-center items-center">
        <Image
          fill
          placeholder="blur"
          quality={90}
          className="h-full w-full absolute object-cover object-center -z-5 grayscale"
          src={contactImage}
          alt="Logo Lorenzo"
        />
        <div className="h-full w-full flex justify-center items-center absolute object-cover object-center bg-lorenzo-dark/60 z-5">
          <Image
            className=" z-10 max-w-xs lg:max-w-4xl"
            src={logoContact}
            alt="Logo Lorenzo"
          />
        </div>
      </article>
      <div className="lg:h-[40rem] container mx-auto px-4 flex gap-10 lg:gap-50 justify-center items-center flex-col lg:flex-row w-full ">
        <article className="flex-1 w-full max-w-lg flex flex-col justify-items-center items-center lg:items-start gap-10 lg:gap-14">
          <div className="flex justify-center lg:justify-start w-full">
            <TitleSection
              className="lg:inline-block"
              onSubmit
              title={"Contact"}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 w-full max-w-md lg:max-w-xl"
          >
            <input
              name="name"
              placeholder="Full Name"
              required
              className="bg-lorenzo-lightgray dark:bg-lorenzo-lightdark text-lorenzo-dark dark:text-lorenzo-gray outline-0 normal-case! p-2 border-[0.1rem] border-lorenzo-dark dark:border-lorenzo-gray"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-lorenzo-lightgray dark:bg-lorenzo-lightdark text-lorenzo-dark dark:text-lorenzo-gray outline-0 normal-case! p-2 border-[0.1rem] border-lorenzo-dark dark:border-lorenzo-gray"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="bg-lorenzo-lightgray dark:bg-lorenzo-lightdark text-lorenzo-dark dark:text-lorenzo-gray h-44 outline-0 normal-case! p-2 border-[0.1rem] border-lorenzo-dark dark:border-lorenzo-gray resize-none"
            />
            <button
              className={`flex min-w-max lg:max-w-64 items-center justify-center gap-3 text-sm font-bold bg-lorenzo-dark dark:bg-lorenzo-green text-lorenzo-gray dark:text-lorenzo-dark p-3 px-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
            >
              Send
            </button>
            <p>{status}</p>
          </form>
        </article>
        <div className="flex-1 flex flex-col justify-center items-center gap-20 lg:gap-40 w-full h-full max-w-lg">
          <article className="flex flex-col justify-center items-center lg:items-start gap-6 w-full">
            <div>
              <h3 className="text-3xl ">Social Media</h3>
            </div>
            <ul className="text-3xl flex gap-6 ">
              <li>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/lorenzojimenezabarca301/"}
                >
                  <FaLinkedin className="cursor-pointer hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-105" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.behance.net/lorenzojimenez4"}
                >
                  <FaBehanceSquare className="cursor-pointer hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-105" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://github.com/lorenzoJimenez301"}
                >
                  <FaGithub className="cursor-pointer hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-105" />
                </Link>
              </li>
            </ul>
          </article>
          <article className="flex flex-col justify-center items-center gap-6 w-full font-light">
            <ul className="flex flex-col items-start justify-center gap-5 w-max lg:w-full">
              <li className="flex justify-center items-center gap-3">
                <div className="w-8 aspect-square flex justify-start items-start">
                  <MdEmail className="text-3xl h-full w-full object-cover object-center" />
                </div>
                <p>lorenzojimenez815@gmail.com</p>
              </li>
              <li className="flex justify-center items-center gap-3">
                <div className="w-8 aspect-square flex justify-start items-start">
                  <FaWhatsapp className="text-3xl h-full w-full object-cover object-center" />
                </div>
                <p>+506 8786-1758</p>
              </li>
              <li className="flex justify-center items-center gap-3">
                <div className="w-8 aspect-square flex justify-start items-start">
                  <IoLocationSharp className="text-3xl h-full w-full object-cover object-center" />
                </div>
                <p>Cartago, Costa Rica</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "", // aquí puedes dejar vacío
          style: {
            background: "var(--color-lorenzo-green)",
            boxShadow: "none",
            borderRadius: "0",
          },
        }}
      />
    </section>
  );
}

export default Contact;
