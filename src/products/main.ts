import { addProduct, calcStock, products} from './product.service';

addProduct({
  title: "Gel",
  createdAt: new Date(1993, 1, 1),
  stock: 12
});

addProduct({
  title: "Gel",
  createdAt: new Date(1993, 1, 1),
  stock: 20
});

console.log(products);
const total = calcStock();
console.log(total);
