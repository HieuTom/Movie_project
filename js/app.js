// Taoj banner slider
    const banner_show = document.querySelector(".banner_show");
    const link_banner = document.querySelector(".move");
    const list = document.querySelector(".list");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let items = [];

    let currentIndex = 0;
    function updateItems(){
        items = list.querySelectorAll(".item");
    }
    function updateBanner(index){
        updateItems();
        items.forEach(item => {
            item.classList.remove("active");
        })

        currentIndex = index;
        
        if (items[index]){
            const src = items[index].getAttribute("src");
            banner_show.setAttribute("src", src);
            items[index].classList.add("active");
            fetch("../../assets/all_movie.json")
            .then(res => res.json())
            .then(data => {
                const movie = data.find(movie => movie.poster === src);
                if (movie) {
                    link_banner.setAttribute("href", `../component${movie.link}`);
                } else {
                    link_banner.innerHTML = `<p>Thông tin không có sẵn</p>`;
                }
            })
            .catch(error => {
                console.log("Error fetching movie data:", error);
                link_banner.innerHTML = `<p>Thông tin không có sẵn</p>`;
            });
        }
    }

    prev.addEventListener("click", ()=>{
        currentIndex--;
        if (currentIndex < 0){
            currentIndex = items.length - 1;
        }
        updateBanner(currentIndex);
    })
    next.addEventListener("click", ()=>{
        currentIndex++;
        if (currentIndex >= items.length){
            currentIndex = 0;
        }
        updateBanner(currentIndex);
    })
    updateItems()
    items.forEach((item, index) =>{
        
        item.addEventListener("click", (e)=>{
            currentIndex = index;
            updateBanner(currentIndex);
        })
    })
updateBanner(0);

// BAnner tu chay:
function autoSlide() {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    updateBanner(currentIndex);
}
setInterval(autoSlide, 4000);

// Cuộn ngang danh sách phim đề cử maf khoong caanf giuwx shift
const scrollContainers = [
  '.recommended_movie_list',
  '.hot_movie_list',
  '.list'
];

scrollContainers.forEach(selector => {
  const container = document.querySelector(selector);
  if (container) {
    container.addEventListener('wheel', function (evt) {
      evt.preventDefault();
      container.scrollLeft += evt.deltaY * 2.5;
    });
  }
});


// Tìm kiếm phim
fetch('assets/all_movie.json')
  .then(response => response.json())
  .then(movies => {
    const input = document.querySelector('.search_bar');
    const suggestions = document.getElementById('searchSuggestions');

    input.addEventListener('input', function () {
      const keyword = this.value.toLowerCase().trim();
      suggestions.innerHTML = '';

      if (!keyword) {
        suggestions.style.display = 'none';
        return;
      }

      const filtered = movies.filter(movie =>
        movie.title && movie.title.toLowerCase().startsWith(keyword)
      );

      if (filtered.length === 0) {
        suggestions.style.display = 'none';
        return;
      }

      filtered.forEach(movie => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
        <a href="../component${movie.link}" class="result-link">
          <img src="${movie.poster}" alt="${movie.title}">
          <div>
            <strong>${movie.title_vn || movie.title}</strong><br>
            <small>${movie.year || ''} ${movie.duration || ''}</small>
          </div>
          </a>
        `;
        item.onclick = () => {};  // no navigation
        suggestions.appendChild(item);
      });

      suggestions.style.display = 'block';
    });
  });
