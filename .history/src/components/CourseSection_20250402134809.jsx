/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CourseSection = ({ courses }) => {
  console.log((courses));
  
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-300 transform lg:pt-6 pt-12 lg:pb-0 pb-0`}
    >
      {courses.map((course, index) => (
        <div
          key={index}
          className="w-full flex-shrink-0 bg-white  shadow-lg rounded-lg"
        >
          <div className="relative shadow-lg">
            <img
              className="w-full h-64 object-cover rounded-t-lg"
              src={course.image}
              alt={course.title}
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-semibold rounded-full">
              {course.category}
            </div>
          </div>
          <div className="bg-white p-6 mt-4 rounded-b-lg ">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              {course.title}
            </h1>
            <p className="text-sm text-gray-500 mt-2 text-center">
              {course.subtitle}
            </p>
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {course.originalPrice}
                </p>
                <p className="text-sm text-gray-500">Original Price</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {course.discountedPrice}
                </p>
                <p className="text-sm text-gray-500">Discounted Price</p>
              </div>
            </div>
            <Link
              to={`/course/${course.courseId}`}
              className="p-0 cursor-pointer"
            >
              <button className="w-full cursor-pointer bg-[#1CC4DF] text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition duration-300 mt-4">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;
