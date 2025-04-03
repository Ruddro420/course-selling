/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(); // ✅ Export Context

export const DataProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const [getCourseApiData, setGetCourseApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [courseLoading, setCourseLoading] = useState(true);
    const [purchasedCourses, setPurchasedCourses] = useState([]);

    // get course
    const getCourse = () => {
        axios.get(`${BASE_URL}/course/get`)
            .then((res) => {
                setGetCourseApiData(res.data);
                setLoading(false)
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getCourse();
    }, []);

    // set localstorage data after login
    // const loginData = (data) => {

    //     const apiKey = "C8X9t0e3OB3I0r479Q2Q";
    //     const senderId = "8809617625216";
    //     const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    //     setOtp(generatedOTP);

    //     const message = `Your OTP is: ${generatedOTP}`;

    //     axios.get(`http://bulksmsbd.net/api/smsapi`, {
    //         params: {
    //             api_key: apiKey,
    //             type: "text",
    //             number: data,
    //             senderid: senderId,
    //             message: message
    //         }
    //     })
    //         .then(response => console.log("OTP Sent!", response))
    //         .catch(error => console.log("Error Sending OTP", error));
    //     setUser(data)
    // }

    const loginData = (data) => {
        const generatedOTP = Math.floor(1000 + Math.random() * 9000);
        setOtp(generatedOTP);

        const message = `Your OTP is: ${generatedOTP}`;

        // Call Laravel API (POST request to Laravel API)
        axios.post(`${BASE_URL}/send-sms`, {
            number: data,    // phone number from input
            message: message // generated OTP message
        })
            .then(response => {
                console.log("OTP Sent!", response);
            })
            .catch(error => {
                console.log("Error Sending OTP", error);
            });

        setUser(data);
    };


    const userLoginCheck = () => {
        const user = JSON.parse(localStorage.getItem("signUp"));
        setUser(user);
    }

    // get data
    useEffect(() => {
        userLoginCheck()
        fetchPurchasedCourses()
    }, [user]);
    // logout data

    const logOut = () => {
        localStorage.removeItem('signUp')
        setUser('')
        window.location.href = '/';
        fetchPurchasedCourses()
    }

    // get course user have purchases
    const fetchPurchasedCourses = async () => {
        try {
            const response = await fetch(`${BASE_URL}/checkout/get/${user}`);
            const data = await response.json();
            setPurchasedCourses(data);
        } catch (error) {
            console.error("Error fetching purchased courses:", error);
        }
    };
    // Fetch purchased courses
    useEffect(() => {
        if (user) {
            fetchPurchasedCourses();
        }
    }, [user]);


    return (
        <DataContext.Provider value={{ setUser, user, loginData, logOut, otp, getCourseApiData, loading, purchasedCourses, fetchPurchasedCourses, userLoginCheck }}>
            {children}
        </DataContext.Provider>
    );
};