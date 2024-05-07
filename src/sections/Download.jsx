import { downloadLinks } from "../constants";
import DownloadCard from "../components/DownloadCard";
const Download = () => {
  return (
    <section
      className="max-container flex flex-col flex-1 w-full gap-5 max-sm:gap-1 justify-center items-center pb-[50px] max-sm:px8 max-md:px-10"
      id="download"
    >
      <div className="font-kanit font-bold text-5xl xl:text-5xl md:text-4xl sm:text-4xl  max-sm:text-2xl text-yellow justify-center items-center">
        <h1>DOWNLOAD LINK</h1>
      </div>
      <div
        className="flex flex-1 xl:flex-row max-md:flex-col md:justify-center md:items-center gap-11 md:gap-5
      w-full   xl:padding-r xl:padding-l max-lg:px-[40px] lg:px-[40px]"
      >
        {downloadLinks.map((link) => (
          <DownloadCard key={link.id} {...link} />
        ))}
      </div>
    </section>
  );
};

export default Download;
