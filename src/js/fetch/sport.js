document.addEventListener("DOMContentLoaded", function () {

    const search = document.querySelector("#search")
    const newsList = document.querySelector(".sportsNews__newsList");
    const categoryTitle = document.querySelector(".frontpageNews__sports-title");

if (newsList) {    
    let url = new URLSearchParams(window.location.search)

fetch("https://rss.nytimes.com/services/xml/rss/nyt/sports.xml")
.then(response => response.text())
.then(result => {

    const parser = new DOMParser(); // initialize dom parser
    const srcDOM = parser.parseFromString(result, "application/xml"); // convert dom string to dom tree. 
return xml2json(srcDOM)})
        .then(response => {
            console.log(response.rss.channel.item)
            categoryTitle.innerHTML = `SPORTS`
addToList(response.rss.channel.item)
        })

    function addToList(item) {
        let articles = item;

        articles.forEach(item => {
            let li = document.createElement("li")
            li.className = "newsList__item";

            li.innerHTML = `
            <a  target="_blank" href="${item.link}">
            <div class="newsList__item-img"><img src="img/news.png"></div>
            <div class="newsList__item-title">${item.title}</div>
            <div class="newsList__item-content">${item.description}</div></a>
        `;

            newsList.append(li)
        })
    }
}
});