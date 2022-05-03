'use strict';

$(document).ready(function(){

    let windowHeight = $(window).height();

    $(".btn_down").on("click", function(){
        $("html, body").animate({scrollTop: windowHeight}, 500);
    });

    
    let profile = $("#profile").offset(),
        fs_tm = $("#fs_tm").offset(),
        pop = $("#pop").offset(),
        contact = $("#contact").offset();

    $(".go_to_profile").on("click", function(){
      $("html, body").animate({scrollTop: profile.top}, 500);
    });

    $(".go_to_fstm").on("click", function(){
      $("html, body").animate({scrollTop: fs_tm.top}, 500);
    });

    $(".go_to_pop").on("click", function(){
      $("html, body").animate({scrollTop: pop.top}, 500);
    });

    $(".go_to_contact").on("click", function(){
      $("html, body").animate({scrollTop: contact.top}, 500);
    });


    var swiper = new Swiper(".mySwiper", {
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
              spaceBetween: 40,
              autoplay: {
                delay: 2000
              },
            },
            650: { // 650px 이상
                slidesPerView: 2,
                spaceBetween: 20,
              },
            768: { // 768px 이상
              slidesPerView: 3,
              spaceBetween: 20,
              autoplay: {
                delay: 3000
              },
            },
            1280: { // 1280px 이상
              slidesPerView: 4,
              spaceBetween: 40,
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