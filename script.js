// const btn = document.getElementById("btn");
// const link = document.getElementById("link");

// btn.addEventListener("click", onClick);
// link.addEventListener("click", onLinkClick, {
//   capture: true, // true - спливаюча подія, false - подія на занурення
//   once: false, // true - подія відбудеться тільки один раз, false - подія відбувається багато разів
//   passive: true, // true - заборона використання preventDefault, false - дозвіл на використання preventDefault
// }); //options({})/onCapture(true/false)

// function onClick(event) {
//   console.log("hello!");
//   console.log(event);
// }

// function onLinkClick(event) {
//   console.log(event);
//   event.preventDefault();
//   console.log("Посилання не відкрилось!");
// }

//! ===========================

// window.addEventListener("keydown", onKeyDown);

// function onKeyDown(e) {
//   console.log(e);
// }

//! ===========================

// const form = document.getElementById("form");

// form.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   console.dir(form);
//   console.log(`Hello ${form.elements.firstName.value} ${form.elements.lastName.value}, you was born ${2023 - form.elements.age.value}`);
//   form.reset();
// }

// form.elements.firstName.addEventListener("input", onInput);

// function onInput(e) {
//   console.log(e.target.value);
// }

// form.elements.firstName.addEventListener("change", onChange);

// function onChange(e) {
//   console.log(e.target.value);
// }

//! ===========================

/*
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

/*
1. Отримуємо рефси всіх елементів (кнопка відкрити, кнопка закрити, оверлей)
2. Вішаємо обробник подій по кліку на кнопку відкрити
    2.1. вішаємо на боді клас опен
3. Вішаємо обробник подій на крестик і на оверлей по кліку
    3.1. прибирати клас опен у боді
4. Вішаємо обробник подій на вікно по keydown
    4.1. Перевірка на клавішу, якщо це клавіша escape - то виклик ф-ції на закриття

*/

// const refs = {
//   openModalBtn: document.getElementById("openModalBtn"),
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
// };
// const openClass = "open";

// refs.openModalBtn.addEventListener("click", openModal);
// refs.overlay.addEventListener("click", closeModal);
// refs.modalCloseBtn.addEventListener("click", closeModal);

// function openModal() {
//   document.body.classList.add(openClass);
//   window.addEventListener("keydown", closeOnEsc);
// }

// function closeModal() {
//   document.body.classList.remove(openClass);
//   window.removeEventListener("keydown", closeOnEsc);
// }

// function closeOnEsc(event) {
//   if (event.code === "Escape") {
//     closeModal();
//   }
// }

//! ===========================

// const form = document.getElementById("form");

// form.elements.firstName.addEventListener("change", onChange);

// function onChange(e) {
//   const formData = new FormData(form);

//   console.log(formData.getAll("firstName"));
// }

//! ===========================

const form = document.getElementById("form");

form.elements.pass.addEventListener("blur", onBlur);

function onBlur(e) {
  const length = e.target.value.length;
  if (length >= 8 && length <= 15) {
    form.classList.add("correct");
    form.classList.remove("wrong");
  } else {
    form.classList.add("wrong");
    form.classList.remove("correct");
  }
}
