//Left and Right Arrows in index.html
let scrollContainer = document.querySelector(".pro-container"); //variable of container
let backBtnBtn = document.getElementById("backBtn"); //id of the icon
let nextBtn = document.getElementById("nextBtn");

//Move using wheel
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

//move using the arrows, lacking smoothness haven't figured that out
nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "inherit";
    scrollContainer.scrollLeft += 200;
});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "inherit";
    scrollContainer.scrollLeft -= 200;
});

//mobile navigation port, stle.css
const bar = document.getElementById("bar");//id variable of the bar icon
const close = document.getElementById("close");//id variable of the close icon in nav
const nav = document.getElementById("navbar"); //navigation bar in the mobile port

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

//Transferred to html due to not working

//Img UI in sproduct.html, click will replace the Main image to where the mouse is pointing

// var MainImg = document.getElementById("MainImg");
// var smallImg = document.getElementsByClassName("small-img");

// smallImg[0].onclick = function(){
//     MainImg.src = smallImg[0].src;
// };
// smallImg[1].onclick = function(){
//     MainImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = function(){
//     MainImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = function(){
//     MainImg.src = smallImg[3].src;
// };

// switch(smallImg) {
//     case 0:
//         onclick = function(){
//         MainImg.src = smallImg[0].src;
//     };
//         break;
//     case 1:
//         onclick = function(){
//         MainImg.src = smallImg[1].src;
//     };
//         break;
//     case 2:
//         onclick = function(){
//         MainImg.src = smallImg[2].src;
//     }
//         break;
//     case 3:
//         onclick = function(){
//         MainImg.src = smallImg[3].src;
//     }
//         break;
// };