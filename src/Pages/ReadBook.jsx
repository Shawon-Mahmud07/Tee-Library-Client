import { useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const ReadBook = () => {
  const readBookObj = useLoaderData();
  const { name, details } = readBookObj || {};
  return (
    <div>
      <Card color="transparent" shadow={false} className="w-full p-5 lg:p-10">
        <CardBody className="mb-6 p-0 ">
          <Typography className="text-lg mb-3 lg:text-2xl text-[#5352ED] underline">
            {name}:
          </Typography>
          <Typography>{details}</Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default ReadBook;
