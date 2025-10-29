"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import datos from "../../../public/data/projects-with-blur.json";
import Link from "next/link";

export const SliderComponent = () => {

  return (
    <Splide
      options={{
        lazyLoad: true,
        drag: "free",
        focus: "center",
        pauseOnHover: true,
        type: "loop",
        perPage: 3,
        gap: "1rem",
        arrows: false,
        pagination: false,
        breakpoints: {
          1300: {
            perPage: 2,
            gap: "1rem",
          },
          900: {
            perPage: 1,
            gap: "1rem",
          },
        },
        autoScroll: {
          speed: 1,
          pauseOnHover: true,
        },
      }}
      extensions={{ AutoScroll }}
      className="w-full"
    >
      {datos.map((item, i) => (
        <SplideSlide className="relative group overflow-hidden h-[25rem] w-full " key={i}>
          <Link href={`work/project/${encodeURIComponent(item.name)}/${item.id}`}>
            <Image
              className={`absolute object-cover object-center h-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
              src={item.image3}
              width={1920}
              height={1080}
              alt={`slider image ${i}`}
              quality={75}
              priority
              placeholder="blur"
              blurDataURL={item.blurDataURL}
            />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderComponent;
