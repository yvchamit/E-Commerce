import CategoryCard from "../../components/CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <div className="bg-[#FAFAFA] pt-0 pb-16 px-8 md:px-0">
      <div className="max-w-section mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
