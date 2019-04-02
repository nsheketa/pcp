
$(document).ready(function () {

  //paroller js
  $('.paroller').paroller();

  new WOW().init();

  //mob menu
  $(".header-mob__btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("header-mob__btn-active");
    $(".header-nav").toggleClass('header-nav__active');
    $('body').toggleClass('no-scroll');
  });

  $('.header-nav__list-link').click(function () {
    $(".header-mob__btn").removeClass('header-mob__btn-active');
    $(".header-nav").removeClass('header-nav__active');
    $('body').removeClass('no-scroll');
  });

  //welcome line length
  // function welcomeLineLength() {
  //   var logo = $('.header__logo'),
  //     logoHeight = parseInt(logo.css('height')),
  //     logoTop = parseInt(logo.css('top')),
  //     parent = $('.welcome'),
  //     parentHeight = parseInt(parent.css('height'));
  //   $('.welcome__line').css({
  //     top: ( logoTop  + logoHeight ) + 20 + 'px',
  //     height: ( parentHeight - logoTop - logoHeight) + 'px'
  //   })
  // }

  //nav line positioning
  function linePositiong() {
    var welcome = $('.welcome'),
      welcomeHeight = welcome.height(),
      welcomeBottom = welcome.offset().top + welcomeHeight,
      windowScrollTop = $(window).scrollTop(),
      navGap = $('.nav-gap'),
      main = $('.main'),
      mainBottom = main.offset().top + main.height();

    if(windowScrollTop >= welcomeBottom + 50 && windowScrollTop <= mainBottom - 100){
      navGap.addClass('fixed');
      navGap.css({
        top: (windowScrollTop-welcomeHeight)/100 + "%"
      })
    }
    else{
      navGap.removeClass('fixed');
    }
  }

  // smooth scrolling
  $('.scroll__link').click(function () {

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(the_id).offset().top
    }, 'slow');

    return false;
  });

//features

  $('.features-item__arrow-up').click(function () {
    $(this).parents('.features-item').find('.features-item__info').addClass('features-item__info-open');
    $(this).addClass('arrow-hidden');
  });

  $('.features-item__arrow-down').click(function () {
    $(this).parent().removeClass('features-item__info-open');
    $(this).parents('.features-item').find('.features-item__arrow-up').removeClass('arrow-hidden');
  });
  $(document).on('click', '.features-item__info', function (e){
    $(this).toggleClass('features-item__info-open');
    if($(this).closest('.features-item__info.features-item__info-open')){
      // $(this).removeClass('features-item__info-open');
      $(this).parents('.features-item').find('.features-item__arrow-up').removeClass('arrow-hidden');
    }
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
  // welcomeLineLength();
  // linePositiong();

  $(window).resize(function () {
    // welcomeLineLength();
    numberIncrease();
    // linePositiong()
  });

  $(window).scroll(function () {
    // linePositiong();
    numberIncrease();
  });

});