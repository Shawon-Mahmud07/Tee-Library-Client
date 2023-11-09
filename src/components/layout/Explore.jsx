import { useLoaderData } from "react-router-dom";
import ExploreBooks from "./ExploreBooks";

const Explore = () => {
  const exploreBooksCategory = useLoaderData();

  return (
    <div className="w-11/12 mx-auto mt-8">
      <p className="text-center mb-5 lg:text-lg dark:text-white">
        Tee’s Library is an e-library website that consists of all genres of
        books from around the world
      </p>
      <div className="grid grid-col lg:grid-cols-4 gap-4">
        {exploreBooksCategory?.map((exploreBook, index) => (
          <ExploreBooks key={index} exploreBook={exploreBook}></ExploreBooks>
        ))}
      </div>
    </div>
  );
};

export default Explore;
