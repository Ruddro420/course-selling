/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown";

const CourseSylabus = ({ course }) => {
  // Split the course description into an array using commas
  const checkpoints = course?.course_des?.split(",") || [];

  return (
    <div>
      <div className="container mx-auto lg:mt-10 max-w-screen-xl px-6 md:px-12 mb-10">
        <div className="mb-6">
          <h2 className="text-2xl mb-2 text-black font-bold">কোর্স বিস্তারিত</h2>
        </div>

        {/* Checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {checkpoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✔️</span>
              <p className="text-gray-700">{point.trim()}</p>
            </div>
          ))}
        </div>

        {/* Intro Video */}
        {course?.intro_video && (
          <div className="w-full mt-6">
            <h3 className="text-xl font-semibold mb-2">ইন্ট্রো ভিডিও</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={course.intro_video}
                title="Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-96 rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSylabus;
