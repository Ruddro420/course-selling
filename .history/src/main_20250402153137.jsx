import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import SingleCourse from './pages/SingleCourse.jsx';
import AllCourses from './pages/AllCourses.jsx';
import About from './pages/About.jsx';
import ContactUs from './pages/ContactUs.jsx';
import CourseContent from './pages/CourseContent.jsx';
import Account from './pages/Account.jsx';
import Checkout from './pages/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/course/:courseId',
        element: <SingleCourse />
      },
      {
        path: '/all-courses',
        element: <AllCourses />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/course-content',
        element: <CourseContent />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <AuthPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
