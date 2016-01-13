// open and close contact section
var contactClick = 0;
$('.contact-link, .carat').click(function(){
	contactClick++;
	$("html, body").animate({ scrollTop: 0 }, "fast");
	if (window.innerWidth > 640) {	
		if (contactClick % 2 == 0) {
			$('.contact').css('margin-top', '-800px');
		} else {
			$('.contact').css('margin-top', '80px');
		}
	} else {
		if (contactClick % 2 == 0) {
			$('.contact').css('margin-top', '-120vh');
		} else {
			$('.contact').css('margin-top', '0px');
		}
	}
});

// open and close about section
var aboutClick = 0;
$('.about-link, .pink-carat').click(function(){
	aboutClick++;
	$("html, body").animate({ scrollTop: 0 }, "fast");
	if (aboutClick % 2 == 0) {
		$('.about').css('margin-left', '-100vw');
		$('.section1').css('margin-left', '0');
	} else {
		$('.about').css('margin-left', '0');
		$('.section1').css('margin-left', '100vw');
	}
});

// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// highlighter functionality
$(window).on('DOMMouseScroll mousewheel', function(){
	if ($('.sec1').hasClass('visible')) {
		$('.highlighters ul li:nth-of-type(1)').css('opacity', '1');
		$('.highlighters ul li:nth-of-type(2)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(3)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(4)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(5)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(6)').css('opacity', '0.2');
	} else if ($('.sec2').hasClass('visible')) {
		$('.highlighters ul li:nth-of-type(1)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(2)').css('opacity', '1');
		$('.highlighters ul li:nth-of-type(3)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(4)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(5)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(6)').css('opacity', '0.2');
	} else if ($('.sec3').hasClass('visible')) {
		$('.highlighters ul li:nth-of-type(1)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(2)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(3)').css('opacity', '1');
		$('.highlighters ul li:nth-of-type(4)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(5)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(6)').css('opacity', '0.2');
	} else if ($('.sec4').hasClass('visible')) {
		$('.highlighters ul li:nth-of-type(1)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(2)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(3)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(4)').css('opacity', '1');
		$('.highlighters ul li:nth-of-type(5)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(6)').css('opacity', '0.2');
	} else if ($('.sec5').hasClass('visible')) {
		$('.highlighters ul li:nth-of-type(1)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(2)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(3)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(4)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(5)').css('opacity', '1');
		$('.highlighters ul li:nth-of-type(6)').css('opacity', '0.2');
	} else if ($('.sec6').hasClass('visible')) {
		$('.highlighters ul li:nth-of-type(1)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(2)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(3)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(4)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(5)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(6)').css('opacity', '1');
	} else {
		$('.highlighters ul li:nth-of-type(1)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(2)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(3)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(4)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(5)').css('opacity', '0.2');
		$('.highlighters ul li:nth-of-type(6)').css('opacity', '0.2');
	}
});

// animated hamburger icon for mobile
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('.nav ul').toggleClass('mobile-hide');
		$('.prjct-right, .prjct-left').toggleClass('mobile-hide');
	});
});

$('.nav ul li').click(function(){
	$('#nav-icon3').toggleClass('open');
	$('.nav ul').toggleClass('mobile-hide');
	$('.prjct-right, .prjct-left').toggleClass('mobile-hide');
});

// animate 'i am a' text
$(document).ready(function(){
	$('.hello-cover').css('width', '0');
});

// strike through hover effect
$('.my-line-header').mouseover(function(){
	$('.line-cover1').css('width', '200');
});
$('.my-line-header').mouseout(function(){
	$('.line-cover1').css('width', '0');
});
$('.grimes-header').mouseover(function(){
	$('.line-cover2').css('width', '210');
});
$('.grimes-header').mouseout(function(){
	$('.line-cover2').css('width', '0');
});
$('.float-header').mouseover(function(){
	$('.line-cover3').css('width', '210');
});
$('.float-header').mouseout(function(){
	$('.line-cover3').css('width', '0');
});
$('.marcellus-header').mouseover(function(){
	$('.line-cover4').css('width', '210');
});
$('.marcellus-header').mouseout(function(){
	$('.line-cover4').css('width', '0');
});
$('.montage-header').mouseover(function(){
	$('.line-cover5').css('width', '210');
});
$('.montage-header').mouseout(function(){
	$('.line-cover5').css('width', '0');
});