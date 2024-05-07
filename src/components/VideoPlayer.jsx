import React from "react";

import videoFile from "../assets/video/Trailer.mp4";
const VideoPlayer = () => {
  return (
    <div
      className="flex justify-center items-start
      xl:w-[950px] xl:h-[571px] 
      md:w-[850px] md:h-[450px]
      max-md:w-[510px] max-md:h-[345px] 
      max-sm:w-[355px] max-sm:h-[245px] "
    >
      <video
        className="xl:w-[820px] xl:h-[540px] 
        md:w-[645px] md:h-[425px] '
        max-md:w-[510px] max-md:h-[330px] 
        max-sm:w-[360px] max-sm:h-[245px] 
        pt-[30px] md:pt-[20px] max-md:pt-[15px] max-sm:pt-[3px]"
        controls
        src={videoFile}
      ></video>
    </div>
  );
};

export default VideoPlayer;
