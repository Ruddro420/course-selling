import { IoBookOutline } from "react-icons/io5";

const CourseHero = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 py-20 course-hero-section  h-80 flex items-center justify-between mx-auto p-4 ">
        <div className="container mx-auto mt-10 max-w-screen-xl md:px-12">
          <div className="flex flex-col course-hero md:flex-row md:gap-12">

            <div className="md:w-1/2 lg:w-2/3 pt-20 px-6 flex-grow hero-cards">
              <h1 className=" md:text-4xl text-xl text-white font-bold mb-6">
                HSC 25 অনলাইন ব্যাচ - ICT 2.0
              </h1>
              <p className="text-md md:text-xl lg:text-xl text-gray-400 mb-8">
                অন্যান্য বিষয়ের দক্ষতা থাকলেও, তথ্য ও যোগাযোগ প্রযুক্তি বা
                আইসিটি বিষয়ের টপিক অনেকেরই বুঝতে সমস্যা হয়। সারাবছর অন্যান্য
                বিষয়গুলোতে সময় দেওয়া হলেও, আইসিটি বিষয়ে দেখা যায় সবার উদাসীনতা।
                ফলস্বরুপ, এইচএসসিতে এ+ মিস করে অনেকে! এইচএসসি ২০২৫ ব্যাচের
                শিক্ষার্থীদের আইসিটি বিষয়ে এ+ নিশ্চিত করতে টেন মিনিট স্কুল নিয়ে
                এসেছে “HSC 25 অনলাইন ব্যাচ - ICT” কোর্স। লাইভ ক্লাস, লেকচার শিট,
                ডেইলি ও উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট এবং অভিজ্ঞ
              </p>
            </div>

            <div className="md:w-1/2 lg:w-1/3 z-40  pt-20  md:mt-12  flex-shrink-0 hero-cards hero-cards2">
              <div className="max-w-md pb-4  bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700  shadow-lg main-card">
                <a href="#">
                  <iframe
                    className="w-full card-vedio"
                    src="https://www.youtube.com/embed/IjlYXtI2-GU?si=gBJ8wmkM5Jta3u4m"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </a>
                {/* Fee-container */}
                <div className="suggestion-pricing dark:text-white">
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <span className="text-4xl font-semibold text-slate-900 tracking-tighter">
                          ৳1500
                        </span>
                      </h5>
                    </a>
                    <p className="mb-3 font-normal dark:text-white text-gray-700">
                      HSC 25 ICT 2.0 (সম্পূর্ণ সিলেবাস) lorem200
                    </p>
                    <button className="bg-green-600 whitespace-nowrap text-center md:w-full w-full rounded py-2 lg:py-2 text-white ">
                      কোর্সটি কিনুন
                    </button>
                  </div>

                  <div className="">
                    <h3 className="text-lg  font-bold text-slate-900 tracking-wide uppercase px-6 py-2">
                      এই কোর্সে যা থাকছে
                    </h3>
                    <li className="flex space-x-3 items-center px-6">
                      <IoBookOutline className="flex-shrink-0  h-5 w-5 text-green-400" />
                      <span className="text-base text-slate-700">১টি বিষয়</span>
                    </li>
                    <li className="flex space-x-3 items-center px-6">
                      <IoBookOutline className="flex-shrink-0  h-5 w-5 text-green-400" />
                      <span className="text-base text-slate-700">
                        প্রতি সপ্তাহে ১টি লাইভ ক্লাস
                      </span>
                    </li>
                    <li className="flex space-x-3 items-center px-6">
                      <IoBookOutline className="flex-shrink-0  h-5 w-5 text-green-400" />
                      <span className="text-base text-slate-700">
                        ডেইলি ও উইকলি এক্সাম
                      </span>
                    </li>
                    <li className="flex space-x-3 items-center px-6">
                      <IoBookOutline className="flex-shrink-0  h-5 w-5 text-green-400" />
                      <span className="text-base text-slate-700">
                        অধ্যায়ভিত্তিক লেকচার শিট
                      </span>
                    </li>
                    <li className="flex space-x-3 items-center px-6">
                      <IoBookOutline className="flex-shrink-0  h-5 w-5 text-green-400" />
                      <span className="text-base text-slate-700">
                        মডেল টেস্ট
                      </span>
                    </li>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
