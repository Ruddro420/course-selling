import React from 'react';

const CoursePage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Course Header */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/1200x600"
              alt="Course Image"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black opacity-60 py-6 px-8">
              <h1 className="text-4xl font-extrabold text-white">Master React Development</h1>
              <p className="text-lg text-white mt-2">A comprehensive guide to building web applications with React</p>
            </div>
          </div>

          {/* Course Info */}
          <div className="px-8 py-10">
            <div className="lg:flex justify-between space-y-8 lg:space-y-0">
              {/* Course Description */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-semibold text-gray-800">Course Description</h2>
                <p className="mt-4 text-gray-700">
                  This is a hands-on React development course that will teach you everything you need to know to build
                  modern, scalable web applications. From setting up your development environment to deploying
                  production-ready apps, you'll be guided step-by-step with practical examples and expert instruction.
                </p>
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-800">What You'll Learn</h3>
                  <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                    <li>React fundamentals: components, props, state</li>
                    <li>Working with React Hooks (useState, useEffect, useContext)</li>
                    <li>State management using Redux</li>
                    <li>Building responsive and accessible UI components</li>
                    <li>Using React Router for navigation</li>
                    <li>Deployment and hosting with platforms like Netlify and Vercel</li>
                  </ul>
                </div>
              </div>

              {/* Course Pricing and Purchase */}
              <div className="lg:w-1/3 bg-blue-50 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-800">Course Pricing</h3>
                <p className="text-3xl font-bold text-blue-600 mt-4">$49.99</p>
                <p className="text-lg text-gray-600 mt-2">One-time payment. Lifetime access!</p>
                <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Course Preview */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800">Course Preview</h3>
              <div className="mt-4 w-full h-72 bg-gray-200 rounded-md overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  title="Course Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="mt-12 flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/80"
                alt="Instructor"
                className="w-20 h-20 rounded-full object-cover shadow-lg"
              />
              <div>
                <p className="text-xl font-semibold text-gray-800">John Doe</p>
                <p className="text-gray-600">Lead Instructor</p>
                <p className="mt-2 text-gray-700">
                  John is a professional front-end developer with over 10 years of experience. He has worked on numerous
                  high-profile projects and is passionate about teaching and helping others grow in their web development careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
