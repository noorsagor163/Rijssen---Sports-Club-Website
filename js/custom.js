$(function () {

    // =================== PRELOADER JS START ===============

    $(window).on('load', function () {
        $(".holder").delay(500).fadeOut(500);
    });

    // =================== PRELOADER JS END ===============

    //================== STICKY MENU START ==================

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling >= 130) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    //================== STICKY MENU END ==================

    // ============= BANNER SLIDER JS START =============

    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".left",
        nextArrow: ".right",
        dots: true,
    });

    // ============= BANNER SLIDER JS END =============

    // ============= THIN SLIDER JS START =============

    $('.thin-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".left2",
        nextArrow: ".right2",
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });

    // ============= THIN SLIDER JS END =============

    // ============= BRAND SLIDER JS START =============

    $('.brand-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".left3",
        nextArrow: ".right3",
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // ============= BRAND SLIDER JS END =============

});

// ============= COUNTDOWN TIMER JS START =============

function simple_local_time(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    var suffix = "AM";

    if (hours >= 12) {
        hours = hours -12;
        suffix = "PM";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var time = hours + ":" + minutes + " " + suffix ;
    jQuery(".time").text(time);
    var t = setTimeout(simple_local_time, 500);
}


window.onload=simple_local_time();

// ============= COUNTDOWN TIMER JS END =============