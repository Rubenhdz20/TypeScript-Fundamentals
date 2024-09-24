(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "I am double great";

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);
})();
