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
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
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
// async function serviceCountry() {
//   const resp1 = await axios("https://restcountries.com/v3.1/name/Ukraine");
//   const resp2 = await axios("https://restcountries.com/v3.1/name/France");
//   const resp3 = await axios("https://restcountries.com/v3.1/name/Poland");
//   console.log(resp3.data);
//   console.log(resp2.data);
//   console.log(resp1.data);
// }

// serviceCountry();

// *********** Паралельні *********** \\

// async function serviceCountry() {
//   const countries = ["Ukraine", "France", "Poland"];
//   const resp = countries.map(async (country) => {
//     const resp = await axios(`https://restcountries.com/v3.1/name/${country}`);
//     console.log(resp);
//     return resp;
//   });
//   console.log(resp);
// }

// serviceCountry();

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!

const refs = {
  form: document.querySelector(".js-search"),
  formContainer: document.querySelector(".js-form-container"),
  addField: document.querySelector(".js-add"),
  list: document.querySelector(".js-list"),
};

refs.addField.addEventListener("click", addField);
refs.form.addEventListener("submit", handleSearch);

function addField() {
  refs.formContainer.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country" />'
  );
}

async function handleSearch(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const countries = formData
    .getAll("country")
    .map((country) => country.trim())
    .filter((country) => country);

  try {
    const capitals = await serviceCountry(countries);
    const weather = await serviceWeather(capitals);

    refs.list.innerHTML = createMarkup(weather);
  } catch (err) {
    console.log(err);
  } finally {
    event.target.reset();
    refs.formContainer.innerHTML = '<input type="text" name="country" />';
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ temp_c, icon, text, name, country }) => `<li>
  <img src="${icon}" alt="${text}" />
  <h2>${country}</h2>
  <h2>${name}</h2>
  <p>${text}</p>
  <p>${temp_c}</p>
</li>`
    )
    .join("");
}

async function serviceCountry(countries) {
  const resp = countries.map(async (country) => {
    const { data } = await axios(
      `https://restcountries.com/v3.1/name/${country}`
    );
    return data[0].capital[0];
  });

  const data = await Promise.allSettled(resp);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);
}

async function serviceWeather(capitals) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "66f9e81543404d02beb160521230808";
  const END_POINT = "/current.json";

  const resp = capitals.map(async (country) => {
    const { data } = await axios(
      `${BASE_URL}${END_POINT}?key=${API_KEY}&q=${country}`
    );
    return data;
  });

  const data = await Promise.allSettled(resp);

  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value: { current, location } }) => {
      const {
        temp_c,
        condition: { icon, text },
      } = current;
      const { name, country } = location;
      return {
        temp_c,
        icon,
        text,
        name,
        country,
      };
    });
}

// const countries = ["Ukraine", "Poland", "Spain", "Canada"];
// const capitals = ["London", "Warsaw", "Madrid", "Ottawa"];

// serviceWeather(capitals).then(console.log);
