(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login("rubhernandez@gmail.com", "canelo312");
  login({
    email: "rubhernandez@gmail.com",
    password: 420
  });

  type Size = "S" | "M" | "L" | "XL";

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  }) => {
    products.push(data);
  };

  addProduct({
    title: "Gel",
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });

  console.log(products);
})();
