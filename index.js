const noDisplayArticles = document.querySelectorAll(".more-article")
const viewMoreBtn = document.getElementById("view-more-btn")

viewMoreBtn.addEventListener("click", handlingViewMore)

function handlingViewMore() {

    if (viewMoreBtn.innerHTML == "View More"){
        viewMoreBtn.innerHTML = "View Less"
    } 
    else {
        viewMoreBtn.innerHTML = "View More"
    }

    noDisplayArticles.forEach((e) => {
        e.classList.toggle("blog-no-display")
    })
}