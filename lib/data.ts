//Features Icons
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import {
  RiRidingFill,
  RiUserHeartFill,
  RiStarHalfSLine,
  RiVidiconFill,
  RiVipCrown2Fill,
  RiSendPlaneFill,
} from "react-icons/ri";

export const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/portfolio",
    name: "portfolio",
  },
  {
    path: "/pricing",
    name: "pricing",
  },
  {
    path: "/contact",
    name: "contact",
  },
] as const;

//Features Data
export const features = [
  {
    name: "PHOTOGRAPHY",
    description:
      "Studio comes with elements node specifically for photographers, including the client list, password protected pages, and the proofing gallery",
    icon: CloudArrowUpIcon,
  },
  {
    name: "PORTFOLIO LISTS",
    description:
      "User our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention",
    icon: FingerPrintIcon,
  },
  {
    name: "FULLY CUSTOMIZABLE",
    description:
      "It is a fully flexible theme, All elements, pages and every other aspects of your website can be effortlessly adapted to fit your specific needs",
    icon: ArrowPathIcon,
  },
  {
    name: "FREE PLUGINS",
    description:
      "Two amazing plugins are included for free with Azalea: The Revolution Slider plugin & the intuitive drag-and-drop Visual Composer Page Builder",
    icon: LockClosedIcon,
  },
] as const;

//Projects Data

export const projectData = [
  {
    image: "/work/3.png",
    category: "Portraits",
    name: "February 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/5.png",
    category: "Products",
    name: "APril 22, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/6.png",
    category: "Fashion",
    name: "Nov 08, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/7.png",
    category: "Fashion",
    name: "Jan 14, 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/8.png",
    category: "Portraits",
    name: "Jan 31, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/9.png",
    category: "Products",
    name: "Aug 31, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/10.png",
    category: "Fashion",
    name: "Mar 13, 2013",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/1.png",
    category: "Portraits",
    name: "Oct 23, 2019",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum!",
    link: "/",
    codepen: "/",
  },
];
//Reviews Data
export const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Jenifer",
    job: "Chief",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Lopez Chriz",
    job: "CEO",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Hamilton",
    job: "CEO",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Lucy",
    job: "App Developer",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Stoic John",
    job: "CEO",
    review:
      "But i must explain to you how all this mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system and expound.",
  },
] as const;

export const infoData = [
  {
    icon: React.createElement(RiUserHeartFill, { size: 40 }),
    text: "Mrs Smith",
  },
  {
    icon: React.createElement(RiSendPlaneFill, { size: 40 }),
    text: "+98 99 892 7781",
  },
  {
    icon: React.createElement(RiVidiconFill, { size: 40 }),
    text: "photography@gmail.com",
  },
  {
    icon: React.createElement(RiVipCrown2Fill, { size: 40 }),
    text: "Born on 23, March, 2002",
  },
  {
    icon: React.createElement(RiStarHalfSLine, { size: 40 }),
    text: "Master Degree",
  },
  {
    icon: React.createElement(RiRidingFill, { size: 40 }),
    text: "22, Ella Statu, Texas Us",
  },
] as const;
