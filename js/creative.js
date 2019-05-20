/*!
 * Creative v1.0.4 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

 $('#dw-btn').click(function() {
    $('#dw').fadeIn("fast").css("display","inline-block");
    $('#gd').fadeOut("fast");
    $('#bb').fadeOut("fast");
	$('#rm').fadeOut("fast");
    $('#ne').fadeOut("fast");
	$('#sm').fadeOut("fast");
    $('#er').fadeOut("fast");
	 $('.youtube_player_iframe').each(function(){
	this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});

 $('#sm-btn').click(function() {
    $('#sm').fadeIn("fast").css("display","inline-block");
    $('#gd').fadeOut("fast");
    $('#bb').fadeOut("fast");
	$('#rm').fadeOut("fast");
    $('#ne').fadeOut("fast");
	$('#dw').fadeOut("fast");
    $('#er').fadeOut("fast");
	 $('.youtube_player_iframe').each(function(){
	this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});

 $('#rm-btn').click(function() {
	$('#rm').fadeIn("fast").css("display","inline-block");
    $('#dw').fadeOut("fast");
    $('#gd').fadeOut("fast");
    $('#bb').fadeOut("fast");
    $('#ne').fadeOut("fast");
	$('#sm').fadeOut("fast");
    $('#er').fadeOut("fast");
	   $('.youtube_player_iframe').each(function(){
	this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});

  $('#gd-btn').click(function() {
    $('#gd').fadeIn("fast").css("display","inline-block");
    $('#dw').fadeOut("fast");
    $('#bb').fadeOut("fast");
	$('#rm').fadeOut("fast");
    $('#ne').fadeOut("fast");
	$('#sm').fadeOut("fast");
    $('#er').fadeOut("fast");
	 $('.youtube_player_iframe').each(function(){
	this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});

  $('.close-btn').click(function() {
    $('#gd').fadeOut("fast");
    $('#dw').fadeOut("fast");
    $('#bb').fadeOut("fast");
	$('#rm').fadeOut("fast");
    $('#ne').fadeOut("fast");
	$('#sm').fadeOut("fast");
    $('#er').fadeOut("fast");
	 $('.youtube_player_iframe').each(function(){
	this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});

  $('#bb-btn').click(function() {
    $('#bb').fadeIn("fast").css("display","inline-block");
    $('#gd').fadeOut("fast");
    $('#dw').fadeOut("fast");
  	$('#rm').fadeOut("fast");
    $('#ne').fadeOut("fast");
	$('#sm').fadeOut("fast");
    $('#er').fadeOut("fast");
	 $('.youtube_player_iframe').each(function(){
	this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});

$('#ne-btn').click(function() 
{
  $('#ne').fadeIn("fast").css("display","inline-block");
  $('#gd').fadeOut("fast");
  $('#dw').fadeOut("fast");
  $('#bb').fadeOut("fast");
  $('#rm').fadeOut("fast");
  $('#sm').fadeOut("fast");
  $('#er').fadeOut("fast");
  $('.youtube_player_iframe').each(function(){
	this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});


  $('#er-btn').click(function() {
    $('#er').fadeIn("fast").css("display","inline-block");
    $('#gd').fadeOut("fast");
    $('#dw').fadeOut("fast");
    $('#rm').fadeOut("fast");
    $('#ne').fadeOut("fast");
    $('#sm').fadeOut("fast");
    $('#bb').fadeOut("fast");
     $('.youtube_player_iframe').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});


(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
