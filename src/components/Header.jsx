
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Header = () => {
  // get local storage data
  // load context
  const { user } = useContext(DataContext);

  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuContent = [
    {
      title: "হোম",
      link: "/",
    },
    {
      title: "আমাদের সম্পর্কে",
      link: "/about-us",
    },
    {
      title: "কোর্স সমূহ",
      link: "/all-courses",
    },
    {
      title: "যোগাযোগ",
      link: "/contact",
    },
  ];

  return (
    <div>
      <nav className=" fixed w-full z-[999] top-0 start-0 px-2 lg:px-0">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-6 mx-5 lg:px-8 py-4 nav-container">
          <Link to={"/"} title="" className="flex">
            <img
              className="lg:h-10 md:h-8 h-6"
              src="../../img/logo.png"
              alt="Britto_Learning"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <button
                type="button"
                className="text-white hover:text-black bg-[#0CC0DF] hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 lg:px-4 lg:py-2 text-center dark:bg-[#0CC0DF] dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
              >
                <Link to={"/account"}>Dashboard</Link>
              </button>
            ) : (
              <button
                type="button"
                className="text-white hover:text-black bg-[#0CC0DF] hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 lg:px-4 lg:py-2 text-center dark:bg-[#0CC0DF] dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
              >
                <Link to={"/login"}>লগইন করুন</Link>
              </button>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 gap-3 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              {menuContent.map((menu, index) => (
                <li key={index}>
                  <Link
                    to={menu.link}
                    className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-bold"
                    aria-current="page"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
