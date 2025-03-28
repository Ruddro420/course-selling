import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="bg-[#FCF8F1] bg-opacity-30">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <img className="w-auto h-8" src="../../img/logo.png" alt="" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            {/*    <!-- Menu open: "hidden", Menu closed: "block" --> */}
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                            </svg>

                            {/*  <!-- Menu open: "block", Menu closed: "hidden" --> */}
                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-bold"> হোম </a>

                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-bold"> আমাদের সম্পর্কে </a>

                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-bold"> কোর্স সমূহ </a>

                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-bold"> যোগাযোগ </a>
                        </div>

                        <Link to='/login' href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> লগইন করুন </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;