import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/ScrollToTop";
import {DataProvider} from "../context/DataContext"

const MainLayout = () => {
  return (
    <div>
      <DataProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <ScrollToTop />
        <Outlet />
        <Toaster />
        <MainFooter />
      </DataProvider>
    </div>
  );
};

export default MainLayout;
