import _ from 'lodash';

const data = [
  {
    username: "ruben",
    role: "admin"
  },
  {
    username: "roberto",
    role: "seller"
  },
  {
    username: "diego",
    role: "seller"
  },
  {
    username: "diego",
    role: "customer"
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
