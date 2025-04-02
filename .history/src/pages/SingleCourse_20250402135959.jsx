import axios from "axios";
import CourseHero from "../components/courseComponent/CourseHero";
import CourseSylabus from "../components/courseComponent/CourseSylabus";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch courses data
    axios.get(`${BASE_URL}/course/get`)
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
          <CourseHero course={course} />
          <CourseSylabus course={course} />
        </div>
      )}
    </>
  );
};

export default SingleCourse;
