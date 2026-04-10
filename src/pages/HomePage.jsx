import Header from "../layout/Header/Header";
import MainSlider from "../sections/home/MainSlider";
import EditorsPick from "../sections/home/EditorsPick";
import SecondSlider from "../sections/home/SecondSlider";
import Storyteller from "../sections/home/Storyteller";
import Posts from "../sections/home/Posts";
import Footer from "../layout/Footer/Footer";
import BestsellerProducts from "../sections/shop/BestsellerProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";

function HomePage() {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    if (productList.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productList.length]);

  const bestSellers = [...productList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <>
      <Header page="home" />
      <MainSlider />
      <EditorsPick />
      <div className="md:pb-18">
        <BestsellerProducts products={bestSellers} page="home" />
      </div>
      <SecondSlider />
      <Storyteller />
      <Posts />
      <Footer isGray={true} />
    </>
  );
}

export default HomePage;
