fetch("../../assets/all_movie.json")
.then(res => res.json())
.then(data => {
    const watch_movie = document.querySelector(".watching_movie");
    const movie_info = document.querySelector(".movie_info");
    data.filter(movie => movie.title === "Địa Đạo: Mặt Trời Trong Bóng Tối")
    .forEach(movie => {
        const movie_item = document.createElement("iframe");
        movie_item.src = movie.trailer;
        movie_item.width = "1000";
        movie_item.height = "600";
        movie_item.title = movie.title;
        movie_item.frameborder= "0";
        movie_item.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        movie_item.allowFullscreen = true;
        watch_movie.appendChild(movie_item);

        const movie_detail = document.createElement("div");
        movie_detail.classList.add("movie_detail");
        movie_detail.innerHTML = `
            <h2>${movie.title} (${movie.year})</h2>
            <p>Đạo diễn: ${movie.director} </p>
            <p>Thể loại: ${movie.genre.join(", ")} </p>
            <p>${movie.description}</p>
        `;
        movie_info.appendChild(movie_detail);
    })
})
.catch(error => {
    console.log("Error fetching movie data:", error);
});