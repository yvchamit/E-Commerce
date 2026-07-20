import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "../../components/ui/Dropdown";

const categoryPath = (cat, genderSlug) =>
  `/shop/${genderSlug}/${cat.code.split(":")[1]}/${cat.id}`;

function CategoryColumn({ heading, genderSlug, categories }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-[#252B42] text-lg mb-4">{heading}</h3>
      <div className="flex flex-col gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={categoryPath(cat, genderSlug)}
            className="text-sm font-medium text-[#737373] hover:text-[#23A6F0] transition-colors whitespace-nowrap"
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ShopMegaMenu() {
  const categories = useSelector((state) => state.product.categories);
  const isLoading = categories.length === 0;

  const womenCategories = categories.filter(
    (c) => c.gender?.toLowerCase() === "k",
  );
  const menCategories = categories.filter(
    (c) => c.gender?.toLowerCase() === "e",
  );

  return (
    <Dropdown title="Shop">
      <div className="flex p-8 gap-16 bg-white min-w-85">
        {isLoading ? (
          <p className="text-sm text-[#737373] animate-pulse">
            Kategoriler yükleniyor...
          </p>
        ) : (
          <>
            <CategoryColumn
              heading="Kadın"
              genderSlug="kadin"
              categories={womenCategories}
            />
            <CategoryColumn
              heading="Erkek"
              genderSlug="erkek"
              categories={menCategories}
            />
          </>
        )}
      </div>
    </Dropdown>
  );
}
