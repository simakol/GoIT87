// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\

// fetch("https://rickandmortyapi.com/api/character")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// *********Обробка помилок та парсинг відповіді********* \\

// fetch("https://rickandmortyapi.com/api/character3")
//   .then((res) => {
//     console.log(res);
//     if (!res.ok) {
//       throw new Error("Примусово закидуємо значення у catch");
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай приватне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)

const refs = {
  searchForm: document.getElementById("searchForm"),
  list: document.getElementById("list"),
};

refs.searchForm.addEventListener("submit", searchWeater);

function searchWeater(e) {
  e.preventDefault();

  const { city, days } = e.currentTarget.elements;
  // const city = refs.searchForm.elements.city

  serviceWeather(city.value, days.value)
    .then((data) => {
      refs.list.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch((err) => console.error(err));
}

function serviceWeather(city, days) {
  const FORECAST_URL = "http://api.weatherapi.com/v1/forecast.json";
  const API_KEY = "66f9e81543404d02beb160521230808";

  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days,
    lang: "uk",
  });

  return fetch(`${FORECAST_URL}?${params}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li class="weather-card">
      <img src="${icon}" alt="${text}" class="weather-icon">
      <h2 class="date">${date}</h2>
      <h3 class="weather-text">${text}</h3>
      <h3 class="temperature">${avgtemp_c} °C</h3>
  </li>`
    )
    .join("");
}
