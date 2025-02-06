/* eslint-disable react/prop-types */


const Dropdown = ({ heading, description }) => {

    return (
      <>
     <div className="p-0 border sylebus mt-4">
          <details className="group">
            <summary className="flex bg-[#0BA3C4] dark:text-white p-4 cursor-pointer list-none items-center justify-between font-medium border-amber-50">
              <span>{heading}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 px-4 pb-4 dark:text-white text-neutral-600">
              {description}
            </p>
          </details>
        </div>
  
       
      </>
    );
  };
  
  export default Dropdown;