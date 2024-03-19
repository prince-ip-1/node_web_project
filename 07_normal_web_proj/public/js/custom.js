$(document).ready(function(){
   $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.header').addClass('sticky');
      }
      else {
      $('.header').removeClass('sticky');
   }
  });

  $('#play-video').on('click', function(e){
      e.preventDefault();
      $('#video-overlay').addClass('open');
      $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/wih7coKNL4Q" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function(e){
      e.preventDefault();
      close_video();
    });

    $(document).keyup(function(e){
      if(e.keyCode === 27) { close_video(); }
    });

    function close_video() {
      $('.video-overlay.open').removeClass('open').find('iframe').remove();
    };
   

     var numItems = $('.swiper-slider').length
  // console.log(numItems);
  if (numItems > 0 ) {
    var swiper = new Swiper(".swiper-slider", {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    },
    loop: true,
    autoplay: {
      delay: 1000,
     },
    speed: 2000
  });
 }

    var numItems = $('.counter-container').length
  // console.log(numItems);
  if (numItems > 0 ) {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $(".counter-container").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
            countTo = $this.attr("data-target");
        $({
            countNum: $this.text()
        }).animate(
          {
              countNum: countTo
          },

          {
            duration: 850,
            easing: "swing",
            step: function () {
                //$this.text(Math.ceil(this.countNum));
                $this.text(
                    Math.ceil(this.countNum).toLocaleString("en")
                );
            },
            complete: function () {
                $this.text(
                    Math.ceil(this.countNum).toLocaleString("en")
                );
                //alert('finished');
            }
          }
        );
      });
      a = 1;
    }
  });
}
  var numItems = $('.Testimonial-slider').length
  // console.log(numItems);
  if (numItems > 0 ) {
  var swiper = new Swiper(".Testimonial-slider", {
    loop: true,
    autoplay:false, 
    slidesPerView:3,
    spaceBetween: 30,
    paginationClickable: true,
    // effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     breakpoints: {
    0: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 3
    },
  }
  });
}
 
  var numItems = $('.services-slider').length
  // console.log(numItems);
  if (numItems > 0 ) {
  var swiper = new Swiper(".services-slider", {
    loop: true,
    autoplay:false, 
    slidesPerView:4,
    spaceBetween: 15,
    paginationClickable: true,
    // effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     breakpoints: {
    0: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 4
    },
  }
  });
}
  var numItems = $('.stone-gallery').length
  // console.log(numItems);
  if (numItems > 0 ) {
   $(".stone-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
  } 
});
		