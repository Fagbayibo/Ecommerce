import dotenv from "dotenv"
import mongoose from "mongoose";


dotenv.config()
export const connectDB = async  () => {
  console.log(process.env.MONGODB_URL);
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database connected successfully `);
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
};


