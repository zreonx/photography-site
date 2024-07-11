import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ButtonProps } from "./ui/button";

const links = [
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
];

type NavProps = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
  setSheetOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  setSheetOpen,
}: NavProps) => {
  const path = usePathname();

  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = () => {
    setSheetOpen?.(false);
  };

  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link
            href={link.path}
            className={`capitalize ${linkStyles}`}
            onClick={handleClick}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ type: "tween" }}
                layoutId='underline'
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Nav;
