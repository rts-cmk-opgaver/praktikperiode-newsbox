document.addEventListener("DOMContentLoaded", function () {

    const newsList = document.querySelector(".swiperList__business");

    if (newsList) {
        let url = new URLSearchParams(window.location.search)

        fetch("https://rss.nytimes.com/services/xml/rss/nyt/business.xml")
            .then(response => response.text())
            .then(result => {

                const parser = new DOMParser(); // initialize dom parser
                const srcDOM = parser.parseFromString(result, "application/xml"); // convert dom string to dom tree. 
                return xml2json(srcDOM)
            })
            .then(response => { 
                addToList(response.rss.channel.item)
            })

        function addToList(item) {
            let articles = item;
articles.forEach(item => {
                let li = document.createElement("li")
                li.className = "swiperList__business-item";

                li.innerHTML = `
                <a  target="_blank" href="${item.link}"><div class="newsList__item-img"><img src="img/news.png"></img></div></a>
                   <div class="newsList__item-title">${item.title}</div>
                    <div class="newsList__item-content">${item.description}</div></a>
                `;

                newsList.append(li)
            })
        }
    }
});