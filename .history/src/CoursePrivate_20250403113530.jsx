import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from './context/DataContext';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { purchasedCourses } = useContext(DataContext)
  // Retrieve the phone number from localStorage
  const userPhone = localStorage.getItem("signUp");

  // Check if the phone number exists in localStorage
  const isAuthenticated = userPhone !== null;

  // If authenticated, render the children, otherwise redirect to login
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
