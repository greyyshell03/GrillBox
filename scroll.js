//Selectors

const text = document.querySelector(".text");
const image = document.querySelector(".image");

window.addEventListener("scroll",appearOnScroll);


function appearOnScroll(){
    let textPosition = text.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if(windowHeight > textPosition) {
        text.classList.remove("push-left");
        image.classList.remove("push-right");
    }else{
        text.classList.add("push-left");
        image.classList.add("push-right");
    }
}

/* info 2 */
{
const text2 = document.querySelector(".text2");
const image2 = document.querySelector(".image2");

window.addEventListener("scroll",appearOnScroll);


function appearOnScroll(){
    let text2Position = text2.getBoundingClientRect().top;
    let windowHeight3 = window.innerHeight;
    if(windowHeight3 > text2Position) {
        text2.classList.remove("push-right");
        image2.classList.remove("push-left");
    }else{
        text2.classList.add("push-right");
        image2.classList.add("push-left");
    }
}}

/* mid banner */

{
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const image3 = document.querySelector(".image3");

window.addEventListener("scroll",appearOnScroll);


function appearOnScroll(){
    let text4Position = text4.getBoundingClientRect().top;
    let windowHeight2 = window.innerHeight;
    if(windowHeight2 > text4Position) {
        text3.classList.remove("push-left");
        text4.classList.remove("push-left");
        image3.classList.remove("push-left");
    }else{
        text3.classList.add("push-left");
        text4.classList.add("push-left");
        image3.classList.add("push-left");
    }
}}