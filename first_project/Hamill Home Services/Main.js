/* Slideshow */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    var dots = $(".dot");

    if (n > slides.length) { 
        slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }

    slides.css('display', 'none');
    dots.removeClass('active');

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* Page Scroll */
$('#LearnMore').click(function () {
    $('html, body').animate({
        scrollTop:
            $("#aboutHHS").offset().top
    }, 1000);
});

$('#navAbout').click(function () {
    $('html, body').animate({
        scrollTop:
            $("#aboutHHS").offset().top
    }, 1000);
});

$('#navProjects').click(function () {
    $('html, body').animate({
        scrollTop:
            $("#projectsHHS").offset().top
    }, 1000);
});

$('#navReviews').click(function () {
    $('html, body').animate({
        scrollTop:
            $("#reviewsHHS").offset().top
    }, 1000);
});

$('#businessLogo').click(function () {
    $('html, body').animate({
        scrollTop:
            $("#projectsHHS").offset().top
    }, 1000);
});

/* Following Get A Quote Button */
$(document).ready(function () {

    var btn = $('#scrollingButton');

    var btn_disappear_height = $(document).height() - 900;

    $(window).scroll(function () {
        if (($(window).scrollTop() > 150) && ($(window).scrollTop() < btn_disappear_height)) {
            btn.removeClass("button cc-contact-us w-inline-block");
            btn.addClass('buttonAppear');
        } else {
            btn.removeClass('buttonAppear');
            btn.addClass("button cc-contact-us w-inline-block");
        }
    });
});