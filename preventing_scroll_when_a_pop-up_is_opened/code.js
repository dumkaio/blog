// Prevent scrolling on click
$('.menu-btn').click(function (e) {
  e.preventDefault();
  $('body').css('overflow', 'hidden');
});

/* Allow back page scrolling by clicking on the element with the necessary class name.
If you have several close elements with the same action like a close button and cancel button, write classes by a comma. */
$('.close-menu-btn, .menu-wrap').click(function (e) {
  e.preventDefault();
  $('body').css('overflow', 'auto');
});