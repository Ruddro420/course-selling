import React from 'react';

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Course Header */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/1200x500"
              alt="Course Image"
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black opacity-50 py-4 px-6">
              <h1 className="text-3xl font-bold text-white">Master React Development</h1>
              <p className="text-lg text-white mt-2">Learn React from scratch with hands-on projects!</p>
            </div>
          </div>

          {/* Course Details */}
          <div className="px-6 py-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Course Description</h2>
                <p className="mt-2 text-gray-700">
                  This comprehensive React course will guide you from beginner to advanced level with easy-to-understand
                  lessons and hands-on projects. You'll learn how to build dynamic, high-performance web applications using
                  React, Redux, and more.
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-blue-600">Price: $49.99</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Course Topics */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">What You'll Learn</h3>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Understand React fundamentals (components, props, state)</li>
                <li>Work with React Hooks like useState, useEffect, useContext</li>
                <li>Learn state management with Redux</li>
                <li>Build responsive and accessible web applications</li>
                <li>Use routing with React Router</li>
                <li>Deploy your application with Netlify or Vercel</li>
              </ul>
            </div>

            {/* Course Preview */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Preview</h3>
              <div className="mt-4 w-full h-56 bg-gray-300 rounded-md overflow-hidden">
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
            <div className="mt-8 flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Instructor"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">John Doe</p>
                <p className="text-gray-700">Lead Instructor</p>
                <p className="text-gray-700">John has 10+ years of experience in front-end development and teaching web technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
