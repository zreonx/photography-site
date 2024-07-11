import Image from "next/image";
import React from "react";

type HeroImgProps = {
  containerStyles: string;
  imgScr: string;
};

const HeroImg = ({ containerStyles, imgScr }: HeroImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgScr} alt='Hero Image' fill priority />
    </div>
  );
};

export default HeroImg;
