var banner_carousel = document.body.querySelector(".banner_carousel");
var banner = banner_carousel.querySelectorAll(".banner");
var b1 = banner_carousel.querySelector(".b1");
var b2 = banner_carousel.querySelector(".b2");
// console.log(b1,b2);
var size = -50;
var delay = 2500;

// setInterval(() => {
//     console.log(size);
//     if(size <= -5856){
//         size = -285;

//         for(var i=0;i<banner.length;i++){
//             banner[i].style.transitionDuration = "0s";
//         }
//     }
//     else{
//         for(var i=0;i<banner.length;i++){
//             banner[i].style.transitionDuration = ".5s";
//         }
//     }
//     // if(size > -285){
//     //     size = -4618;
//     // }
//     for(var i=0;i<banner.length;i++){
//         banner[i].style.transform = `translateX(${size}px)`;
//     }
//     size -= 619;
//     b1.addEventListener("click",()=>{size += 619;});
//     b2.addEventListener("click",()=>{size -= 619});
// }, delay);


var next = () => {
    size -= 102.04;
    console.log(size);
    
    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = `translateX(${size}%)`;
    }

    if (size < -866) {
        size = -50;
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = "0s";
            banner[i].style.transform = `translateX(${size}%)`;
        }
    }
    else {
        for(var i=0;i<banner.length;i++){
            banner[i].style.transitionDuration = ".5s";
        }
    }    
}

var previous = () => {
    size += 102.04;
    console.log(size);

    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = `translateX(${size}%)`;
    }

    if (size > -50) {
        size = -866;
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = "0s";
            banner[i].style.transform = `translateX(${size}%)`;
        }
    }
    else {
        for(var i=0;i<banner.length;i++){
            banner[i].style.transitionDuration = ".5s";
        }
    }
}

var play = setInterval(next, delay);

b1.addEventListener("click", previous);
b2.addEventListener("click", next);

// var query = "Meri Zindagi Hai Tu";

// async function requestreceive() {
//     try {
//         let res = await fetch(
//             `http://127.0.0.1:5000/result/?query=${query}`
//         )
//         let data = await res.json()
//         console.log(data[0])
//         // displayMovie(data)
//     } catch{

//     }
// }
// requestreceive()