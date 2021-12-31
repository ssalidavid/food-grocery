let searchForm = document.querySelector('.search-form');
// add event onclick
document.querySelector('#ser-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  nav.classList.remove('active');
}

let shoppingCart = document.querySelector('.shooping-cart');
// add event onclick
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
// add event onclick
document.querySelector('#login-user').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    nav.classList.remove('active');
}


// on small device
let nav = document.querySelector('.nav');
// add event onclick
document.querySelector('#menu-bar').onclick = () =>{
    nav.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
// onscroll
window.onscroll = () =>{
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  nav.classList.remove('active'); 
}

// products sliders
var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  // review sliders
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
      0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});