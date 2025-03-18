import { useState } from "react";

const courses = [
    { id: 1, title: "Full Stack Web Development", video: "1kvBzmTfENcK2-AOI9x6-vlaG5QmVxis3" },
    { id: 2, title: "Setting Up the Environment (React-Redux)", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, title: "Version Control with Git (React-Redux)", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "ES6 Refresher", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
];

export default function CourseContent() {
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
    
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

    return (
        <>
            <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex h-screen">
                        {/* Sidebar */}
                        <div className="w-1/3 bg-white p-5 overflow-auto rounded-md border-2 border-gray-200 max-h-fit">
                            <h2 className="text-xl font-bold mb-4">Course Content</h2>
                            <ul>
                                {courses.map((course, index) => (
                                    <li
                                        key={course.id}
                                        className={`p-3 mb-2 cursor-pointer flex justify-between items-center rounded border-2 border-gray-100 ${
                                            selectedCourseIndex === index ? 'bg-[#0BA3C4] text-white' : 'bg-white'
                                        }`}
                                        onClick={() => setSelectedCourseIndex(index)}
                                    >
                                        {course.title}
                                        <span>{selectedCourseIndex === index ? "▼" : "▶"}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 flex flex-col px-5 space-y-4">
                            {/* Progress Bar */}
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="font-bold mb-3">আপনার প্রোগ্রেস</h3>
                                <div className="w-full bg-gray-200 rounded">
                                    <div
                                        className="bg-[#0BA3C4] text-xs font-medium text-blue-100 text-center p-2 leading-none rounded"
                                        style={{ width: "45%" }}
                                    >
                                        45%
                                    </div>
                                </div>
                            </div>

                            {/* Video Section */}
                            <h1 className="text-2xl font-semibold">{selectedCourse.title}</h1>
                            <div className="video-player">
                                <iframe
                                    src={`https://drive.google.com/file/d/${selectedCourse.video}/preview`}
                                    width="100%"
                                    height="500"
                                    allow="autoplay"
                                    className="rounded-lg shadow-lg"
                                />
                                <img className="overlay" src="../../img/fav-icon.jpg" alt="" />
                            </div>

                            {/* Topic Description */}
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold">Topic Description</h2>
                                <p className="text-gray-600">1. {selectedCourse.title}</p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between">
                                <button
                                    onClick={handlePrev}
                                    disabled={selectedCourseIndex === 0}
                                    className={`px-5 py-2 rounded-md text-white ${
                                        selectedCourseIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                                >
                                    Previous Topic
                                </button>

                                <button
                                    onClick={handleNext}
                                    disabled={selectedCourseIndex === courses.length - 1}
                                    className={`px-5 py-2 rounded-md text-white ${
                                        selectedCourseIndex === courses.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                                >
                                    Next Topic
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
