let dropdown = document.getElementById("dropdown");
let submenu = document.querySelector(".sub-menu");
let dropDownIcon = document.querySelector(".menu #dropdown i");
let listItem = document.querySelector(".menu li");
let burgerIcon = document.querySelector(".fa-bars")
let closeIcon = document.querySelector(".fa-xmark");
let navBar = document.querySelector("nav");

dropdown.addEventListener("click", function(){
    if(submenu.style.display === "none" || dropDownIcon.classList.contains("fa-angle-down")){
        submenu.style.display = "block"
        dropDownIcon.classList.remove("fa-angle-down");
        dropDownIcon.classList.add("fa-angle-up");
    }else{
        submenu.style.display = "none";
        dropDownIcon.classList.remove("fa-angle-up");
        dropDownIcon.classList.add("fa-angle-down");
    }
});

burgerIcon.addEventListener("click", function(){
    navBar.style.display = "block";
    burgerIcon.style.display = "none";
});

closeIcon.addEventListener("click", function(){
    navBar.style.display = "none";
    burgerIcon.style.display = "block";
})

function resizeListener() {
    if(window.innerWidth >= 768 ){
        navBar.style.display = "block";
        burgerIcon.style.display = "none";
    }else{
        navBar.style.display = "none";
        burgerIcon.style.display = "block";
    }
}

window.addEventListener("resize", resizeListener);