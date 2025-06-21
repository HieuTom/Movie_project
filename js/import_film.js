/*banner slider*/
fetch("banner_movie.json")
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


// Recommended movie list
  fetch("recommended_movie.json")
    .then(res => res.json())
    .then(data => {
    const recommended_movie_list = document.querySelector(".recommended_movie_list");
    data.forEach(recommended_movie =>{
      const recommended_movie_item = document.createElement("div");
      recommended_movie_item.innerHTML = `
        <img class="item" src="${recommended_movie.poster_link}" alt="${recommended_movie.title}" width="200">
        <p>${recommended_movie.title} (${recommended_movie.year})</p>
        `;
      recommended_movie_list.appendChild(recommended_movie_item);
    })
  })
  .catch(error => {
    console.log("Error fetching recommended movie data:", error);
  });

  // Hot movie list
  fetch("hot_movie.json")
  .then(res => res.json())
  .then(data => {
    const hot_movie_list = document.querySelector(".hot_movie_list");
    data.forEach(hot_movie => {
      const hot_movie_item = document.createElement("div");
      hot_movie_item.innerHTML = `
        <img class="item" src="${hot_movie.poster_link}" alt="${hot_movie.title}" width="200">
        <p>${hot_movie.title} (${hot_movie.year})</p>
      `;
      hot_movie_list.appendChild(hot_movie_item);
    })
  })
  .catch(error => {
    console.log("Error fetching hot movie data:", error);
  });
  // All movie list (gop ca recommended + hot + banner)
fetch("recommended_movie.json")
  .then(res => res.json())
  .then(recommended_data => {
    fetch("hot_movie.json")
      .then(res => res.json())
      .then(hot_data => {
        fetch("banner_movie.json")
          .then(res => res.json())
          .then(banner_data => {
            const all_movie_list = document.querySelector(".all_movie_list");
            //gop tat ca du lieu
            const all_movies = [...recommended_data, ...hot_data, ...banner_data];
            // hien thi tung phim
            all_movies.forEach(movie => {
              const movie_item = document.createElement("div");
              const poster = movie.poster_link || movie.poster;

              movie_item.innerHTML = `
                <img class="item" src="${poster}" alt="${movie.title}" width="200">
                <p>${movie.title} (${movie.year})</p>
              `;
              all_movie_list.appendChild(movie_item);
            });
          })
          .catch(error => {
            console.log("Error fetching banner movie data:", error);
          });
      })
      .catch(error => {
        console.log("Error fetching hot movie data:", error);
      });
  })
  .catch(error => {
    console.log("Error fetching recommended movie data:", error);
  });