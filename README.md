# Using-OOPS-principle-Practice-assignment-2

## Inventory Management System

A simple JavaScript implementation of an inventory management system with Product and Inventory classes.

## Classes

### Product
- Properties: `name`, `productId`, `price`, `stock` (default: 0)
- Methods:
  - `addStock(quantity)`: Increases the stock count
  - `sell(quantity)`: Decreases stock if enough quantity is available

### Inventory
- Properties: `products` (array of Product objects)
- Methods:
  - `addProduct(product)`: Adds a product to inventory
  - `sellProduct(productId, quantity)`: Sells a product by updating stock
  - `checkStock(productId)`: Returns available stock for a product (-1 if not found)

## How to Run
1. Save the code in `inventory.js`
2. Run with Node.js: `node inventory.js`
3. View the console output

## Expected Output
See `output.txt` for example console output showing:
- Product creation
- Inventory management
- Stock addition
- Product sales
- Stock checks
- Final inventory status