
//----------Show-------Menu-------Bar--------//
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = () =>{
    nav.classList.toggle('show-menu');
}
//----------Show-------Menu-------Bar--------//




//----------Remove-------Menu-------Bar--------//
const navLink = document.querySelectorAll('.nav-links');
function linkAction (){
    const navMenu = document.querySelector('.nav');
    nav.classList.remove('show-menu'); 
 }
 navLink.forEach(n => n.addEventListener('click', linkAction));
//----------Remove-------Menu-------Bar--------//




//----------Navmenu--------Color--------Change--------//
const linkColor = document.querySelectorAll('.nav-links');
function colorLink(){
    if(colorLink){
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink));
//----------Navmenu--------Color--------Change--------//



//----------Home--------Swiper--------Slider--------//
var swiper = new Swiper(".home-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//----------Home--------Swiper--------Slider--------//




//----------Timer--------Swiper--------Slider--------//
var swiper = new Swiper(".time-imgs", {  
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 1000,
      disableOnInteraction: false,
  },
  
  breakpoints: {
      640: {
          slidesPerView: 1,
      },
      770: {
          slidesPerView: 2,
      },
      1200: {
          slidesPerView: 3,
      },
  },
  
  });
//----------Timer--------Swiper--------Slider--------//




//-------Change------Header-------Background-------Width-------Scroll-------//
const header = document.querySelector('.header');
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 70){
    header.classList.add('header-shadow');
  }
  else header.classList.remove('header-shadow')
})
//-------Change------Header-------Background-------Width-------Scroll-------//




//----------Scroll---------Top---------Btn--------Start---------//
const up = document.querySelector('.up')
window.onscroll = () =>{
  up.classList.toggle('show', window.scrollY >= 560)
}
up.onclick = () =>{
  window.scrollTo({behavior:'smooth', top: '0'})
}
//----------Scroll---------Top---------Btn--------End---------//


