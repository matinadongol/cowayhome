var $ = jQuery;

//PAGE LOADER
$(window).on("load", function () {
    "use strict";
    $(".loader").fadeOut(800);
    $('.side-menu').removeClass('opacity-0');
});

$(document).ready(function () {

    "use strict";
    let $window = $(window);
    let body = $("body");
    let $root = $("html, body");
    //$('[data-toggle="tooltip"]').tooltip();

    //Contact Us
    $("#submit_btn").on(' click', function () {
        let userName = $('input[name=userName]').val();
        let userEmail = $('input[name=email]').val();
        let companyName = $('input[name=companyName]').val();

        //simple validation at client's end
        let postData, output;
        let proceed = true;
        if (userName === "") {
            proceed = false;
        }
        if (userEmail === "") {
            proceed = false;
        } if (companyName === "") {
            proceed = false;
        }
        //everything looks good! proceed...
        if (proceed) {

            //data to be sent to server
            postData = {
                'userName': userName,
                'userEmail': userEmail,
                'userMessage': companyName
            };

            //Ajax post data to server
            $.post('contact.php', postData, function (response) {
                //load json data from server and output message
                if (response.type === 'error') {
                    output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
                } else {
                    output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
                    //reset values in all input fields
                    $('.getin_form input').val('');
                    $('.getin_form textarea').val('');

                }

                $("#result").slideUp("fast").html(output).slideDown();
            }, 'json');

        } else {
            output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">Please provide the missing fields.</div>';
            $("#result").slideUp("fast").html(output).slideDown();
        }

    });

    /* ----- Banner image Changer ----- */


    // $('#carouselIndicators .carousel-item img, #promotion_main .promotion-img img').each(function () {
    //     if ($(window).width() < 991) {
    //         var newSrc = $(this).attr("data-src").replace("Slider/slider", "Slider/mob-slider");
    //     } else {
    //         // var newSrc = $(this).attr("data-src").replace("Slider/mob-slider", "Slider/slider");
    //     }

    //     $(this).attr('data-src', newSrc);


    // });


    /* ----- Back to Top ----- */
    $(body).append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
    let amountScrolled = 700;
    let backBtn = $("a.back-top");
    $window.on("scroll", function () {
        if ($window.scrollTop() > amountScrolled) {
            backBtn.addClass("back-top-visible");
        } else {
            backBtn.removeClass("back-top-visible");
        }
    });
    backBtn.on("click", function () {
        $root.animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    /* ------- Smooth scroll ------- */
    $("a.pagescroll").on("click", function (event) {
        event.preventDefault();
        let action = $(this.hash).offset().top;
        if ($('body').hasClass('offset-nav'))
            action -= 70;
        if ($(this).hasClass('scrollupto'))
            action -= 65;
        $("html,body").animate({
            scrollTop: action
        }, 1200);
    });

    /* ------- navbar menu Position dynamically ------- */
    $(".dropdown").on("mouseenter", function () {
        let $elem = $(this).find('.dropdown-menu'),
            left = $elem.offset().left,
            width = $elem.width(),
            docW = $(window).width();

        if ((left + width) > docW) {
            $elem.addClass("right-show");
        } else if ((left + (width * 2)) < docW) {
            $elem.removeClass("right-show");
        }
    });

    /*------ Sticky MENU Fixed ------*/
    let headerHeight = $("header").outerHeight();
    let navbar = $("nav.navbar");
    if (navbar.not('.fixed-bottom').hasClass("static-nav")) {
        $window.scroll(function () {
            let $scroll = $window.scrollTop();
            let $navbar = $(".static-nav");
            let nextSection = $(".section-nav-smooth");
            if ($scroll > 250) {
                $navbar.addClass("fixedmenu");
                nextSection.css("margin-top", headerHeight);
            } else {
                $navbar.removeClass("fixedmenu");
                nextSection.css("margin-top", 0);
            }
            if ($scroll > 125) {
                $('.header-with-topbar nav').addClass('mt-0');
            } else {
                $('.header-with-topbar nav').removeClass('mt-0');
            }
        });
        $(function () {
            if ($window.scrollTop() >= $(window).height()) {
                $(".static-nav").addClass('fixedmenu');
            }
        })
    }


    if (navbar.hasClass("fixed-bottom")) {
        let navTopMargin = $(".fixed-bottom").offset().top;
        let scrollTop = $window.scrollTop();
        $(window).scroll(function () {
            if ($(window).scrollTop() > navTopMargin) {
                $('.fixed-bottom').addClass('fixedmenu');
            } else {
                $('.fixed-bottom').removeClass('fixedmenu');
            }
            if ($(window).scrollTop() < 260) {
                $('.fixed-bottom').addClass('menu-top');
            } else {
                $('.fixed-bottom').removeClass('menu-top');
            }
        });
        $(function () {
            if (scrollTop < 230) {
                $('.fixed-bottom').addClass('menu-top');
            } else {
                $('.fixed-bottom').removeClass('menu-top');
            }
            if (scrollTop >= $(window).height()) {
                $('.fixed-bottom').addClass('fixedmenu');
            }
        })
    }


    /*------ Sticky SPecify2 Fixed ------*/


    let $obj_nav = $('ul.mattress-tab');

    $(window).scroll(function (e) {
        var $el = $('.fixedElement');
        var isPositionFixed = ($el.css('position') == 'fixed');

        if ($(this).scrollTop() > 200 && !isPositionFixed) {
            $el.css({ 'position': 'fixed', 'top': '66px' });
        }
        if ($(this).scrollTop() < 200 && isPositionFixed) {
            $el.css({ 'position': 'static', 'top': '0px' });
        }
    });

    if ($(window).width() <= 991.98) {
        var $el = $('.fixedElement');
        var isPositionFixed = ($el.css('position') == 'fixed');
        $el.css({ 'position': 'fixed', 'top': '66px' });
        if (!isPositionFixed) {
            $el.css({ 'position': 'fixed', 'top': '66px' });
        }
        if (isPositionFixed) {
            $el.css({ 'position': 'static', 'top': '0px' });
        }
    };

    /*Menu Onclick*/
    let sideMenuToggle = $("a#sidemenu_toggle");
    let sideMenu = $(".side-menu");
    if (sideMenuToggle.length) {
        sideMenuToggle.on("click", function () {
            $("body").addClass("overflow-hidden");
            sideMenu.addClass("side-menu-active");
            $(function () {
                setTimeout(function () {
                    $("#close_side_menu").fadeIn(300);
                }, 300);
            });
        });
        $("#close_side_menu , #btn_sideNavClose , .side-nav .nav-link.pagescroll").on("click", function () {
            $("body").removeClass("overflow-hidden");
            sideMenu.removeClass("side-menu-active");
            $("#close_side_menu").fadeOut(200);
            $(function () {
                setTimeout(function () {
                    $('.sideNavPages').removeClass('show');
                    $('.fas').removeClass('rotate-180');
                }, 400);
            });
        });
        $(document).keyup(function (e) {
            if (e.keyCode === 27) { // escape key maps to keycode `27`
                if (sideMenu.hasClass("side-menu-active")) {
                    $("body").removeClass("overflow-hidden");
                    sideMenu.removeClass("side-menu-active");
                    $("#close_side_menu").fadeOut(200);
                    //$tooltip.tooltipster('close');
                    $(function () {
                        setTimeout(function () {
                            $('.sideNavPages').removeClass('show');
                            $('.fas').removeClass('rotate-180');
                        }, 400);
                    });
                }
            }
        });
    }

    var toggleElem = $('.fixedElement li')
    //console.log('toggleElem>>', toggleElem[0]);

    $('#mob-description').on('hidden.bs.collapse', function () {
        // do something…
        $('#description').removeClass('active')
        //$('#mob-specs').css("display", "block");
    })
    $('#mob-specs').on('hidden.bs.collapse', function () {
        // do something…
        $('#specsAndPrices').removeClass('active')
        //$('#mob-description').css("display", "none");

    })
    $('#mob-description').on('shown.bs.collapse', function () {
        // do something…
        $('#description').addClass('active')
        //$('#mob-specs').css("display", "none");

    })
    $('#mob-specs').on('shown.bs.collapse', function () {
        // do something…
        $('#specsAndPrices').addClass('active')
        //$('#mob-description').css("display", "block");

    })

    /*
     * Side menu collapse opener
     * */
    $(".collapsePagesSideMenu").on('click', function () {
        $(this).find('.fas').toggleClass("rotate-180");
    });

    /* ----- Full Screen ----- */
    function resizebanner() {
        let $fullscreen = $(".full-screen");
        $fullscreen.css("height", $window.height());
        $fullscreen.css("width", $window.width());
    }
    resizebanner();
    $window.resize(function () {
        resizebanner();
    });

    $('.progress').each(function () {
        $(this).appear(function () {
            $(this).animate({
                opacity: 1,
                left: "0px"
            }, 500);
            let b = $(this).find(".progress-bar").attr("data-value");
            $(this).find(".progress-bar").animate({
                width: b + "%"
            }, 500);
        });
    });



    /* ------ OWL Slider ------ */

    var owl = $('.owl-carousel#homeitem-slider');
    owl.owlCarousel({
        rtl: false,
        lazyLoad: true,
        lazyLoadEager: 0,
        margin: 10,
        stagePadding: 0,
        nav: false,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        loop: true,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: false,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('.owl-carousel#homeitem-slider').on('click keyup mouseover swipe touchmove touchend', function () {
        owl.trigger('stop.owl.autoplay')
    })

    var owl2 = $('.owl-carousel#homeitem-slider2');
    owl2.owlCarousel({
        rtl: false,
        lazyLoad: true,
        lazyLoadEager: 0,
        video: false,
        margin: 10,
        stagePadding: 20,
        nav: false,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        loop: true,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: false,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    owl2.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl2.trigger('next.owl');
        } else {
            owl2.trigger('prev.owl');
        }
        e.preventDefault();
    });
    $('.owl-carousel#homeitem-slider2').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    /* ----------- Counters ---------- */
    $(".counters").appear(function () {
        $(".count_nums").countTo();
    });

    /* =====================================
            Coming Soon Count Down
    ====================================== */
    let countDown = $(".count_down");
    if (countDown.length) {
        countDown.downCount({
            // month / day / Year
            date: '2/21/2021 12:00:00',
            offset: +10
        });
    }
    /* =====================================
           Specification Slider
    ====================================== */
    // $("select#mattress_menu, #mattress_slider input").change(function () {
    //     var dropMenu = $("select#mattress_menu").children("option:selected").val();
    //     var withFrame = $('#mattress_slider input').prop('checked');
    //     console.log("You have selected  - " + dropMenu);
        
    //     $('.col-spify').hide();
    //     $('.' + dropMenu).show();

    //     if (withFrame === true) {
    //         $('.' + dropMenu + '.withFrame').show();
    //         $('.' + dropMenu + '.noFrame').hide();
    //     } else {
    //         $('.' + dropMenu + '.withFrame').hide();
    //         $('.' + dropMenu + '.noFrame').show();
    //     }

    // });

    // $("select#mattress_menu2, #mattress_slider2 input").change(function () {
    //     var dropMenu = $("select#mattress_menu2").children("option:selected").val();
    //     var withFrame = $('#mattress_slider2 input').prop('checked');
    //     console.log("You have selected 2  - " + dropMenu);
    //     $('.col-spify').hide();
    //     $('.' + dropMenu).show();

    //     if (withFrame === true) {
    //         $('.' + dropMenu + '.withFrame').show();
    //         $('.' + dropMenu + '.noFrame').hide();
    //     } else {
    //         $('.' + dropMenu + '.withFrame').hide();
    //         $('.' + dropMenu + '.noFrame').show();
    //     }

    // });


    //var withFrame = $(this).prop('checked');
    // alert("You have selected  - " + withFrame);			});	  
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-angle-down");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-minus");
        $(this).prev(".card-header").addClass("active");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-angle-down");
        $(this).prev(".card-header").removeClass("active");
    });


    // Password field Show icon
    $("#show_hide_password .eye").on('click', function (e) {
        e.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });

    //    end of js
});

