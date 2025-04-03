import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CourseContent() {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
    const { id } = useParams()
    const [courses, setCourses] = useState([])
    // get course
    const getCourseContent = () => {
        axios.get(`${BASE_URL}/module/getByid/${id}`)
            .then((res) => {
                setCourses(res.data);
                // setLoading(false)
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getCourseContent();
    }, [id]);

    const handleNext = () => {
        if (selectedCourseIndex < courses.length - 1) {
            setSelectedCourseIndex(selectedCourseIndex + 1);
        }
    };
    const handlePrev = () => {
        if (selectedCourseIndex > 0) {
            setSelectedCourseIndex(selectedCourseIndex - 1);
        }
    };
    const selectedCourse = courses[selectedCourseIndex];

    console.log(courses);
    



    return (
        <>
           
        </>
    );
}
