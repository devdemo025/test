import { monster } from "../assets/images";
import FeatureCard from "../components/FeatureCard";
import { features } from "../constants";
const Features = () => {
  return (
    <section
      className="max-container  flex flex-row max-lg:flex-col  gap-14 max-lg:gap-8 
       max-sm:gap-8 max-md:gap-14 max-sm:pt-[40px] pb-[90px] max-sm:pb-[50px] justify-center items-center w-full pt-[30px] "
    >
      <div
        className="bg-border_image bg-no-repeat bg-center bg-contain 
         w-[400px] h-[400px] xl:w-[400px] xl:h-[400px]
         lg:w-[349px] lg:h-[349px]
         md:w-[349px] md:h-[349px]
         sm:w-[230px] sm:h-[230px]
         max-sm:w-[200px] max-sm:h-[200px]
         flex flex-1 relative justify-center items-center py-6"
      >
        <img
          src={monster}
          alt="monster"
          className="  2xl:w-[349px] 2xl:h-[349px]
          xl:w-[349px] xl:h-[349px]
          lg:w-[300px] lg:h-[300px]
          md:w-[300px] md:h-[300px]
          sm:w-[200px] sm:h-[200px] 
          max-sm:w-[170px] max-sm:h-[170px]  "
        />
      </div>
      <div className=" flex flex-1 justify-center items-start flex-col relative">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
