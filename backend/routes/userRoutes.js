import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import checkObjectid from "../middleware/checkObjectId.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser); //if POST request we don t need to navigate somewhere so we just call post and function as second argument
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, admin, checkObjectid, getUserById)
  .put(protect, admin, checkObjectid, updateUser)
  .delete(protect, admin, checkObjectid, deleteUser);

export default router;
