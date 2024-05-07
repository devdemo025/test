import { combat, book_white } from "../assets/images";
const Story = () => {
  return (
    <section
      className="relative overflow-hidden max-container flex flex-row max-lg:flex-col-reverse
       max-sm:pt-[40px] max-md:pt-[50px] pt-[100px] justify-start items-center w-full gap-14 max-lg:gap-8 
       max-sm:gap-8 max-md:gap-14 "
      id="about"
    >
      <div className="flex flex-col flex-1  max-sm:pt-[10px] max-sm:text-center">
        <h3 className="text-white font-kanit font-semibold text-2xl max-sm:text-[20px] max-sm:leading-normal ">
          This story is of a boy named{" "}
          <span className="text-yellow"> Aarhus</span>, whose father was a
          renowned
          <span className="text-yellow"> scientist </span> and{" "}
          <span className="text-yellow"> programmer</span>.
        </h3>
        <p className="text-slate-300 mt-5 font-kanit max-sm:text-[15px] ">
          He was an intelligent kid who grew up with his father, who influenced
          him in technology and programming. He is always in his father's office
          when his father is not at home, where he spends a lot of time reading
          books. One day his father did not come home, the day turned into a
          week, and the week turned into a month. One day he discovers a note
          from his father that was written before he vanished. And this is where
          his adventure starts and solves the mystery of his father's
          vanishment.
        </p>
      </div>
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
          src={combat}
          alt="combat"
          className="
          2xl:w-[349px] 2xl:h-[349px]
          xl:w-[349px] xl:h-[349px]
          lg:w-[300px] lg:h-[300px]
          md:w-[300px] md:h-[300px]
          sm:w-[200px] sm:h-[200px] 
          max-sm:w-[170px] max-sm:h-[170px] 
         
           "
        />
      </div>
    </section>
  );
};

export default Story;
