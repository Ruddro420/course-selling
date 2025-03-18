import { useState } from "react";
/* import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button"; */

const courses = [
    { id: 1, title: "Full Stack Web Development", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Setting Up the Environment (React-Redux)", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, title: "Version Control with Git (React-Redux)", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "ES6 Refresher", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
];

export default function CourseContent() {
    const [selectedCourse, setSelectedCourse] = useState(courses[0]);

    return (
        <>
            <section className=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex h-screen ">
                        {/* Sidebar */}
                        <div className="w-1/4 bg-white p-5 shadow-md overflow-auto rounded-md">
                            <h2 className="text-xl font-bold mb-4">Course Content</h2>
                            <ul>
                                {courses.map((course) => (
                                    <li
                                        key={course.id}
                                        className={`p-3 mb-2 cursor-pointer flex justify-between items-center rounded-lg ${selectedCourse.id === course.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                        onClick={() => setSelectedCourse(course)}
                                    >
                                        {course.title}
                                        <span>{selectedCourse.id === course.id ? "▼" : "▶"}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 flex flex-col p-5 space-y-4">
                            {/* Progress Bar */}
                            <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
                                <span className="font-bold">Your Progress</span>
                                {/* <Progress value={20} className="w-2/3" />
          <Button variant="outline">Save Progress</Button> */}
                            </div>

                            {/* Video Section */}
                            <h1 className="text-2xl font-semibold">{selectedCourse.title}</h1>
                            <video controls className="w-full max-w-3xl rounded-lg shadow-lg">
                                <source src={selectedCourse.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Topic Description */}
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold">Topic Description</h2>
                                <p className="text-gray-600">1. {selectedCourse.title}</p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between">
                                {/* <Button variant="outline">Previous Topic</Button>
          <Button>Next Topic</Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>




    );
}
