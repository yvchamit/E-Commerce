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
    { title: "Product", path: "/product-detail" },
    { title: "Pricing", path: "/pricing" },
    { title: "Contact", path: "/contact" },
  ]
};