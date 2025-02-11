import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold tracking-wider leading-tight text-[#0BA3C4] uppercase text-2xl">
                চলো নতুন কিছু করা যাক
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-36 text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                স্কিল শিখে গড়ুন আপনার স্বাধীন ভবিষ্যৎ!
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                নিজের স্কিল কে ডেভেলপ করতে এবং নিজেকে সবসময় সবার থেকে এগিয়ে
                রাখতে এখনই ইনরোল করে ফেলো তোমার পছন্দের কোর্সটি।{" "}
              </p>

              <Link to={"/courses"}
                className="inline-flex items-center px-6 py-4 mt-2 font-semibold  transition-all duration-200 bg-[#0BA3C4] rounded-md lg:mt-5 hover:bg-yellow-400 focus:bg-yellow-400 text-white"
                role="button"
              >
                চলুন শিখা শুরু করি
                <FaRegArrowAltCircleRight className="ml-4"/>
              </Link>
            </div>

            <div>
              <img className="w-[90%] m-auto" src="../../img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
