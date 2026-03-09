// JavaScript Document
$(function(){


    //to the top
    $("#ttt").click(function(){
            $('html,body').animate({scrollTop:0}, 500);
    });
    $("#ttt").css("display", "none");
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 100){
            $("#ttt").fadeIn(200);
        } else {
            $("#ttt").stop().fadeOut(200);
        }
    });


    // nav pop
    $("#navbtn").click(function(){
        $("nav").stop().fadeIn(300);
    });
    $("nav .clz").click(function(){
        $("nav").stop().fadeOut(300);
    });

})