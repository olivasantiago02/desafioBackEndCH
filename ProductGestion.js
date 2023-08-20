const ProductManager = require('./ProductManager');

const productManager = new ProductManager();

productManager.addProduct({
  title: "Product 1",
  description: "Description of Product 1",
  price: 29.99,
  image: "",
  code: "P1",
  stock: 50
});

productManager.addProduct({
  title: "Product 2",
  description: "Description of Product 2",
  price: 49.99,
  image: "product2.jpg",
  code: "P2"
});

console.log(productManager.getProducts());

const foundProduct = productManager.getProductsById(1);
console.log(foundProduct);

const notFoundProduct = productManager.getProductsById(10);
