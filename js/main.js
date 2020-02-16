$(function(){
    "use strict";
    // nice scroll
    $("html").niceScroll();

    // specific height of slider
    var upperHeight = $(".upper-bar").innerHeight();
    var navHeight   = $(".navbar").innerHeight();
    var windHeight  = $(window).height();

    $(".slider, .carousel-item").height(windHeight-(upperHeight + navHeight));

    //shuffle images

    $(".featured-work ul li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        
        if($(this).data("class") ==="all"){
            $(".shuffle-img .col-sm").css('opacity', 1);
        }else{
            $(".shuffle-img .col-sm").css('opacity','.08');
            $($(this).data("class")).parent().css("opacity", 1);
        }
    });
});