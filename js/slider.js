$(document).ready(function () {

    $('.bg-show').slick({
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        //responsive: [
        //  {
        //    breakpoint: 1161,
        //    settings: {
        //      slidesToShow: 1,
        //      slidesToScroll: 1,
        //      variableWidth: true,
        //      infinite: true,
        //      centerMode: true,
        //      dots: true
        //    }
        //  },
        //  //{
        //  //  breakpoint:769,
        //  //  settings: {
        //  //    slidesToShow: 1,
        //  //    slidesToScroll: 1
        //  //  }
        //  //},
        //  //{
        //  //  breakpoint:480,
        //  //  settings: {
        //  //    slidesToShow: 1,
        //  //    slidesToScroll: 1
        //  //  }
        //  //}
        //  // You can unslick at a given breakpoint now by adding:
        //  // settings: "unslick"
        //  // instead of a settings object
        //]
    });

    $('.p-list').slick({
        dots: true,
        speed: 300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,


    });

    $('.slick-dots').addClass('clearfix');
    $('.slick-dots > li:first-child > button').addClass('slide-active');
    $('.slick-dots > li > button').on("click", function () {

        if ($(this).hasClass('slide-active')) {
            $('.slick-dots > li').removeClass('slide-active')
        }
        else {

            $('.slick-dots > li > button').removeClass('slide-active');
            $(this).addClass('slide-active');
        }
    });

    $('.slick-prev').on("click", function () {

        if ($('.slick-dots > li > button').hasClass('slide-active')) {
            $('.slick-dots > li > button').removeClass('slide-active')
            $('.slick-active > button').addClass('slide-active')
        }
        else {
            $('.slick-dots > li:first-child > button').css('backgroundColor', 'rgb(53,78, 87)');
            $('.slick-dots > li > button').removeClass('slide-active');
            $('.slick-active > button').addClass('slide-active');
        }
    });

    $('.slick-next').on("click", function () {

        if ($('.slick-dots > li > button').hasClass('slide-active')) {
            $('.slick-dots > li > button').removeClass('slide-active')
            $('.slick-active > button').addClass('slide-active')
        }
        else {
            $('.slick-dots > li:first-child > button').css('backgroundColor', 'rgb(53,78, 87)');
            $('.slick-dots > li > button').removeClass('slide-active');
            $('.slick-active > button').addClass('slide-active');
        }
    });

});