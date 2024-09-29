(() => {
  type Size = "S" | "M" | "L" | "XL";

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  };

  const producto1 = createProductToJson("P1", new Date(), 23, "XL");
  console.log(producto1);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  };

  const producto2 = createProductToJsonV2("P1", new Date(), 12);
  console.log(producto2);
})();
