"use client";
import Link from "next/link";
import React from "react";
import {
  RiPaypalFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  { path: "/", name: <RiPaypalFill /> },
  { path: "/", name: <RiSnapchatFill /> },
  { path: "/", name: <RiSkypeFill /> },
  { path: "/", name: <RiFacebookBoxFill /> },
  { path: "/", name: <RiInstagramFill /> },
];

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <Link href={icon.path}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Socials;
