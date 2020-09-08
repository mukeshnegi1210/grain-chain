$(function () {
    // contact form button 

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
                autoplayTimeout: 1500,
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
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2500,
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

    $('.banner-item-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1
    });
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

            },
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
        $('.benefits-content').slideUp();
        $(this).next('.benefits-content').slideDown();
        $('.benefits-box').removeClass('active')
        $(this).addClass('active');
    });

    // wow initiate
    new WOW().init();
});