$(document).ready(function() {
    $('.aside-menu__burger').click(function(event) {
        $('.items-menu,.aside-menu__burger').toggleClass('active');
        
       
    });
  
    
    
   
});

let menuParents = document.querySelectorAll('.menu-page__parent');

for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("mouseenter", function (e){
        menuParent.classList.add('active');
    });
    menuParent.addEventListener("mouseleave", function (e){
        menuParent.classList.remove('active');
    });
    
}


let searchBtn = document.querySelector('.search__btn');
let menuSearch = document.querySelector('.menu-search');

searchBtn.addEventListener("click", function (e) {
    searchBtn.classList.toggle('open');
    menuSearch.classList.toggle('open');
    
    
 });


 var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode:true,
    allowTouchMove:true,
    noSwiping:true,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
  });
  var galleryTop = new Swiper('.gallery-top', {
    autoHeight: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });


  var swiper = new Swiper('.products', {
    pagination: {
      el: '.products-body__pagination',
      type: 'fraction',
    },
    
    navigation: {
      nextEl: '.products-body__next',
      prevEl: '.products-body__prev',
    },
  });
  
  var swiper = new Swiper('.brends__body', {
   
   
    navigation: {
      nextEl: '.brends__next',
      prevEl: '.brends__prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });
  const headeBurger = document.querySelector('.header-top__burger');
  const headerMenu = document.querySelector('.header-top__nav');

  
    headeBurger.addEventListener("click", function (e) {
      headeBurger.classList.toggle('active');
      headerMenu.classList.toggle('active');
    });
 
  
