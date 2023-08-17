// ***************** Конструкція async await ***************** \\
//! FETCH
// function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   return fetch(URL)
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .then(console.log);
// }

// serviceCountry().catch(console.log);

//! AXIOS
// function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   return axios.get(URL);
// }

// serviceCountry()
//   .then(({ data }) => console.log(data))
//   .catch((err) => console.log("ERROR AXIOS:", err));

//! ASYNC FETCH
// async function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   try {
//     const resp = await fetch(URL);

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     const data = await resp.json();
//     console.log(data);

//     return data;
//   } catch (err) {
//     console.log("TRY-CATCH:", err);
//   }
// }

// serviceCountry();

//! ASYNC AXIOS
// async function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine5";
//   try {
//     const { data } = await axios.get(URL);
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log("TRY-CATCH:", err);
//   }
// }

// serviceCountry();

/*
1. async робить будь-яку функцію асинхронною. Це означає, що ця функція в будь-якому випадку поверне проміс
2. Асинхронна функція дозволяє використовувати всередині себе оператор await.
3. Оператор await пишеться перед асинхронною операцією і заморожує виконання усієї функції до тих пір, поки проміс не перейде у стан fullfilled або rejected. Тільки після цього функція може продовжити своє виконання.
4.Await завжди повертає результат промісу.
5. Асинхронні функції та оператор await потрібен нам для того щоб робити імітацію синхронного коду всередині асинхронного.

*/

// *********** Послідовні *********** \\

// *********** Паралельні *********** \\

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!
