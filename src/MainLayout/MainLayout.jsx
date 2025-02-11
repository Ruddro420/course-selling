import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
