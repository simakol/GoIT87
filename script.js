// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"

// *********************** Кнопка "Load More" ************************** \\

const refs = {
  movieList: document.getElementById("movieList"),
  loadMore: document.getElementById("loadMore"),
};

let page = 1;

refs.loadMore.addEventListener("click", onLoadMore);

serviceMovie()
  .then((data) => {
    refs.movieList.insertAdjacentHTML("beforeend", createMarkup(data.results));

    if (data.page < data.total_pages) {
      refs.loadMore.classList.replace("load-more-hidden", "load-more");
      refs.loadMore.disabled = false;
    }
  })
  .catch((err) => console.error(err));

function onLoadMore() {
  page += 1;
  refs.loadMore.disabled = true;

  serviceMovie(page).then((data) => {
    refs.movieList.insertAdjacentHTML("beforeend", createMarkup(data.results));
    refs.loadMore.disabled = false;

    if (data.page >= 10) {
      refs.loadMore.classList.replace("load-more", "load-more-hidden");
    }
  });
}

function serviceMovie(page = 1) {
  const BASE_URL = "https://api.themoviedb.org/3";
  const END_POINT = "/trending/movie/week";
  // const API_KEY = "92a9a9e3708a3e9451b7037d5906879a";

  const params = new URLSearchParams({
    // api_key: API_KEY,
    page,
  });

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmE5YTllMzcwOGEzZTk0NTFiNzAzN2Q1OTA2ODc5YSIsInN1YiI6IjY0ZDUwZWJiZjE0ZGFkMDEzYThhN2U5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ae27FDIVrjIQ8ZldrLXnlDOvocDnzn5vTDuPHvRovGI",
    },
  };

  return fetch(`${BASE_URL}${END_POINT}?${params}`, options).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, release_date, original_title, vote_average }) =>
        `<li class="movie-card">
         <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
          <div class="movie-info">
            <h2>${original_title}</h2>
           <p>Release Date: ${release_date}</p>
           <p>Vote Average: ${vote_average}</p>
        </div>
      </li>`
    )
    .join("");
}

// ********************************Infinity scroll ********************** \\
// const selectors = {
//   container: document.querySelector(".js-movie-list"),
//   guard: document.querySelector(".js-guard"),
// };

// const options = {
//   root: null,
//   rootMargin: "300px",
//   threshold: 0,
// };

// const observer = new IntersectionObserver(handlerPagination, options);
// let page = 1;

// serviceMovie()
//   .then((data) => {
//     selectors.container.insertAdjacentHTML("beforeend",createMarkup(data.results));

//     if (data.page < data.total_pages) {
//       observer.observe(selectors.guard);
//     }
//   })
//   .catch((err) => console.log(err));

// function serviceMovie(page = 1) {
//   const BASE_URL = "https://api.themoviedb.org/3";
//   const END_POINT = "/trending/movie/week";
//   const API_KEY = "345007f9ab440e5b86cef51be6397df1";
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//         <li class="movie-card">
//           <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//           <div class="movie-info">
//               <h2>${original_title}</h2>
//               <p>Release Date: ${release_date}</p>
//               <p>Vote Average: ${vote_average}</p>
//           </div>
//          </li>`
//     )
//     .join("");
// }

// function handlerPagination(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       page += 1;
//       serviceMovie(page)
//         .then((data) => {
//           selectors.container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//           if (data.page >= 500) {
//             observer.unobserve(entry.target);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   });
// }
