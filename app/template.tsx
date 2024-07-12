"use client";
//Framer Motion
import { motion } from "framer-motion";

//Hooks
import useScrollProgress from "@/hooks/useScrollProgress";
import { Hind_Madurai } from "next/font/google";

//Variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

type TemplateType = {
  children: React.ReactNode;
};
const Template = ({ children }: TemplateType) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'
      ></span>
    </>
  );
};

export default Template;
