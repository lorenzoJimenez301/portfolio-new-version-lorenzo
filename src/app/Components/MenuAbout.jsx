import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  RiArrowDownSLine,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import { motion } from "motion/react";
import { FaWordpress, FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiPhp,
  SiAdobecreativecloud,
  SiBlender,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiThreedotjs,
  SiNetlify,
  SiAdobepremierepro,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { useMediaQuery, useTheme } from "@mui/material";
import { AiOutlineGithub } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";

const variants = {
  initial: { translateY: 10, opacity: 0 },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.7 },
      translateX: { duration: 0.5 },
    },
  },
};

const tecnos = [
  {
    category: "BackEnd",
    name: "Node.js",
    icon: <FaNodeJs className="text-3xl md:text-6xl" />,
  },
  {
    category: "Design",
    name: "Figma",
    icon: <FaFigma className="text-3xl md:text-6xl" />,
  },
  {
    category: "FrontEnd",
    name: "React.js",
    icon: <FaReact className="text-3xl md:text-6xl" />,
  },
  {
    category: "3D",
    name: "Blender",
    icon: <SiBlender className="text-3xl md:text-6xl" />,
  },
  {
    category: "Design",
    name: "Adobe",
    icon: <SiAdobecreativecloud className="text-3xl md:text-6xl" />,
  },
  {
    category: "Design",
    name: "Ilustrator",
    icon: <SiAdobeillustrator className="text-3xl md:text-6xl" />,
  },
  {
    category: "Design",
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-3xl md:text-6xl" />,
  },
  {
    category: "FrontEnd",
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-3xl md:text-6xl" />,
  },
  {
    category: "Design",
    name: "After Effects",
    icon: <SiAdobeaftereffects className="text-3xl md:text-6xl" />,
  },
  {
    category: "FrontEnd",
    name: "Next.js",
    icon: <RiNextjsFill className="text-3xl md:text-6xl" />,
  },
  {
    category: "BackEnd",
    name: "My SQL",
    icon: <GrMysql className="text-3xl md:text-6xl" />,
  },
  {
    category: "3D",
    name: "Three.js",
    icon: <SiThreedotjs className="text-3xl md:text-6xl" />,
  },
  {
    category: "Tool",
    name: "Wordpress",
    icon: <FaWordpress className="text-3xl md:text-6xl" />,
  },
  {
    category: "BackEnd",
    name: "PHP",
    icon: <SiPhp className="text-3xl md:text-6xl" />,
  },
  {
    category: "Tool",
    name: "GitHub",
    icon: <AiOutlineGithub className="text-3xl md:text-6xl" />,
  },
  {
    category: "Tool",
    name: "Netlify",
    icon: <SiNetlify className="text-3xl md:text-6xl" />,
  },
    {
    category: "Design",
    name: "Premiere Pro",
    icon: <SiAdobepremierepro className="text-3xl md:text-6xl" />,
  },
];

const tecnosPorArea = {
  "Web Development": [
    "Node.js",
    "React.js",
    "Figma",
    "Tailwind",
    "Next.js",
    "My SQL",
    "Wordpress",
    "PHP",
    "GitHub",
    "Netlify",
  ],
  "Graphic Design": ["Figma", "Ilustrator", "Photoshop", "After Effects"],
  "3D Modeling": ["Blender", "Three.js", "Ilustrator"],
};

const titles = [
  { name: "The complete web development bootcamp" },
  { name: "Graphic Design Masterclass - Learn GREAT Design" },
  { name: "Web development technician" },
];

