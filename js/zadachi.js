// module 1
// 1
// Change code below this line
const productName = 'Droid';
const pricePerItem = 2000;
// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// 2
let productName = 'Droid';
let pricePerItem = 2000;

// Change code below this line
pricePerItem = 3500;
productName = 'Repair droid';

// 3
// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

// 4
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

// 5
const productName = 'Droid';
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// 6
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// 7
// Change code below this line
function sayHi() {
  console.log('Hello, this is my first function!');
}

sayHi();

// 8
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// 9
function add(a, b, c) {
  return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// 10
function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

// 11
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}

// 12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}

// 13
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

// 14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === 'jqueryismyjam';

  // Change code above this line
  return isMatch;
}

// 15
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

// 16
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered > available) {
    message = `Not enough goods in stock!`;
  } else {
    message = `Order is processed, our manager will contact you.`;
  }

  // Change code above this line
  return message;
}

// 17
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = `Insufficient funds!`;
  } else {
    customerCredits -= totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }

  // Change code above this line
  return message;
}

// 19
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    // Change this line
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

//20
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = `There are no products in the order!`;
  } else if (ordered > available) {
    message = `Your order is too large, there are not enough items in stock!`;
  } else {
    message = `The order is accepted, our manager will contact you`;
  }

  // Change code above this line
  return message;
}

// 21
function isNumberInRange(start, end, number) {
  const isInRange = start <= number && number <= end; // Change this line

  return isInRange;
}

// 22
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

  return canAccessContent;
}

// 23
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

// 24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  // Change code above this line
  return discount;
}

// 25
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';

  // Change code above this line
  return message;
}

// 26
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line
  message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
  // Change code above this line
  return message;
}

// 27
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (type) {
    case 'starter':
      price = 0;
      break;

    case 'professional':
      price = 20;
      break;

    case 'organization':
      price = 50;
      break;
  }

  // Change code above this line
  return price;
}

// 28
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;

    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;

    default:
      message = 'Access denied, wrong password!';
  }

  // Change code above this line
  return message;
}

// 29
function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case 'China':
      message = 'Shipping to China will cost 100 credits';
      break;

    case 'Chile':
      message = 'Shipping to Chile will cost 250 credits';
      break;

    case 'Australia':
      message = 'Shipping to Australia will cost 170 credits';
      break;

    case 'Jamaica':
      message = 'Shipping to Jamaica will cost 120 credits';
      break;

    default:
      message = 'Sorry, there is no delivery to your country';
  }
  // Change code above this line
  return message;
}

// 30
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

// 31
const courseTopic = 'JavaScript essentials';
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);
// Change code above this line

// 32
function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}

// 33
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
  /// Change code above this line
  return result;
}

// 34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

// 35
function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

// 36
function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  result = message.includes('spam') || message.includes('sale');
  // Change code above this line
  return result;
}

// 2 module
// 1
function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult';
  }

  return 'You are a minor';
}

// 2
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }

  return 'Access denied, wrong password!';
  // Change code above this line
}

// 3
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }

  return 'The order is accepted, our manager will contact you';
  // Change code above this line
}

// 4
const fruits = ['apple', 'plum', 'pear', 'orange'];

// 5
const fruits = ['apple', 'plum', 'pear', 'orange'];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// 6
const fruits = ['apple', 'plum', 'pear', 'orange'];
fruits[1] = 'peach';
fruits[3] = 'banana';

// 7
const fruits = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruits.length;

// 8
const fruits = ['apple', 'peach', 'pear', 'banana'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// 9
function getExtremeElements(array) {
  // Change code below this line
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [firstElement, lastElement];

  // Change code above this line
}

//10
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);

  // Change code above this line
  return words;
}

// 11
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let separateWords = message.split(' ');
  let numberOfWords = separateWords.length;

  let calculateEngravingPrice = numberOfWords * pricePerWord;

  return calculateEngravingPrice;
  // Change code above this line
}

// 12
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join(delimeter);

  // Change code above this line
  return string;
}

