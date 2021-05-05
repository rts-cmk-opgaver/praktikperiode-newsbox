document.addEventListener("DOMContentLoaded", function () {

    const search = document.querySelector("#search")
    const newsList = document.querySelector(".businessNews__newsList");

if (newsList) {    
    let url = new URLSearchParams(window.location.search)

fetch("https://rss.nytimes.com/services/xml/rss/nyt/Business.xml")
.then(response => response.text())
.then(result => {

    const parser = new DOMParser(); // initialize dom parser
    const srcDOM = parser.parseFromString(result, "application/xml"); // convert dom string to dom tree. 
return xml2json(srcDOM)})
        .then(response => {
            console.log(response.rss.channel.item)
addToList(response.rss.channel.item)
        })

    function addToList(item) {
        let articles = item;

        articles.forEach(item => {
            let li = document.createElement("li")
            li.className = "businessNews__newsList-item";

            li.innerHTML = `
            <div lass="businessNews__newsList-article-img"></div>
            <div class="businessNews__newsList-article-title">${item.title}</div>
            <div class="businessNews__newsList-article-content">${item.description}</div>`;

            newsList.append(li)
        })
    }
}
});