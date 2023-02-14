"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "./CustomText";
import { staggerContainer } from "utils/motion";
import { useState } from "react";
import style from "styles/index";
import { exploreWorlds } from "constants";
import ExploreCard from "./ExploreCard";
const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <div className={`${style.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${style.innerWidth} mx-auto flex flex-col  `}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              choose the world you want <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row  flex-col min-h-[70px] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Explore;
