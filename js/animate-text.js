var typed = new Typed(".animate", {
    strings: [
        "R<span>e</span>a<span>d</span>y to pl<span>a</span>y ?",
        "Just answer with 'yes' or 'no' ",
    ],
    typeSpeed: 50,
    backDelay: 3000,
    backSpeed: 40,
    loop: true,
});
let toTipe = $(".text2").text();
var typed = new Typed(".tipeHere", {
    strings: [" ",
        toTipe],
    typeSpeed:20,
    backDelay: 900,
    backSpeed: 30,
    loop: false,
});
// var typed = new Typed(".animate", {
//     strings: [
//         "R<span>e</span>a<span>d</span>y to pl<span>a</span>y ?",
//         "Just answer with 'yes' or 'no' ",
//     ],
//     typeSpeed: 50,
//     backDelay: 3000,
//     backSpeed: 40,
//     loop: true,
// });