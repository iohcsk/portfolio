'use strict';

$(document).ready(function(){

    let windowHeight = $(window).height();

    $(".btn_down").on("click", function(){
        $("html, body").animate({scrollTop: windowHeight}, 500);
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000
          },
        loop: true,
        breakpoints: {
            320: { // 320px 이상
              slidesPerView: 1,
              autoplay: {
                delay: 2000
              },
            },
            480: { // 480px 이상
                slidesPerView: 2,
              },
            768: { // 768px 이상
              slidesPerView: 4,
              autoplay: {
                delay: 3000
              },
            },
        }
    });

    $('.swiper-slide').hover(function(){
        swiper.autoplay.stop();
      }, function(){
        swiper.autoplay.start();
      });


    document.querySelector(".btn_up").addEventListener("click", function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
    });

});