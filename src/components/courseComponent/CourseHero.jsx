/* eslint-disable react/prop-types */
import { IoBookOutline } from "react-icons/io5";
import Bn from "../EnToBn/Bn";
import Loader from "../Loader/Loader";

const CourseHero = ({course}) => {
  console.log(course);

  return (
    <div>
    <div className="bg-gray-900 py-20 course-hero-section  h-80 flex items-center justify-between mx-auto p-4 lg:py-56">
      <div className="container mx-auto mt-10 max-w-screen-xl md:px-12">
        <div className="flex flex-col course-hero md:flex-row md:gap-12">

          <div className="md:w-1/2 lg:w-2/3 pt-20 px-6 flex-grow hero-cards">
            <h1 className=" md:text-4xl text-xl text-white font-bold mb-6">
              {course.title}
            </h1>
            <p className="text-md md:text-xl lg:text-xl text-gray-400 mb-8">
              {course.description}
            </p>
          </div>

          <div className="md:w-1/2 lg:w-1/3 z-40  pt-20  md:mt-12  flex-shrink-0 hero-cards hero-cards2">
            {course?(
              <div className="max-w-md pb-4  bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700  shadow-lg main-card">
              <a href="#">
                {course.intro?(
                  <iframe
                  className="w-full card-vedio"
                  src={course.intro}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                ):(
                  <img
                  className="w-full h-64 object-cover "
                  src={course.image}
                  alt={course.title}/>
                )}
                
              </a>
              {/* Fee-container */}
              <div className="suggestion-pricing dark:text-white">
                <div className="p-5">
                  
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <span className="text-4xl font-semibold text-white tracking-tighter">
                      <Bn content={course.discountedPrice? course.discountedPrice : course.originalPrice}/>
                      </span>
                    </h5>
                  
                  <p className="mb-3 font-normal dark:text-white text-gray-700">
                    {course.title}
                  </p>
                  <button className="bg-[#0BA3C4] hover:bg-[#FCD34D] hover:text-black text-md font-semibold whitespace-nowrap text-center md:w-full w-full rounded py-2 lg:py-2 text-white cursor-pointer">
                    Enroll Now
                  </button>
                </div>

              {/* Course Features----------- */}
                <div className="">
                  <h3 className="text-lg  font-bold text-slate-200 tracking-wide uppercase px-6 py-2">
                    এই কোর্সে যা থাকছে
                  </h3>
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex space-x-3 items-center px-6">
                      <IoBookOutline className="flex-shrink-0  h-5 w-5 text-[#0BA3C4]" />
                      <span className="text-base text-slate-200">{feature}</span>
                    </li>
                  ))}
                  {/*  */}
                </div>
              </div>
            </div>
            ):(<Loader/>)}
            

          </div>


        </div>
      </div>
    </div>
  </div>
  );
};

export default CourseHero;
