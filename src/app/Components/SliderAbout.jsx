import React from "react";
import Tap from "../../../public/images/icons/Tap";
import Az from "../../../public/images/icons/Az";
import Nani from "../../../public/images/icons/Nani";
import Buzz from "../../../public/images/icons/Buzz";
import Qa from "../../../public/images/icons/qa";
import Bct from "../../../public/images/icons/Bct";
import Ca from "../../../public/images/icons/Ca";
import Asintel from "../../../public/images/icons/Asintel";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Separator } from "@radix-ui/react-separator";

export const SliderAbout = (props) => {

  const icons = [Az, Nani, Tap, Buzz, Qa, Bct, Ca, Asintel];

  return (
    <Splide
      options={{
        autoWidth: true,
        focus: "center",
        drag: false,
        type: "loop",
        gap: "2rem",
        arrows: false,
        pagination: false,
        autoScroll: {
          autoStart: true,
          speed: props.duration,
          pauseOnFocus: false,
          pauseOnHover: false,
        },
      }}
      extensions={{ AutoScroll }}
      className="w-full flex justify-center items-center"
    >
      {icons.map((Icon, index) => (
        <SplideSlide
          key={index}
          className="w-32 flex items-center justify-center"
        >
          <Icon className="h-7" />
        </SplideSlide>
      ))}
      <Separator orientation="vertical" />
    </Splide>
  );
};
