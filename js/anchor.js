$(document).ready(function () {
  $('.js-anchor-link').click(function (e) {

    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
    }
  });
});