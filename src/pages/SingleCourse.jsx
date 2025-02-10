import axios from "axios";
import CourseHero from "../components/courseComponent/CourseHero";
import CourseSylabus from "../components/courseComponent/CourseSylabus";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  
  useEffect(() => {
    // Fetch courses data
    axios
      .get("/public/data/Courses.json")
      .then((response) => {
        const courses = response.data;
        const selectedCourse = courses.find(course => course.courseId === courseId);
        setCourse(selectedCourse || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        setLoading(false);
      });
  }, [courseId]);

  
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          <CourseHero course={course}/>
          <CourseSylabus course={course}/>
        </div>
      )}
    </>
  );
};

export default SingleCourse;
