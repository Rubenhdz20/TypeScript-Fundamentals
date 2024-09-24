(() => {
  let prices = [1, 2, 3, 4, 5, 6];
  // prices.push("numbers");
  // prices.push(true);
  // prices.push({});
  prices.push(420);

  let products = ["hola", true];
  products.push(false);

  let mixed: (string | number | boolean | object)[] = ["canelo"];

  let numbers = [1, 2, 3, 4, 5, 6];
  numbers.map(item => item * 2);
})();
