/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown";

const CourseSylabus = ({ course }) => {
  // Split description into checkpoints
  const checkpoints = course?.course_des?.split(",") || [];

  // Convert YouTube watch link to embed if needed
  let videoUrl = course?.intro_video;
  if (videoUrl?.includes("watch?v=")) {
    videoUrl = videoUrl.replace("watch?v=", "embed/");
  }

  return (
    <div>
      <div className="container mx-auto lg:mt-10 max-w-screen-xl px-6 md:px-12 mb-10">
        <div className="mb-4">
          <h2 className="text-2xl mb-2 text-black font-bold">কোর্স বিস্তারিত</h2>
        </div>

        {/* Checkpoints Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {checkpoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✔️</span>
              <p className="text-gray-700 text-sm">{point.trim()}</p>
            </div>
          ))}
        </div>

        {/* Intro Video Section */}
        {videoUrl && (
          <div className="w-full mt-4">
            <h3 className="text-xl font-semibold mb-2">ইন্ট্রো ভিডিও</h3>
            <div className="w-full h-64 md:h-96">
              <iframe
                src={videoUrl}
                title="Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSylabus;
