$(document).ready(function () {
  'use strict'
  
  // tabs
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
      });
    });
  });
  //banner
  $('.js-slider').slick({
    dots: true
    , arrows: false
    , infinite: true
    , autoplay: true
    , speed: 1000
    , slidesToShow: 1
  });
  
  $('.novelties_slider').slick({
    dots: true
    , arrows: false
    , infinite: true
    , autoplay: true
    , speed: 1000
    , slidesToShow: 4
    , slidesToScroll: 4
    , responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  // equal height
  $('.novelties_slider').on('setPosition', function () {
    $(this).find('.slick-slide').height('auto');
	var slickTrack = $(this).find('.slick-track');
	var slickTrackHeight = $(slickTrack).height();
	$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
  });
  
  $('.partners_slider').slick({
    dots: true
    , arrows: false
    , infinite: true
    , autoplay: true
    , speed: 1000
    , slidesToShow: 7
    , slidesToScroll: 4
    , responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
      {
      breakpoint: 601,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
  });
  
  // dropdown
  $('.js-dropdown').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active').next('.dropdown_block').slideUp(200);
    }
    else {
      $('.js-dropdown').removeClass('active').next('.dropdown_block').slideUp(100);
      $(this).toggleClass('active').next('.dropdown_block').slideToggle(200);
    }
  });
  
  // select
  
  $('.js-select').select2({
    minimumResultsForSearch: Infinity 
  })
  .on('select2:open', function () {
    $('.select2-results__options').niceScroll();
  });
  
  // calc
  function number() {
    var number = $(".js-number");
    number.each(function () {
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function () {
        var val = +(input.val());
        if (val >= max_number) {
          return false
        }
        else {
          val += 1;
          input.val(val);
        }
      });
      minus.on("click", function () {
        var val = +(input.val());
        if (val > 1) {
          val -= 1;
          input.val(val);
        }
        return false;
      });
      input.on("change", function () {
        var val = +$(this).val();
        if (val > max_number) {
          val = max_number;
          $(this).val(val);
        }
        if (val == '') {
          val = 1;
          $(this).val(val);
        }
      });
    });
  }
  number();
  
  // matchHeight
  
  $('.novelties .item_prod').matchHeight();
  
  // fancybox
  
   $('.img_block > a').fancybox();
  
  // menu toggle
  
  $('.js-menuToggle').on('click', function(e){
    e.preventDefault();
    $(this).parent('.hamburger').next('.catalog').slideToggle(300);
  });
  
  
})