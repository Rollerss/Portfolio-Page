function CreatePortfolioItem(backgroundImg, iconImg, subtitle, description="") {
    let newPortfolioItem = document.createElement("div");
    newPortfolioItem.className = "portfolio-item";
    newPortfolioItem.innerHTML = 
    `<div class="portfolio-background-img" 
        style="background-image:url(images/${backgroundImg})">
    </div>
    <div class="img-text"><img class="logo" src="images/logos/${iconImg}">
        <p class="subtitle">${subtitle}</p>
        <p class="description">${description}</p>
    </div>`;
    
    document.getElementById("portfolio").appendChild(newPortfolioItem);
}


CreatePortfolioItem("project_01.jpg", "project_01.png", "***Test project  1***", 
    "Some text about the project.");
CreatePortfolioItem("project_02.jpg", "project_02.png", "***Test project  2***", 
    "Some text about the project.");
CreatePortfolioItem("project_03.jpg", "project_03.png", "***Test project  3***");
CreatePortfolioItem("project_04.jpg", "project_04.png", "***Test project  4***");
CreatePortfolioItem("project_05.jpg", "project_05.png", "***Test project  5***");
CreatePortfolioItem("project_06.jpg", "project_06.png", "***Test project  6***");
CreatePortfolioItem("project_07.jpg", "project_07.png", "***Test project  7***");
CreatePortfolioItem("project_08.jpg", "project_08.png", "***Test project  8***");
CreatePortfolioItem("project_09.jpg", "project_09.png", "***Test project  9***");
CreatePortfolioItem("project_10.jpg", "project_10.png", "***Test project 10***");
CreatePortfolioItem("project_11.jpg", "project_11.png", "***Test project 11***");
CreatePortfolioItem("project_12.jpg", "project_12.png", "***Test project 12***");


const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener("mouseover", () => {
            portfolioItem.childNodes[0].classList.add("img-darken")
        })
    })
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener("mouseout", () => {
            portfolioItem.childNodes[0].classList.remove("img-darken")
        })
    })