import { Link } from "react-router-dom";
import ErrorImg from "../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="text-center py-36 md:py-0 text-3xl space-y-3">
      <div className="flex flex-col items-center">
        <img className="w-11/12 md:w-5/12" src={ErrorImg} alt="error-img" />
        <p className="mb-2 text-2xl md:text-4xl">Page Not Found.</p>
        <Link to="/">
          <button className="bg-[#6C63FF]  rounded-md mt-2 px-2 pb-1 hover:bg-[#7e7ac9] hover:text-white duration-1000 font-serif">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
