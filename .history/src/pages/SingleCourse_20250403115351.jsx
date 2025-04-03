import axios from "axios";
import CourseHero from "../components/courseComponent/CourseHero";
import CourseSylabus from "../components/courseComponent/CourseSylabus";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const SingleCourse = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { purchasedCourses } = useContext(DataContext)

  useEffect(() => {
    // Fetch courses data
    axios.get(`${BASE_URL}/course/get`)
      .then((response) => {
        const courses = response.data.data;
        const selectedCourse = courses.find(course => course.id == courseId);
        setCourse(selectedCourse || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        setLoading(false);
      });
  }, [courseId]);

  // Check if the course is already purchased
  const isPurchased = purchasedCourses.data?.some(item => item.course_name === course.course_name);

  // If purchased, redirect to a different page (e.g., dashboard)
  if (isPurchased) {
    return <Navigate to="/account" />;
  }


  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          <CourseHero course={course} />
          {/* <CourseSylabus course={course} /> */}
        </div>
      )}
    </>
  );
};

export default SingleCourse;
