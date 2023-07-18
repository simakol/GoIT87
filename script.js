/*
HTML

   <div>
      DIV
      <p>
        P
        <span> SPAN </span>
      </p>
    </div>

*/

// const allElements = document.querySelectorAll("*");

// console.log(allElements);

// for (const element of allElements) {
//   element.addEventListener(
//     "click",
//     () => alert(`Занурення: ${element.tagName}`),
//     true
//   );
//   element.addEventListener("click", () => alert(`Сплиття: ${element.tagName}`));
// }

// document.getElementsByTagName("p")[0].addEventListener("click", (event) => {
//   event.stopImmediatePropagation();
// });

// document.getElementsByTagName("p")[0].addEventListener("click", () => {
//   console.log("aaaa");
// });

//! ================

// const body = document.querySelector("body");

// body.addEventListener("click", onClick);

// function onClick(event) {
//   console.log(event.target); // посилання на елемент, який викликав подію (елемнт, на якому подія відбулася)
//   console.log(event.currentTarget); // посилання на елемент, на якому висить обробник
// }

//! ================

// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

/*
1. Отримати всі рефси (форма, спан, тотал)
2. Повісити слухач подій по інпуту на всю форму
3. Реалізувати ренж
  3.1. Отримувати value ренжу і записувати його у спан
4. Створимо обʼєкт у якому збережемо ціну і кількість кг + додамо метод для підрахунку фінальної вартості (ціна * кг)
5. Фінальну вартість записати в параграф
*/

// const refs = {
//   form: document.getElementById("form"),
//   amount: document.getElementById("amount"),
//   total: document.getElementById("total"),
// };

// const data = {
//   price: 0,
//   amount: 0,
//   calcTotalPrice() {
//     return (this.price * this.amount).toFixed(2);
//   },
// };

// // виклик ключових ф-цій під час завантаження сторінки
// // заповнення обʼєкту data значеннями за замовчуванням з полів
// fillData();
// // задаємо кількість кілограм значенням за замовчуванням з інпуту
// setAmount();
// // показати ціну
// displayTotal();

// refs.form.addEventListener("input", onInput);

// function onInput({ target }) {
//   // перевірка, що таргет елемент є інпут кількості кг (що ми змінили його)
//   if (target.name === "quantity") {
//     setAmount();
//     // задаємо кількість кілограм значенням з інпуту
//   }
//   // заповнення обʼєкту data значеннями з інпутів
//   fillData();
//   // показати ціну
//   displayTotal();
// }

// function fillData() {
//   data.price = refs.form.elements.price.value;
//   data.amount = refs.form.elements.quantity.value;
// }

// function displayTotal() {
//   refs.total.textContent = `${data.calcTotalPrice()} грн`;
// }

// function setAmount() {
//   refs.amount.textContent = refs.form.elements.quantity.value;
// }

//! ================

