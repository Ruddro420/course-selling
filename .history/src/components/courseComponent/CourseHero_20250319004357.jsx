/* eslint-disable react/prop-types */
import { IoBookOutline } from "react-icons/io5";
import Bn from "../EnToBn/Bn";
import Loader from "../Loader/Loader";

const CourseHero = ({ course }) => {
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
                      <button
                        data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                        className="bg-[#0BA3C4] hover:bg-[#FCD34D] hover:text-black text-md font-semibold whitespace-nowrap text-center md:w-full w-full rounded py-2 lg:py-2 text-white cursor-pointer">
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
              ) : (<Loader />)}
            </div>
            <!-- Main modal -->
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                  <!-- Modal header -->
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Sign in to our platform
                    </h3>
                    <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-4 md:p-5">
                    <form class="space-y-4" action="#">
                      <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                      </div>
                      <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                      </div>
                      <div class="flex justify-between">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                          </div>
                          <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                      </div>
                      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
