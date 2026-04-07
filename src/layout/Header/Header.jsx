import Infobar from "./Infobar";
import Navbar from "./Navbar";

export default function Header({ page = "home", showIcon }) {
  const p = page.toLowerCase();

  const isCorporate = ["about", "contact", "team", "pricing", "auth"].includes(
    p,
  );
  const isEcommerce = ["home", "shop", "product", "product-detail"].includes(p);


  const maxWidth = p === "home" ? "max-w-page" : "max-w-section";
  const variant = isCorporate ? "auth" : "default";

  return (
    <header className="w-full">
      {isEcommerce && (
        <Infobar
          maxWidth={maxWidth}
          bgColor={p === "home" ? "bg-[#252B42]" : "bg-[#23856D]"}
        />
      )}

      <Navbar
        page={page}
        variant={variant}
        maxWidth={maxWidth}
        isGray={false}
        showIcon={showIcon}
      />
    </header>
  );
}
