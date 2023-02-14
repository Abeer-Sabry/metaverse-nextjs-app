"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { navVariants } from "utils/motion";
import style from "styles/index";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${style.xPaddings}   py-8   relative `}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${style.innerWidth}    mx-auto flex justify-between gap-8`}>
        <Image
          src="/search.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
          className="object-contain"
        />
        <h2
          className="uppercase  
        font-extrabold text-[24px]
         leading-[30px] text-white"
        >
          metaVersus
        </h2>
        <Image
          src="/menu.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
