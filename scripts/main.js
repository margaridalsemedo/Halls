$(document).ready(function(){
  $('.color-slider').slick({
      dots: false,
      infinite: true,
      speed: 5,
      fade: true,
      arrows: false,
      autoplay: true,
  autoplaySpeed: 2000,
  draggable: false,
  cssEase: 'linear'



          }); 

          
$('.mexico-images').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

  ]
 
});

});

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
