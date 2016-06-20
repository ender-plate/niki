var NikiJs = (function () {

    'use strict';

    var instance;

    function init() {

        return {

            animateOnVisible: function (element, animOpts, offset) {

                if ($(window).scrollTop() >=
                    ($(element).offset().top - ($(element).innerHeight() * offset))) {

                    if ($(element).css('visibility') == "collapse") {
                        $(element).css('visibility', 'visible').animate(animOpts, 600);
                    }

                }
            },

            scrollToElement: function (element) {

                $('html, body').animate({
                    scrollTop: $(element).offset().top - $('.navbar').innerHeight()
                }, 500);
            },

            scrollToElementMobile: function (element) {

                $('html, body').animate({
                    scrollTop: $(element).offset().top - $('.navbar').innerHeight()
                }, 0);

                Niki.toggleMenuMobile();
            },

            toggleMenuMobile: function () {

                if ($('.navbar-mobile-menu').css('display') == 'none') {

                    $('.mobile-menu-icon').attr('src', 'assets/images/icon-menu-close.png');
                }
                else {
                    $('.mobile-menu-icon').attr('src', 'assets/images/icon-menu.png');
                }

                $('.navbar-mobile-menu').toggle();
            },

            load: function () {

                $(document).ready(function () {
                    /*スライダーを実行する*/
                     $('.bxslider').bxSlider({
                        
                        mode:'fade',
                        responsive:true,
                        speed:1000,
                        pause:8000,
                        touchEnabled:false,
                        
                     }).startAuto();
  


                    $('.navbar-mobile-btn').bind('click', function () {
                        Niki.toggleMenuMobile();
                    });

                    $('#go-section-concept').bind('click', function () {
                        Niki.scrollToElement('#section-concept');
                    });

                    $('#go-section-products').bind('click', function () {
                        Niki.scrollToElement('#section-products');
                    });

                    $('#go-section-about').bind('click', function () {
                        Niki.scrollToElement('#section-about');
                    });

                    $('#go-section-contact').bind('click', function () {
                        Niki.scrollToElement('#section-contact');
                    });

                    $('#mobile-go-concept').bind('click', function () {
                        Niki.scrollToElementMobile('#section-concept');
                    });

                    $('#mobile-go-products').bind('click', function () {
                        Niki.scrollToElementMobile('#section-products');
                    });

                    $('#mobile-go-about').bind('click', function () {
                        Niki.scrollToElementMobile('#section-about');
                    });

                    $('#mobile-go-contact').bind('click', function () {
                        Niki.scrollToElementMobile('#section-contact');
                    });

                    $('#mobile-go-top').bind('click', function () {

                        $('html, body').animate({
                            scrollTop: 0
                        }, 0);

                        $('.mobile-menu-icon').attr('src', 'assets/images/icon-menu.png');

                        $('.navbar-mobile-menu').hide();
                    });

                    $('#go-section-top').bind('click', function () {

                        $('html, body').animate({
                            scrollTop: 0
                        }, 500);
                    });

                    if (window.innerWidth > 736) {
                        $(window).scroll(function () {

                            Niki.animateOnVisible('#apple-dried', { opacity: 1.0, right: "0px" }, 1.0);
                            Niki.animateOnVisible('#apple-confi', { opacity: 1.0, left: "0px" }, 1.0);
                            Niki.animateOnVisible('#apple-conpo', { opacity: 1.0, right: "0px" }, 1.0);
                            Niki.animateOnVisible('#apple-juice', { opacity: 1.0, left: "0px" }, 1.0);
                            Niki.animateOnVisible('#apple-set-one', { opacity: 1.0, top: "0px" }, 0.8);
                            Niki.animateOnVisible('#apple-set-two', { opacity: 1.0, top: "0px" }, 0.8);
                        });
                    }
                });
            }
        };
    }

    return {

        getInstance: function () {

            if (!instance) {

                instance = init();
            }

            return instance;
        }
    };


} ());

var Niki = NikiJs.getInstance();

Niki.load();