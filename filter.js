const products = [
  {
    name: "Blue Runner Sneakers",
    category: "shoes",
    price: 89.99,
    image: "/img/blue-sneaker.avif",
    alt: "Blue athletic sneakers",
  },
  {
    name: "Brown Leather Sneakers",
    category: "shoes",
    price: 109.99,
    image: "/img/brown-sneaker.avif",
    alt: "Brown leather sneakers",
  },
  {
    name: "Red Nike Sneakers",
    category: "shoes",
    price: 99.99,
    image: "/img/red-sneaker.jpg",
    alt: "Red Nike sneakers",
  },
  {
    name: "Designer Jeans",
    category: "pants",
    price: 129.99,
    image: "/img/jeans.avif",
    alt: "Designer denim jeans",
  },
  {
    name: "Performance Workout Pants",
    category: "pants",
    price: 79.99,
    image: "/img/workout pants.avif",
    alt: "Workout pants in black fabric",
  },
  {
    name: "Yoga Flex Pants",
    category: "pants",
    price: 69.99,
    image: "/img/yoga pants.avif",
    alt: "Yoga pants for comfort and flexibility",
  },
  {
    name: "Classic White Shirt",
    category: "shirts",
    price: 49.99,
    image: "/img/shirts1.avif",
    alt: "Classic white shirt",
  },
  {
    name: "Blue Casual Shirt",
    category: "shirts",
    price: 54.99,
    image: "/img/shirts2.avif",
    alt: "Blue casual shirt",
  },
  {
    name: "Graphic Tee Shirt",
    category: "shirts",
    price: 39.99,
    image: "/img/shirts3.avif",
    alt: "Graphic tee shirt",
  },
  {
    name: "Plaid Button-down Shirt",
    category: "shirts",
    price: 59.99,
    image: "/img/shirts4.avif",
    alt: "Plaid button-down shirt",
  },

  // 🔥 New additions
  {
    name: "Slim Fit Black Shirt",
    category: "shirts",
    price: 57.99,
    image: "/img/shirts5.avif",
    alt: "Slim fit black dress shirt",
  },
  {
    name: "Striped Polo Shirt",
    category: "shirts",
    price: 44.99,
    image: "/img/shirts6.avif",
    alt: "Striped polo shirt",
  },
  {
    name: "Casual Sweatpants",
    category: "pants",
    price: 74.99,
    image: "/img/sweatpants.avif",
    alt: "Comfortable casual sweatpants",
  },
  {
    name: "White Sneaker Classic",
    category: "shoes",
    price: 92.99,
    image: "/img/white-sneaker.avif",
    alt: "Classic white sneakers",
  },
  {
    name: "Luxury Gold Watch",
    category: "watches",
    price: 249.99,
    image: "/img/watches1.avif",
    alt: "Luxury gold wristwatch",
  },
  {
    name: "Silver Steel Watch",
    category: "watches",
    price: 199.99,
    image: "/img/watches2.avif",
    alt: "Silver steel wristwatch",
  },
  {
    name: "Leather Strap Watch",
    category: "watches",
    price: 179.99,
    image: "/img/watches3.avif",
    alt: "Leather strap wristwatch",
  },
  {
    name: "Modern Minimal Watch",
    category: "watches",
    price: 159.99,
    image: "/img/watches4.avif",
    alt: "Minimal modern wristwatch",
  },
  {
    name: "Sport Digital Watch",
    category: "watches",
    price: 139.99,
    image: "/img/watches5.avif",
    alt: "Sport style digital watch",
  },
];

function sortBy(cat) {
  const filtered = products.filter((el) => el.category === cat);
  return filtered;
}
console.log(sortBy("watches"));
