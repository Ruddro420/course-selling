import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div>
      <section className="py-10 bg-white sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
              <Link to={"/"}>
                <img
                  className="w-auto h-9"
                  src="/public/img/logo-black.png"
                  alt=""
                />
              </Link>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                অনলাইন, লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।
              </p>

              <a
                href="https://wa.me/+8801709533356"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white hover:text-black transition-all duration-200 bg-[#0BA3C4] rounded-md hover:bg-[#FCD34D] focus:bg-[#FCD34D] mt-7"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Start Live Chat
              </a>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-gray-900">Company</p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Works{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Career{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-gray-900">Help</p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-gray-900">Resources</p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Free eBooks{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Development Tutorial{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    How to - Blog{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    YouTube Playlist{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-gray-900">
                Extra Links
              </p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#0BA3C4] focus:text-[#0BA3C4]"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              © Copyright 2025, All Rights Reserved by Britto Learning
            </p>

            <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
              <li>
                <a
                  href="https://www.facebook.com/brittolearning"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#0BA3C4] hover:text-white focus:text-white hover:bg-[#0BA3C4] hover:border-[#0BA3C4] focus:border-[#0BA3C4]"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/brittolearning/"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#0BA3C4] hover:text-white focus:text-white hover:bg-[#0BA3C4] hover:border-[#0BA3C4] focus:border-[#0BA3C4]"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/brittolearning"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#0BA3C4] hover:text-white focus:text-white hover:bg-[#0BA3C4] hover:border-[#0BA3C4] focus:border-[#0BA3C4]"
                >
                  <FaLinkedinIn />

                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@brittolearning"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#0BA3C4] hover:text-white focus:text-white hover:bg-[#0BA3C4] hover:border-[#0BA3C4] focus:border-[#0BA3C4]"
                >
                  <FaYoutube />

                </a>
              </li>

              <li>
                <a href="https://www.tiktok.com/@brittolearningbd"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#0BA3C4] hover:text-white focus:text-white hover:bg-[#0BA3C4] hover:border-[#0BA3C4] focus:border-[#0BA3C4]"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/brittolearning/"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#0BA3C4] hover:text-white focus:text-white hover:bg-[#0BA3C4] hover:border-[#0BA3C4] focus:border-[#0BA3C4]"
                >
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@brittolearning"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#0BA3C4] hover:text-white focus:text-white hover:bg-[#0BA3C4] hover:border-[#0BA3C4] focus:border-[#0BA3C4]"
                >
                  <FaMediumM />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFooter;
