document.addEventListener("DOMContentLoaded", function(){

    const swiperList = document.querySelector(".swiperList__business");

    if (swiperList){

    let initialX;
    let currentX;
    let movedX;
    //let winWidth = window.innerWidth;

    let icon = document.createElement("span");
    icon.innerHTML = `<i class="fas fa-trash"></i>`;
    icon.style.display = "flex"
        icon.style.alignItems = "center"
        icon.style.padding = "25px"
        icon.style.color = "white"
    icon.style.backgroundColor = "#D95454"
    icon.style.height = "100%";
    icon.style.width = "80px"
    icon.style.fontSize = "2em";
    icon.style.position = "absolute";
    icon.style.top = "0em";
    icon.style.alignContent = "center"

    console.log(swiperList)

    const startTouch = function(e){
    initialX = e.touches[0].clientX
    if (e.target.classList.contains("animate")) {
        e.target.classList.remove("animate");
    }
    }

    const moveTouch = function(e){
    if (e.target !== e.currentTarget){ //vi laver denne condition for at man ikke kan swipe på det hvide felt udenfor "knappen".
    //console.log(e.touches[0].clientX);
    currentX = e.touches[0].clientX
    movedX = currentX - initialX;
    //console.log(movedX);

    if (movedX > 0){ //hvis værdien vi flytter/swiper er større end nul, må vi gerne swipe. Dvs. vi bruger denne condition til at sørge for vi kun kan swipe til højre.
    e.target.style.left = movedX + "px";
    }

    if (movedX > window.innerWidth * 0.2){
    //console.log("get ready to move out!");
    icon.style.left = "-" + movedX + "px";
    e.target.appendChild(icon)
    }
    else if (e.target.contains(icon)){
        e.target.removeChild(icon)
    }

    }
    }

    const endTouch = function(e){
        if (movedX > window.innerWidth * 0.5){
            //console.log("moveout!")
            e.target.removeChild(icon)
            e.target.style.left = window.innerWidth + "px"
            e.target.classList.add("animate");
            setTimeout(function(){
                e.target.replaceChildren();
                e.target.style.height = 0;
                e.target.style.marginBottom = 0;
                e.target.style.display = "none";
                e.target.style.paddingTop = "0px";
            }, 300)
            setTimeout(function(){
                e.target.removeChild(e.target);
            }, 600)
        }
        else {
            console.log("MOVE BACK!")
            e.target.style.left = 0;
            e.target.classList.add("animate");
        }
    }

    swiperList.addEventListener("touchstart", startTouch)
    swiperList.addEventListener("touchmove", moveTouch)
    swiperList.addEventListener("touchend", endTouch)
    }
})