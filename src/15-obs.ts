(() => {
  type Size = "S" | "M" | "L" | "XL";
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: "Gel",
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });

  console.log(products);
  products.push();
})();
