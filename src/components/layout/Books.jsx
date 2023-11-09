import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const Books = ({ books }) => {
  const { _id, name, authorName, category, ratings, photo, quantity } =
    books || {};
  return (
    <div>
      <Card className="w-72 dark:bg-[#535f78]">
        <CardHeader shadow={false} floated={false} className="h-72">
          <img
            src={photo}
            alt="card-image"
            className="h-full w-full object-fill"
          />
        </CardHeader>
        <CardBody className="h-56 ">
          <div>
            <Typography>
              <span className="text-[#000] font-semibold">Name:</span>{" "}
              <span className="dark:text-white">{name}</span>
            </Typography>
            <div>
              <Typography>
                <span className="text-[#000] font-semibold">Author Name:</span>{" "}
                <span className="dark:text-white">{authorName}</span>
              </Typography>
              <Typography className="flex items-center gap-2">
                <span className="text-[#000] font-semibold">Ratings:</span>{" "}
                <ReactStars
                  count={5}
                  size={22}
                  value={ratings}
                  edit={false}
                  isHalf={true}
                  color="#FF7F56"
                />
              </Typography>
              <Typography>
                <span className="text-[#000] font-semibold">Quantity:</span>{" "}
                <span className="dark:text-white"> {quantity}</span>
              </Typography>
              <Typography>
                <span className="text-[#000] font-semibold">Category:</span>{" "}
                <span className="dark:text-white"> {category}</span>
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/update/${_id}`}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-[#FF7F56] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Update
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
Books.propTypes = {
  books: PropTypes.object,
};
export default Books;
