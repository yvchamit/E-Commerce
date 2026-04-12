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
import { fetchProducts } from "../store/actions/productActions";

function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    if (!productList || productList.length === 0) {
      dispatch(fetchProducts());
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
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
