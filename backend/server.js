import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

// body parser middleware for parsing email and password for example
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.send("API is running");
});

app.use("/api/products/", productRoutes); //every time we navigate to url with api/products app call productRoutes
app.use("/api/users/", userRoutes);
app.use("/api/orders/", orderRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
