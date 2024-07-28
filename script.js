
let sidenav = document.querySelector("#sidenav")
let menu = document.querySelector("#menu")
let hidenav = document.querySelector("#hidenav")
let rightnavbar = document.querySelector("#rightnavbar")
const showNav =()=>{
    menu.style.transition = "all 0.2s ease";
    menu.style.display = "none";
    sidenav.style.transition = "all 0.6s ease";
    sidenav.style.left = "0";
    sidenav.style.transition = "all 0.6s ease";
    hidenav.style.transition = "all 0.6s ease";
    hidenav.style.display = "block";
    rightnavbar.style.transition = "all 1s ease";
    rightnavbar.style.left = "0";
}


const hideNav =()=>{
    rightnavbar.style.transition = "all 0.5s ease";
    rightnavbar.style.left = "-100%";
    sidenav.style.transition = "all 1.5s ease";
    sidenav.style.left = "-100%";
    menu.style.display = "block";
    hidenav.style.display = "none";
}

console.log("hi");


AOS.init();