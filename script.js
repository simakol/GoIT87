//? map - повертає новий масив, кожен елемент якого був змінений умовою колбек ф-ції
// arr.map((el, i, arr) => body);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((el) => el * el);
// console.log(arr);
// console.log(newArr);

//? filter - повертає новий масив, який містить тільки ті елементи, які задовольняють умову колбек ф-ції

// const arr = [6, -8, 99, 3, -90, 111, -87, 56, 44, -42];
// const newArr = arr.filter((el) => el > 0);

// console.log(arr);
// console.log(newArr);

//? find - повертає перший елемент з масиву, який підходить умові колбек ф-ції, якщо такого елементу не було знайдено - поверне undefined

// const arr = [
//   { name: "Oleg", status: "user" },
//   { name: "Alex", status: "admin" },
//   { name: "Vika", status: "user" },
// ];

// const adminUser = arr.find(({ status }) => status === "admin");

// console.log(adminUser);

//? findIndex - повертає індекс першого елементу з масиву, який підходить умові колбек ф-ції, якщо такого елементу не було знайдено - поверне -1

// const arr = [
//   { name: "Oleg", status: "user" },
//   { name: "Alex", status: "admin" },
//   { name: "Vika", status: "user" },
// ];

// const adminUserIndex = arr.findIndex(({ status }) => status === "admin");

// console.log(adminUserIndex);

//? every - повертає true якщо кожен елемент масиву проходить перевірку умовою колбек ф-ції, інакше - повертає false

// const arr = [5, 95, 65, 90, 100, 55, 15, 85, 150];
// const check = arr.every((el) => el % 5 === 0);
// console.log(check);

//? some - повертає true якщо хоча б один елемент масиву проходить перевірку умовою колбек ф-ції, інакше - повертає false

// const arr = [-6, -10, -99, -88, 22, -96];
// const check = arr.some((el) => el > 0);
// console.log(check);

//? sort - сортує масив за умовою колбек ф-ції(якщо без ф-ції - сортує в лексикографічному порядку) - мутує масив

// const arr = [6, -8, 99, 3, -90, 111, -87, 56, 44, -42];

// arr.sort((a, b) => a - b); // сортування масиву за зростанням
// arr.sort((a, b) => b - a); // сортування масиву за спаданням

// console.log(arr);

// const arr = ["c", "p", "o", "h", "a", "y", "e", "b", "A"];

// const sort1 = [...arr].sort((a, b) => a.localeCompare(b)); // сортування в алфавітному порядку
// const sort2 = [...arr].sort((a, b) => b.localeCompare(a)); // сортування в звороньому алфавітному порядку

// console.log(arr)
// console.log(sort1)
// console.log(sort2)

//? reduce - ітерує масив і в залежності від умови та початкового значення повертає те, що потрібно розробнику

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, el) => el + acc, 0);
// console.log(sum);

// 1 коли є початкове значення

// 1. arr.reduce((acc = 0, el = 1) => 1 + 0, 0);
// 2. arr.reduce((acc = 1, el = 2) => 1 + 2, 0);
// 3. arr.reduce((acc = 3, el = 3) => 3 + 3, 0);
// 4. arr.reduce((acc = 6, el = 4) => 6 + 4, 0);
// 5. arr.reduce((acc = 10, el = 5) => 10 + 5, 0);
// result: 15

//2 коли немає початкового значення

// 1. arr.reduce((acc = 1, el = 2) => 1 + 2);
// 2. arr.reduce((acc = 3, el = 3) => 3 + 3);
// 3. arr.reduce((acc = 6, el = 4) => 6 + 4);
// 4. arr.reduce((acc = 10, el = 5) => 10 + 5);
// result: 15

//! ========================================

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//* Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));

//! ========================================

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// console.table(cars)

//! ========================================

//* Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, carType) => cars.filter((car) => car.type === carType);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

//! ========================================

//* Example 6 - Метод find
// const getCarByModel = (cars, carModel) =>
//   cars.find((car) => car.model === carModel);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//! ========================================

//* Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//! ========================================

//* Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === "asc"
//       ? b.model.localeCompare(a.model)
//       : a.model.localeCompare(b.model)
//   );

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return b.model.localeCompare(a.model);
//       case "desc":
//         return a.model.localeCompare(b.model);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//! ========================================

//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//! ========================================

//* Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);

// console.table(getModelsOnSale(cars));

//! ========================================

//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

//! ========================================

// const friends = ["Sharron Pace", "Briana Decker", "Sharron Pace"];

// const uniqueFriends = [...new Set(friends)];
// console.log(uniqueFriends);

// const uniqueFriends = friends.filter(
//   (friend, index, array) => array.indexOf(friend) === index
// );

// console.log(uniqueFriends);

/* ["Sharron Pace", "Briana Decker"]
1. friends.filter(
  (friend = "Sharron Pace", index = 0, array) => array.indexOf("Sharron Pace") === 0 // 0 === 0 - true
);
2. friends.filter(
  (friend = "Briana Decker", index = 1, array) => array.indexOf("Briana Decker") === 1 // 1 === 1 - true
);
3. friends.filter(
  (friend = "Sharron Pace", index = 2, array) => array.indexOf("Sharron Pace") === 2 // 0 === 2 - false - елемент не піде в новий масив, тому що він вже там існує
);

*/

//! ========================================

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const courses = students.flatMap((student) => student.courses);

// console.log(courses);

// const courses = [
//   [
//     "математика",
//     "фізика",
//     ["фізика", "біологія", ["інформатика", "математика", [0, 3, [[[[4, 3]]]]]]],
//   ],
// ];

// console.log(courses.flat(Infinity));
