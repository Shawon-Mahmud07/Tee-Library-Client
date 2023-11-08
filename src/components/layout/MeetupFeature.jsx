import { Button } from "@material-tailwind/react";
import img from "../../assets/extra-img.png";

const MeetupFeature = () => {
  return (
    <div className="flex mx-5 flex-col lg:flex-row justify-center items-center lg:mt-24">
      <div className="flex-[1] flex flex-col justify-center items-center">
        <h1 className="text-[#5352ED] text-4xl font-semibold mb-5">
          TEE’S LIBRARY MEETUP.
        </h1>
        <p className="dark:text-white">
          Meet Kindred Book Lovers In A Local Meetup Book Club!. <br />
          Fiction Or Non Fiction ,Paperback Or Hardcover,You Like? <br /> Read A
          New Book Every Month..
        </p>

        <div className="flex gap-24 mt-20">
          <div className="flex flex-col justify-start items-center text-center">
            <h2 className="mb-2 text-[#FF7F56] text-2xl font-semibold">1M+</h2>
            <h3 className="dark:text-white">
              Books <br /> Collections
            </h3>
          </div>

          <div className="flex flex-col justify-start items-center text-center">
            <h2 className="mb-2 text-[#FF7F56] text-2xl font-semibold">5M+</h2>
            <h3 className="dark:text-white">
              Club <br /> Members
            </h3>
          </div>

          <div className="flex flex-col justify-start items-center text-center ">
            <h2 className="mb-2 text-[#FF7F56] text-2xl font-semibold">
              4,972M+
            </h2>
            <h3 className="dark:text-white">
              Groups <br />
              Created
            </h3>
          </div>
        </div>
        <Button className="text-white  font-medium px-20 py-2 mt-5 lg:mt-10  lg:text-base bg-[#FF7F56]">
          Join Now
        </Button>
      </div>

      <div className="flex[1]">
        <img className="rounded-md max-h-[500px]" src={img} alt="" />
      </div>
    </div>
  );
};

export default MeetupFeature;
