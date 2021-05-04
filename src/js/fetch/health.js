fetch("https://rss.nytimes.com/services/xml/rss/nyt/Health.xml")
.then(response => response.text())
.then(result => {

    const parser = new DOMParser(); // initialize dom parser
    const srcDOM = parser.parseFromString(result, "application/xml"); // convert dom string to dom tree. 
return xml2json(srcDOM)
})
.then(jsonResult => console.log(jsonResult.rss.channel.item))