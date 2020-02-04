import AOS from 'aos';
import 'aos/dist/aos.css';


function goto($hashtag){
     document.location = "index.html#" + $hashtag;
}


$(document).ready(function () {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (window.location.hash && isChrome) {
            setTimeout(function () {
                var hash = window.location.hash;
                window.location.hash = "";
                window.location.hash = hash;
            }, 300);
        }
    });

AOS.init();

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


let toggleVis1 = function(){
  let hobby1= document.querySelector("#piano-desc");
  let hobby2= document.querySelector("#paint-desc");
  let hobby3= document.querySelector("#spanish-desc");
  let hobby4= document.querySelector("#psychology-desc");
  let hobby5== document.querySelector("#game-desc");

  hobby1.style.opacity = 1;
  hobby2.style.opacity = 0;
  hobby3.style.opacity = 0;
  hobby4.style.opacity = 0;
  hobby5.style.opacity = 0;
  console.log("hihi");

}






// //let toggleStatus = false;
//
// let toggleNav = function() {
//   let getli1 = document.querySelector("#AboutMe");
//   let getli2 = document.querySelector("#Resume");
//   let getli3 = document.querySelector("#Contact");
//
//   if (toggleStatus === false) {
//     getli1.style.opacity = 0;
//     getli2.style.opacity = 0;
//     getli3.style.opacity = 0;
//     toggleStatus = true;
//   }
//
//
//   else if (toggleStatus === true){
//     getli1.style.opacity = 1;
//     getli2.style.opacity = 1;
//     getli3.style.opacity = 1;
//     toggleStatus = false;
//   }
// }
