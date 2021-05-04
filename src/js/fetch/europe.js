let test = document.querySelector(".news__category-title");
let test2 = document.querySelector("news__category-article")

fetch("https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml")
.then(response => response.text())
.then(result => {

    const parser = new DOMParser(); // initialize dom parser
    const srcDOM = parser.parseFromString(result, "application/xml"); // convert dom string to dom tree. 
return xml2json(srcDOM)
})
.then(jsonResult => 
       test.innerHTML = `${jsonResult.rss.channel.title}`
       )

       .then(jsonResult =>
        test2.innerHTML = `    <div class="news__category-article-img">${jsonResult.rss.channel.item.title}</div>
        <div class="news__category-article-title">${jsonResult.rss.channel.item.title}</div>
        <div class="news__category-article-content">${jsonResult.rss.channel.title}</div>`)
