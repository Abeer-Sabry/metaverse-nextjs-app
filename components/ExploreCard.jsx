import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "utils/motion";
import style from "styles/index";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[450px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
      onClick={() => handleClick(id)}
    >
      <Image src={imgUrl} alt={title} fill className="absolute object-cover rounded-[20px]" />
      {active !== id ? (
        <h3 className="font-medium sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8  justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[19px]">
          <div
            className={`${style.flexCenter}  w-[60px] h-[60px] rounded-[20px] glassmorphism mb-[16px]`}
          >
            <Image src="/headset.svg" fill alt="headset" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter The MetaVerse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
