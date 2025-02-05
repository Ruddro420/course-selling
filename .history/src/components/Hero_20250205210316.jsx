
const Hero = () => {
    return (
        <div>
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="font-semibold tracking-wider text-[#0BA3C4] uppercase text-2xl">চলো নতুন কিছু করা যাক</p>
                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">স্কিল শিখে গড়ুন আপনার স্বাধীন ভবিষ্যৎ!</h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">নিজের স্কিল কে ডেভেলপ করতে এবং নিজেকে সবসময় সবার থেকে এগিয়ে রাখতে এখনই ইনরোল করে ফেলো তোমার পছন্দের কোর্সটি। </p>

                            <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-2 font-semibold  transition-all duration-200 bg-[#0BA3C4] rounded-md lg:mt-5 hover:bg-yellow-400 focus:bg-yellow-400 text-white" role="button">
                                চলুন শিখা শুরু করি
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>

                            {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
                        </div>

                        <div>
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;