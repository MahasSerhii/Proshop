export const BASE_URL =
  process.env.NOD_ENV === "development" ? "http://localhost:8000" : "";
export const PRODUCTS_URL = "/api/products";
export const PRODUCT_URL = "/api/products/:id";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";