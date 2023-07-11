// const text = document.getElementById("text");
// // const text = document.querySelector("#text");

// console.dir(text);
// const container = document.getElementById("container");

// console.dir(container);

// text.textContent = "Я інший текст, прийшов з ДЖС";

// text.style.backgroundColor = "lime";
// text.classList.add("text");

// text.remove()

// container.innerHTML = "<p class='text'>Я новий параграф!!!!</p>";

// const pElement = document.createElement("p");
// pElement.className = "text";
// pElement.textContent = "Я новий параграф!!!!";

// container.append(pElement);

// container.insertAdjacentHTML(
//   "beforeend",
//   "<p class='text'>Я новий параграф!!!!</p><a href='#'>LINK</a>"
// );

//! ========================================

// Створити список технологій що вивчаються на курсі Fullstack за допомогою js

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

/*
1. створимо контейнер для лішок (ul)
2. перебрати масив
    2.1. створити лішку
    2.2. додати лішці текст
    2.3. додати лішку у контейнер ул
3. додати контейнер ул в документ
*/

//* 1

// const ulEl = document.createElement("ul");

// for (const technology of technologies) {
//   const liEl = document.createElement("li");
//   liEl.textContent = technology;
//   ulEl.appendChild(liEl);
// }

// document.body.appendChild(ulEl);

//* 2 map

/*
1. запустити цикл меп і всередині перетворити технології на лішки
2. джоін для того, щоб зібрати всі лішки в одну строку
3. огорнути створені лішки в ул
4. вставити розмітку на сторінку
*/

// const markup = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");
//   console.log(markup)

// document.body.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`);

//* 3 reduce

// const markup = technologies.reduce(
//   (acc, technology) => acc + `<li>${technology}</li>`,
//   ""
// );

// document.body.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`);

//! ========================================
// Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const fragment = document.createDocumentFragment();

// for (const { label, color } of colors) {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = label;
//   buttonEl.style.backgroundColor = color;
//   buttonEl.type = "button";
//   fragment.appendChild(buttonEl);
// }

// document.body.prepend(fragment);

/*
1. створити батька (фрагмент)
2. перебрати циклом масив кнопок
    2.1. створити елемент кнопки
    2.2. даємо кнопці підпис
    2.3. даємо кнопці стиль кольору
    2.4. додаємо тип кнопки
    2.5. додати кнопку в батька
3. пушим батька в дом
*/

//! ========================================

const form = document.getElementById("form");

console.dir(form)