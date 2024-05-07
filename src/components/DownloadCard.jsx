import Button from "./Button";
import { download } from "../assets/icons";
const DownloadCard = ({ id, icon, title, size, href }) => {
  return (
    <div
      className="flex flex-1 brightness-125 flex-col justify-center items-center
     bg-border_download bg-contain bg-center  bg-no-repeat

      lg:w-[250px] lg:h-[200px]
     md:w-[250px] md:h-[170px]


       gap-4 md:gap-1 py-5 px-1"
    >
      <div className="flex flex-1 flex-row gap-5 md:gap-2 justify-center items-center h-[10px]">
        <img
          src={icon}
          alt="icon"
          className=" object-contain w-[50px] h-[50px] max-lg:w-[30px] max-lg:h-[30px]  max-sm:w-[20px] max-sm:h-[20px]"
        />
        <h3 className="font-kanit text-white font-bold md:text-xl  xl:text-2xl lg:text-2xl">
          {title}
        </h3>
      </div>
      <div>
        <p className="text-white font-kanit">
          Size: <span className="text-yellow">{size}</span>
        </p>
      </div>
      <Button label="Download" icon={download} href={href} />
    </div>
  );
};

export default DownloadCard;
