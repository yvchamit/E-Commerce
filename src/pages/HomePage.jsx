import Header from "../layout/Header/Header";
import MainSlider from "../sections/home/MainSlider";
import EditorsPick from "../sections/home/EditorsPick";
import SecondSlider from "../sections/home/SecondSlider";
import Storyteller from "../sections/home/Storyteller";
import Posts from "../sections/home/Posts";
import Footer from "../layout/Footer/Footer";
import ProductCard from "../components/ProductCard";
import BestsellerProducts from "../sections/shop/BestsellerProducts";

function HomePage() {
  return (
    <>
      <Header page="home" />
      <MainSlider />
      <EditorsPick />
      <BestsellerProducts/>
      <SecondSlider />
      <Storyteller />
      <Posts />
      <Footer isGray={true} />
    </>
  );
}

export default HomePage;
