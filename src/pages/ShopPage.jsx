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
import { useHistory, useLocation, useParams } from "react-router-dom";

function ShopPage() {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get("page")) || 1;
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const {
    productList = [],
    total = 0,
    fetchState,
    categories,
  } = useSelector((state) => state.product);

  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const LIMIT = 25;
  const totalPages = Math.ceil((total || 0) / LIMIT);

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: categoryId,
        filter: filterText,
        sort: sortOption,
        page: pageFromUrl,
      }),
    );
  }, [dispatch, categoryId, sortOption, filterText, pageFromUrl]);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const handlePageChange = (pageNumber) => {
    console.log("Gidilecek Sayfa:", pageNumber);

    if (history && history.push) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", pageNumber);

      history.push({
        pathname: location.pathname,
        search: searchParams.toString(),
      });

      window.scrollTo({ top: 500, behavior: "smooth" });
    } else {
      console.error(
        "History nesnesi bulunamadı! React Router bağlantısını kontrol edin.",
      );
    }
  };

  return (
    <>
      <Header page="shop" />
      <ShopBreadCrump />
      <CategoryList categories={topCategories} />

      <ShopFilterBar
        actualTotal={total}
        currentPage={currentPage}
        limit={LIMIT}
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
            productList.map((product) => (
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
          currentPage={pageFromUrl}
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
