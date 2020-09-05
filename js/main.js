$(function () {


    $('.partners-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                center: true,
                autoplay:true,
                autoplayTimeout:1500,
                nav:false
            },
            767: {
                items: 3,
                nav:false
            },
            1023: {
                items: 5,
                nav:true
            },
            1200:{
                nav:false
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

    // wow initiate
    new WOW().init();


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