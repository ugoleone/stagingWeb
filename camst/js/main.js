// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function toggleMenu() {
    var box = document.getElementById("menuLinks");
    var icon = document.getElementById("menuButton");
    if (box.style.display === "block") {
        box.style.display = "none";
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-times")
    } else {
        box.style.display = "block";
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
    }
}

// When the user scrolls down 50px from the top of the document, shows the contattaci element
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("contattaci").style.opacity = 1;
    } else {
        document.getElementById("contattaci").style.opacity = 0;
    }
}

// Hero automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideContainer");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


// Custom side - scrolling
/*
 * el.scrollLeft
 * el.scrollWidth
 * 
 */ 
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function stakeHolderScroller(value) {
    num = parseInt(value);
    personasWidth = document.getElementsByClassName("stakeholder")[0].offsetWidth;
    slider = document.getElementById("stakeholderFrame");
    slider.scrollLeft = num.map(0, 100, 0, slider.scrollWidth-(personasWidth*3));
    // Debug
    //console.log("Value: "+value+" | Scroll: "+slider.scrollLeft+" | Total: "+slider.scrollWidth);
}

function updateStakeholderScroller() {
    rangeSlider = document.getElementById("stakeHolderRangeSlider");
    slider = document.getElementById("stakeholderFrame");
    sliderPos = slider.scrollLeft;
    personasWidth = document.getElementsByClassName("stakeholder")[0].offsetWidth;
    
    currentValue = sliderPos.map(0, slider.scrollWidth-(personasWidth*3), 0, 100);
    rangeSlider.value = currentValue;
}

/****/

function personasScroller(value) {
    num = parseInt(value);
    personasWidth = document.getElementsByClassName("persona")[0].offsetWidth;
    slider = document.getElementById("personaSlider");
    slider.scrollLeft = num.map(0, 100, 0, slider.scrollWidth-(personasWidth));
    // Debug
    //console.log("Value: "+value+" | Scroll: "+slider.scrollLeft+" | Total: "+slider.scrollWidth);
}

function updatePersonasScroller() {
    rangeSlider = document.getElementById("personasRangeSlider");
    slider = document.getElementById("personaSlider");
    sliderPos = slider.scrollLeft;
    personasWidth = document.getElementsByClassName("persona")[0].offsetWidth;
    
    currentValue = sliderPos.map(0, slider.scrollWidth-(personasWidth), 0, 100);
    rangeSlider.value = currentValue;
}