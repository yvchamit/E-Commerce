import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyToken } from "./store/actions/clientActions";
import { fetchCategories } from "./store/actions/productActions";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import OrderPage from "./pages/OrderPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="font-sans text-[#252B42]">
      <main className="grow">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnHover
          theme="colored"
          limit={3}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />

          <Route path="/product/:productId" component={ProductDetailsPage} />

          <Route
            path="/shop/:gender/:categoryName/:categoryId/:productId/:productNameSlug"
            component={ProductDetailsPage}
          />
          <Route
            path="/shop/:gender?/:categoryName?/:categoryId?"
            component={ShopPage}
          />

          <Route path="/product-detail" component={ProductDetailsPage} />

          <Route path="/shopping-cart" exact component={ShoppingCartPage} />

          <ProtectedRoute path="/create-order" component={OrderPage} />
          <Route path="/order-success" exact component={OrderSuccessPage} />
          <ProtectedRoute
            path="/previous-orders"
            exact
            component={OrderHistoryPage}
          />

          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />

          <Route path="/pricing" component={PricingPage} />
          <Route path="/team" component={TeamPage} />

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
