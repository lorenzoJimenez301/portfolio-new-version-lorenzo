import Image from "next/image";
import { FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobecreativecloud, SiBlender } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <section className="hero container mx-auto flex flex-col lg:flex-row h-[45rem]">
        <div className="section1 flex-3 uppercase flex items-center justify-center ">
          <div className="text-justify">
            <ul className="pl-3 flex text-2xl gap-9">
              <li><FaNodeJs /></li>
              <li><FaReact /></li>
              <li><SiAdobecreativecloud /></li>
              <li><SiBlender /></li>
              <li><FaFigma /></li>
            </ul>
            <div className="flex items-center justify-start">
              <h1 className="text-[12.5rem] leading-none">Hello</h1>
            </div>
            <div className="flex flex-col justify-center gap-3 pl-3">
              <h2 className="text-xl font-semibold">
                I'm a web developer – UX/UI designer – graphic designer
              </h2>
              <div className="mt-4 flex justify-center gap-4 ">
                <hr className="flex-auto mt-3" />
                <p className="flex-10/12 font-light ">
                  Creative Web Developer building fast, accessible, and <br /> engaging
                  experiences.
                </p>
              </div>
              <div className="mt-5">
                <button className="bg-transparent border border-lorenzo-dark p-3 px-10 font-bold text-sm cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-lorenzo-dark hover:text-lorenzo-lightgray">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section2 flex-2/5 relative overflow-hidden w-max">
          <Image
            className="object-cover object-center scale-[230%] absolute top-[26rem]"
            src={"/images/hero-image.png"}
            alt="Hero Image"
            height={2302}
            width={2302}
          />
        </div>
      </section>
      <section className="h-28 flex justify-evenly items-center bg-lorenzo-medigray text-lorenzo-lightgray font-medium text-xl">
        <p>Design</p>
        <p>Development</p>
        <p>Deploy</p>
      </section>
    </main>
  );
}
