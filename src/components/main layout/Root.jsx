import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

const Root = () => {
  return (
    <div className="bg-[#F4F6FD] dark:bg-[#0F172A]  max-w-[1440px] mx-auto font-Roboto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
