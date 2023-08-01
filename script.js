// ***********setTimeout*********** \\

// const id = setTimeout(() => {
//   console.log("Time is over");
// }, 2000);

// Видалення Timeout за необхідністю
// clearTimeout(id);

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, I'm from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// ***********setInterval*********** \\

// const id = setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// Видалення Interval за необхідністю
// clearInterval(id)

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const refs = {
//   content: document.getElementById("content"),
//   text: document.getElementById("text"),
// };

// let count = 10;
// text.textContent = `Залишилось ${count} секунд`;

// const id = setInterval(() => {
//   count -= 1;
//   text.textContent = `Залишилось ${count} секунд`;
//   //   if (count === 0) {
//   //     clearInterval(id);
//   //     content.style.display = "none";
//   //   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   content.style.display = "none";
// }, 1000 * count);

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('1');

// setTimeout(() => {
//     console.log("2");
// }, 0)

// console.log('3');

// ***********Class Date*********** \\
// const currentDate = new Date();
// const targetDate = new Date("Sep 05 2023");

// console.log(targetDate - currentDate);

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const refs = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

setInterval(() => {
  const currentDate = new Date();

  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const time = currentDate.toLocaleTimeString("uk-UA");

  refs.day.textContent = arrDay[day];
  refs.date.textContent = date;
  refs.month.textContent = namesOfMonth[month];
  refs.year.textContent = year;

  refs.clock.textContent = `Поточний час: ${time}`;

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const secondsDeg = (360 / 60) * seconds;
  const minutesDeg = (360 / 60) * minutes;
  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

  refs.seconds.style.transform = `rotate(${secondsDeg}deg)`;
  refs.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  refs.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);
