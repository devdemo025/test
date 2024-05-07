import "./App.css";
import {
  Nav,
  Hero,
  Story,
  Features,
  Trailer,
  Download,
  Footer,
} from "./sections";
import Book from "./components/Book";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <section
        className="
        xl:padding-l xl:padding-r
        2xl:padding-l 2xl:padding-r
        max-xl:padding-l max-xl:padding-r
        lg:px-[50px] max-lg:px-[30px]
        max-md:px-10 max-sm:px-8 
        bg-dark_blue relative
        overflow-hidden
        bg-hero bg-contain 
        max-sm:bg-cover md:bg-cover max-lg:bg-cover bg-no-repeat bg-right"
      >
        <Hero />
        <Book color="red" />
      </section>

      {/* gradient effect */}
      <div className="blue-v absolute right-[60px] bottom-[2px] w-[90%] h-[10%] z-[0] " />
      <div className="blue-v absolute left-[150px] top-[1300px] w-[33%] h-[10%] z-[0]" />
      <div className="blue-v absolute bottom-[850px] left-[170px]  w-[70%] h-[13%] z-[0] " />

      {/* gradient effect */}

      <section
        className=" xl:padding-l xl:padding-r
        2xl:padding-l 2xl:padding-r
        max-xl:padding-l max-xl:padding-r
        lg:px-[50px] max-lg:px-[30px]
        max-md:px-10 max-sm:px-8  
         relative overflow-hidden "
      >
        <Book color="black" />
        <Book color="white" />
        <div className="blue-v absolute right-[150px] w-[33%] h-[40%] z-[0]" />
        <Story />
        <Features />
      </section>
      {/* <section className=" overflow-hidden md:padding-r md:padding-l max-sm:px8 max-md:px-10 relative bg-trailer_bg bg-fit bg-no-repeat bg-center">
        <Trailer />
      </section> */}
      <section className="relative">
        <Download />
      </section>
      <section className="relative bg-footer_bg bg-fit max-sm:bg-cover bg-no-repeat">
      </section>
    </main>
  );
}

export default App;
