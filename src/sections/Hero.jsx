import React from "react";
import Button from "../components/Button";
import { portal, run, hero_bg } from "../assets/images";
import { download } from "../assets/icons";
import { navLinks } from "../constants";
import { downloadLinkHref } from "../constants";

const Hero = () => {
  return (
    //prettier-ignore
    <section
      className="	w-full flex flex-row justify-start xl:min-h-screen max-container py-[30px]
       md:pt-[80px] sm:pb-[60px] max-lg:justify-center max-lg:items-center"
      id="home"
    >
      {/*gradient effect */}

      <div className="light-blue absolute w-[33%] h-[50%] z-[0] " />

      {/*first div that has title, description and button */}

      <div
        className="  relative xl:2/5 flex flex-col justify-center items-start 
      max-sm:items-center xl:max-w-[73%]  max-lg:w-[100%] max-sm:text-center "
      >
        <h1
          className="font-gameplay tracking-wide text-white pr-10 max-sm:pr-0
        font-bold max-sm:text-[35px] max-md:text-[60px] max-xl:text-[70px] text-6xl 
        w-full leading-[80px] max-md:leading-1 max-sm:leading-[40px] "
        >
          CODE<span className="text-yellow"> SAGA</span>
          <br />
          AARHUS EVENTYR
        </h1>
        <p className="text-slate-300 mb-8 max-w-[420px] font-kanit max-sm:text-[15px] text-lg mt-4">
          Embark on an epic 2D RPG action adventure. Dive into a richly crafted
          world and find the answer to the legendary book.
        </p>

        <Button label="Download" icon={download} href={downloadLinkHref} />
      </div>

      {/* second div that has portal and mc */}

      {/* <div
        className=" hidden xl:flex flex-row relative xl:max-w-[35%] md:w-[50%] 
       flex-1 justify-end items-center max-sm:justify-center max-sm:items-center "
      >
        <img
          src={run}
          alt="run"
          className="absolute -left-[60px] top-[190px]  w-[700px] h-[300px] hidden xl:block "
        />
        <img
          src={portal}
          className="w-[278px] h-[400px] pl-15 hidden xl:block "
        />
      </div> */}
    </section>
  );
};

export default Hero;
