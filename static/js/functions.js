(function ($) {
    'use strict';

    // Slider Activate
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="pe-7s-angle-left" aria-hidden="true"></i>', '<i class="pe-7s-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000
        });
    }

	// Slider Activate with Captions (figcaption)
    if ($.fn.owlCarousel) {
		var owl = $('.client_slides');
		
		owl.on('initialized.owl.carousel', function(e) {
	        $('#figcaption')
	        	.queue(function(n) {
			        $(this).html( $('.owl-item.center').find('.slide_text').clone() );
			        n();
		        })
		});

		owl.on('translate.owl.carousel', function(e) {

	        $('#figcaption').animate( { opacity: 0 }, 250 );
		});

		owl.on('translated.owl.carousel', function(e) {

	        $('#figcaption')
	        	.delay( 250 )
	        	.queue(function(n) {
			        $(this).html( $('.owl-item.center').find('.slide_text').clone() );
			        n();
		        })
		        .animate( { opacity: 1 }, 500 );
		});

		owl.owlCarousel({
            items: 3,
            margin: 0,
            loop: true,
            nav: true,
            navText: [
	            '<i class="pe-7s-angle-left">',
	            '<i class="pe-7s-angle-right">'
	        ],
            dots: false,
			autoplay: true,
		    autoplayTimeout: 5000,
		    autoplayHoverPause: true,
            fluidSpeed: 1000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                }
            }
		});
	}
	
    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".twitter_feed_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 5000
        });
    }

    // Partner Company Slider Active Code
    if ($.fn.owlCarousel) {
        $(".partner_slides").owlCarousel({
            items: 3,
            margin: 0,
            loop: true,
            nav: true,
            dots: true,
			autoplay: true,
		    autoplayTimeout: 5000,
		    autoplayHoverPause: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'current_page_item',
            scrollSpeed: 1500,
            easing: 'easeInOutQuart'
        });
    }

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // Counterup Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    $(".welcome_area").toggleClass("ready");

    var $window = $(window);

    window.setTimeout(function() {
        var w = new PCWidget({c: 'f8124fdc-b0c9-4196-8c90-b846154f93c8', f: true });
    }, 8000);

    // Fullscreen Active Code    
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });
    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // Sticky Active Code
    // $window.on('scroll', function () {
    //     // Fadeout text code
    //     $(".welcome_fade_text").css("opacity", 1 - $(window).scrollTop() / $('.welcome_fade_text').height());        
        
    //     if ($window.scrollTop() > 90) {
    //         $('.main_header_area').addClass('sticky fadeIn');
    //         $('body').addClass('mobile_menu_on fullmenu-on');
    //     } else {
    //         $('.main_header_area').removeClass('sticky fadeIn');
    //         $('body').removeClass('mobile_menu_on fullmenu-on');
    //     }
    // });

})(jQuery);