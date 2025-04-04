
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
