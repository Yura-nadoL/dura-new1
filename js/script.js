// id scroll
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
   anchor.addEventListener('click', e => {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substring(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
})


// scroll header ==========================================================================
let lastScroll = 0;
const defaultOffset = 20;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
   if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      //scroll down
      header.classList.add('hide');
   }
   else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.classList.remove('hide');
   }

   lastScroll = scrollPosition();
})

// seaarch ========================================================================================================================================================================================================================================================================================================================================================================================================================
const search = document.querySelector('.box-header__search.search-box');
const bodyElement = document.querySelector('body');

search.addEventListener('click', function (e) {
   e.stopPropagation();
   search.classList.add('active-search');
})
bodyElement.addEventListener('click', function () {
   search.classList.remove('active-search');
});

// burger ========================================================================================================================================================================================================================================================================================================================================================================================================================
const burgerBtn = document.querySelector('.header__burger');
const bodyEl = document.body;

if (burgerBtn && bodyEl) {
   burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle('active');
      bodyEl.classList.toggle('lock');
   })
};

// sldebar ========================================================================================================================================================================================================================================================================================================================================================================================================================
const sidebarBtn = document.querySelector('.sidebar__button');
const sideBar = document.querySelector('.main__sidebar.sidebar');
const overplay = document.querySelector('.overplay');
const bodyHid = document.body;
if (sideBar && bodyHid) {
   sidebarBtn.addEventListener("click", () => {
      sideBar.classList.toggle('active')
      bodyHid.classList.toggle('lock')
   })
}
if (sideBar && bodyHid) {
   overplay.addEventListener("click", () => {
      sideBar.classList.remove('active')
      bodyHid.classList.remove('lock')
   })
}

// swiper page ========================================================================================================================================================================================================================================================================================================================================================================================================================
const swiperPageSmall = new Swiper('.small-slider-page__slider', {
   slidesPerView: 7,
   watchSlidesVisibility: true,

   breakpoints: {
      300: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      950: {
         slidesPerView: 3,
      },
      1000: {
         slidesPerView: 3,
      },
      1470: {
         slidesPerView: 7,
      }
   },
});

const swiperPage = new Swiper('.slider-page__slider', {
   // Optional parameters
   direction: 'horizontal',
   // loop: true,
   thumbs: {
      swiper: swiperPageSmall,
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 1,
      },
      // when window width is >= 640px
      1000: {
         slidesPerView: 1,
      }
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
   
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});

// swiper comment spoller ========================================================================================================================================================================================================================================================================================================================================================================================================================
const swiperComment = new Swiper('.sliders-comment__sliders', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 4.2,
   spaceBetween: 15,
   breakpoints: {
      // when window width is >= 320px
      300: {
         slidesPerView: 1,
      },
      767: {
         slidesPerView: 2,
      },
      // when window width is >= 480px
      1000: {
         slidesPerView: 3,
      },
      // when window width is >= 640px
      1400: {
         slidesPerView: 4.2,
      }
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      horizontalClass: 'swiper-scrollbar-horizontal',
      verticalClass: false,
   },
});

const commentPanel = document.querySelector('.col-panel-comment__all');
const commentBtn = document.querySelector('.all-comment__button');
const menuAll = document.querySelector('.box-all-comment__list')
const bodyHidd = document.body;
if (commentBtn) {
   commentBtn.addEventListener("click", () => {
      commentPanel.classList.toggle('active')
   })
   menuAll.querySelectorAll('.box-all-comment__link').forEach(link => {
      link.addEventListener('click', () => {
         commentPanel.classList.remove('active')
         commentBtn.classList.remove('active')
      })
   })
}

const commentSort = document.querySelector('.col-panel-comment__sort');
const commentSortBtn = document.querySelector('.sort-comment__button');
const menuSort = document.querySelector('.box-sort-comment__list')
if (commentSort) {
   commentSortBtn.addEventListener("click", () => {
      commentSort.classList.toggle('active')
   })
   menuSort.querySelectorAll('.box-sort-comment__link').forEach(link => {
      link.addEventListener('click', () => {
         commentSort.classList.remove('active')
         commentSortBtn.classList.remove('active')
      })
   })
}












