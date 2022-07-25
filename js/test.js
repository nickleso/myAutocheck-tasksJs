// let message = 'JavaScript is in my blood';
// let separateWords;
// let numberOfWords;
// let pricePerWord = 10;
// let calculateEngravingPrice;

// separateWords = message.split(' ');
// console.log(separateWords);
// numberOfWords = separateWords.length;
// console.log(numberOfWords);

// calculateEngravingPrice = numberOfWords * pricePerWord;
// console.log(calculateEngravingPrice);
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   let separateWords;
//   let numberOfWords;
//   separateWords = message.split(' ');
//   console.log(separateWords);
//   numberOfWords = separateWords.length;
//   console.log(numberOfWords);
//   calculateEngravingPrice = numberOfWords * pricePerWord;
//   return calculateEngravingPrice;
//   // Change code above this line
// }

// // const number = 1;
// // console.log(number);

// let start = 1;
// console.log(start);

// let number = 3;

// function calculateTotal(number) {
//   // Change code below this line

//   let calculateTotal = 0;
//   for (let i = 1; i <= number; i += 1) {
//     calculateTotal += i;
//   }
//   return calculateTotal;
//   // Change code above this line
// }
// console.log(calculateTotal);

// const string = 'Google do a roll';
// console.log(string);
// const arrayString = string.split(' ');
// console.log(arrayString);

// console.log(arrayString[0].length);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const value = 3;
// console.log(value);

// function filterArray(numbers, value) {
//   const newArray = [];
//   console.log(newArray);
//   console.warn(value);

//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//       console.log(newArray);
//       continue;
//     }
//   }

//   return newArray;
// }

// filterArray([12, 24, 8, 41, 76], 20);

// function filterArray(numbers, value) {
// Change code below this line
//   const filteredNumbers = [];
//   console.log(filteredNumbers);

//   for (const element of numbers) {
//     if (number > value) {
//       console.log(number);

//       filteredNumbers.push(number);
//       console.log(filteredNumbers);
//     }
//   }

//   return filteredNumbers;

//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   console.log(newArray);
//   console.warn(array1);
//   console.warn(array2);

//   for (const element of array1) {
//     console.log(element);

//     if (array2.includes(element)) {
//       newArray.push(element);
//       console.log(newArray);
//     }
//   }

//   return newArray;
// }

// getCommonElements([1, 2, 3], [1, 2, 4]);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order) {
//     console.log(element);
//     total += element;
//     console.log(total);
//   }

//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// const a = 3 % 3;
// const b = 5 % 4;
// const c = 36 % 11;
// const d = 65 % 12;
// const e = 18 % 8;

// console.log(a, b, c, d, e);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   console.log(totalSalary);

//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   console.log(color.hex);
//   hexColors.push(color.hex);
//   console.log(hexColors);
//   rgbColors.push(color.rgb);
//   console.log(rgbColors);
// }

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let price = 0;
//   console.log(price);

//   for (const product of products) {
//     console.log(product);

//     if (productName === product.name) {
//       price = product.price;

//       console.log(price);
//       return price;
//     }

//     console.log(price);
//     return null;
//   }

//   // Change code above this line
// }

// // getProductPrice({ name: 'Radar', price: 1300, quantity: 4 });
// getProductPrice();

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let returnValues = [];
//   console.log(returnValues);

//   for (const product of products) {
//     console.log(product);
//     console.log(propName);

//     for (const key in product) {
//       if (propName === key) {
//         console.log(propName);
//         console.log(key);

//         returnValues.push(product[propName]);

//         console.log(returnValues);
//       }
//     }
//   }
//   return returnValues;

//   // Change code above this line
// }
// getAllPropValues('quantity');
// getAllPropValues('name');

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   console.log(totalPrice);

//   for (const product of products) {
//     console.log(product);
//     console.log(productName);

//     if (productName === product.name) {
//       console.log(productName);
//       console.log(product.name);

//       totalPrice = product.price * product.quantity;

//       console.log(totalPrice);
//     }
//   }

//   console.log(totalPrice);
//   return totalPrice;

//   // Пиши код выше этой строки
// }

// calculateTotalPrice('Droid');

//
// function add(...args) {
//   let summ = 0;

//   for (const arg of args) {
//     summ += arg;
//     console.log(summ);
//   }
//   console.log(summ);
//   return summ;

//   // args = ...args1, ...args2;
//   // let summ = args1 + args2;
// }

// add(12, 4, 11, 48);

// function findMatches(array, ...numbers) {
//   const matches = [];
//   console.log(array);
//   console.log(numbers);

//   for (const number of numbers) {
//     console.log(number);
//     console.log(array);
//     if (array.includes(number)) {
//       matches.push(number);
//     }
//   }

//   // Change code above this line

//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(oldName);
//     console.log(newName);

//     const indexOfBook = this.books.indexOf(oldName);
//     console.log(indexOfBook);
//     this.books.splice(indexOfBook, 1, newName);

//     // Change code above this line
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
console.log(atTheOldToad.addPotion);

// 4 module
// 1
const result = makePizza();
const pointer = makePizza;

// 2
