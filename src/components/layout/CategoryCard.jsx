import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const CategoryCard = ({ categories }) => {
  const { category, image_url } = categories;
  return (
    <div>
      <Card className="w-72 dark:bg-[#535f78]">
        <CardHeader shadow={false} floated={false} className="h-72">
          <img
            src={image_url}
            alt="card-image"
            className="h-full w-full object-fill"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2">
            <Typography className="dark:text-white font-medium">
              {category}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-[#FF7F56] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Explore
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
CategoryCard.propTypes = {
  categories: PropTypes.object,
};
export default CategoryCard;
