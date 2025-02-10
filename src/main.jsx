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
import CoursePage from './pages/CoursePage.jsx';
import AllCourses from './pages/AllCourses.jsx';
import About from './pages/About.jsx';
import ContactUs from './pages/ContactUs.jsx';

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
        element: <CoursePage />
      },
      {
        path: '/all-courses',
        element: <AllCourses />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
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
