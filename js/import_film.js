
fetch("film.json")
  .then(res => res.json())
  .then(data => {
    const list = document.querySelector(".list");
    data.forEach(movie => {
      const movie_item = document.createElement("div");
      movie_item.innerHTML = `
        <img class="item" src="${movie.poster}" alt="${movie.title}" width="200">
      `;
      list.appendChild(movie_item);
    });
  })
  .catch(error => {
    console.log("Error fetching movie data:", error);
  });
