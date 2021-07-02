$(function () {
  // Handler for .ready() called.

  const large = 991.98;

  //click bars button
  $('.navbar__bars').click(function () {
    $('.navbar__menu').toggle();
  });

  //display "menu" over 991.98px
  $(window).resize(function () {
    if ($(window).width() >= large)
      $('.navbar__menu').show();
    else
      $('.navbar__menu').hide();
  });
});