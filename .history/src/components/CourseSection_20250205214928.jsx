import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        id: 4,
        title: "Facebook Ads Mastery",
        subtitle: "DOMINATE FACEBOOK ADS",
        category: "Marketing",
        originalPrice: "799.00",
        discountedPrice: "299.00",
        image: "../../img/facebook-ads.jpg",
    },
    {
        id: 5,
        title: "Google Ads Mastery",
        subtitle: "BOOST YOUR SALES",
        category: "Marketing",
        originalPrice: "899.00",
        discountedPrice: "399.00",
        image: "../../img/google-ads.jpg",
    }
];

const CourseSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
    };

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

                <div className="relative mt-8 lg:mt-16 overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                        {courses.map((course) => (
                            <div key={course.id} className="w-1/3 flex-shrink-0 p-4">
                                <div className="bg-white p-8 rounded-lg shadow-lg">
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
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <button onClick={prevSlide} className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition">
                        <FaChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition">
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
