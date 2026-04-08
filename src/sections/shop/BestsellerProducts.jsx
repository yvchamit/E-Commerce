import ProductCard from "../../components/ProductCard";

function BestsellerProducts({
  products, // Dışarıdan gelen ürün listesi
  page = "home",
  showColors,
  aspect,
  align,
}) {
  const isHome = page === "home";

  // Eğer veri henüz gelmediyse veya boşsa null dönerek hata almayı önleriz
  if (!products || products.length === 0) return null;

  return (
    <section
      className={`pt-14 pb-4 ${isHome ? "bg-[#FFFFFF]" : "bg-[#FAFAFA]"}`}
    >
      <div
        className={`max-w-section mx-auto px-8 md:px-0 ${isHome ? "text-center mb-12" : "text-left mb-8"}`}
      >
        {isHome && (
          <h4 className="text-xl text-[#737373] font-medium mb-4">
            Featured Products
          </h4>
        )}

        <h2
          className={`text-2xl font-bold text-[#252B42] uppercase tracking-wider ${
            isHome ? "mb-4" : "pb-4 border-b-2 border-[#ECECEC] mx-8 md:mx-0"
          }`}
        >
          BESTSELLER PRODUCTS
        </h2>

        {isHome && (
          <p className="text-sm text-[#737373] font-medium px-8 md:px-0 pb-6">
            Problems trying to resolve the conflict between
          </p>
        )}
      </div>

      {/* Dinamik Render Alanı */}
      <div className="max-w-section mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 px-8 md:px-0">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            showColors={showColors}
            aspect={aspect}
            align={align}
          />
        ))}
      </div>
    </section>
  );
}

export default BestsellerProducts;
