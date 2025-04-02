import axios from "axios";
import { useEffect, useState } from "react";
import CourseSection from "../components/CourseSection";
import Loader from "../components/Loader/Loader";
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch testimonials data
    axios
      .get("/public/data/Courses.json")
      .then((response) => {
        setCourses(response.data);
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
  return (
    <div>
      <section className=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 flex">  
          {loading ? (
            <><Loader/></>
          ) : (
            <CourseSection courses={courses}/>
          )}
        </div>
        </div>
      </section>
    </div>
  );
};

export default AllCourses;
