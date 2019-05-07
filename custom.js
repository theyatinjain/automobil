/*==============================================================
                        ENGINE TYPES
===============================================================*/
$(function(){
    //animate on scroll
    new WOW().init();
});

/*==============================================================
                        NAVIGATION
===============================================================*/
$(document).ready(function(){
   
    $(window).scroll(function(){
        if($(this).scrollTop() < 65 ){
            $("nav").removeClass("am-top-nav");
            $("#back-to-top").fadeOut("slow");
        }
        else {
            $("nav").addClass("am-top-nav");
            $("#back-to-top").fadeIn("slow");
        }
    });
    
});

//Smooth Srolling

$(document).ready(function(){
    $("a.smooth-scroll").click(function(){
        
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop : $(section).offset().top - 64
        }, 1250, "easeInOutSine");
    });
});

/*==============================================================
                       PARTNERS
===============================================================*/
$(document).ready(function(){
   $("#partners-list").owlCarousel({
       items: 6,
       autoplay: true,
       smartSpeed: 400,
       loop: true,
       autoplayHoverPause: true,
       responsive: {
           0 : { items: 1 },
           480 : { items: 3 },
           768 : { items: 5 },
           992 : { items: 6 },
       }
   });
});