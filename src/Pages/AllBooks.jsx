import { useLoaderData } from "react-router-dom";
import Books from "../components/layout/Books";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const AllBooks = () => {
  const allBooks = useLoaderData();
  const [available, setAvialable] = useState(allBooks);

  const handleFilter = () => {
    const filterBooks = allBooks.filter((book) => book.quantity > 0);
    setAvialable(filterBooks);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" mb-2">Total Books: {available.length}</h2>
      <div className="flex items-center gap-3 mb-2">
        <h4 className="text-lg">Filter:</h4>
        <Button
          onClick={() => handleFilter()}
          className="text-xs bg-[#FF7F56]"
          size="sm"
        >
          {" "}
          Available Books{" "}
        </Button>
      </div>

      <div className="grid grid-col lg:grid-cols-4 gap-4 ">
        {available?.map((books, index) => (
          <Books key={index} books={books}></Books>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
