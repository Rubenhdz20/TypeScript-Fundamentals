(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((total, price) => total + price, 0);
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta = calcTotal([2, 4, 5, 6, 8]);
})();
