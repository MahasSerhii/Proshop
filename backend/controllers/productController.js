import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//Fetching all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//Fetching product by original id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource Not Found");
  }
});

export { getProducts, getProductById };
