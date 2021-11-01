// Navbar Scroll Section
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollpos = window.scrollY;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollpos;
}

// Fade in Elements Section

let numberOfScans = 1
// console.log(window.innerHeight);

function isVisible(element) {
  let elementBox = element.getBoundingClientRect();
  let distanceFromTop = -200;

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true;
  } else {
    return false;
  }
}

function scanDocument() {
  let sectionList = document.querySelectorAll('.hidden');
  sectionList.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove('hidden');
    };
  });

  // console.log(numberOfScans);
  // numberOfScans++;
}
// Because scroll events might be too much for the site to handle, a throttle function is introduced.
// Use lodash library to replace function for handling throttle better.

// function throttle(fn, wait) {
//   let time = Date.now();
//   return function() {
//     if ((time + wait - Date.now()) < 0 ) {
//       fn();
//       time = date.now();
//     }
//   }
// }

document.addEventListener("scroll", _.throttle(scanDocument, 500));