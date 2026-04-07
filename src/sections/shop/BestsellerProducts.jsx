import ProductCard from "../../components/ProductCard";

function BestsellerProducts() {
  return (
    <section className="bg-[#FFFFFF] py-16">
      {/* Üst Başlık Bölümü (Birebir Tasarım) */}
      <div className="text-center mb-12 px-8">
        <h4 className="text-xl text-[#737373] font-medium mb-4">
          Featured Products
        </h4>
        <h2 className="text-2xl font-bold text-[#252B42] uppercase tracking-wider mb-4">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-sm text-[#737373] font-medium">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Ürün Izgarası (Birebir Tasarım) */}
      <div className="max-w-section mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 py-8 gap-y-20 px-8 md:px-0">
        <ProductCard
          showColors={true}
          aspect="4/5"
          align="center"
        />
      </div>
    </section>
  );
}

export default BestsellerProducts;
