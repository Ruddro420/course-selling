import { useState } from "react";

const CourseSection = () => {
    const courses = [
        {
            title: "Lead Generation Mastery",
            subtitle: "FROM BASICS TO BRILLIANCE",
            category: "Marketing",
            originalPrice: "499.00",
            discountedPrice: "0.00",
            image: "../../img/lead-generation.jpg"
        },
        {
            title: "SEO Mastery",
            subtitle: "RANKING MADE EASY",
            category: "SEO",
            originalPrice: "599.00",
            discountedPrice: "99.00",
            image: "../../img/lead-generation.jpg"
        },
        {
            title: "Facebook Ads Pro",
            subtitle: "BOOST YOUR BUSINESS",
            category: "Advertising",
            originalPrice: "799.00",
            discountedPrice: "199.00",
            image: "../../img/lead-generation.jpg"
        },
        {
            title: "Facebook Ads Pro",
            subtitle: "BOOST YOUR BUSINESS",
            category: "Advertising",
            originalPrice: "799.00",
            discountedPrice: "199.00",
            image: "../../img/lead-generation.jpg"
        },
        {
            title: "Facebook Ads Pro",
            subtitle: "BOOST YOUR BUSINESS",
            category: "Advertising",
            originalPrice: "799.00",
            discountedPrice: "199.00",
            image: "../../img/lead-generation.jpg"
        },
    ];

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
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">সেরা কোর্স সমূহ</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                            আমাদের সেরা কিছু কোর্স যেগুলো আপনাদের দক্ষ করতে যথেষ্ট সাহায্য করবে।
                        </p>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        <button onClick={prevSlide} className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded text-gray-400 hover:bg-blue-600 hover:text-white">
                            &#8592;
                        </button>
                        <button onClick={nextSlide} className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded text-gray-400 hover:bg-blue-600 hover:text-white">
                            &#8594;
                        </button>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden mt-8 lg:mt-16">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {courses.map((course, index) => (
                            <div key={index} className="w-full flex-shrink-0 lg:w-1/3 px-4">
                                <div className="relative">
                                    <img className="w-full h-64 object-cover rounded-lg" src={course.image} alt={course.title} />
                                    <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-semibold rounded-full">{course.category}</div>
                                </div>
                                <div className="bg-white p-6 mt-4 rounded-lg shadow-lg">
                                    <h1 className="text-2xl font-bold text-gray-800 text-center">{course.title}</h1>
                                    <p className="text-sm text-gray-500 mt-2 text-center">{course.subtitle}</p>
                                    <div className="flex justify-between items-center mt-6">
                                        <div>
                                            <p className="text-2xl font-bold text-gray-800">{course.originalPrice}</p>
                                            <p className="text-sm text-gray-500">Original Price</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-green-600">{course.discountedPrice}</p>
                                            <p className="text-sm text-gray-500">Discounted Price</p>
                                        </div>
                                    </div>
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-4">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
