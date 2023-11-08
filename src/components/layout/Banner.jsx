import { Button } from "@material-tailwind/react";
import bannerImg from "../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className=" flex  justify-center flex-col-reverse lg:flex-row ">
      <div className="flex-[1] px-2 lg:px-0 lg:pl-10  lg:pt-28 ">
        <small className=" font-medium text-[#00000066] dark:text-white">
          Anywhere and Everywhere.
        </small>
        <h1 className="text-[#5352ED] text-2xl lg:text-5xl font-semibold">
          Welcome To TEE’S LIBRARY
        </h1>
        <p className="mt-5 dark:text-white">
          Track your Reading and Build your Library. Discover your next
          Favourite Book. <br /> Browse from the Largest Collections of Ebooks.
          Read stories from anywhere at anytime.
        </p>
        <Button className="text-white font-medium mt-5 lg:mt-10  lg:text-lg bg-[#FF7F56]">
          Get Started For Free
        </Button>
      </div>
      <div className="flex-[1]">
        <img className="lg:h-[600px]" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
