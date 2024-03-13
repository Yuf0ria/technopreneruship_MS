let scrollContainer = document.querySelector(".pro-container");
let backBtnBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "inherit";
    scrollContainer.scrollLeft += 200;
});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "inherit";
    scrollContainer.scrollLeft -= 200;
});
