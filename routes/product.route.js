import express from "express";
import {createProduct, deleteProduct, getAllProduct, getSingleeProduct, updateProduct} from "../controllers/product.controller.js";

const router = express.Router();

// Get all products
router.get("/products", getAllProduct);
// Get single Products
router.get("/products/:id", getSingleeProduct);
// Create new product
router.post("/products", createProduct);
// Update existing product
router.put("/products/:id", updateProduct);
// Delete product
router.delete("/products/:id", deleteProduct);

export default router;
