import React from 'react';

const CourseContent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">COURSE CONTENT</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Course Overview</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Modules</li>
          <li>Getting Started (React)</li>
          <li>Full Stack Web Development</li>
          <li>Setting Up the Environment (React-Redux)</li>
          <li>Version Control with Git (React-Redux)</li>
          <li>ESG Refresher</li>
          <li>Diving Into React Native</li>
          <li>Redux with React Native</li>
          <li>Icons and Navigation</li>
          <li>Using Native Features of Device</li>
          <li>REST API and Authentication</li>
          <li>Finishing It Up</li>
        </ul>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">CHAPTER GENERAL 12 OF 79</h3>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">01. What is Full Stack Web Development</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Full Stack Web Development</li>
          <ul className="list-disc list-inside pl-5">
            <li>Front End / Client-side</li>
            <li>Back End / Server-side</li>
          </ul>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">TOPIC Description</h2>
        <p className="mb-2">1. What is Full Stack Web Development</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">&lt; canvas office &gt;</p>
          <ul className="list-disc list-inside pl-5">
            <li>work on your site</li>
            <li>record there &gt;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;