(() => {
  let productPrice = 100;
  productPrice = 120;
  console.log('productPrice', productPrice);

  let customerAge: number = 26;
  customerAge = customerAge + 1;

  let productInStock: number = 123;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('123');
  console.log('discount', discount);

  if(discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b10101;
  console.log('bin', bin);
})();
