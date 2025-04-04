import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className="footer-container">
      <section className="py-10 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
              <Link to={"/"}>
                <img
                  className="w-auto h-9"
                  src="/public/img/logo.png"
                  alt=""
                />
              </Link>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                অনলাইন, লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।
              </p>

              <a
                href="https://wa.me/+8801709533356"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white hover:text-black transition-all duration-200 bg-[#0CC0DF] rounded-md hover:bg-[#FCD34D] focus:bg-[#FCD34D] mt-7"
              >          
                <FaWhatsapp className="w-6 h-6 me-2" />
                Text Us Here
              </a>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-gray-900">Company</p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    হোম
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    আমাদের সম্পর্কে
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    কোর্স সমূহ
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    যোগাযোগ
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
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
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
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Free eBooks{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Development Tutorial{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    How to - Blog{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
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
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#1CC4DF] focus:text-[#1CC4DF]"
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
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#1CC4DF] hover:text-white focus:text-white hover:bg-[#1CC4DF] hover:border-[#1CC4DF] focus:border-[#1CC4DF]"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/brittolearning/"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#1CC4DF] hover:text-white focus:text-white hover:bg-[#1CC4DF] hover:border-[#1CC4DF] focus:border-[#1CC4DF]"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/brittolearning"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#1CC4DF] hover:text-white focus:text-white hover:bg-[#1CC4DF] hover:border-[#1CC4DF] focus:border-[#1CC4DF]"
                >
                  <FaLinkedinIn />

                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@brittolearning"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#1CC4DF] hover:text-white focus:text-white hover:bg-[#1CC4DF] hover:border-[#1CC4DF] focus:border-[#1CC4DF]"
                >
                  <FaYoutube />

                </a>
              </li>

              <li>
                <a href="https://www.tiktok.com/@brittolearningbd"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#1CC4DF] hover:text-white focus:text-white hover:bg-[#1CC4DF] hover:border-[#1CC4DF] focus:border-[#1CC4DF]"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/brittolearning/"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#1CC4DF] hover:text-white focus:text-white hover:bg-[#1CC4DF] hover:border-[#1CC4DF] focus:border-[#1CC4DF]"
                >
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@brittolearning"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#1CC4DF] hover:text-white focus:text-white hover:bg-[#1CC4DF] hover:border-[#1CC4DF] focus:border-[#1CC4DF]"
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
