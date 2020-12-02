const arrCase1 = [
  false,
  100,
  [24, 33],
  "💩",
  55,
  "🥵",
  null,
  45,
  "Sanyia",
  66,
  "James",
  23,
];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];

//Log only the numbers in the array using loops.

// const sortAges = (arr) => {
//   let numbersOnly = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       numbersOnly.push(arr[i]);
//     }
//   }
//   return numbersOnly.sort((a, b) => a - b);
// };

//Log only the numbers in the array using forEach method.

const sortAges = (arr) => {
  let numbersOnly = [];
  arr.forEach((a) => {
    if (typeof a === "number") {
      numbersOnly.push(a);
    }
  });
  return numbersOnly.sort((a, b) => a - b);
};

console.log(sortAges(arrCase1));




