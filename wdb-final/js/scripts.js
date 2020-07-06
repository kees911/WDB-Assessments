$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘body’).addClass(‘change-bg-white’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘body’).removeClass(‘change-bg-white’)
      }
   });
});

window.addEventListener('load', AOS.refresh)

$(function() {
  AOS.init();
});

if (['DOMContentLoaded', 'load'].indexOf(options.startEvent) === -1) {
  // Listen to options.startEvent and initialize AOS
  document.addEventListener(options.startEvent, function() {
    refresh(true);
  });
} else {
  window.addEventListener('load', function() {
    refresh(true);
  });
}
