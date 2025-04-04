
const CallToAction = () => {
    return (
        <div className=''>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl course-container p-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="flex items-center justify-center">
                            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" alt="" />
                            </div>

                            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg" alt="" />
                            </div>

                            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg" alt="" />
                            </div>
                        </div>

                        <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl"> আজই যোগ দিন <span className="border-b-8 border-yellow-300">বৃত্ত লার্নিং-এ</span> </h2>
                        <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">আমাদের আধুনিক কোর্সগুলোর মাধ্যমে আপনি অর্জন করতে পারেন বিশ্বমানের দক্ষতা, যা আপনাকে পেশাগত জীবনে সফলতার দিকে এগিয়ে নিয়ে যাবে।</p>

                        <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#0AA4BF] border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700" role="button">
                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            এখনই সাইন আপ করুন
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CallToAction;