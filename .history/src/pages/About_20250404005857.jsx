
import foundationData from "../../public/data/foundationData.json"

const About = () => {
  return (
    <div>
      <section className=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="">
          {/* ----------- */}

          <section className="py-20 about-container sm:py-16 lg:py-24">
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
