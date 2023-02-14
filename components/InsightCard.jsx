import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "utils/motion";
import Image from "next/image";
const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex  md:flex-row  flex-col  gap-4 justify-center items-center"
    >
      <div className="md:w-[270px]  w-full h-[220px] mb-8 relative">
        <Image src={imgUrl} alt="insight" fill className="rounded-[25px] object-cover" />
      </div>
      <div className="flex-1 md:ml-[40px] flex flex-col max-w-[500px]">
        <h2 className="mb-2">{title}</h2>
        <p className="text-[#b4b4b4] font-normal text-[14px]">{subtitle}</p>
      </div>
      <div className="lg:flex  hidden justify-center  items-center  w-[50px] h-[50px] rounded-full border-[1px] border-white  bg-transparent ">
        <Image src="arrow.svg" alt="arrow" width={20} height={20} />
      </div>
    </motion.div>
  );
};

export default InsightCard;
