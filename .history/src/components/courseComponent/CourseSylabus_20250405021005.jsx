/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const CourseSylabus = ({ course }) => {
  const [loading, setLoading] = useState(true);
  const [checkpoints, setCheckpoints] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (course) {
      // Simulate loading delay (optional, remove in production)
      const timer = setTimeout(() => {
        // Split description into checkpoints
        const points = course?.course_des?.split(",") || [];
        setCheckpoints(points);

        // Convert YouTube watch link to embed if needed
        let video = course?.intro_video;
        if (video?.includes("watch?v=")) {
          video = video.replace("watch?v=", "embed/");
        }
        setVideoUrl(video);

        setLoading(false);
      }, 1000); // Simulate 1s loading

      return () => clearTimeout(timer);
    }
  }, [course]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto lg:mt-10 max-w-screen-xl px-6 md:px-12 mb-10">
      <div className="mb-4">
        <h2 className="text-2xl mb-2 text-black font-bold">কোর্স বিস্তারিত</h2>
      </div>

      {/* Checkpoints Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 mb-6">
        {checkpoints.map((point, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✔️</span>
            <p className="text-gray-700 text-sm">{point.trim()}</p>
          </div>
        ))}
      </div>

      {/* Intro Video Section */}
      {videoUrl && (
        <div className="w-full mt-4">
          <h3 className="text-xl font-semibold mb-2">ইন্ট্রো ভিডিও</h3>
          <div className="w-full h-auto md:h-96 rounded">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSylabus;
