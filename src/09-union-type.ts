(() => {
  let userId: string | number;
  userId = 420;

  function greeting(myText: string | number) {
    if(typeof myText === "string") {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      myText.toFixed;
    }
  };

  greeting("Holi");
  greeting(12);
})();
