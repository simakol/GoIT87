// ******************************Lazy Loading****************************** \\

// Тествоий масив для lazy-loading
// const cats = [
//   "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//   "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//   "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//   "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//   "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//   "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//   "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//   "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//   "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
// ];

// const containerCats = document.querySelector(".js-cats");

// const markup = cats
//   .map(
//     (url) => `
// <li>
//   <img src="${url}" alt="cat" loading="lazy" width="300">
//   <p>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque!
//   </p>
// </li>
// `
//   )
//   .join("");

// const markup = cats.reduce(
//   (acc, url) =>
//     acc +
//     `
// <li>
//   <img src="${url}" alt="cat" loading="lazy" width="300">
//   <p>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque!
//   </p>
// </li>
// `,
//   ""
// );

// containerCats.insertAdjacentHTML("beforeend", markup);

// *****************************Throttle & Debounce***************************** \\

const input = document.querySelector(".js-search");

// input.addEventListener("input", handleInput);

//* Throttle
// input.addEventListener(
//   "input",
//   _.throttle(handleInput, 1000, {
//     trailing: false,
//     leading: true,
//   })
// );

//* Debounce
// input.addEventListener(
//   "input",
//   _.debounce(handleInput, 1000, {
//     trailing: true,
//     leading: false,
//   })
// );

// function handleInput(event) {
//   console.log(event.target.value);
// }

// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];
const historyX = [];
const historyO = [];

let player = "X";

const content = document.querySelector(".content");

content.addEventListener("click", handleClick);

createMarkup();

// функція створення поля
function createMarkup() {
  let markup = "";
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

function handleClick(event) {
  if (event.target.textContent || event.target === event.currentTarget) {
    // вихід з функції якщо комірка зайнята, або якщо ми клікнули не на комірку
    return;
  }

  const id = Number(event.target.dataset.id);
  let isWinner = false;

  if (player === "X") {
    // логіка гравця крестик
    historyX.push(id); // додаємо клітинку в історію
    isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
  } else {
    // логіка гравця нулик
    historyO.push(id); // додаємо клітинку в історію
    isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
  }

  if (isWinner) {
    // якщо ми перемогли - показуємо модальне вікно
    const instance = basicLightbox.create(`
      <div class="box">
        <h1>Player ${player} is winner!</h1>
      </div>
    `);
    instance.show();
    resetGame();
    return;
  }

  event.target.textContent = player; // записати в комірець X або O
  player = player === "X" ? "O" : "X"; // змінюємо гравця на наступний хід
}

function checkWinner(history) {
  // combination -> some -> every -> includes
  return combination.some((item) => item.every((id) => history.includes(id)));
  // перевіряємо наявність усіх айді які є успішними комбінаціями всередині нашої історії
}

function resetGame() {
  createMarkup();
  player = "X";
  historyX.splice(0);
  historyO.splice(0);
}

/*
history = [6, 4, 5]

combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

1. combination.some((item) => item.every((id) => history.includes(id)));
  1.1. (item =  [1, 2, 3]) =>  [1, 2, 3].every((id) => history.includes(id))
    1.1.1. [1, 2, 3].every((id = 1) => [6, 4, 5].includes(id = 1)) // false
  1.2. (item = [4, 5, 6]) => [4, 5, 6].every((id) => history.includes(id))
    1.2.1. [4, 5, 6].every((id = 4) => [6, 4, 5].includes(id = 4)) // true
    1.2.2. [4, 5, 6].every((id = 5) => [6, 4, 5].includes(id = 5)) // true
    1.2.3. [4, 5, 6].every((id = 6) => [6, 4, 5].includes(id = 6)) // true
  1.2. (item = [4, 5, 6]) => true) -> true







*/
