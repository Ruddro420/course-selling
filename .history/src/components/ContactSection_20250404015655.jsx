
import toast from "react-hot-toast";


const ContactSection = () => {



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
    <div className='course-container'>
      <section className=" sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              যোগাযোগ
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              প্রশ্ন বা সহায়তার প্রয়োজন হলে আমাদের সঙ্গে সহজেই যোগাযোগ করতে পারেন। আমাদের সাপোর্ট টিম সর্বদা প্রস্তুত আপনাকে সহায়তা করতে।
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="mt-6 overflow-hidden course-container p-10 rounded call-action rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-white">
                  Send us a message
                </h3>
                {/* Contact Form------------------------------ */}
                <form action={"https://formspree.io/f/manepjqb"} onSubmit={onSubmit} className="mt-14" method="POST">
                  <input
                    type="hidden"
                    name="subject"
                    value="A new contact has recived from brittoLearning.com"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-white"
                      >
                        আপনার নাম
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
                        className="text-base font-medium text-white"
                      >
                        আপনার ইমেইল
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
                        className="text-base font-medium text-white"
                      >
                        আপনার ফোন নাম্বার
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
                        className="text-base font-medium text-white"
                      >
                        কম্পানির নাম
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
                        className="text-base font-medium text-white"
                      >
                        আপনার ম্যাসেজ

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
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#0aa4bf] border border-transparent rounded-md focus:outline-none hover:bg-[#0aa4bf] focus:bg-blue-700 cursor-pointer"
                      >
                       মেসেজ পাঠান
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
