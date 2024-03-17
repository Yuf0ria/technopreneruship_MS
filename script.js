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
const bar = document.getElementById('bar');//id variable of the bar icon
const close = document.getElementById('close');//id variable of the close icon in nav
const nav = document.getElementById('navbar'); //navigation bar in the mobile port

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