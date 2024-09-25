(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = "e";
  myDynamicVar = {};

  myDynamicVar = "Hola Mundo";
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 420;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
