var cat = document.querySelectorAll(".news__category");
var i;

for (i = 0; i < cat.length; i++) {
  cat[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}