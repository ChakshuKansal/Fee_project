const slides=document.querySelectorAll(".slide");
var counter=0;

const right=document.querySelector(".arrow-r");
const left=document.querySelector(".arrow-l");

const slider=document.querySelector(".slider");
const sec1=document.getElementById("sec1");
const sec2=document.getElementById("sec2");

sec1.addEventListener('click',()=>{
    slider.style.transform = `translateX(0px)`;
    sec1.style.backgroundColor="white";
    sec2.style.backgroundColor="gray";
});
sec2.addEventListener('click',()=>{
    slider.style.transform = `translateX(-1530px)`;
    sec2.style.backgroundColor="white";
    sec1.style.backgroundColor="gray";
});

right.addEventListener('click',()=>{
    console.log("HELLO");
    counter++;
    if(counter==1){
        sec2.style.backgroundColor="white";
        sec1.style.backgroundColor="gray";
    }
    slider.style.transform = `translateX(-${counter*1530}px)`;
    if(counter>slides.length-1){
        slider.style.transform = `translateX(0px)`;
        counter=0;
        sec1.style.backgroundColor="white";
        sec2.style.backgroundColor="gray";
    }
});
left.addEventListener('click',()=>{
    console.log("HELLO");
    counter--;
    if(counter==1){
        sec2.style.backgroundColor="white";
        sec1.style.backgroundColor="gray";
    }
    slider.style.transform = `translateX(-${counter*1530}px)`;
    if(counter<1){
        slider.style.transform = `translateX(0px)`;
        counter=0;
        sec1.style.backgroundColor="white";
        sec2.style.backgroundColor="gray";
    }
});

const slider2=document.querySelector(".slider2");
const clothes=document.querySelector("#clothes");
const shoes=document.querySelector("#shoes");

shoes.addEventListener('click',()=>{
    console.log("hello");
    slider2.style.transform = `translateX(-1580px)`;
})
clothes.addEventListener('click',()=>{
    console.log("hello");
    slider2.style.transform = `translateX(0px)`;
})


const menubar=document.getElementById("bar");
let dropbox=document.getElementById("dropbox");
let drop=document.getElementById("dropboxmenu");
let list=document.getElementById("nav-ul");

menubar.addEventListener('click',()=>{

    if(drop.style.top=="65px"){
        drop.style.top="-100%";
        list.style.opacity=0;
        list.style.visibility="hidden"
    }
    else{
        drop.style.top="65px";
        list.style.opacity=1;
        list.style.visibility="visible"
    }
})
var mq = window.matchMedia("(max-width: 900px)");
function handleQueryChange(mq) {
    if (mq.matches) {
        // Change JavaScript behavior for small screens
        console.log("Small screen detected");
        dropbox.style.right="-100%";
        dropbox.style.top="65px";
    } else {
        x.style.top="-100%";
        // Change JavaScript behavior for larger screens
        console.log("Large screen detected");
    }
}
let cross=document.getElementById("cross");

cross.addEventListener('click',()=>{
    if(mq.matches){
        dropbox.style.right="-100%";
    }
    else{
        dropbox.style.top="-100%";
    }
    // list.style.opacity=0;
    console.log("HELLO");
});

let profile=document.getElementById("profile");

profile.addEventListener('click',()=>{
    window.open('signup.html','_blank');
})