const Area = ({ AreaName, AreaDesc, AreaText }) => {
  return (
    <div className="flex flex-col gap-20 md:gap-25 py-14 md:py-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <motion.h3
          variants={variants}
          initial="initial"
          animate="animate"
          className="text-2xl md:text-4xl text-center font-medium"
        >
          {AreaName}
        </motion.h3>
        <motion.p
          variants={variants}
          initial="initial"
          animate="animate"
          className="max-w-3xl font-light uppercase tracking-normal md:tracking-tight text-justify md:text-center text-xs md:text-base leading-relaxed break-words"
        >
          {AreaDesc}
        </motion.p>
      </div>
      <div className="w-full flex flex-col lg:justify-center lg:items-center">
        {AreaText}
      </div>
      <div className="flex flex-col justify-center items-center gap-9">
        <motion.h3
          variants={variants}
          initial="initial"
          animate="animate"
          className="text-2xl md:text-4xl text-center font-medium"
        >
          Degrees
        </motion.h3>
        <ul className="grid grid-cols-1 gap-y-6 list-inside text-xs md:text-base font-light text-center">
          {titles.map((title, i) => (
            <motion.li
              variants={variants}
              initial="initial"
              animate="animate"
              key={i}
              className="flex items-center justify-center font-normal"
            >
              - {title.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function MenuAbout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [toggle, setToggle] = useState(false);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
    setToggle(!toggle);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setToggle(!toggle);
  };

  const area = ["Web Development", "Graphic Design", "3D Modeling"];
  const selectedAreaName = area[selectedIndex];

  const filteredTecnos = tecnos.filter((tecno) =>
    tecnosPorArea[selectedAreaName].includes(tecno.name)
  );

  const components = [
    <Area
      AreaTecno={filteredTecnos}
      AreaName={selectedAreaName}
      AreaDesc={
        "Experienced in building modern, responsive websites and web applications using cutting-edge technologies. Skilled in creating clean, maintainable code and implementing user-friendly interfaces that enhance user experience."
      }
      AreaText={
        <article className="flex flex-col gap-15 md:gap-28 w-full lg:w-2/3">
          <div className="flex flex-col gap-6">
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              className="text-lg lg:text-xl"
            >
              Front-End
              <Separator className="my-4 bg-muted-foreground" />
            </motion.div>
            <div className="grid gap-y-10 gap-x-4 justify-center items-center grid-cols-3">
              {tecnos
                .filter((tecno) => tecno.category === "FrontEnd")
                .map((tecno, i) => (
                  <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    key={i}
                    className="h-max flex flex-col justify-center items-center gap-4  min-w-max"
                  >
                    {tecno.icon}
                    <span className="font-base text-xs md:text-base">
                      {tecno.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              className="text-lg lg:text-xl"
            >
              Back-End
              <Separator className="my-4 bg-muted-foreground" />
            </motion.div>
            <div className="grid gap-y-10 gap-x-4 justify-center items-center grid-cols-3">
              {tecnos
                .filter((tecno) => tecno.category === "BackEnd")
                .map((tecno, i) => (
                  <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    key={i}
                    className="h-max flex flex-col justify-center items-center gap-4 min-w-max "
                  >
                    {tecno.icon}
                    <span className="font-base text-xs md:text-lg">
                      {tecno.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              className="text-lg lg:text-xl"
            >
              Tool
              <Separator className="my-4 bg-muted-foreground" />
            </motion.div>
            <div className="grid gap-y-10 gap-x-4 justify-center items-center grid-cols-3">
              {tecnos
                .filter((tecno) => tecno.category === "Tool")
                .map((tecno, i) => (
                  <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    key={i}
                    className="h-max flex flex-col justify-center items-center gap-4 min-w-max "
                  >
                    {tecno.icon}
                    <span className="font-base text-xs md:text-lg">
                      {tecno.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
        </article>
      }
    />,
    <Area
      AreaText={
        <div className="flex flex-col gap-15 w-full lg:w-2/3">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="text-lg"
          >
            Programs
            <Separator className="my-4 bg-muted-foreground" />
          </motion.div>
          <div className="grid gap-y-10 md:gap-y-20 gap-x-4 justify-center items-center grid-cols-3">
            {tecnos
              .filter((tecno) => tecno.category === "Design")
              .map((tecno, i) => (
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  key={i}
                  className="h-max flex flex-col justify-center items-center gap-4 min-w-max "
                >
                  {tecno.icon}
                  <span className="font-base text-xs md:text-lg">
                    {tecno.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </div>
      }
      AreaTecno={filteredTecnos}
      AreaName={selectedAreaName}
      AreaDesc={
        "Passionate about crafting visually compelling designs and digital artwork that effectively communicate ideas and brand messages. Proficient in various design tools and techniques to produce creative solutions tailored to client needs."
      }
    />,
    <Area
      AreaText={
        <div className="flex flex-col gap-15 w-full lg:w-2/3">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="text-lg"
          >
            Programs
            <Separator className="my-4 bg-muted-foreground" />
          </motion.div>
          <div className="grid gap-y-10 md:gap-y-20 gap-x-4 justify-center items-center grid-cols-3">
            {tecnos
              .filter(
                (tecno) =>
                  tecno.category === "3D" || tecno.name === "Ilustrator"
              )
              .map((tecno, i) => (
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  key={i}
                  className="h-max flex flex-col justify-center items-center gap-4 min-w-max "
                >
                  {tecno.icon}
                  <span className="font-base text-xs md:text-lg">
                    {tecno.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </div>
      }
      AreaTecno={filteredTecnos}
      AreaName={selectedAreaName}
      AreaDesc={
        "Skilled in designing and developing detailed 3D models for games, animations, and simulations. Experienced in using industry-standard software to bring creative concepts to life with precision and attention to detail."
      }
    />,
  ];

  const theme = useTheme();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div className="bg-lorenzo-lightgray dark:bg-lorenzo-lightdark">
      <List
        className="flex justify-center items-center w-56 md:w-96"
        component="nav"
        aria-label="Device settings"
        sx={{ padding: "0" }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Category"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{
            boxShadow: "5px 5px 20px rgb(0,0,0, 0.1)",
            color: prefersDarkMode
              ? "var(--color-lorenzo-dark)"
              : "var(--color-lorenzo-gray)",
            bgcolor: prefersDarkMode
              ? "var(--color-lorenzo-green)"
              : "var(--color-lorenzo-dark)",
            "&:hover": {
              bgcolor: prefersDarkMode
                ? "var(--color-lorenzo-gray)"
                : "var(--color-lorenzo-green)",
              color: prefersDarkMode
                ? "var(--color-lorenzo-dark)"
                : "var(--color-lorenzo-dark)",
              "& .MuiListItemText-primary": {
                color: prefersDarkMode
                  ? "var(--color-lorenzo-dark)"
                  : "var(--color-lorenzo-dark)",
              },
              "& .MuiListItemText-secondary": {
                color: prefersDarkMode
                  ? "var(--color-lorenzo-dark)"
                  : "var(--color-lorenzo-dark)",
                opacity: 0.5,
              },
            },
          }}
        >
          <ListItemText
            className="peer"
            primary="Category"
            secondary={area[selectedIndex]}
            primaryTypographyProps={{
              sx: {
                color: prefersDarkMode
                  ? "var(--color-lorenzo-dark)"
                  : "var(--color-lorenzo-gray)",
                fontWeight: "bold",
              },
            }}
            secondaryTypographyProps={{
              sx: {
                color: prefersDarkMode
                  ? "var(--color-lorenzo-dark)"
                  : "var(--color-lorenzo-gray)",
                opacity: 0.5,
              },
            }}
          />
          <RiArrowDownSLine
            className={`transition-transform duration-300 text-4xl ${
              open ? "rotate-180" : ""
            }`}
          />
        </ListItemButton>
      </List>
      <Menu
        PaperProps={{
          sx: {
            borderRadius: 0,
            padding: "0rem 0rem",
            width: "15rem",
          },
        }}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "lock-button",
            role: "listbox",
          },
        }}
      >
        {area.map((area, index) => (
          <MenuItem
            sx={{ borderRadius: 0 }}
            key={area}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {area}
          </MenuItem>
        ))}
      </Menu>
      <div
        key={selectedAreaName}
        className="p-7 text-sm bg-lorenzo-lightgray dark:bg-lorenzo-lightdark text-lorenzo-dark dark:text-lorenzo-gray"
      >
        {components[selectedIndex]}
      </div>
    </div>
  );
}
