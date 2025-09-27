import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use('/api/v1/auth', authRoutes)

app.listen(process.env.PORT || 5000, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})