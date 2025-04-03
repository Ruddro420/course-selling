import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateCourseRoute = ({ children }) => {
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { courseId } = useParams(); // Get courseId from URL params
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const user = localStorage.getItem("signUp");

    // Fetch purchased courses
    const fetchPurchasedCourses = async () => {
        try {
            const response = await fetch(`${BASE_URL}/checkout/get/${user}`);
            const data = await response.json();
            setPurchasedCourses(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching purchased courses:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchPurchasedCourses();
        } else {
            setLoading(false);
        }
    }, [user]);

    // Show loading indicator
    if (loading) {
        return <div>Loading...</div>;
    }

    // Check if the course is already purchased
    const isPurchased = purchasedCourses.some(course => course.id === courseId);

    // If purchased, redirect to a different page (e.g., dashboard)
    if (isPurchased) {
        return <Navigate to="/dashboard" />;
    }

    // Otherwise, render the course page
    return children;
};

export default PrivateCourseRoute;
