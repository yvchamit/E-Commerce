import { ChevronRight } from "lucide-react"; // veya senin kullandığın ikon seti

const ShopBreadCrump = ({
  title = "Shop",
  subtitle,
  showTitle = true,
  variant = "shop",
  currentPage = "Shop",
}) => {
  const isCentered = variant === "centered";

  return (
    <div className={`${isCentered ? "bg-white" : "bg-[#FAFAFA]"}`}>
      <div
        className={`max-w-section mx-auto px-8 py-12 md:py-6 flex flex-col 
        ${
          isCentered
            ? "items-center text-center"
            : "md:flex-row items-center " +
              (showTitle ? "md:justify-between" : "md:justify-start")
        } gap-4`}
      >
        {(showTitle || (isCentered && subtitle)) && (
          <div
            className={`flex flex-col ${isCentered ? "items-center" : "items-start"}`}
          >
            {isCentered && subtitle && (
              <h5 className="text-slate-500 font-bold text-base mb-4 uppercase tracking-wider">
                {subtitle}
              </h5>
            )}
            {showTitle && (
              <h1
                className={`${isCentered ? "text-4xl md:text-5xl mb-6" : "text-2xl"} font-bold text-[#252B42]`}
              >
                {title}
              </h1>
            )}
          </div>
        )}

        {/* Breadcrumb Navigasyonu */}
        <nav className="flex items-center space-x-2 text-sm font-bold">
          <a
            href="/"
            className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
          >
            Home
          </a>
          <span className="text-[#BDBDBD]">
            <ChevronRight className="w-4 h-4" />
          </span>
          <span className="text-[#BDBDBD]">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
};

export default ShopBreadCrump;
