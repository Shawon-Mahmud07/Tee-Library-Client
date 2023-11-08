import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

const Root = () => {
  return (
    <div className="bg-[#F4F6FD] dark:bg-[#0F172A] w-full mx-auto font-Roboto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
