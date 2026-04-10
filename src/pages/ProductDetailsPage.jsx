import BestsellerProducts from "../sections/shop/BestsellerProducts";
import Clients from "../sections/Clients";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import ProductDetail from "../sections/product/ProductDetail";
import ProductTabs from "../sections/product/ProductTabs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// ProductDetailsPage.jsx
import { fetchProducts } from "../store/actions/productActions"; // Action yolunu kontrol et

function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Redux'tan ürünleri al
  const { productList } = useSelector((state) => state.product);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Tekil ürün detayını çek
    setLoading(true);
    axios
      .get(`https://workintech-fe-ecommerce.onrender.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // 2. KRİTİK NOKTA: Eğer Redux'taki liste boşsa genel ürünleri de çek
    if (!productList || productList.length === 0) {
      dispatch(fetchProducts());
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Yavaş ve yumuşak bir kayma efekti verir
    });
  }, [productId, dispatch]);

  // Veri hazırlığı
  const bestProducts = productList ? productList.slice(0, 8) : [];

  if (loading)
    return (
      <div className="p-20 text-center font-bold">
        Loading Product Details...
      </div>
    );
  if (!product)
    return <div className="p-20 text-center font-bold">Product Not Found!</div>;

  return (
    <>
      <Header page="shop" />
      <ShopBreadCrump showTitle={false} currentPage={product.name} />
      <ProductDetail product={product} />
      <ProductTabs product={product} />

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
