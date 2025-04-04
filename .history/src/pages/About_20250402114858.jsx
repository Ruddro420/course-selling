
import foundationData from "../../public/data/foundationData.json"

const About = () => {
  return (
    <div>
      <section className=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="">
          {/* ----------- */}

          <section className="py-20 bg-white sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
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
                      src="../../img/aboutus.jpg"
                      alt=""
                    />

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------- */}

         {/*  <section className="py-10 bg-[#FCF8F1] sm:py-16 lg:py-24 px-4  sm:px-6 lg:px-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-center">
                <h4 className="text-xl font-medium text-black">
                  Numbers tell the hard works we’ve done in last 6 years
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-white">6+</h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Years in business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-white">
                          37+
                        </h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Team members
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-white">
                          3,274
                        </h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Projects delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-white">
                          98%
                        </h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Customer success
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* -------------------- */}

        {/*   <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Questions & Answers
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-800">
                  Explore the common questions and answers about Celebration
                </p>
              </div>

              <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full">
                    <span className="text-lg font-semibold text-black">?</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold text-black">
                      How to create an account?
                    </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full">
                    <span className="text-lg font-semibold text-black">?</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold text-black">
                      How can I make payment?
                    </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full">
                    <span className="text-lg font-semibold text-black">?</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold text-black">
                      Do you provide discounts?
                    </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full">
                    <span className="text-lg font-semibold text-black">?</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold text-black">
                      How do you provide support?
                    </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-12 md:mt-20">
                <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
                  <p className="text-gray-50">
                    Didn’t find the answer you are looking for?{" "}
                    <Link to={"/contact"}
                      className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
                    >
                      Contact our support
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {/* ----------- */}

          <section className="py-10 bg-[#FCF8F1] sm:py-16 lg:py-24 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl flex justify-center mb-20 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            আমাদের মূল ভিত্তি
          </h2>
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            {foundationData.map((item) => (
              <div key={item.id}>
                <div className="flex items-center justify-center mx-auto rounded-full">
                  <img
                    className="object-cover w-28 h-auto rounded-full"
                    src={item.img}
                    />
                    
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* ----------- */}
        </div>
      </section>
    </div>
  );
};

export default About;
