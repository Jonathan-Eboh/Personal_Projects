	
/*jslint node: true */
'use strict';


$(document).ready(function () {

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
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })




    //Following code block triggers the pie chart animation once its on the screen instead of on page load

    let skillsTopOffSet = $(".skillsSection").offset().top;
    let statsTopOffSet = $(".statsSection").offset().top;
    //console.log(skillsTopOffSet);
    let countUpFinished = false;

    $(window).scroll(function () {

        //console.log(window.pageYOffset); This is just where the scroll position is

        if (window.pageYOffset > skillsTopOffSet - $(window).height() + 200) { //200px added just as an aesthetic buffer

            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) { //onStep makes the graph animation work
                    $(this.el).find('.percent').text(Math.round(percent))
                }

            });

        }

        if (!countUpFinished && window.pageYOffset > statsTopOffSet - $(window).height() + 200) { //200px added just as an aesthetic buffer
              $(".counter").each(function () {
                    let element = $(this);
                    let endVal = parseInt(element.text());

                    element.countup(endVal);
                })
                
            countUpFinished = true;
        }

    });


  


});