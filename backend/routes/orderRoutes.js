import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import checkObjectid from "../middleware/checkObjectId.js";
const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, checkObjectid, getOrderById);
router.route("/:id/pay").put(protect, checkObjectid, updateOrderToPaid);
router
  .route("/:id/deliver")
  .put(protect, admin, checkObjectid, updateOrderToDelivered);
export default router;
