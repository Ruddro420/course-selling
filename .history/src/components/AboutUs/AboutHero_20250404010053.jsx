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
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                বৃত্ত লার্নিং একটি অনলাইন কোর্স প্ল্যাটফর্ম, যেখানে আমরা
                                মানুষকে দক্ষ করে গড়ে তোলার লক্ষ্যে কাজ করি। আমাদের বিশ্বাস,
                                সঠিক জ্ঞান এবং দক্ষতা অর্জনের মাধ্যমে যে কেউ নিজের জীবনে বড়
                                পরিবর্তন আনতে পারে। বৃত্ত লার্নিং শিক্ষার্থীদের জন্য এমন
                                একটি পরিবেশ তৈরি করেছে, যেখানে আধুনিক প্রযুক্তি এবং শিল্পের
                                চাহিদা অনুযায়ী দক্ষতা অর্জন করা সহজ এবং কার্যকর। আমাদের
                                প্ল্যাটফর্মে আপনি পাবেন ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন,
                                এবং ডিজিটাল মার্কেটিংসহ আরও অনেক প্রাসঙ্গিক কোর্স। <br />
                            </p>
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