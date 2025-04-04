import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import testimonials from "../../public/data/testimonials.json";
const Testimonial = () => {

    return (
        <div className='footer-container'>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">বৃত্ত লানিং সম্পর্কে মতামত</h2>
                        <p className="max-w-lg mx-auto mt-4 leading-relaxed text-2xl ">ছাত্র ছাত্রীরা তাদের কাজ শেখার এক্সপেরিয়েন্স শেয়ার করেছে এগুলো !</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
                        {testimonials?.map((testimonial, index) => (

                            <div key={index} className="overflow-hidden block-bg rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src={testimonial.image} alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">{testimonial.name}</p>
                                            <p className="text-sm text-gray-600 truncate">{testimonial.username}</p>
                                        </div>
                                        <Link to={testimonial.link} title="" className="inline-block text-sky-500">
                                            {/* <FaTwitter size={20} /> */}
                                            <FaLink size={20} />

                                        </Link>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            {testimonial.message}
                                            <span className="block text-sky-500">#{testimonial.category}</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Testimonial;