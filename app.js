
  $('.header__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg"/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg"/></button>',
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
        arrows: false,
        } 
      },   
      {
        breakpoint: 917,
        settings: {
        arrows: false, 
        dots: false,
        } 
      },  
     
    ]
  });

const hamburger = document.getElementById('header__btn')
const headerMenu = document.getElementById('menu')
const menuLinks = document.querySelectorAll('.menu__link') 
const headerTop = document.getElementById('header__top') 
const formCalloutInfo = document.querySelector('.form__callout-info')  
const formCloseInfo = document.getElementById('form__close-info')   

hamburger.addEventListener('click', () => {
  headerMenu.classList.toggle('menu--active') 
  hamburger.classList.toggle('header__btn--open')
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerMenu.classList.remove('menu--active') 
    hamburger.classList.remove('header__btn--open')
  })
})  


formCloseInfo.addEventListener('click', () => {
  formCalloutInfo.classList.remove('visible') 
})
  // window.addEventListener('scroll', () => { 
  //   headerTop.classList.toggle('header__top--fixed', window.scrollY > 0)   
  // })  
   
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    headerTop.classList.add('header__top--fixed')
  } if (window.scrollY == 0) {
    headerTop.classList.remove('header__top--fixed')
  } if (window.scrollY > 5000) {
    headerTop.classList.add('header__top--none')
  } if (window.scrollY < 5000) {
    headerTop.classList.remove('header__top--none')
  }
})  
 
/*form validation */ 
// $(function () {
//   $('#form__form').parsley();
//    }); 
  
 
   $(function () {
    $('#form__form').parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
      $('.form__callout-info').toggleClass('visible', ok);
      $('.form__callout-warning').toggleClass('visible', !ok);
    })
    .on('form:submit', function() {
      return false; // Don't submit form for this demo
    });
  });  
   
  /*phone number mask*/ 
  jQuery(function($){
    $("#phone").mask("+38(0)999999999");
 });
   
 