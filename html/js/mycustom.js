/* ================================================== *
 *    ふわっと中心から表示
 * ================================================== */
$(function() {
    $('head').append(
        '<style>#fadein{display:none;}'
    );
    $(window).on("load", function() {
        $('#fadein').delay(600).fadeIn("slow");
    });
});

  $(function() {
    $('head').append(
        '<style>footer{display:none;}'
    );
    $(window).on("load", function() {
        $('footer').delay(1000).fadeIn("slow");
    });
});
/* ================================================== *
 *    裏から順番に表示
 * ================================================== */
$(function() {
    $('head').append(
        '<style>.main-contents{display:none;}'
    );
    $(window).on("load", function() {
        $('.main-contents:nth-of-type(1)').delay(1400).fadeIn("slow");
        $('.main-contents:nth-of-type(2)').delay(1800).fadeIn("slow");
        $('.main-contents:nth-of-type(3)').delay(2200).fadeIn("slow");
        $('.main-contents:nth-of-type(4)').delay(2600).fadeIn("slow");
    });
});

/* ================================================== *
 *    Works-slick
 * ================================================== */
$(function() {
    $('.works-slick').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, //自動再生
        centerMode: true,
        centerPAdding: '5%',
        // dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, //自動再生
                centerMode: true,
                centerPAdding: '5%',
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, //自動再生
                centerMode: true,
                centerPAdding: '5%',
            }
        }]
    });
});