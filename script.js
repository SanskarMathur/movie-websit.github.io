const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber-(3 + clickCounter) + (4 - ratio)>=0)
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        else
        {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }  
    })
})

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".navbar-container, .sidebar, .left-menu-icon, .movie-list-container, .toggle")
let value = "dark"

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active")
        ball.classList.toggle("active")
    })
    if(value == 'dark')
    {
        ball.style.transform = `translateX(${ball.computedStyleMap().get("transform")[0].x.value-20}px)`;
        value = "light"
    }
    else
    {
        ball.style.transform = `translateX(${ball.computedStyleMap().get("transform")[0].x.value+20}px)`;
        value = "dark"
    }
})