import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Account = () => {
    const { logOut, purchasedCourses, user } = useContext(DataContext)
    console.log(purchasedCourses);

    return (
        <div>
            <section className="bg-white py-8 antialiased ">
                <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900  sm:text-2xl md:mb-6">General overview</h2>
                    <div className="flex items-center justify-between p-6 bg-black text-white rounded-lg">

                        <div>
                            <h1 className="text-2xl font-semibold">Hello Developers!</h1>
                            <p className="text-sm">We are happy to see you again.</p>
                            <p className="text-sm">Your Number: {user}</p>
                            <div className="mt-4">
                                <button className="bg-white text-black py-2 px-4 rounded-md mr-2 cursor-pointer">My Courses</button>
                                <button onClick={() => logOut()} className="bg-[red] text-white py-2 px-4 rounded-md cursor-pointer">Logout</button>
                            </div>
                        </div>


                        <div className="bg-white text-black p-6 rounded-lg flex flex-col items-center">
                            <h2 className="text-xl font-semibold">11 Courses Completed</h2>
                            <p className="text-sm">15 Pending</p>
                            <div className="w-full mt-4">
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "85%" }}></div>
                                </div>
                                <p className="text-sm text-center mt-2">85%</p>
                            </div>
                        </div>
                    </div>

                    {/* Latest Order */}
                    <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4  md:p-8">
                        <h3 className="mb-4 text-xl font-semibold text-gray-900 ">Latest orders</h3>
                        {
                            purchasedCourses.data.map(item => {
                                return (
                                    <>
                                        <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4  md:pb-5">
                                            <dl className="w-1/2 sm:w-48">
                                                <dt className="text-base font-medium text-gray-500 ">Order ID:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                                                    <a href="#" className="hover:underline">{item.order_id}</a>
                                                </dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 ">Date:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 "> {new Date(item.updated_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 ">Price:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900">{item.course_price}</dd>
                                            </dl>
                                            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 ">Coure Name:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900">{item.course_name}</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 ">Status:</dt>
                                                <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ">
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                                                    </svg>
                                                    In transit
                                                </dd>
                                            </dl>

                                            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                                                <button
                                                    id="actionsMenuDropdownModal10"
                                                    data-dropdown-toggle="dropdownOrderModal10"
                                                    type="button"
                                                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 md:w-auto"
                                                >
                                                    Actions
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Account;