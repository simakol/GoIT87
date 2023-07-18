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
