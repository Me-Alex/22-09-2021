let buttonHide = document.querySelector(".click-me-to-hide");
let buttonShow = document.querySelector(".click-me-to-show");
let navigation = document.querySelector("nav");
let menu = document.querySelector(".menu");
let container = document.querySelector(".container");
let forMenu = document.querySelector(".for-menu");


// buttonHide.style.display = "none";
menu.onfocus = () => {
    navigation.onclick = "fasdf";
    navigation.style.display = "flex";
    navigation.style.flexDirection = "column";
    navigation.style.position = "absolute";
    navigation.style.margin = "230px -200px 0 0";
    navigation.style.justifyContent = "flex-end";
    navigation.style.alignItems = "center";
    navigation.style.backgroundColor = "gray";
    navigation.style.borderRadius = "20px";
    navigation.style.padding = "20px";
    navigation.style.gap = "2px";
    forMenu.style.zIndex="300";
    // navigation.style.zIndex = "-200";

}

forMenu.onclick = () => {
    navigation.style = " ";
    forMenu.style.zIndex="-300";

}
let yes= document.querySelector(".yes");
let no= document.querySelector(".no");
// yes.onclick=()=>{

// }
// no.onclick=()=>{
    
// }