// 13
function slugify(title) {
  // Change code below this line
  const slug = title.toLowerCase().split(" ").join("-");

  return slug;

  // 14
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2);
 
//15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

  const allClients = oldClients.concat(newClients);

// 16
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  let concatArray = firstArray.concat(secondArray);

  if (concatArray.length > maxLength ) {
    return concatArray.slice(0, maxLength);
  }

  return concatArray;
    // Change code above this line
  }
  
// 17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
  }
  
// 18
function calculateTotal(number) {
 // Change code below this line

let calculateTotal = 0;
for (let i = 1; i <= number; i += 1) {
  calculateTotal += i;
  }
return calculateTotal;
  // Change code above this line
  }
  
// 19
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
  }

// 20
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}

  
function findLongestWord(string) {
  // Change code below this line
const arrayString = string.split(" ");
  let findLongestWord = arrayString[0].length;
  
  for (let i = 0; i > findLongestWord; i += 1) {
    if (findLongestWord > findLongestWord[i]) {
       findLongestWord = findLongestWord[i]; 
      } 
  }
return findLongestWord;
  // Change code above this line
  }

  // 21
  function findLongestWord(string) {
  // Change code below this line
  const arrayString = string.split(" ");
  let words = arrayString[0];
   
   for (let i = 0; i < arrayString.length; i += 1) {

    if (arrayString[i].length > words.length) {
       words = arrayString[i]; 
      } 
  }
return words;
  // Change code above this line
  }

// 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
 for (let i = min; i <= max; i += 1) {
   numbers.push(i);
 }
  // Change code above this line
  return numbers;
  }

  // 23
  function filterArray(numbers, value) {
  const newArray = [];
  console.log(newArray);
  console.warn(value);

  for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);

    if (numbers[i] > value) {
      newArray.push(numbers[i]);
      console.log(newArray);
      continue;
    }
  }

  return newArray;
}

  filterArray([12, 24, 8, 41, 76], 20);

//24 
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  
  return fruits.includes(fruit); 
  }

// 25
function getCommonElements(array1, array2) {
  // Change code below this line
  const newArray = [];
  console.log(newArray);
  console.warn(array1);
  console.warn(array2);

  for (const element of array1) {
    console.log(element);

    if (array2.includes(element)) {
      newArray.push(element);
      console.log(newArray);
    }
  }

  return newArray;
}

  getCommonElements([1, 2, 3], [1, 2, 4]);

// 26
  function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const element of order) {
    total += element;
  }

  // Change code above this line
  return total;
  }
  
// 27
  function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

    for (const number of numbers) {
   
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
  }
  
// 28
  const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
  const e = 8 % 6;
  
// 29
function getEvenNumbers(start, end) {
   // Change code below this line
  const evenArray = [];

  for (let i = start; i <= end; i += 1) {

    if (i % 2 === 0) {
      evenArray.push(i)
    }
  }

  return evenArray;
    // Change code above this line
  }

// 30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
  }

// 31
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }

  
  // Change code above this line
  }
  
// 32
function includes(array, value) {
  // Change code below this line
 for (let i = 0; i <= array.length; i +=1) {
   if (array[i] === value)
   return true;
 }
 return false;
  // Change code above this line
}

// 3 module
// 1
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"], 
  };
  
// 2
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
  };
  
// 3
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  
// 4
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];

// 5
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
  const aptTags = apartment["tags"];

// 6
apartment.price = 5000;
apartment.rating = 4.7;

apartment.owner.name = "Henry Sibola";
  apartment.tags.push("trusted");

// 7
apartment.area = 60;
apartment.rooms = 3;

apartment.location = {
  country: "Jamaica",
  city: "Kingston",
  };

// 8
 const product = {
  name,
  price,
  image,
  tags,
  // Change code below this line
  // Change code above this line
  };

// 9
const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
 [passwordInputName]: "jqueryismyjam",
  // Change code above this line
  };

