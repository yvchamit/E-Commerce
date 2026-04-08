const products = [];

for (let i = 1; i <= 36; i++) {
  // Resimlerin 1-12 arasında dönmesi için basit bir matematik
  // i=13 olduğunda resim tekrar shop-1.jpg olacak
  let imageIndex = i % 12;
  if (imageIndex === 0) imageIndex = 12;

  products.push({
    id: i,
    title: "Graphic Design - " + i,
    department: "English Department",
    price: 6.48,
    oldPrice: 16.48,
    image: `/image/shop-${imageIndex}.jpg`,
    description:
      "Focus on clean design and premium quality. This piece is perfect for those who appreciate minimal aesthetics and functionality.",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  });
}

export const shopProducts = products;
