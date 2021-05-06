document.addEventListener("DOMContentLoaded", function () {

    const search = document.querySelector("#search")
    const newsList = document.querySelector(".europeNews__newsList");
    const categoryTitle = document.querySelector(".frontpageNews__europe-title");

if (newsList) {    
    let url = new URLSearchParams(window.location.search)

fetch("https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml")
.then(response => response.text())
.then(result => {

    const parser = new DOMParser(); // initialize dom parser
    const srcDOM = parser.parseFromString(result, "application/xml"); // convert dom string to dom tree. 
return xml2json(srcDOM)})
        .then(response => {
            console.log(response.rss.channel.item)
            categoryTitle.innerHTML = `${response.rss.channel.title}`
addToList(response.rss.channel.item)
        })

    function addToList(item) {
        let articles = item;

        articles.forEach(item => {
            let li = document.createElement("li")
            li.className = "newsList__item";

            li.innerHTML = `
            <div class="newsList__item-img"></div>
            <div class="newsList__item-title">${item.title}</div>
            <div class="newsList__item-content">${item.description}</div>`;

            newsList.append(li)
        })
    }
}
});