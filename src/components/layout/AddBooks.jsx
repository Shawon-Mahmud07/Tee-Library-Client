import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Form } from "react-router-dom";

const AddBooks = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const ratings = form.ratings.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const newBook = {
      name,
      authorName,
      category,
      ratings,
      photo,
      details,
      quantity,
    };
    console.log(newBook);

    // send data to the server
    fetch("https://tee-library-server.vercel.app/add-book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Book Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div>
        <div className="w-full shadow-2xl md:max-w-4xl mx-auto py-10 md:mt-16 border md:p-10 bg-[#F4F6FD] rounded-md ">
          <div className="text-center">
            <h2 className="text-2xl text-[#5352ED] font-semibold">
              Add New Book
            </h2>
          </div>
          <Form onSubmit={handleFormSubmit}>
            <div className="my-5">
              <div className="flex flex-col gap-3 md:gap-0  md:flex-row">
                <div className="  w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Name</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="name"
                    label="Enter book name"
                    required
                  />
                </div>

                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Author Name</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="authorName"
                    label="Enter author name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
                <div className="w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Category</h2>
                  <select
                    className="bg-[#FFFFFF] border rounded p-2 w-full"
                    name="category"
                    required
                  >
                    <option value="Biography">Biography</option>
                    <option value="Children's Books">Children's Books</option>
                    <option value="Sports">Sports</option>
                    <option value="Science Fiction & Fantasy">
                      Science Fiction & Fantasy
                    </option>
                  </select>
                </div>

                <div className="w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Ratings</h2>
                  <select
                    className="bg-[#FFFFFF] border rounded p-2 w-full"
                    name="ratings"
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="my-5">
              <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Photo</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="photo"
                    label="Enter photo URL"
                    required
                  />
                </div>
                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Quantity</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="quantity"
                    label="Enter quantity"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div>
                <div className="w-9/12 mx-auto md:w-full md:px-4">
                  <h2 className="mb-3">Details</h2>
                  <textarea
                    className="bg-[#FFFFFF] border rounded-md p-2 w-full "
                    rows="4"
                    cols="93"
                    name="details"
                    placeholder="Enter details here"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="px-4">
              <Button
                type="submit"
                className="bg-[#FF7F56] text-white "
                fullWidth
              >
                Add Book
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
