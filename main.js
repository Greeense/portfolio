/*
1) 스크롤 시 navbar 높이만큼 스크롤되어야함
*/

'use strict'; /* 사고 방지? */

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log("navbarHeight : "+navbarHeight);

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        /* 스크롤 시 navbar 색조 업 */
    }else {
        navbar.classList.remove('navbar--dark');
    }
});