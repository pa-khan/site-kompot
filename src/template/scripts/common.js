$(document).ready(function($) {

	$('.input_tel input').mask('+7 (999) 999-99-99');
	
	$('.reviews__list').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		responsive: [{
      breakpoint: 787,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
	})
	 $(".panel__nav a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top - 50 +"px"}, 1500);
      return false;
	  });
});
