$(function () {


    $('.partners-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                center: true

            },
            767: {
                items: 3

            },
            1023: {
                items: 5
            }
        }
    });

    $('.work-process-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        items: 1
    });

    $('.banner-item-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1
    });

    // menu mobile
    $('.menu-open').click(function () {
        $('.primary-menu').addClass('active');
    });
    $('.menu-close').click(function () {
        $('.primary-menu').removeClass('active');
    });



})