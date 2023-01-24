let winnerArray = [];
let itemsLeft = 10000;
let runAmt = itemsLeft;
let items = {};

const addToArray = (random) => {
  let randomResult = random % itemsLeft; //only take random number between 1 and items left.
  // let random = random;
  if (randomResult === 0) {
    randomResult = 1;
  }
  console.log("RandomResult is: ", randomResult);
  if (itemsLeft === randomResult) {
    console.log("ItemsLeft is equal to randomResult", itemsLeft, randomResult);
    if (items[randomResult] !== undefined) {

      // winnerArray[randomResult]
      console.log("Pushed winnerArray[randomResult]: ", items[randomResult] + " to winnerArray BECAUSE ITEMSLEFT === RANDOMRESULT && winnerArray[randomResult] !== undefined");
      winnerArray.push(items[randomResult]);
    } else {
      console.log("Pushed itemsLeft: " + itemsLeft + " to winnerArray BECAUSE ITEMSLEFT === RANDOMRESULT");
      winnerArray.push(itemsLeft);
    }
    console.log("WinnerArray is: ", winnerArray);
    console.log("==========================================")
    itemsLeft--;
  } else {
    if (items[randomResult] === undefined) {
      let winner = randomResult;
      winnerArray.push(winner); //pushing winner to winnerArray
      if (items[itemsLeft] !== undefined) {
        //this means that the item has already been added to the winnerArray
        console.log("not undefined items[itemsLeft]", items[itemsLeft])
        items[winner] = items[itemsLeft]; //pushing itemsLeft to replace old winner
      } else {
        items[winner] = itemsLeft; //pushing itemsLeft to replace old winner
      }
      console.log("Putting itemsLeft: ", itemsLeft, " in items[" + winner + "]");
      console.log("Undefined: Putting winner: ", winner, " in winnerArray");

    } else {
      console.log("Defined: Putting items[randomResult]: ", items[randomResult], " in winnerArray");
      winnerArray.push(items[randomResult]); //winner becomes 10

      if (items[itemsLeft] !== undefined) { 
        //this is already
        let itemLeftVal = items[itemsLeft]; // 6
        items[randomResult] = itemLeftVal; //pushing 9 as items[1] becuase if next time someone chooses it, he will receive item 9.
        console.log("Putting items[itemsLeft]: ", itemsLeft, " in items[" + randomResult + "]");

      } else {
        items[randomResult] = itemsLeft; //pushing 9 as items[1] becuase if next time someone chooses it, he will receive item 9.
        console.log("Putting itemsLeft: ", itemsLeft, " in items[" + randomResult + "]");
      }
      
    }

    itemsLeft--;
    console.log("itemsLeft: ", itemsLeft);
    console.log("items: ", items);
    console.log("winnerArray: ", winnerArray);
    console.log("------------------------")
  }



  // itemsLeft--;
};


for (let i = 0; i < runAmt; i++) { 
  addToArray(Math.floor(Math.random() * 10000000000000000000000) + 1);
}

//check duplicates...


const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// const duplicateElementa = tofindDuplicates(winnerArray);
console.log(toFindDuplicates(winnerArray));