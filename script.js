let dropdown = document.getElementById("dropdown");
let submenu = document.querySelector(".sub-menu");
let dropDownIcon = document.querySelector("i");

dropdown.addEventListener("click", () => {
    if(submenu.style.display === "none" || dropDownIcon.classList.contains("fa-angle-down")){
        submenu.style.display = "block"
        dropDownIcon.classList.remove("fa-angle-down");
        dropDownIcon.classList.add("fa-angle-up");
    }else{
        submenu.style.display = "none";
        dropDownIcon.classList.remove("fa-angle-up");
        dropDownIcon.classList.add("fa-angle-down");
    }
})