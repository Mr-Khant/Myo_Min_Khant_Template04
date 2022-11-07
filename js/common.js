$(document).ready(function () {
  $(document).ready(function () {
    $(function () {
      $('.btn-gnavi').on('click', function () {

        var rightVal = 0;
        if ($(this).hasClass('hb-open')) {
          rightVal = -1000;
          $("header").removeClass('span-open');
          $(this).removeClass('hb-open');
        } else {
          $('header').addClass('span-open');
          $(this).addClass('hb-open');
        }

        $('#global-navi').stop().animate({
          left: rightVal
        }, 500);
      });

    });
  });

});