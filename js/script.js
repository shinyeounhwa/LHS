$(document).ready(function () {
  $(function () {
    if (window.innerWidth > 1000) {
      const dept1 = $(".gnb-list li"),
        navheight = $(".gnb-list");

      dept1
        .mouseenter(function () {
          navheight.stop().animate({ height: "500px" });
        })
        .mouseleave(function () {
          navheight.stop().animate({ height: "40px" });
        });
    } else {
      $(".hamburger").click(function () {
        $(".gnb-wrap").addClass("active");
      });
      $(".gnb-wrap").mouseleave(function () {
        $(".gnb-wrap").animate().removeClass("active");
      });
    }
  }).resize();

  // $('.hamburger').click(function(){
  //   $('.gnb-wrap').addClass('active')
  // });
  // $('.gnb-wrap').mouseleave(function(){
  //   $('.gnb-wrap').animate().removeClass('active')
  // });

  var listArray = [
    "2023 윈터스쿨",
    "봉선포레스트 모집",
    "정규반 N수",
    "주말반수모집",
  ];
  var swiper = new Swiper(".bodySwiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: "true",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
      type: "bullets",
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          "<p>" +
          listArray[index] +
          "</p>" +
          "<i></i>" +
          "<b></b>" +
          "</span>"
        );
      },
    },
  });
  $(".start").on("click", function () {
    swiper.autoplay.start();
    return false;
  });
  $(".stop").on("click", function () {
    swiper.autoplay.stop();
    return false;
  });

  var swiper = new Swiper(".inner-s", {
    slidersPerview: "auto",
    speed: 1000,
    loop: "true",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //스와이퍼 sec-2
  var swiper = new Swiper(".sec-2-Swiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      //   el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  $(".map-box a").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    const dataresult = $(this).attr("data-alt");

    $(".r-inbox div").removeClass("active");
    $(`#${dataresult}`).addClass("active");
  });

  //sec-4 텝메뉴
  $(".btn li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    const result = $(this).attr("data-tab");

    $(".tabs div").removeClass("active");
    $(`#${result}`).addClass("active");
  });

  var swiper = new Swiper(".endSwiper", {
    slidersPerview: "auto",
    speed: 200,
    loop: "true",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev",
    },
  });
});
