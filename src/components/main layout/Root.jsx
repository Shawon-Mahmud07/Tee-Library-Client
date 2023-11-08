import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

const Root = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
