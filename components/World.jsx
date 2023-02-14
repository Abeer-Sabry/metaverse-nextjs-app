"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "./CustomText";
import { staggerContainer, fadeIn, planetVariants } from "utils/motion";
import style from "styles/index";
import Image from "next/image";

const World = () => {
  return (
    <div className={`${style.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${style.innerWidth} mx-auto  flex flex-col `}
      >
        <TypingText title="| People On The World" textStyles="text-center" />
        <TitleText
          title={<>Track friends around you and invite them to play together in the same world</>}
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image src="/map.png" alt="map" fill className="object-cover" />
          <div className="absolute right-20 bottom-20 w-[70px] h-[70px] p-[8px] rounded-full bg-[#5d6680]">
            <Image src="/people-01.png" alt="people" fill />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[8px] rounded-full bg-[#5d6680]">
            <Image src="/people-02.png" alt="people" fill />
          </div>
          <div className="absolute top-1/2  left-[45%] w-[70px] h-[70px] p-[8px] rounded-full bg-[#5d6680]">
            <Image src="/people-03.png" alt="people" fill />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default World;
