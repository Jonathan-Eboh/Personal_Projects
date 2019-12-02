$(document).ready(function() {

      $('#slides').superslides({
        animation: 'fade',
        play: 5000, //milliseconds 5 seconds
        pagination: false
      });

      let typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Web Developer.", "Student."],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
      });

    
    
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })    
    
    
    $('.chart').easyPieChart({
            //your options goes here
        });
    
});


