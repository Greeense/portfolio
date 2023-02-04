/*
1) 스크롤 시 navbar 높이만큼 스크롤되어야함
*/

'use strict'; /* 사고 방지? */

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log("navbarHeight : "+navbarHeight);

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        
        /* 스크롤 시 navbar 색조 업 */
    }else {
        navbar.classList.remove('navbar--dark');
    }         
});

// handler srolling and tapping on the navar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    // console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    target.classList.add('active');
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// navbar toggle when small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',() => {
    navbarMenu.classList.toggle('open');   
});

//home: contact button
const home__contact = document.querySelector('.home__contact');
home__contact.addEventListener('click',(event) => {
    // console.log(event.target.dataset.link);
    scrollIntoView("#contact");
});

// make home slowloy fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight= home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    var opacityVal = (1 - (window.scrollY / homeHeight));
    home.style.opacity = opacityVal;
});

// show arrow-up button when scrolling
const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2) {
        arrowup.classList.add('visible');
    }else {
        arrowup.classList.remove('visible');
    }
});

// handle click on the "arrow-up" button
arrowup.addEventListener('click',() => {
    scrollIntoView('#home');
});

//project filter
const workBtnContainer = document.querySelector(".work__categories");
const proejctContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll('.project'); /*배열로 받아오기 */
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filte || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    //remove selection

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
   
    const target = 
        e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    console.log(target);
    target.classList.add('selected');

    proejctContainer.classList.add('anim-out');
    setTimeout(() => {
         /*  최신 js..*/
        projects.forEach((project) => {
            //console.log(project.dataset.type);
            if(filter == "*" || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        /*
        for(let project of projects){
        
        }
        */
        /* 내가 맨날 하는 방식
        for(let i=0; i<projects.length;i++){
            project = projects[i];
        }
        */
        proejctContainer.classList.remove('anim-out');
    },300);
});

// util
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView(
        {
            behavior:"smooth"
        }
    );
}