export const doExange = (currency1, currency2, amount) => {
  const currencyFrom = parseFloat(currency1.buy) * amount;
  const currencyTo = parseFloat(currency2.sale);
  const result = (currencyFrom / currencyTo).toFixed(3);
  return result;
};
