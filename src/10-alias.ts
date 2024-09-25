(() => {
  // ALIAS
  type UserID = string | number;
  let userId: UserID;

  // Literal Types
  type Size = "S" | "M" | "L";
  let shirtSize: Size;
  shirtSize = "S";
  shirtSize = "M";
  shirtSize = "L";

  function greeting(userId: UserID, size: Size) {
    if(typeof userId === "string") {
      console.log(`string ${userId.toLowerCase()}`);
    }
  };
})();
