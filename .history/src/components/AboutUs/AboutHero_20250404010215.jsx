import React from 'react';

const AboutHero = () => {
    return (
        <div>
            <section className="py-20 about-container sm:py-16 lg:py-24">
                <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                বৃত্ত লার্নিং কি?
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-justify">
                                বৃত্ত লার্নিং একটি অনলাইন কোর্স প্ল্যাটফর্ম, যেখানে আমরা মানুষকে দক্ষ করে গড়ে তোলার লক্ষ্যে কাজ করি। আমাদের বিশ্বাস, সঠিক জ্ঞান এবং দক্ষতা অর্জনের মাধ্যমে যে কেউ নিজের জীবনে বড় পরিবর্তন আনতে পারে। বৃত্ত লার্নিং শিক্ষার্থীদের জন্য এমন একটি পরিবেশ তৈরি করেছে, যেখানে আধুনিক প্রযুক্তি এবং শিল্পের চাহিদা অনুযায়ী দক্ষতা অর্জন করা সহজ এবং কার্যকর। আমাদের প্ল্যাটফর্মে আপনি পাবেন ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, এবং ডিজিটাল মার্কেটিংসহ আরও অনেক প্রাসঙ্গিক কোর্স। <br />
                                <p className="mt-6 text-lg">আমাদের কোর্সগুলো বিশেষভাবে ডিজাইন করা হয়েছে যাতে শিক্ষার্থীরা তাত্ত্বিক জ্ঞানের পাশাপাশি বাস্তব দক্ষতা অর্জন করতে পারে। অভিজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে আমরা এমন প্রশিক্ষণ দিই যা আপনাকে ক্যারিয়ারের প্রতিযোগিতায় এগিয়ে রাখবে।</p>
                            </p>
                            <a href="#" title="" className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-[#0BA3C4] border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                                <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>   সাপোর্টে কথা বলুন
                            </a>
                        </div>

                        <div className="lg:pl-12 pr-14 sm:pr-0">
                            <div className="relative max-w-4xl mb-12">
                                <img
                                    className="object-bottom rounded-md  scale-90 lg:scale-105"
                                    src="../../img/hero.png"
                                    alt=""
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutHero;