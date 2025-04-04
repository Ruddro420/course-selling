/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown";

const CourseSylabus = ({ course }) => {
  // for course info seperate course_des into , and show it into checkpoints per row two colums and show intro_video in another row 


  return (
    <div>
      <div className="container mx-auto lg:mt-10 max-w-screen-xl px-6 md:px-12 mb-10">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <h2 className="text-2xl mb-2 text-black font-bold">কোর্স বিস্তারিত</h2>
        </div>
       
    </div>
    </div>
  );
};

export default CourseSylabus;
