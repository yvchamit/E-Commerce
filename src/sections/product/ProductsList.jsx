import ProductCard from "../../components/ProductCard";

function ProductsList() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-section mx-auto px-8 md:px-0">
        <div className="text-center mb-16 space-y-2 px-6 md:px-0">
          <h4 className="text-[#737373] text-xl">Featured Products</h4>
          <h2 className="text-2xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-[#737373] text-sm font-medium">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          <ProductCard aspect="1/1.5"/>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
