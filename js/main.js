//Slider "featured"

var slideInd = 0;
showSlide();

function showSlide() {
  var i;
  var slide = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideInd++;
  if (slideInd > slide.length) {slideInd = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideInd-1].style.display = "block";  
  dots[slideInd-1].className += " active";
  setTimeout(showSlide, 3500); // Change image every 3 seconds
}