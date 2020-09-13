$(function () {
    // contact form button 

    $("#app-img-list").EasySlides({
        // 'autoplay': true, 
        'loop': true,
      'stepbystep': true, 
      'timeout': 3000,
        'show': 3,
        'touchevents': true
    });

    $('#banner-enquiry').click(function () {
        $("html, body").animate({
            scrollTop: $("#bottom-contact").offset().top
        }, 600);
    });

    $('.partners-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                center: true,
                autoplay: true,
                autoplayTimeout: 3500,
                nav: false
            },
            767: {
                items: 3,
                nav: true
            },

            1200: {
                items: 5
            }
        }
    });

    $('.work-process-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3500,

        responsive: {
            400: {
                nav: false
            },
            767: {
                nav: true
            },

            1200: {
                nav: false
            }
        }
    });


    $('.blockchain-benefits-list-mobile').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        items: 4,
        autoplay: true,
        autoplayTimeout: 2500,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                autoWidth: false

            },
            479: {
                items: 2,
                nav: true,
                autoWidth: false
            },
            767: {
                items: 4,
                nav: true
            }
        }
    });


    $('.blockchain-technology-flow-mobile').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: true,
        responsive: {
            0: {
                nav: false
            },
            767: {
                nav: true
            },

            1200: {
                nav: false
            }
        }
    });

    // $('.banner-item-list').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     responsiveClass: true,
    //     dots: false,
    //     nav: true,
    //     items: 1
    // });
    $('.problem-list').owlCarousel({
        loop: true,
        center: true,
        dots: false,
        nav: true,
        responsiveClass: true,
        items: 3,
        responsive: {
            0: {
                items: 1,
                center: true

            },
            600: {
                items: 2

            }
        }
    });

    $('.media-tab-content-wrapper.mobile .media-tabs-content').owlCarousel({
        loop: true,
        center: true,
        dots: false,
        nav: true,
        items: 1,
        autoHeight: true

    });
    // $('.app-img-list').owlCarousel({
    //     loop: true,
    //     center: true,
    //     dots: true,
    //     nav: false,
    //     items: 1
    // });


    // harvex slider============
    // ----producer 
    $('.producer-slider, .drivers-slider, .facility-slider ').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 20,
        autoplay: 2500,
        responsiveClass: true,
        items: 4,
        responsive: {
            0: {
                items: 2,
            },
            479: {
                items: 4
            }
        }
    });




    // menu mobile
    $('.menu-open').click(function () {
        $('.primary-menu').addClass('active');
    });
    $('.menu-close').click(function () {
        $('.primary-menu').removeClass('active');
    });





    // products / benefits accordions

    $('div.benefits-box').click(function () {
        // $('.benefits-content').fadeOut(500);
        // $(this).next('.benefits-content').fadeIn(500);
        $('.benefits-content').slideUp(500);
        $(this).next('.benefits-content').slideDown(500);
        $('.benefits-box').removeClass('active');
        $(this).addClass('active');

    });

    // media tabs

    $('.media-releases-tabs li').click(function () {
        var get_tab_id = $(this).attr('data-tab')

        $('.media-releases-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.media-tabs-content').removeClass('active')
        $(get_tab_id).addClass('active');
    });


    // flipster



    // wow initiate
    new WOW().init();
});