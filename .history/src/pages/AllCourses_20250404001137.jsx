
import { useContext } from "react";
import CourseSection from "../components/CourseSection";
import Loader from "../components/Loader/Loader";
import { DataContext } from "../context/DataContext";
const AllCourses = () => {
  // load context
  const { getCourseApiData, loading } = useContext(DataContext);
  return (
    <div className="course-container">
      <section className=" py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              বৃত্ত লার্নিং কেনো ?
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              আমাদের কোর্স সবার থেকে আলাদা কেনো সেটি বুঝতে হলে আমাদের ফ্রি কোর্সগুলোই যথেষ্ট !
            </p>
          </div>
          <div className="py-10 flex">
            {loading ? (
              <><Loader /></>
            ) : (
              <CourseSection courses={getCourseApiData} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCourses;
