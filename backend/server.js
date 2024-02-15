import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.get("/", async (req, res) => {
  res.send("API is running");
});

app.use("/api/products/", productRoutes); //every time we navigate to url with api/products app call productRoutes
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
