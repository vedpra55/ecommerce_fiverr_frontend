export function OrderPrice(cartTotal) {
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  const shippingPrice =
    round2(cartTotal * 0.15) < 800 ? round2(cartTotal * 0.15) : 800;

  const discount = round2(cartTotal * 0.1);
  const totalPrice = round2(cartTotal + shippingPrice - discount);
  return {
    discount,
    totalPrice,
    shippingPrice,
  };
}
