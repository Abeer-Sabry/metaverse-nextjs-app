"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textContainer, textVariant } from "utils/motion";
import style from "../styles/index";
// import "";
const Hero = () => {
  return (
    <div className={`${style.yPaddings} sm:py-16 xs:py-8 py-12   sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${style.innerWidth}  mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={style.heroHeading}>
            MetaVerse{" "}
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center z-10"
          >
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Ma
            </h1>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[103px] sm:h-[48px] h-[37px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Ness
            </h1>
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="relative w-full md:-mt-[20px] -mt-[12px]"
          >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
            <div className="w-full sm:h-[500px] h-[350px] relative  z-1">
              <Image
                src="/cover.png"
                alt="MetaVerse Cover"
                fill
                className="object-cover rounded-tl-[140px] "
              />
            </div>
            <a href="#explore">
              <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                <Image
                  src="/stamp.png"
                  alt="stamp"
                  width={90}
                  height={90}
                  className="sm:w-[100px] w-[90px] sm:h-[100px] h-[90px] object-contain"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
