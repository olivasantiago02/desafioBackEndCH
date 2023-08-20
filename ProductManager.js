class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(productData) {
      if (!this.validateProductData(productData)) {
        console.log("Los datos del producto son inválidos.");
        return;
      }
  
      if (this.products.some(product => product.code === productData.code)) {
        console.log("El código del producto ya existe.");
        return;
      }
  
      const newProduct = {
        id: this.productIdCounter,
        ...productData,
        stock: productData.stock || 0
      };
  
      this.products.push(newProduct);
      this.productIdCounter++;
      console.log("Producto agregado exitosamente.");
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductsById(id) {
      const product = this.products.find(product => product.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado.");
      }
    }
  
    validateProductData(productData) {
      const requiredFields = ["title", "description", "price", "image", "code"];
      return requiredFields.every(field => productData[field]);
    }
  }
  
  module.exports = ProductManager;
  