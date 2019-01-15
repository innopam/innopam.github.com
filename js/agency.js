/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
var goToTop = function(){
	$('html, body').stop().animate({
		$('#page-top').offset().top
	}, 1500, 'easeInOutExpo');
	
};

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

/*-----------------------------------------------------------------------------------*/
/*  Slider Jssor 20170213 Jypark
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {

	var jssor_1_options = {
	  $AutoPlay: true,
	  $SlideDuration: 2000,
	  $SlideEasing: $Jease$.$OutQuint,
	  $ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
		$Class: $JssorBulletNavigator$
	  }
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

	/*responsive code begin*/
	/*you can remove responsive code if you don't want the slider scales while window resizing*/
	function ScaleSlider() {
		var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
		if (refSize) {
			refSize = Math.min(refSize, 1920);
			jssor_1_slider.$ScaleWidth(refSize);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	/*responsive code end*/
});
