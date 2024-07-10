import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
};

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
  const path = usePathname();

  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link href={link.path} className={`capitalize ${linkStyles}`}>
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
