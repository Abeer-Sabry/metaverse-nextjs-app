import Image from "next/image";
import style from "styles";
const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div className={`${style.flexCenter} w-[60px] h-[60px] rounded bg-[#323f5d]`}>
        <Image src={imgUrl} alt="icon" width={40} height={40} />
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px]">Title: {title}</h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
        {" "}
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;
