import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import checkObjectid from "../middleware/checkObjectId.js";
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);
router
  .route("/:id")
  .get(checkObjectid, getProductById)
  .put(protect, admin, checkObjectid, updateProduct)
  .delete(protect, admin, checkObjectid, deleteProduct);
router.route("/:id/reviews").post(protect, checkObjectid, createProductReview);

export default router;
