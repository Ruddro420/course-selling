import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import toast from "react-hot-toast";

const LoginPage = () => {
    const navigate = useNavigate()
    const [getNum, setGetNum] = useState('')
    const [user, setUser] = useState('')
    // load context
    const { loginData, otp } = useContext(DataContext);
    const signUp = (e) => {
        e.preventDefault();
        const number = e.target.number.value;
        // Validate phone number for Bangladesh
        const phoneRegex = /^01[3-9]\d{8}$/;
        if (!phoneRegex.test(number)) {
            toast.error("Please enter a valid Bangladeshi phone number.");
            return;
        } else {
            loginData(number)
            setGetNum(number)
            toast.success("OTP Sent To Your Phone Number");
            document.getElementById('number').value = ''
        }
    };

    // submit otp
    const submitOTP = (e) => {
        e.preventDefault();
        const otpNumber = e.target.otp_number.value;
        if (otpNumber == otp) {
            toast.success('Register Successfully');
            localStorage.setItem("signUp", JSON.stringify(getNum));
            //   navigate(`/checkout/${course.id}`);
        } else {
            toast.error('Wrong OTP')

        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                <div
                    className="relative m-4 p-4 w-2/5 lg:min-w-[20%] min-w-[85%]  max-w-[30%] rounded-lg bg-white shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                        Sign up to Britto Learning
                    </div>
                    <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
                        <div className="p-4 md:p-5">
                            {
                                otp ? <form className="space-y-4" onSubmit={submitOTP}>
                                    <div>
                                        <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 ">Submit OTP</label>
                                        <input type="number" name="otp_number" id="otp_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="OTP" required />
                                    </div>
                                    <button type="submit" className="w-full cursor-pointer text-white bg-[#12C1DF] hover:bg-[#FCD34D] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center">Submit OTP</button>
                                </form> : <form className="space-y-4" onSubmit={signUp}>
                                    <div>
                                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 ">Your Phone Number</label>
                                        <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="01755 XXXXXX" required />
                                    </div>
                                    <button type="submit" className="w-full cursor-pointer text-white bg-[#12C1DF] hover:bg-[#FCD34D] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center">Register to your account</button>
                                </form>
                            }
                        </div>
                    </div>
                    {/*  <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button
                onClick={closeModal}
                className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Cancel
              </button>
            </div> */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
