import Clients from "../sections/Clients";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import ShopFilterBar from "../sections/shop/ShopFilterBar";
import ProductCard from "../components/ProductCard";
import CategoryList from "../sections/shop/CategoryList";
import Pagination from "../components/Pagination";
import { useState } from "react";
import { cn } from "../lib/mergeClass";
import { shopProducts } from "../data/shopPageData.js";

function ShopPage() {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Her sayfada 12 ürün

  // --- PAGINATION MANTIĞI ---
  const indexOfLastProduct = currentPage * productsPerPage; // Örn: 1 * 12 = 12
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 12 - 12 = 0

  // Mevcut sayfada gösterilecek 12 ürünlük dilim
  const currentProducts = shopProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Toplam sayfa sayısı (36 / 12 = 3)
  const totalPages = Math.ceil(shopProducts.length / productsPerPage);

  // Sayfa değiştiğinde yukarı kaydır (opsiyonel ama UX için iyi olur)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <>
      <Header page="shop" />
      <ShopBreadCrump />
      <CategoryList />

      <ShopFilterBar
        view={view}
        setView={setView}
        totalResults={shopProducts.length}
      />

      <div
        className={cn(
          "max-w-section mx-auto py-8 px-8 md:px-0 gap-x-8 gap-y-20 transition-all duration-300",
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "flex flex-col gap-y-12",
        )}
      >
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            view={view}
            className={view === "grid" ? "md:h-75" : "w-full"}
          />
        ))}
      </div>

      {/* Pagination Bileşeni */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Clients />
      <Footer footerTopClassName="bg-white" />
    </>
  );
}

export default ShopPage;
