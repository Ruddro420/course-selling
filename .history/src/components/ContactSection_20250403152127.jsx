import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SectionLoader from "./Loader/SectionLoader";

const ContactSection = () => {
  /* Fetch Course Data---------------------------------- */

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch testimonials data
    axios
      .get("/public/data/Courses.json")
      .then((response) => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching Course Data",
          toast.error("Failed to fetch Course Data"),
          error
        );
        // setLoading(false);
      });
  }, []);

  /* -------------------------------------------------- */

  /* Web3 Form Intigration-------------------------- */

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "daef106c-03a2-4829-80cd-8fcc2727a97f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    await toast.promise(
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json()),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Try again!",
      }
    );
  };

  return (
    <div>
      <section className=" bg-[#FCF8F1] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            যোগাযোগ
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            প্রশ্ন বা সহায়তার প্রয়োজন হলে আমাদের সঙ্গে সহজেই যোগাযোগ করতে পারেন। আমাদের সাপোর্ট টিম সর্বদা প্রস্তুত আপনাকে সহায়তা করতে।
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    01709533356
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    01828308123
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    support@brittolearning.com
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    info@brittolearning.com
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                    মিরপুর , ঢাকা, বাংলাদেশ
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>
                {/* Contact Form------------------------------ */}
                <SectionLoader
                  loading={loading}
                  section={
                    <form onSubmit={onSubmit} className="mt-14">
                      <input
                        type="hidden"
                        name="subject"
                        value="A new contact has recived from brittoLearning.com"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Your name{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter your full name"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Email address{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter your full name"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Phone number{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              placeholder="Enter your full name"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="course"
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Company name{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <select
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                              name="course"
                              id="course"
                            >
                              <option value="">Select Targated Course</option>
                              
                                
                                {/* {courses?.map((course, index) => (
                                  <option key={index} value={course.title}>
                                    {course.title}
                                  </option>
                                ))} */}
                             
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="message"
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Message{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Enter Your Messege"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
