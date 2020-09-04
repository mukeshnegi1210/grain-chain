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
        responsiveClass: true,
        dots: false,
        items: 1,
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

    // contact form button 

    $('#banner-enquiry').click(function () {
        $("html, body").animate({
            scrollTop: $("#bottom-contact").offset().top - 50}, 600);
    });

});