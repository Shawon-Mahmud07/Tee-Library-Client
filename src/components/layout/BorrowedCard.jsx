import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
const BorrowedCard = ({ card, cardData, setCardData }) => {
  const { _id, formattedDate, formattedDateToday, category, name, photo } =
    card;

  const handleDeleteBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tee-library-server.vercel.app/borrowed-card/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Your Book has been Returned.", "success");
              const remaining = cardData.filter((data) => data._id !== _id);
              setCardData(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <Card className="w-11/12 ml-3 lg:ml-0 lg:mt-4 md:h-60  max-w-[38rem] flex-col md:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="lg:m-0 lg:w-1/3 shrink-0  lg:rounded-r-none"
        >
          <img src={photo} alt="card-image" className=" w-auto object-fill" />
        </CardHeader>
        <CardBody className="lg:ml-5">
          <div className="h-36">
            <Typography variant="h6" className="text-[#29276B] mb-1">
              {name}
            </Typography>
            <Typography variant="h6" className="text-sm mb-1">
              Category: {category}
            </Typography>
            <Typography variant="h6" className="text-sm mb-1">
              Borrowed Date: {formattedDateToday}
            </Typography>
            <Typography variant="h6" className="text-sm mb-1">
              Return Date: {formattedDate}
            </Typography>
          </div>

          <Button
            onClick={() => handleDeleteBtn()}
            className="bg-[#FF7F56] ml-8 mt-3 lg:ml-0  font-semibold "
          >
            Return Book
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
BorrowedCard.propTypes = {
  card: PropTypes.object,
  cardData: PropTypes.array,
  setCardData: PropTypes.func,
};
export default BorrowedCard;
