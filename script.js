
let sidenav = document.querySelector("#sidenav")
let menu = document.querySelector("#menu")
let hidenav = document.querySelector("#hidenav")
let rightnavbar = document.querySelector("#rightnavbar")
let showContaint1 = document.querySelector("#showContaint1")
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


const HandleShow1 = ()=>{
    showContaint1.style.transition = "all 0.5s ease";
    showContaint1.style.bottom = "0";
}
const HandleHide1 = () => {
  showContaint1.style.transition = "all 0.5s ease";
  showContaint1.style.bottom = "-98px";
};


const HandleShow2= () => {
  showContaint2.style.transition = "all 0.5s ease";
  showContaint2.style.bottom = "0";
};
const HandleHide2= () => {
  showContaint2.style.transition = "all 0.5s ease";
  showContaint2.style.bottom = "-98px";
};


const HandleShow3 = () => {
  showContaint3.style.transition = "all 0.5s ease";
  showContaint3.style.bottom = "0";
};
const HandleHide3 = () => {
  showContaint3.style.transition = "all 0.5s ease";
  showContaint3.style.bottom = "-98px";
};

AOS.init();


function url() {
  fbq("track", "Purchase");
  location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
}
