$(document).ready(function(){
    // mobile menu
    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu'
    });


    // slider active 
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // project active
    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        // autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin: 10,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
    })

    // video popup 
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    // blog post active 
    $('.blog-post-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // testimonial active 
    $('.testimonial-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // brand active 
    $('.brand-active').owlCarousel({
        loop:false,
        nav:false,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:6
            }
        }
    })
    // $('.slider-active').owlCarousel({
    //     loop:true,
    //     nav:true,
    //     navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    //     animateOut: 'fadeOut',
    //     animateIn: 'fadeIn',
    //     autoplay:true,
    //     autoplayTimeout:1000,
    //     autoplayHoverPause:true,
    //     items:1,
    //     smartSpeed:450
    // });
  
});
