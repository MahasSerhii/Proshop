import dotenv from "dotenv";
dotenv.config();

const { PAYMENT_TAX, FREE_SHIPPING_SUM } = process.env;
function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function calcPrices(orderItems) {
  const itemsPrice = addDecimals(
    orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = addDecimals(itemsPrice > FREE_SHIPPING_SUM ? 0 : 10);
  const taxPrice = addDecimals(
    Number(((PAYMENT_TAX / 100) * itemsPrice).toFixed(2))
  );
  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
}
