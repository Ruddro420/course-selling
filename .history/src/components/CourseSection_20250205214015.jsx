
const CourseSection = () => {
    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">সেরা কোর্স সমূহ</h2>
                            {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="">
                                <div className="relative">
                                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                        <img className="object-cover w-full h-full" src="../../img/lead-generation.jpg" alt="" />
                                    </a>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> May 12, 2020 </span>
                                    <p className="mt-5 text-2xl font-semibold">
                                        <a href="#" title="" className="text-black"> 5 Productivity tips to write faster at morning. </a>
                                    </p>
                                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                        Continue Reading
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="">
                                <div className="relative">
                                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                        <img className="object-cover w-full h-full" src="../../img/lead-generation.jpg" alt="" />
                                    </a>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Marketing </span>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">

                                    <div className="text-center mb-6">
                                        <h1 className="text-3xl font-bold text-gray-800">Lead Generation Mastery</h1>
                                        <p className="text-sm text-gray-500 mt-2">FROM BASICS TO BRILLIANCE</p>
                                    </div>


                                    {/* <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                        <h2 className="text-xl font-semibold text-blue-800">Lead Generation Mastery</h2>
                                        <p className="text-sm text-gray-600 mt-1">By Britto Learning</p>
                                    </div> */}


                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <p className="text-2xl font-bold text-gray-800">499.00</p>
                                            <p className="text-sm text-gray-500">Original Price</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-green-600">0.00</p>
                                            <p className="text-sm text-gray-500">Discounted Price</p>
                                        </div>
                                    </div>


                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">

                            <div className="text-center mb-6">
                                <h1 className="text-3xl font-bold text-gray-800">Lead Generation Mastery</h1>
                                <p className="text-sm text-gray-500 mt-2">FROM BASICS TO BRILLIANCE</p>
                            </div>


                            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                <h2 className="text-xl font-semibold text-blue-800">Lead Generation Mastery</h2>
                                <p className="text-sm text-gray-600 mt-1">By Britto Learning</p>
                            </div>


                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">499.00</p>
                                    <p className="text-sm text-gray-500">Original Price</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-green-600">0.00</p>
                                    <p className="text-sm text-gray-500">Discounted Price</p>
                                </div>
                            </div>


                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                Enroll Now
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                        <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CourseSection;