import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc  Fetching all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc  Fetching product by original id
// @route  GET /api/products/:id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource Not Found");
  }
});

// @desc  Create new product
// @route  POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample product name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample product brand",
    category: "Sample product category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample product description",
  });
  const createdProduct = await product.save();
  res.status(200).json(createdProduct);
});

export { getProducts, getProductById, createProduct };
