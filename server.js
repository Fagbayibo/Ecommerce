import dotenv from "dotenv";
import express, { Router } from "express";
import { connectDB } from "./database/connectDB.js";
import productRoutes from './routes/product.route.js'
const app = express();

dotenv.config()
// Middleware
app.use(express.json());

// Route
app.use('/api/v1', productRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
  console.log("====================================");
  console.log(`Server running on ${PORT}`);
  console.log("====================================");
});
