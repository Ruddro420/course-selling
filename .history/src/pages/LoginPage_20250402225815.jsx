import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import toast from "react-hot-toast";

const LoginPage = () => {
    // const navigate = useNavigate()
    const [getNum, setGetNum] = useState('')
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
                   
                >
                    <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                        Sign up to Britto Learning
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
