// Navbar Scroll Hide Section
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollpos = window.scrollY;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollpos;
}

// Fade In Elements Section

$(window).scroll(function() {
  $('.fade-in').each(function() {
    let top_of_element = $(this).offset().top;
    let bottom_of_element = $(this).offset().top + $(this).outerHeight();
    let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    let top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
      $(this).addClass('is-visible');
    }
  });
});