/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown";

const CourseSylabus = ({ course }) => {
  console.log(course.sylebus);

  return (
    <div>
      <div className="container mx-auto mt-  lg:mt-10 max-w-screen-xl px-6 md:px-12 mb-10">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <h2 className="text-2xl mb-2 text-black font-bold">কোর্স সিলেবাস</h2>
        </div>
        {Object.entries(course.sylebus).map(([moduleTitle, topics], index) => (
            <Dropdown
              key={index}
              heading={moduleTitle}
              description={
                <div>
                  {topics.map((topic, topicIndex) => (
                    <div key={topicIndex}>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                        {topic}
                      </p>                    
                      {topicIndex !== topics.length - 1 && <hr />}
                    </div>
                  ))}
                </div>
              }
            />
          ))}
      </div>
    </div>
  );
};

export default CourseSylabus;
