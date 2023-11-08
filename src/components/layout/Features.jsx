import img1 from "../../assets/noto_books.png";
import img2 from "../../assets/Vector.png";
import img3 from "../../assets/noto_shopping-bags.png";
import img4 from "../../assets/customer-support.png";
const Features = () => {
  return (
    <div className="bg-[#5352ED] dark:bg-[#0F172A]  px-2 mt-7 lg:mt-8 py-5">
      <h2 className="text-white text-xl  text-center lg:text-left lg:text-3xl font-semibold lg:pl-36 lg:py-5 mb-5 lg:mb-0">
        Some Of Our Features include:
      </h2>

      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly items-center pb-5 ">
        <div className="flex gap-2 flex-col justify-center items-center">
          <div className=" flex justify-center items-center h-[140px] w-[140px] bg-white rounded-full">
            <img src={img1} alt="" />
          </div>
          <h5 className="text-white lg:text-xl font-medium">
            Used Book Buying
          </h5>
        </div>

        <div className="flex gap-2 flex-col justify-center items-center">
          <div className=" flex justify-center items-center h-[140px] w-[140px] bg-white rounded-full">
            <img src={img2} alt="" />
          </div>
          <h5 className="text-white lg:text-xl font-medium">
            Returnes & Exchanges
          </h5>
        </div>

        <div className="flex gap-2 flex-col justify-center items-center">
          <div className=" flex justify-center items-center h-[140px] w-[140px] bg-white rounded-full">
            <img src={img3} alt="" />
          </div>
          <h5 className="text-white lg:text-xl font-medium">Online Ordering</h5>
        </div>

        <div className="flex gap-2 flex-col justify-center items-center">
          <div className=" flex justify-center items-center h-[140px] w-[140px] bg-white rounded-full">
            <img src={img4} alt="" />
          </div>
          <h5 className="text-white lg:text-xl font-medium">
            24 Hours customer suppor
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Features;
