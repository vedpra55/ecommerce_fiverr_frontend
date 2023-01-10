const COEFFICIENT = 1.7;
const LIRA_RUB = 3.5;

export const adaptPrice = (priceTL) => {
  return (
    Math.round(Math.round(Number(priceTL) * LIRA_RUB * COEFFICIENT) / 100) *
      100 -
    10
  );
};
