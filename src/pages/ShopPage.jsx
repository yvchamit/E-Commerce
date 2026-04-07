import Clients from '../sections/Clients';
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import ShopFilterBar from "../sections/shop/ShopFilterBar";
import ProductCard from "../components/ProductCard";
import CategoryList from "../sections/shop/CategoryList";
import Pagination from "../components/Pagination";

function ShopPage() {
  return (
    <>
      <Header page="shop" />
      <ShopBreadCrump />
      <CategoryList />
      <ShopFilterBar />
      <div className="max-w-section mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 py-8 gap-y-20 px-8 md:px-0">
        <ProductCard className="md:h-75" />
      </div>
      <Pagination />
      <Clients />
      <Footer footerTopClassName="bg-white" />
    </>
  );
}

export default ShopPage;
