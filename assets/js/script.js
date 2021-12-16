/* ---------------------- Navbar Scroll Hide ---------------------- */

let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollpos = window.scrollY;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollpos;
}

/* ---------------------- Fade In Elements ---------------------- */

$(window).on("load",function() {
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
});

/* ---------------------- Scroll to top button ---------------------- */

// // Get the button:
// const mybutton = document.getElementById("goBackTopBtn");

// // When the user scrolls down 1000px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }