import VideoPlayer from "../components/VideoPlayer";

const Trailer = () => {
  return (
    <section
      className="max-container relative flex flex-1 flex-col w-full justify-center items-center
       gap-5 max-sm:gap-1 max-sm:pt-[0px] pb-[90px] max-sm:pb-[50px]"
      id="gameplay"
    >
      {/* Title section */}
      <div className="">
        <h2 className="font-kanit text-yellow xl:text-5xl md:text-4xl sm:text-4xl  max-sm:text-2xl font-bold ">
          GAMEPLAY
        </h2>
      </div>
      {/* video player section */}
      <div
        className="bg-border_video  bg-center bg-contain bg-no-repeat
        xl:w-[950px] xl:h-[571px]
        md:w-[850px] md:h-[450px]
        max-md:w-[750px] max-md:h-[350px] 
        max-sm:w-[400px] max-sm:h-[250px] 
        justify-center  items-center flex
        "
      >
        <VideoPlayer />
      </div>
    </section>
  );
};

export default Trailer;
