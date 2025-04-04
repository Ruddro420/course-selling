
import { useContext } from "react";
import CourseSection from "../components/CourseSection";
import Loader from "../components/Loader/Loader";
import { DataContext } from "../context/DataContext";
const AllCourses = () => {
  // load context
  const { getCourseApiData, loading } = useContext(DataContext);
  return (
    <div className="course-container">
      <section className=" py-10 sm:py-16 lg:pt-44">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              কোর্স সমূহ 
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
             আমাদের কোর্স সমূহ এখানেই সব পেয়ে যাবেন, ফ্রি কোর্সগুলো করে দেখতে পারেন !
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
