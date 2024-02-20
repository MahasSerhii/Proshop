import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// protect user routes
const protect = asyncHandler(async (req, res, next) => {
  let token;
  // read JWT token from cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password"); // We get userId from token that we set at userController.js and remove password from object that we received also with req.user we set request available globally through BE
      next(); // continue submitting next part of middleware
    } catch (error) {
      console.log("JWT token error", error);
      res.status(401);
      throw new Error("User not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("User not authorized, no user s token");
  }
});

// admin user middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("User not authorized as admin");
  }
};

export { admin, protect };
