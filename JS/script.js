var banner_carousel = document.body.querySelector(".banner_carousel");
var banner = banner_carousel.querySelectorAll(".banner");
var b1 = banner_carousel.querySelector(".b1");
var b2 = banner_carousel.querySelector(".b2");
// console.log(b1,b2);
var size = -904;
var delay = 3000;
setInterval(() => {
    console.log(size);
    if(size <= -5856){
        size = -285;
        
        for(var i=0;i<banner.length;i++){
            banner[i].style.transitionDuration = "0s";
        }
    }
    else{
        for(var i=0;i<banner.length;i++){
            banner[i].style.transitionDuration = ".5s";
        }
    }
    // if(size > -285){
    //     size = -4618;
    // }
    for(var i=0;i<banner.length;i++){
        banner[i].style.transform = `translateX(${size}px)`;
    }
    size -= 619;
    // b1.addEventListener("click",()=>{size += 619;});
    // b2.addEventListener("click",()=>{size -= 619});
}, delay);
console.log(banner);