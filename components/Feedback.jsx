"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "utils/motion";
import style from "styles/index";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className={`${style.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${style.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px]
           flex justify-end flex-col gradient-05
            sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px]">
              {" "}
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px]">
              Founder Metaverus
            </p>
            <p className="mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[45.6px] leading-[39.6px] ">
              “With the development of todays technology, metaverse is very useful for todays work,
              or can be called web 3.0. by using metaverse you can use it as anything”
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center w-full lg:h-[610px] h-auto min-h-[210px]"
        >
          <Image
            src="/planet-09.png"
            alt="planet-09"
            fill
            className=" object-cover rounded-[40px]"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%] w-[155px] h-[155px]"
          >
            <Image src="/stamp.png" alt="stamp" fill className="object-cover" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Feedback;
