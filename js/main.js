window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    margin: 20,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive:{
      0:{
        items: 1,
        stagePadding: 20,
        dots: true,
        dotsEach: true,
      },
      400:{
        items: 1,
        stagePadding: 50,
        dots: false,
        dotsEach: false,
      },
      460:{
        items: 1,
        stagePadding: 80,
        dots: false,
        dotsEach: false,
      },
      552:{
        items: 1,
        stagePadding: 120,
        dots: false,
        dotsEach: false,
      },
      648:{
        items: 1,
        stagePadding: 170,
        dots: false,
        dotsEach: false,
      },
      754:{
          items: 2,
          stagePadding: 50,
          dots: false,
          dotsEach: false,
      },
      869:{
          items: 2,
          dots: false,
          dotsEach: false,
          stagePadding: 100,
      },
      978:{
          items:3
      }
    }
  })
});
const owl = $('.owl-carousel');
$('.img__arrow_left').click(function () {
	owl.trigger('prev.owl.carousel');
});
$('.img__arrow_right').click(function () {
  owl.trigger('next.owl.carousel')
});
