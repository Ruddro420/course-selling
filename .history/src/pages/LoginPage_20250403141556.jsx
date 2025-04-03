import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import { DataContext } from "../context/DataContext";
import toast from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();  // For navigation after login
    const location = useLocation();  // To get the previous location (if any)

    const [getNum, setGetNum] = useState('');
    const { loginData, otp,userLoginCheck } = useContext(DataContext);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Track the page the user was on before being redirected to the login page
    const from = location.state?.from?.pathname || "/"; // If no previous location, default to "/"
    const userPhone = localStorage.getItem("signUp");

    // Redirect to home if already logged in
    useEffect(() => {
        if (userPhone) {
            // toast.success('Already Login!')
            navigate('/');
        }
    }, [userPhone, navigate]);

    const signUp = (e) => {
        e.preventDefault();
        const number = e.target.number.value;
        // Validate phone number for Bangladesh
        const phoneRegex = /^01[3-9]\d{8}$/;
        if (!phoneRegex.test(number)) {
            toast.error("Please enter a valid Bangladeshi phone number.");
            return;
        } else {
            loginData(number);
            setGetNum(number);
            toast.success("OTP Sent To Your Phone Number");
            document.getElementById('number').value = '';
        }
    };

    // submit otp
    const submitOTP = (e) => {
        console.log(getNum);

        e.preventDefault();
        const otpNumber = e.target.otp_number.value;
        if (otpNumber == otp) {
            axios.post(`${BASE_URL}/user`, {
                number: getNum
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            toast.success('Register Successfully');
            localStorage.setItem("signUp", JSON.stringify(getNum));
            userLoginCheck()
            // After successful login, redirect to the previous page or home page
            navigate(from, { replace: true });
        } else {
            toast.error('Wrong OTP');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                <div>
                    <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
                        <div className="p-4 md:p-5">
                            {
                                otp ?
                                    <form className="space-y-4" onSubmit={submitOTP}>
                                        <div>
                                            <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 ">Submit OTP</label>
                                            <input
                                                type="number"
                                                name="otp_number"
                                                id="otp_number"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="OTP"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full cursor-pointer text-white bg-[#12C1DF] hover:bg-[#FCD34D] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
                                        >
                                            Submit OTP
                                        </button>
                                    </form>
                                    :
                                    <form className="space-y-4" onSubmit={signUp}>
                                        <div>
                                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 ">Your Phone Number</label>
                                            <input
                                                type="number"
                                                name="number"
                                                id="number"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="01755 XXXXXX"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full cursor-pointer text-white bg-[#12C1DF] hover:bg-[#FCD34D] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
                                        >
                                            Register to your account
                                        </button>
                                    </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
