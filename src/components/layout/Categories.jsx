import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";
const Categories = ({ bookCategories }) => {
  return (
    <div className="w-11/12 mx-auto mt-12 mb-12 lg:mb-24">
      <h1 className="text-center text-2xl lg:text-4xl mb-5 lg:mb-10  font-semibold text-[#5352ED]">
        Book Categories
      </h1>

      <div className="grid grid-col gap-10 lg:gap-0 lg:grid-cols-4 ">
        {bookCategories?.map((categories, index) => (
          <CategoryCard key={index} categories={categories}></CategoryCard>
        ))}
      </div>
    </div>
  );
};
Categories.propTypes = {
  bookCategories: PropTypes.array,
};
export default Categories;
