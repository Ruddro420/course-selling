import axios from "axios";
import CourseHero from "../components/courseComponent/CourseHero";
import CourseSylabus from "../components/courseComponent/CourseSylabus";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Loader from "../components/Loader/Loader";
import toast from "react-hot-toast";

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
    toast.success('Already Purchases This Course');
    return <Navigate to="/account" />;
  }


  return (
    <>
      <section className='footer-container'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="">
            <CourseHero course={course} />
            <CourseSylabus course={course} loading={loading}/>
          </div>
        )}
      </section>
    </>
  );
};

export default SingleCourse;
