//* Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8
// const bmi2 = calcBMI("110,4", "2,01");
// console.log(bmi2); //

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(",", "."));
//   height = Number(height.replace(",", "."));
//   const bmi = weight / (height * height);
//   return Number(bmi.toFixed(1));
// }

//! =======================================================

//* Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function min(a, b) {
//   return a < b ? a : b;
// }

// function min(a, b) {
//   return Math.min(a, b)
// }

//! =======================================================

//* Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(" ");
//   const a = Number(arr[0]);
//   const b = Number(arr[1]);
//   return a * b;
// }

// console.log(getRectArea("8 11"));

//! =======================================================

//* Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//   const length = arguments.length;
//   let sum = 0;

//   for (const num of arguments) {
//     sum += num;
//   }

//   return sum / length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//! =======================================================

// console.log(sum(1, 2));

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(10, 6));

//! =======================================================

//* Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(totalMinutes) {
//   /*
//   1. конвертуємо кількість хвилин у години (/60) та хвилини (%60)
//   2. додати 0 на початок, якщо результат це 1 символ
//   3. сформувати рядок у вигляді гг:хх
//   */
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;
//   const formattedHours = String(hours).padStart(2, 0);
//   const formattedMinutes = String(minutes).padStart(2, 0);
//   return `${formattedHours}:${formattedMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//! =======================================================

//* Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

//? addCourse(name) - додає курс до кінця колекції
//? removeCourse(name) - видаляє курс із колекції
//? updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'Ви вже маєте такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse("Vue", "Angular"); // 'Курс із таким ім'ям не знайдено'
// updateCourse("JavaScript", "Python");

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log(`Курс ${name} вже існує!`);
//   } else {
//     courses.push(name);
//   }
// }

// function removeCourse(name) {
//   // if (!courses.includes(name)) {
//   //   console.log(`Курсу ${name} не існує!`);
//   // } else {
//   //   const index = courses.indexOf(name);
//   //   courses.splice(index, 1);
//   // }

//   const index = courses.indexOf(name);
//   if (index === -1) {
//     console.log(`Курсу ${name} не існує!`);
//   } else {
//     courses.splice(index, 1);
//   }
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (index === -1) {
//     console.log(`Курсу ${oldName} не існує!`);
//   } else {
//     courses[index] = newName;
//   }
// }

//! =======================================================

// Допоможіть із цим будь ласка! Не знаю як це зрозуміти і зробити Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value = 8;

// console.log(arr.filter((num) => num > value));

// console.log(filterArray(arr, 8));

// function filterArray(numbers, value) {
//   const filtredArr = [];
//   for (const number of numbers) {
//     if (number > value) filtredArr.push(number);
//   }
//   return filtredArr;
// }

//! =======================================================

// Поясніть як вирішити через for ""Напиши функцію calculateTotalPrice(order),
// яка приймає один параметр order - масив чисел, і обчислює загальну суму
//  його елементів. Загальна сума елементів повинна зберігатися у змінній
// total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]));

//! =======================================================

// / / • Напиши • скрипт • пошуку найменшого числа у масиві. Код
// повинен працювати для будь-якого масиву чисел.
// Використовуй• цикл для розвʼязання задачі.

// function findMin(arr) {
//   let min = arr[0];
//   for (const num of arr) {
//     if (num < min) min = num;
//   }
//   return min;
// }

// const arr = [4, 2, 5, 2, 6, 0, 2, 5, 3, 22, 4, 2, 1, 50, -1, 2, 9];

// console.log(findMin(arr));

//! =======================================================
// function findMin(arr) {
//   arr = arr.flat(Infinity);
//   console.log(arr)
//   let min = arr[0];
//   for (const num of arr) {
//     if (num < min) min = num;
//   }
//   return min;
// }

// const arr = [
//   [10, 42, 2],
//   [[3], [[[5]]], 4, 32, 2],
//   [3, [3], 6, [3]],
//   [[[[[[10]]]]]],
// ];

// console.log(findMin(arr));

//! =======================================================

// let row = "";
// for (let i = 0; i < 10; i += 1) {
//   for (let j = 0; j < 10; j += 1) {
//     if (j === i || j + i == 9 || j === 0 || i == 0 || j === 9 || i === 9) {
//       row += "#";
//     } else {
//       row += " ";
//     }
//   }
//   row += "\n";
// }

// console.log(row);
//! =======================================================

// "нам потрібно відтворити такий код:
// *
// **
// ***
// ****
// ****
// ***
// **
// *
// як це зробити через цикли?"

let str = "";

for (let i = 0; i < 4; i += 1) {
  for (let k = 0; k < i + 1; k += 1) {
    str += "*";
  }
  str += "\n";
}

for (let i = 3; i >= 0; i -= 1) {
  for (let k = 0; k < i + 1; k += 1) {
    str += "*";
  }
  str += "\n";
}

console.log(str);
