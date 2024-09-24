(() => {
  let isEnable = true;
  let isNew: boolean = false;

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5;
  console.log('isNew', isNew);
})();
