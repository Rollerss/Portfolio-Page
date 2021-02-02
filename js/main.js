const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener("mouseover", () => {
            portfolioItem.childNodes[1].classList.add("img-darken")
        })
    })
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener("mouseout", () => {
            portfolioItem.childNodes[1].classList.remove("img-darken")
        })
    })