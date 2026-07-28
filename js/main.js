(function ($) {
    "use strict";

    // ============================================
    // SPINNER
    // ============================================
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').addClass('fade-out');
                setTimeout(function () {
                    $('#spinner').remove();
                }, 500);
            }
        }, 400);
    };

    // Run spinner on window load
    $(window).on('load', function () {
        spinner();
    });

    // ============================================
    // TYPEWRITER EFFECT
    // ============================================
    window.startTypewriter = function ({ elementId, phrases, typeSpeed = 100, eraseSpeed = 50, pauseTime = 1500 }) {
        const el = document.getElementById(elementId);
        if (!el) return;

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                el.textContent = currentPhrase.substring(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(type, typeSpeed);
                } else {
                    setTimeout(type, eraseSpeed);
                }
            } else {
                el.textContent = currentPhrase.substring(0, charIndex++);
                if (charIndex > currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(type, pauseTime);
                } else {
                    setTimeout(type, typeSpeed);
                }
            }
        }

        setTimeout(type, 1000);
    };

    // ============================================
    // WOW JS
    // ============================================
    if (typeof WOW !== "undefined") { 
        new WOW().init(); 
    }

    // ============================================
    // STICKY NAVBAR
    // ============================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // ============================================
    // DROPDOWN ON HOVER
    // ============================================
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function() {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function() {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // ============================================
    // OWL CAROUSELS
    // ============================================
    if ($.fn && $.fn.owlCarousel) {
        // Header carousel
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            items: 1,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });

        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav : false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });

        // Client logo carousel
        $(".client-logo-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                992: { items: 5 },
                1200: { items: 6 }
            }
        });
    }

})(jQuery);