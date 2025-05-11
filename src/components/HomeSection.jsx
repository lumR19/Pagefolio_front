import Gif from "../assets/gif.gif";
import Flag from "../assets/Flag.png"

const Hero = () => {
  return (
    <section className=" px-30 py-38 flex flex-col lg:flex-row items-center  lg:justify-between gap-10">
      <div className="w-full lg:w-[700px] shadow-xl rounded-xl overflow-hidden">
        <img src={Gif} className="w-[700px] h-auto"/>
      </div>

      <div className="text-white text-right w-full lg:w-1/2">

        <h1 className="text-2xl md:text-[36px] font-bold leading-18">
        هبـــّــــاب | افتح الباب، وخلّي هبّاب يهبّ        </h1>

        <p className="text-2xl md:text-[22px] leading-8 ml-40">
          الريح التقنية اللي تدخل على صفحات شركتك، وتحركها، وتعدلها، وتعيد تشكيلها من جديد بدون ما تلمس سطر كود 
        </p>
      </div>
      <img src={Flag} className="absolute bottom-0 right-0 left-0 w-full"></img>
    </section>
  );
};

export default Hero;
