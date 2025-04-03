import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import toast from "react-hot-toast";

const Checkout = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    // const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        payment_method: "",
        bkash_no: "",
        tax_id: "",
    });

    const { getCourseApiData, fetchPurchasedCourses } = useContext(DataContext);

    useEffect(() => {
        if (getCourseApiData?.data) {
            const findCourse = getCourseApiData.data.find(item => item.id === parseInt(id));
            setData(findCourse);
        }
        const user = JSON.parse(localStorage.getItem("signUp"));
        setUser(user);
    }, [id, getCourseApiData]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/checkout`, {
                ...formData,
                course_name: data.course_name,
                course_price: data.course_price,
                banner: data.banner,
                payment_method: data.course_price == 0 ? "Free" : "Bkash",
                p_number: user
            });
            console.log(response.data);
            toast.success("Order created successfully");
            fetchPurchasedCourses();
            setTimeout(() => {
                window.location.href = '/account';
            }, [1000])
        } catch (error) {
            console.error(error);
            fetchPurchasedCourses();
            toast.error("Failed to create order");
        }
    };

    return (
        <>
            <section className="bg-white py-8 antialiased md:py-16">
                <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16 border-gray-200 shadow-lg rounded py-16 p-8">
                        <div className="min-w-0 flex-1 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900"> Your name </label>
                                        <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Bonnie Green" name="name" value={formData.name} onChange={handleInputChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900"> Your Address </label>
                                        <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Mirpur Dhaka" name="address" value={formData.address} onChange={handleInputChange} required />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900 ">Payment</h3>


                                <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                                    {
                                        data?.course_price == 0 ? <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600" checked />
                                                </div>

                                                <div className="ms-4 text-sm">
                                                    <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 "> Free</label>
                                                    <p id="credit-card-text" className="mt-1 text-xs font-normal text-gray-500 ">Free Course</p>
                                                </div>
                                            </div>
                                        </div> : <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600" checked />
                                                </div>

                                                <div className="ms-4 text-sm">
                                                    <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 "> Bkash</label>
                                                    <p className="mt-1 text-xs text-gray-500">Pay With Your Bkash Account</p>
                                                    <p className="mt-1 text-xs text-gray-500">1. Dial *247# on your phone.</p>
                                                    <p className="mt-1 text-xs text-gray-500">2. Send money to 01755232541.</p>
                                                    <p className="mt-1 text-xs text-gray-500">3. Add your Bkash number and transaction ID below.</p>
                                                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                                        <div className='mt-5'>
                                                            <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900"> Enter Bksh Number</label>
                                                            <input type="number" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="017555234553" name="bkash_no" value={formData.bkash_no} onChange={handleInputChange} required />
                                                        </div>
                                                        <div className='mt-5'>
                                                            <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900"> Enter Bksh TaxIN Number</label>
                                                            <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="sdSDAIW" name="tax_id" value={formData.tax_id} onChange={handleInputChange} required />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                                <div className="flex items-center">
                                    <div className="flex h-24 items-center">
                                        <img className="h-24 rounded-md border object-cover object-center" src={data?.banner} alt="" />
                                    </div>

                                    <div className="ms-4 text-sm">
                                        <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 "> {data?.course_name} </label>
                                        <p id="credit-card-text" className="mt-1 text-xs font-normal text-gray-500 ">{data?.short_bio}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flow-root">
                                <div className="-my-3 divide-y divide-gray-200 ">
                                    <dl className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-base font-bold text-gray-900 ">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 ">৳ {data?.course_price} TAKA</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#29C8E3] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 cursor-pointer">Proceed to Payment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        </>
    );
};

export default Checkout;