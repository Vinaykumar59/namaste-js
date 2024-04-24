// destructuring

// Array destructuring
console.log("array destructuring");
const arr = [1, 2, 3];

// assigning without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log("a, b, c=", a, b, c);

// assigning with destructuring
const [x, y, z] = arr;
console.log("x, y, z=", x, y, z);

let [a1, , c1] = arr;
console.log("a1,c1 = ", a1, c1);

// switching variables using destructuring
[a1, c1] = [c1, a1];
console.log("swapped using destructuring a1,c1 = ", a1, c1);

// neested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log("nested i,j,k=", i, j, k);

// default values when array is shorter than required
const [p = 1, q = 1, r = 1] = [2, 4];
console.log("defalut values p,q,r =", p, q, r);

// OBJECT DESTRUCTURING
console.log("OBJECT DESTRUCTURING");
const restaurant = {
  name: "Classicano Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const { name, openingHours } = restaurant;
console.log("name, openingHours", name, openingHours);
// destructure  using different variable names
const {
  name: restaurantName,
  openingHours: restaurantTiming,
  mainMenu: menu,
} = restaurant;
console.log(
  "restaurantName,restaurantTiming,menu =",
  restaurantName,
  restaurantTiming,
  menu
);

// setting default values while destructuring
const { menuitem = [], starterMenu: starters = [] } = restaurant;
console.log("menuitem,starterMenu", menuitem, starters);

// nested objects
const { fri } = openingHours;
console.log("fri", fri);

// mutating variables
let m = 111;
let n = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a: m, b: n } = obj);
console.log("m,n", m, n);

// SPREAD OPERATOR
const array = [7, 8, 9];
const newArr = [1, 2, ...array];
console.log("spread operator", newArr, ...newArr);

// Iterables: arrays, strings, maps, sets. Not OBJECTs
const str = "nick";
const letters = [...str, " ", "s"];
console.log("letters", letters);

const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt("let's make pasta! Ingredient 1?"),
];
console.log('ingredients',ingredients);
restaurant.orderPasta(...ingredients);

// rest operators

// SPREAD , because on RIGHT side of =
const arr1 = [1,2, ...[3,4]];
// REST because on LEFT side of =
const [a2,b2, ...others] = [1,2,3,4,5];
console.log('rest operators',a2,b2,others);

// NULLISH COALISING operator (??)
// NULLISH: null and undefined (NOT 0 or '')
console.log('----NULLISH------');
// restaurant.numguests = 0;
const guestCorrect = restaurant.numguests ??  10;
console.log('guestCorrect', guestCorrect);


function calculateSalary() {
  var currentSalary = 500000;
  for (let i = 25; i <= 58; i++) {
    currentSalary = currentSalary + 0.1*currentSalary;
  }
  console.log('retirement salary', currentSalary);
};
calculateSalary();