// 10
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  console.log(key);
  keys.push(key);
  
  console.log(apartment[key]);
  values.push(apartment[key]);
};

console.log(keys);
  console.log(values);

// 11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
};

  // Change code above this line
  };

// 12
function countProps(object) {
  let propCount = 0;
  // Change code below this line
   propCount = Object.keys(object).length;
   
  // Change code above this line
  return propCount;
  }

// 13
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  
  values.push(apartment[key]);
  console.log(values);
};

// 14
function countProps(object) {
  // Change code below this line
  let propCount = 0;
  propCount = Object.keys(object).length;
  

  return propCount;
  // Change code above this line
  };

// 15
const keys = Object.keys(apartment);
  const values = Object.values(apartment);

// 16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  console.log(totalSalary);

  for (const value of values) {
    totalSalary += value;
  }
  // Change code above this line
  console.log(totalSalary);
  return totalSalary;
  }

// 17
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  
  hexColors.push(color.hex);
  console.log(hexColors);
  
  rgbColors.push(color.rgb);
  console.log(rgbColors);
  }

// 18
function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    
    if (productName === product.name) {
      return product.price;
    };

      }
  return null;
  // Change code above this line
  }

// 19
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let returnValues = [];
  console.log(returnValues);

  for (const product of products) {
    
    console.log(product);
    console.log(propName);
    
    for (const key in product) {

      if (propName === key) {

        console.log(propName);
        console.log(key);

        returnValues.push(product[propName]);
        
        console.log(returnValues);
        
      }
    }
  }
return returnValues;
 
  // Change code above this line
  }

// 20
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
  console.log(totalPrice);

  for (const product of products) {
    console.log(product);
    console.log(productName);

    if (productName === product.name) {
      console.log(productName);
      console.log(product.name);

      totalPrice = product.price * product.quantity;

      console.log(totalPrice);
    }
  }

  console.log(totalPrice);
  return totalPrice;


  // Пиши код выше этой строки
  }
  
// 21
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
  

// 23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24
for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// 25
const { today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow:
    { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;
  
// 26
function calculateMeanTemperature(forecast) {
  const { today: { low: todayLow, high: todayHigh }, tomorrow:
 { low: tomorrowLow, high: tomorrowHigh } } = forecast;
    // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }

// 27
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
  const worstScore = Math.min(...scores);

// 28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// 29
  const finalSettings = { ...defaultSettings, ...overrideSettings };

// 30
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  

  const finalTask = {category, priority, ...data, completed};

  return finalTask; 

  // Change code above this line
  }

// 31
// Change code below this line
function add(...args) {
 let summ = 0;

  for (const arg of args) {
    summ += arg;
    console.log(summ);
  }
  console.log(summ);
  return summ;
  // Change code above this line
  }

// 32
// Change code below this line
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (firstNumber < arg) {
    total += arg;}
  }

  return total;
  // Change code above this line
  }

// 33
// Change code below this line
function findMatches(array, ...numbers) {
  const matches = []; // Don't change this line
  for (const number of numbers) {
    console.log(number);
    console.log(array);
    if (array.includes(number)) {
      matches.push(number);
    }
  }
  // Change code above this line
  return matches;
  }

// 34
removeBook(bookName) {
    return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`
  }

// 35
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const indexOfBook = this.books.indexOf(oldName);
    this.books.splice(indexOfBook, 1, newName)
    // Change code above this line
  },
  };

// 36
  potions: [],

// 37
getPotions() {
    return this.potions;
  }

// 38
  this.potions.push(potionName);

// 39
  const indexOfPotion = this.potions.indexOf(potionName);
  this.potions.splice(indexOfPotion, 1);
  
// 40
  const indexOfPotion = this.potions.indexOf(oldName);
  this.potions.splice(indexOfPotion, 1, newName);
  
// 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

   removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        if (potionIndex === -1) {
          return `Potion ${potionName} is not in inventory!`;
        }
        this.potions.splice(potionIndex, 1);
      }
    }
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];
    
       if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
  // Change code above this line
};