import { Link, useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import ReactStars from "react-rating-stars-component";
const DetailsBook = () => {
  const singleBookObj = useLoaderData();
  const { name, authorName, category, ratings, photo, details, quantity } =
    singleBookObj || {};
  return (
    <div className="lg:w-11/12 mx-auto">
      <Card className="w-full md:flex-row mt-5 md:mt-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-11/12 mx-auto md:w-2/5 shrink-0 "
        >
          <img
            src={photo}
            alt="card-image"
            className="  lg:p-10 w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Author : {authorName}
          </Typography>
          <Typography className="mb-1 font-medium text-2xl md:font-semibold text-[#5352ED]">
            {name}
          </Typography>
          <div className="flex gap-6">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <div className="flex items-center gap-2">
                Ratings:
                <ReactStars
                  count={5} // Number of stars
                  size={20} // Size of the stars
                  value={ratings} // Rating value
                  edit={false} // Read-only
                  isHalf={true} // Enable half stars
                  color="#FF7F56" // Star color
                />
              </div>
            </Typography>
          </div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Category: {category}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Quantity: {quantity}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2 underline">
            Description:
          </Typography>

          <Typography color="gray" className="mb-8 text-justify font-normal">
            {details}
          </Typography>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
            <Button className="text-white bg-[#FF7F56] w-full lg:w-1/2">
              Borrow Book
            </Button>
            <Link className="w-full" to={`/read-book/${name}`}>
              <Button className="text-white bg-[#FF7F56] w-full lg:w-1/2 ">
                Read Book
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DetailsBook;
