// Taoj banner slider
    const banner_show = document.querySelector(".banner_show");
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
const scrollContainer_r = document.querySelector('.recommended_movie_list');
const scrollContainer_h = document.querySelector('.hot_movie_list');
scrollContainer_r.addEventListener('wheel', function (evt) { //recommended_movie_list
  evt.preventDefault(); // ngăn cuộn dọc
  scrollContainer_r.scrollLeft += evt.deltaY * 2.5; // cuộn ngang theo chiều cuộn chuột
});
scrollContainer_h.addEventListener('wheel', function (evt) { //hot_movie_list
  evt.preventDefault(); 
  scrollContainer_h.scrollLeft += evt.deltaY * 2.5; 

});
