// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Bn from "../EnToBn/Bn";
import { DataContext } from "../../context/DataContext";
const Slider = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  // load context
  const { getCourseApiData } = useContext(DataContext);
  return (
    <>
      {!loading ? (
        <>
          <div>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={3} // Default view
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
              autoplay={{ delay: 2500 }}
              breakpoints={{
                320: { slidesPerView: 1 }, // Mobile (Small screens)
                768: { slidesPerView: 2 }, // Tablets
                1024: { slidesPerView: 3 }, // Desktops
              }}
            >
              {getCourseApiData.data?.map((course, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full flex-shrink-0 bg-white  shadow-lg rounded-lg">
                    <div className="relative shadow-lg">
                      <img
                        className="w-full h-64 object-cover rounded-t-lg"
                        src={course.banner}
                        alt={course.course_name}
                      />
                      <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-semibold rounded-full">
                        {course.category}
                      </div>
                    </div>
                    <div className="bg-white p-6 mt-4 rounded-b-lg ">
                      <h1 className="text-2xl font-bold text-gray-800 text-center">
                        {course.course_name}
                      </h1>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        {course.short_bio}
                      </p>
                      <div className="flex justify-between items-center mt-6">
                        <div>
                          <p className="text-2xl font-bold text-gray-800">
                            <Bn content={course.course_price} />
                          </p>
                          <p className="text-sm text-gray-500">
                            Original Price
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600">
                            <Bn content={course.discount_price} />
                          </p>
                          <p className="text-sm text-gray-500">
                            Discounted Price
                          </p>
                        </div>
                      </div>
                      <Link
                        to={`/course/${course.id}`}
                        className="p-0 cursor-pointer"
                      >
                        <button className="w-full cursor-pointer bg-[#0BA3C4] hover:text-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 mt-4">
                          Enroll Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Slider;
