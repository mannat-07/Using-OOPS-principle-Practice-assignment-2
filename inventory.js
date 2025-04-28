class Product {
    constructor(name, productId, price, stock = 0) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
            return true;
        }
        return false;
    }

    sell(quantity) {
        if (this.stock >= quantity && quantity > 0) {
            this.stock -= quantity;
            return true;
        }
        return false;
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        return true;
    }

    sellProduct(productId, quantity) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            return product.sell(quantity);
        }
        return false;
    }

    checkStock(productId) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            return product.stock;
        }
        return -1; // Product not found
    }
}

// Testing the system
console.log("=== Inventory Management System Test ===");

// Create products
const product1 = new Product("Laptop", 1001, 999.99, 10);
const product2 = new Product("Smartphone", 1002, 699.99);
const product3 = new Product("Headphones", 1003, 149.99, 25);

console.log("Created 3 products:");
console.log(product1);
console.log(product2);
console.log(product3);

// Create inventory
const inventory = new Inventory();

// Add products to inventory
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

console.log("\nInventory after adding products:");
console.log(inventory);

// Test adding stock
console.log("\nTesting adding stock:");
console.log(`Adding 15 Smartphones to stock: ${product2.addStock(15) ? "Success" : "Failed"}`);
console.log("Updated product2:", product2);

// Test selling products
console.log("\nTesting selling products:");
console.log(`Selling 5 Laptops: ${inventory.sellProduct(1001, 5) ? "Success" : "Failed"}`);
console.log(`Selling 20 Headphones: ${inventory.sellProduct(1003, 20) ? "Success" : "Failed (only ${product3.stock + 20} available)"}`);
console.log(`Selling 10 Smartphones: ${inventory.sellProduct(1002, 10) ? "Success" : "Failed"}`);
console.log(`Attempting to sell non-existent product: ${inventory.sellProduct(9999, 1) ? "Success" : "Failed (expected)"}`);

// Test checking stock
console.log("\nTesting stock checks:");
console.log(`Current stock of Laptops (ID 1001): ${inventory.checkStock(1001)}`);
console.log(`Current stock of Smartphones (ID 1002): ${inventory.checkStock(1002)}`);
console.log(`Current stock of Headphones (ID 1003): ${inventory.checkStock(1003)}`);
console.log(`Checking stock of non-existent product (ID 9999): ${inventory.checkStock(9999)}`);

console.log("\nFinal inventory status:");
console.log(inventory);