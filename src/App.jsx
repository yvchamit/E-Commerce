import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Header from "./layout/Header/Header";
import BlogPage from "./pages/BlogPage";

function App() {

  return (
    <div className="font-sans text-[#252B42]">
      <main className="grow">
        <Switch>
          {/* 1. Ana Sayfa (exact şart!) */}
          <Route exact path="/" component={HomePage} />

          {/* 2. Login & SignUp */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />

          {/* 3. Mağaza (Ürün Listeleme) */}
          <Route path="/shop" component={ShopPage} />

          {/* 4. Ürün Detay (Dinamik ID ile) */}
          <Route path="/product-detail" component={ProductDetailsPage} />
          {/* İpucu: İleride bunu /product/:id yapabilirsin */}

          {/* 5. Hakkımızda ve İletişim */}
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />


          {/* 6. Hakkımızda ve İletişim */}
          <Route path="/pricing" component={PricingPage} />
          <Route path="/team" component={TeamPage} />
          

          {/* 7. 404 Sayfası (Hiçbir rota eşleşmezse) */}
          <Route path="*">
            <div className="py-20 text-center font-bold text-2xl">
              404 - Aradığınız sayfa bulunamadı.
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
