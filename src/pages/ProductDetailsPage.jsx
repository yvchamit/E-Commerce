import BestsellerProducts from "../sections/shop/BestsellerProducts";
import Clients from "../sections/Clients";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import ProductDetail from "../sections/product/ProductDetail";
import ProductTabs from "../sections/product/ProductTabs";
import { bestProducts } from "../data/productPageData";

function ProductDetailsPage() {
  return (
    <>
      <Header page="shop" />
      <ShopBreadCrump showTitle={false} currentPage="Shop" />
      <ProductDetail />
      <ProductTabs />
      <BestsellerProducts
        products={bestProducts}
        page="details"
        showColors={false}
        aspect="1/1"
        align="left"
      />
      <Clients />
      <Footer footerTopClassName={"bg-white"} />
    </>
  );
}

export default ProductDetailsPage;
