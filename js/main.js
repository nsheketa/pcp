
$(document).ready(function () {

  //paroller js
  $('.paroller').paroller();

  new WOW().init();

  //mob menu
  $(".header-mob__btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("header-mob__btn-active");
    $(".header-nav").toggleClass('header-nav__active');
    $('body,html').toggleClass('no-scroll');
  });

  $('.header-nav__list-link').click(function () {
    $(".header-mob__btn").removeClass('header-mob__btn-active');
    $(".header-nav").removeClass('header-nav__active');
    $('body,html').removeClass('no-scroll');
  });

  //nav line positioning
  // function linePositiong() {
  //   var welcome = $('.welcome'),
  //     welcomeHeight = welcome.height(),
  //     welcomeBottom = welcome.offset().top + welcomeHeight,
  //     windowScrollTop = $(window).scrollTop(),
  //     navGap = $('.nav-gap'),
  //     main = $('.main'),
  //     mainBottom = main.offset().top + main.height();
  //
  //   if(windowScrollTop >= welcomeBottom + 50 && windowScrollTop <= mainBottom - 100){
  //     navGap.addClass('fixed');
  //     navGap.css({
  //       top: (windowScrollTop-welcomeHeight)/100 + "%"
  //     })
  //   }
  //   else{
  //     navGap.removeClass('fixed');
  //   }
  // }

  // smooth scrolling
  $('.scroll__link').click(function () {

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(the_id).offset().top
    }, 'slow');

    return false;
  });

  //features
  $(document).on('click', '.features-item', function (e){
    $(this).find('.features-item__info').toggleClass('features-item__info-open');
    $(this).find('.features-item__arrow-up').toggleClass('arrow-hidden');
  });

  //number increase
  function numberIncrease() {
    if($('body').is('.work-page')){
      var facts = $('.facts'),
          factsTop = facts.offset().top,
          count  = $('.count'),
          viewport = $(window),
          viewportTop = viewport.scrollTop(),
          viewportBottom = viewportTop + viewport.height();

      if(factsTop <= viewportBottom && factsTop>= viewportTop){
        if (!count.hasClass('increased')){
          count.each(function () {
            $(this).prop('Counter',0).animate({
              Counter: $(this).text()
            }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                $(this).text(parseInt(now));
              }
            });
          });
          count.addClass('increased');
        }
      }
    }
  }

  //news-slider
  $('.news-slider').slick({
    dots: false,
    arrows: true
  });

  numberIncrease();

  $(window).resize(function () {
    numberIncrease();
  });

  $(window).scroll(function () {
    numberIncrease();
  });

});