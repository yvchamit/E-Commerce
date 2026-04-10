import Clients from "../sections/Clients";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import ShopFilterBar from "../sections/shop/ShopFilterBar";
import ProductCard from "../components/ProductCard";
import CategoryList from "../sections/shop/CategoryList";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import { cn } from "../lib/mergeClass";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import LoadingSpinner from "../components/LoadingSpinner";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ShopPage() {
  const { categoryId, categoryName, gender } = useParams();

  console.log("Gelen Parametreler:", { gender, categoryName, categoryId });

  const {
    productList = [],
    total = 0,
    fetchState,
    categories,
  } = useSelector((state) => state.product);
  const actualTotal = productList.length || total;

  console.log("Aktif Kategori ID:", categoryId);
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    // Tüm parametreleri tek bir obje olarak gönderiyoruz
    dispatch(
      fetchProducts({
        category: categoryId,
        filter: filterText,
        sort: sortOption,
      }),
    );
    setCurrentPage(1);
  }, [dispatch, categoryId, sortOption, filterText]);

  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const totalPages = Math.ceil(actualTotal / productsPerPage);

  const currentProducts = productList.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );
  // -------------------------

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <>
      <Header page="shop" />
      <ShopBreadCrump />
      <CategoryList categories={topCategories} />

      <ShopFilterBar
        actualTotal={total}
        currentPage={currentPage} // State'den gelen
        limit={12}
        view={view}
        setView={setView}
        filterText={filterText}
        onFilterChange={setFilterText}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {fetchState === "FETCHING" ? (
        <LoadingSpinner />
      ) : fetchState === "ERROR" ? (
        <div className="text-center py-20 text-red-500 font-bold">
          Ürünler yüklenirken bir hata oluştu.
        </div>
      ) : (
        <div
          className={cn(
            "max-w-section mx-auto py-8 px-8 md:px-0 gap-x-8 gap-y-20 transition-all duration-300",
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "flex flex-col gap-y-12",
          )}
        >
          {productList.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                view={view}
                className={view === "grid" ? "md:h-75" : "w-full"}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-xl font-bold text-[#252B42] pb-2">
                Oops! Bu kategoride maalesef ürün bulunmamaktadır.
              </h3>
              <p className="text-[#737373]">
                Sizin için başka harika ürünlerimize göz atmak ister misiniz?
              </p>
            </div>
          )}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <Clients />
      <Footer footerTopClassName="bg-white" />
    </>
  );
}

export default ShopPage;
