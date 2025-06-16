
fetch("film.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("list");
    data.forEach(movie => {
      const movie_item = document.createElement("div");
      movie_item.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" width="200">
        <h2>${movie.title} (${movie.year})</h2>
        <p>Thể loại: ${movie.genre}.</p>
        <p>Đạo diễn: ${movie.director}.</p>
        <p>${movie.description}.</p>
      `;
      list.appendChild(movie_item);
    });
  })
  .catch(error => {
    console.log("Error fetching movie data:", error);
  });
