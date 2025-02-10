/* eslint-disable react/prop-types */
import axios from "axios";
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CourseSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [isMobileView, setIsMobileView] = useState(true); // Track screen size
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch testimonials data
    axios
      .get("/public/data/Courses.json")
      .then((response) => {
        setTestimonials(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the testimonials data!",
          error
        );
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Determine the number of testimonials to show based on screen size
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection("");
    }, 200);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Display one testimonial for small screens, and two for larger screens
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + (isMobileView ? 1 : 2)
  );
  return (
    <>
      <Slider
        prevTestimonial={prevTestimonial}
        nextTestimonial={nextTestimonial}
        loading={loading}
        direction={direction}
        displayedTestimonials={displayedTestimonials}
      />
    </>
  );
};

export default CourseSlider;

const Slider = ({
  prevTestimonial,
  nextTestimonial,
  loading,
  direction,
  displayedTestimonials,
}) => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              সেরা কোর্স সমূহ
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              আমাদের সেরা কিছু কোর্স যেগুলো আপনাদের দক্ষ করতে যথেষ্ট সাহায্য
              করবে।
            </p>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <button
              onClick={prevTestimonial}
              className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded text-gray-400 hover:bg-blue-600 hover:text-white"
            >
              &#8592;
            </button>
            <button
              onClick={nextTestimonial}
              className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded text-gray-400 hover:bg-blue-600 hover:text-white"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/*  */}

        <div className="py-10 flex  border">  
          {loading ? (
            <>Loading...</>
          ) : (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-transform duration-300 transform ${
                direction === "right"
                  ? "translate-x-full opacity-0"
                  : direction === "left"
                  ? "-translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              {displayedTestimonials.map((course, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-white  px-4"
                >
                  <div className="relative">
                    <img
                      className="w-full h-64 object-cover rounded-t-lg"
                      src={course.image}
                      alt={course.title}
                    />
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-semibold rounded-full">
                      {course.category}
                    </div>
                  </div>
                  <div className="bg-white p-6 mt-4 rounded-lg shadow-lg">
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
                        <p className="text-sm text-gray-500">
                          Discounted Price
                        </p>
                      </div>
                    </div>
                    <Link to={`/course/${course.courseId}`}>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-4">
                      Enroll Now
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/*  */}
      </div>
    </section>
  );
};
