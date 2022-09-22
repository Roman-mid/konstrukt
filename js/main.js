

// MOBILE MENU

$('.mobile-menu').on('click', function(e) {
  $('.menu').toggleClass('active')
})




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("stick-menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}






// SLIDER

const mySwiper = new Swiper('.swiper', {
  direction : 'horizontal',
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,

      spaceBetween: 30
    },


    // when window width is >= 540px
    767: {
      slidesPerView: 2,
      spaceBetween: 20,

    },
    // when window width is >= 720px
    991 : {
        slidesPerView: 3,
        spaceBetween: 15,

    },
    // when window width is >= 960px
    1199 : {
        slidesPerView: 3,
        spaceBetween: 30,

    }
      },
      loop : true,
      stopOnLastSlide : false,
      autoHeight: true,
      autoplay : {
        delay : 3000
      },

})