import CategoryCard from "../../components/CategoryCard";

const categories = [
  { id: 1, title: "CLOTHS", count: 5, img: "/image/category1.jpg" },
  { id: 2, title: "CLOTHS", count: 5, img: "/image/category2.jpg" },
  { id: 3, title: "CLOTHS", count: 5, img: "/image/category3.jpg" },
  { id: 4, title: "CLOTHS", count: 5, img: "/image/category4.jpg" },
  { id: 5, title: "CLOTHS", count: 5, img: "/image/category5.jpg" },
];

const CategoryList = () => {
  return (
    <section className="bg-[#FAFAFA] pb-12 px-8 md:px-0">
      <div className="max-w-section mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              count={cat.count}
              img={cat.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
