"use client";

import React from "react";
import Socials from "./Socials";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className='bg-primary py-12 '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* Socials */}
          <Fade
            direction='up'
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
              iconStyles='text-white text-[20px] transition-all dark:text-white/70 hover:text-gray-300 dark:hover:text-white'
            />
          </Fade>
          <Fade
            direction='up'
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <div className='text-white'>
              Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.
            </div>
          </Fade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
