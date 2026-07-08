export const SHOP_DROPDOWN = [
  { title: "Men", path: "/shop/men" },
  { title: "Women", path: "/shop/women" },
  { title: "Accessories", path: "/shop/accessories" },
];

export const PAGES_DROPDOWN = [
  { title: "About Us", path: "/about" },
  { title: "Our Team", path: "/team" },
  { title: "Pricing", path: "/pricing" },
  { title: "Contact", path: "/contact" },
];

export const navConfig = {
  home: [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop", dropdown: SHOP_DROPDOWN },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
    { title: "Pages", path: "/pages", dropdown: PAGES_DROPDOWN },
  ],
  auth: [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop", dropdown: SHOP_DROPDOWN },
    { title: "Pricing", path: "/pricing" },
    { title: "Pages", path: "/pages", dropdown: PAGES_DROPDOWN },
  ],
};

export const PAGE_CONFIG = {
  home: {
    infobar: true,
    infobarBg: "bg-[#252B42]",
    nav: "home",
    maxWidth: "max-w-page",
  },
  shop: {
    infobar: true,
    infobarBg: "bg-[#23856D]",
    nav: "home",
    maxWidth: "max-w-section",
  },
  product: {
    infobar: true,
    infobarBg: "bg-[#23856D]",
    nav: "home",
    maxWidth: "max-w-section",
  },
  about: { infobar: false, nav: "auth", maxWidth: "max-w-section" },
  contact: { infobar: false, nav: "auth", maxWidth: "max-w-section" },
  team: { infobar: false, nav: "auth", maxWidth: "max-w-section" },
  pricing: { infobar: false, nav: "auth", maxWidth: "max-w-section" },
};
