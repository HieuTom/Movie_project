const banner_show = document.querySelector(".banner_show");
const list = document.querySelector(".list");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
items = [];

let currentIndex = 0;
function updateBanner(index){
    items = list.querySelectorAll(".item");
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

updateBanner(0);