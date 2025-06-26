
fetch("../../assets/all_movie.json")
  .then(res => res.json())
  .then(data => {
    const categories = [
        { genre: "Hài", selector: ".funny_movie_list" },
        { genre: "Lãng mạn", selector: ".romance_movie_list" },
        { genre: "Phiêu lưu", selector: ".adventure_movie_list" },
        { genre: "Giả tưởng", selector: ".fantasy_movie_list" },
        { genre: "Hành động", selector: ".action_movie_list" },
        { genre: "Giật gân", selector: ".thriller_movie_list" },
        { genre: "Kinh dị", selector: ".horror_movie_list" },
        { genre: "Tình cảm", selector: ".drama_movie_list" },
        { genre: "Tâm lý", selector: ".psychological_movie_list" },
        { genre: "Viễn tưởng", selector: ".science_fiction_movie_list" },
        { genre: "Tài liệu", selector: ".documentary_movie_list" },
        { genre: "Chiến tranh", selector: ".war_movie_list" },
        { genre: "Bí ẩn", selector: ".mystery_movie_list" },
        { genre: "Âm nhạc", selector: ".music_movie_list" },
        { genre: "Thể thao", selector: ".sport_movie_list" },
        { genre: "Chính kịch", selector: ".historical_movie_list" },
        { genre: "Lịch sử", selector: ".history_movie_list" },
        { genre: "Chính luận", selector: ".political_movie_list" },
        { genre: "Hoạt hình", selector: ".animation_movie_list" },
        { genre: "Gia đình", selector: ".family_movie_list" },
        { genre: "Tội phạm", selector: ".crime_movie_list" },
        { genre: "Xã hội", selector: ".social_movie_list" },

    ];

    categories.forEach(({ genre, selector }) => {
      const container = document.querySelector(selector);
      if (!container) return;

      data.filter(movie => movie.genre && movie.genre.includes(genre))
        .forEach(movie => {
          const movieItem = document.createElement("div");
          movieItem.className = "movie_item";
          movieItem.innerHTML = `
            <a href="${movie.link}"><img class="item" src="${movie.poster}" alt="${movie.title}" width="200">
              <p>${movie.title} (${movie.year})</p></a>
          `;
          container.appendChild(movieItem);
        });
    });
  })
  .catch(error => {
    console.error("Error fetching movie data:", error);
  });

// Cuộn ngang danh sách phim mà không cần giữ shift
scrollContainers = [
    ".funny_movie_list",
    ".romance_movie_list",
    ".historical_movie_list",
    ".history_movie_list",
    ".action_movie_list",
    ".psychological_movie_list",
    ".adventure_movie_list",
    ".science_fiction_movie_list",
]

scrollContainers.forEach(selector => {
    const container = document.querySelector(selector);
    container.addEventListener("wheel", function(event) {
        event.preventDefault();
        this.scrollLeft += event.deltaY * 2;
    });
});