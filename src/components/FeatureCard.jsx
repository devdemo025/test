const FeatureCard = ({ icon, title, content, id }) => {
  return (
    <div className="flex flex-row flex-1 w-full p-6 max-sm:p-0 rounded-[20px] feature-card justify-center items-center my-2">
      <div
        className={`flex bg-dark_blue  justify-center items-center  w-[75px] h-[65px] max-sm:w-[50px] max-sm:h-[45px]  rounded-full mr-2 ${
          id === "feature-2"
            ? "w-[78px] h-[55px]"
            : id === "feature-3"
            ? "w-[79px] h-[55px]"
            : id === "feature-4"
            ? "w-[78px] h-[55px]"
            : "w-[145px] h-[65px]"
        }`}
      >
        <img
          src={icon}
          alt="icon"
          className=" object-contain w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]"
        />
      </div>
      <div className="flex flex-col w-full ">
        <h4 className="font-kanit text-xl font-bold text-yellow max-sm:text-[20px]">
          {title}
        </h4>
        <p className="text-slate-300 font-kanit max-sm:text-[15px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
