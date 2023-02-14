"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "./CustomText";
import { staggerContainer, fadeIn, planetVariants } from "utils/motion";
import style from "styles/index";
import Image from "next/image";
import { newFeatures } from "constants";
import NewFeatures from "./NewFeatures";

const WhatsNew = () => {
  return (
    <div className={`${style.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${style.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| what's new" />
          <TitleText title={<>whats new about metaVersus</>} />
          <div className="mt-[48px] flex flex-wrap justify-between  gap-[24px]">
            {newFeatures.map(feature => {
              return <NewFeatures key={feature.title} {...feature} />;
            })}
          </div>
        </motion.div>

        <motion.div variants={planetVariants("right")} className={`flex-1  ${style.flexCenter} `}>
          <Image
            src="/whats-new.png"
            alt="whats-new"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatsNew;
