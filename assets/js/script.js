// Navbar Scroll Section
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

// Fade In/Out Elements Section

$(window).on("load",function() {
  $(window).scroll(function() {
    let windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade-in").each(function() {
      /* Check the location of each desired element */
      let objectTop = $(this).offset().top //+ $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectTop < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } // else { //object goes out of view (scrolling up)
        // if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      // }
    });
  }).scroll(); //invoke scroll-handler on page-load
});