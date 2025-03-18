import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <ScrollToTop />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
