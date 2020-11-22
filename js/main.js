$(document).ready(function() {
    // Counter 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Partner Carousel
    $('.slider-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        dots: false,
        autoplay: false,
        rtl: true,
        navText: ["<span class='carousel-nav-right'><i class='fas fa-chevron-left '></i></span>",

            "<span class='carousel-nav-left'><i class='fas fa-chevron-right '></i></span>"
        ],
        items: 1,
    });


    // testimonial Carousel
    $('.servies-carousel').owlCarousel({
        rtl: true,
        loop: false,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // dispaly carousel
    $('.display-carousel').owlCarousel({
        rtl: true,
        thumbs: true,
        thumbsPrerendered: true,
        // Class that will be used on the thumbnail container
        thumbContainerClass: 'owl-thumbs',

        // Class that will be used on the thumbnail item's
        thumbItemClass: 'owl-thumb-item',
        loop: false,
        nav: false,
        dots: false,
        autoplay: false,
        items: 1

    });

    // Thumbunail carousel




    // scroll top element

    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }

    });

    // Click On Button Top     

    scrollButton.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });



    // upload files
    let realFile = document.getElementById('real-file');
    let customFile = document.getElementById('custom-upload');
    if (realFile) {
        customFile.addEventListener('click', function() {
            realFile.click()
        });
    }

});