import { useState } from "react";

const courses = [
    {
        id: 1,
        title: "Lead Generation Mastery",
        subtitle: "FROM BASICS TO BRILLIANCE",
        category: "Marketing",
        originalPrice: "499.00",
        discountedPrice: "0.00",
        image: "../../img/lead-generation.jpg",
    },
    {
        id: 2,
        title: "SEO Masterclass",
        subtitle: "RANK HIGHER ON GOOGLE",
        category: "Marketing",
        originalPrice: "599.00",
        discountedPrice: "99.00",
        image: "../../img/seo-course.jpg",
    },
    {
        id: 3,
        title: "Social Media Marketing",
        subtitle: "GROW YOUR AUDIENCE",
        category: "Marketing",
        originalPrice: "699.00",
        discountedPrice: "199.00",
        image: "../../img/social-media.jpg",
    },
    {
        id: 3,
        title: "Social Media Marketing",
        subtitle: "GROW YOUR AUDIENCE",
        category: "Marketing",
        originalPrice: "699.00",
        discountedPrice: "199.00",
        image: "../../img/social-media.jpg",
    },
];

const CourseSection = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            সেরা কোর্স সমূহ
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-16">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="relative">
                                <img className="object-cover w-full h-64" src={course.image} alt={course.title} />
                                <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-semibold rounded-full">
                                    {course.category}
                                </div>
                            </div>
                            <div className="text-center mb-6 mt-4">
                                <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
                                <p className="text-sm text-gray-500 mt-2">{course.subtitle}</p>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">{course.originalPrice}</p>
                                    <p className="text-sm text-gray-500">Original Price</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-green-600">{course.discountedPrice}</p>
                                    <p className="text-sm text-gray-500">Discounted Price</p>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
