import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { DataContext } from "../context/DataContext";
import toast from "react-hot-toast";

export default function CourseContent() {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { purchasedCourses, courseLoading } = useContext(DataContext);

    // Fetch course content
    const getCourseContent = () => {
        axios.get(`${BASE_URL}/module/getByid/${id}`)
            .then((res) => {
                setCourses(res.data.data);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCourseContent();
    }, [id]);

    const [isAllowed, setIsAllowed] = useState(null);

    // Wait until purchasedCourses is ready
    useEffect(() => {
        if (courseLoading) return;

        if (purchasedCourses?.data?.length) {
            const isPurchased = purchasedCourses.data.some(item => item.course_name == id);
            setIsAllowed(isPurchased);

            if (!isPurchased) {
                toast.error('You need to purchase this course first');
            }
        } else {
            // If no data is available yet, don't redirect or show error
            console.warn("purchasedCourses.data is empty or undefined.");
        }
    }, [courseLoading, purchasedCourses, id]);

    // Show loader while deciding
    if (courseLoading || isAllowed === null) {
        return <Loader />;
    }

    // Redirect if not allowed
    if (isAllowed === false) {
        return <Navigate to="/all-courses" />;
    }

    const selectedCourse = courses[selectedCourseIndex];

    // Dynamic Progress Calculation
    const progressPercentage = Math.round(((selectedCourseIndex + 1) / courses.length) * 100);

    // Navigate to next video
    const handleNext = () => {
        if (selectedCourseIndex < courses.length - 1) {
            setSelectedCourseIndex(selectedCourseIndex + 1);
        }
    };

    // Navigate to previous video
    const handlePrev = () => {
        if (selectedCourseIndex > 0) {
            setSelectedCourseIndex(selectedCourseIndex - 1);
        }
    };

    return (
        <section className="course-container pb-20">
            {
                loading ? <Loader /> : (
                    <section className="course-container py-32 sm:py-16 lg:py-40">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="flex lg:flex-row flex-col lg:h-screen">
                                {/* Sidebar */}
                                <div className="lg:w-1/3 block-bg mb-5 p-5 overflow-auto rounded-md border-2 border-gray-200 max-h-fit">
                                    <h2 className="text-xl font-bold mb-4">Course Content</h2>
                                    <ul>
                                        {courses?.map((course, index) => (
                                            <li
                                                key={course.id}
                                                className={`p-3 mb-2 cursor-pointer flex justify-between items-center rounded border-2 border-gray-100 ${selectedCourseIndex === index ? 'bg-[#0BA3C4] text-white' : 'block-bg'
                                                    }`}
                                                onClick={() => setSelectedCourseIndex(index)}
                                            >
                                                {course.module_name}
                                                <span>{selectedCourseIndex === index ? "▼" : "▶"}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 flex flex-col px-5 space-y-4">
                                    {/* Progress Bar */}
                                    <div className="block-bg p-4 rounded-lg border-2 border-gray-200">
                                        <h3 className="font-bold mb-3">আপনার প্রোগ্রেস</h3>
                                        <div className="w-full bg-gray-200 rounded">
                                            <div
                                                className="bg-[#0BA3C4] text-xs font-medium text-blue-100 text-center p-2 leading-none rounded"
                                                style={{ width: `${progressPercentage}%` }}
                                            >
                                                {progressPercentage}%
                                            </div>
                                        </div>
                                    </div>

                                    {/* Video Section */}
                                    <h1 className="text-2xl font-semibold">{selectedCourse.module_name}</h1>
                                    <div className="video-player">
                                        <iframe
                                            src={`https://drive.google.com/file/d/${selectedCourse.module_video}/preview`}
                                            allow="autoplay; fullscreen"
                                            className="rounded-lg shadow-lg"
                                        />
                                        <img className="overlay " src="../../img/fav-icon.jpg" alt="Overlay" />
                                    </div>

                                    {/* Topic Description */}
                                    <div className="block-bg p-4 rounded-lg shadow-md">
                                        <h2 className="text-lg font-semibold">Topic Description</h2>
                                        <p className="text-gray-600">{selectedCourse.module_des}</p>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-between">
                                        <button
                                            onClick={handlePrev}
                                            disabled={selectedCourseIndex === 0}
                                            className={`px-5 py-2 rounded-md text-white cursor-pointer ${selectedCourseIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 cursor-pointer"}`}
                                        >
                                            Previous Topic
                                        </button>

                                        {selectedCourseIndex === courses.length - 1 ? (
                                            <a
                                                href='https://forms.gle/fqsY2Ft71sPej7Bs9'
                                                target='_blank'
                                                // onClick={handleFinishCourse}
                                                className="px-5 py-2 rounded-md text-white bg-[#000000] hover:bg-green-600 cursor-pointer"
                                            >
                                                Apply To Certificate
                                            </a>
                                        ) : (
                                            <button
                                                onClick={handleNext}
                                                className="px-5 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
                                            >
                                                Next Topic
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 
                )
            }
            
        </section>
    );
}
