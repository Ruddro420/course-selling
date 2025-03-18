/* eslint-disable react/prop-types */
import { IoBookOutline } from "react-icons/io5";
import Bn from "../EnToBn/Bn";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const CourseHero = ({ course }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const signUp = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    // Validate phone number for Bangladesh
    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(number)) {
      toast.error("Please enter a valid Bangladeshi phone number.");
      return;
    } else {
      // Store the number in localStorage
      localStorage.setItem("signUp", number);
      toast.success("You have successfully registered.");
      closeModal();
      //navigate("/course-content");
    }
  };

  // get local storage data
  const signUpNumber = localStorage.getItem("signUp");
  // redirect to course content page
  const courseContent = () => {
    navigate("/course-content");
  }




  return (
    <div className="z-[999]">
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
              {course ? (
                <div className="max-w-md pb-4  bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700  shadow-lg main-card">
                  <a href="#">
                    {course.intro ? (
                      <iframe
                        className="w-full card-vedio"
                        src={course.intro}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img
                        className="w-full h-64 object-cover "
                        src={course.image}
                        alt={course.title} />
                    )}

                  </a>
                  {/* Fee-container */}
                  <div className="suggestion-pricing dark:text-white">
                    <div className="p-5">

                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <span className="text-4xl font-semibold text-white tracking-tighter">
                          <Bn content={course.discountedPrice ? course.discountedPrice : course.originalPrice} />
                        </span>
                      </h5>

                      <p className="mb-3 font-normal dark:text-white text-gray-700">
                        {course.title}
                      </p>
                      {
                        signUpNumber ? <button
                          onClick={courseContent}
                          type="button"
                          className="bg-[#0BA3C4] hover:bg-[#FCD34D] hover:text-black text-md font-semibold whitespace-nowrap text-center md:w-full w-full rounded py-2 lg:py-2 text-white cursor-pointer">
                          View Course
                        </button> : <button
                          onClick={openModal}
                          type="button"
                          className="bg-[#0BA3C4] hover:bg-[#FCD34D] hover:text-black text-md font-semibold whitespace-nowrap text-center md:w-full w-full rounded py-2 lg:py-2 text-white cursor-pointer">
                          Enroll Now
                        </button>
                      }

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
              ) : (<Loader />)}
            </div>
          </div>
        </div>
      </div>
      {/* Modal Data Here */}
      {isOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-[999999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative m-4 p-4 w-2/5 min-w-[20%] max-w-[30%] rounded-lg bg-white shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Sign up to Britto Learning
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={signUp}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Phone Number</label>
                    <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="01755 XXXXXX" required />
                  </div>
                  <button type="submit" className="w-full cursor-pointer text-white bg-[#12C1DF] hover:bg-[#FCD34D] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center">Register to your account</button>
                </form>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button
                onClick={closeModal}
                className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Cancel
              </button>
              {/*               <button
                onClick={closeModal}
                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                Confirm
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseHero;
