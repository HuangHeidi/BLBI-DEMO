// JavaScript Document
$(function(){


    // header & nav
    $("header .links .online").addClass("active");
    $("nav .links .online").addClass("active");


})

$(document).ready(function() {
    $('.question h3').click(function(event) {
    /*設定滑鼠滑到自己的active樣式以及找到P孩子打開它*/
    $(this).toggleClass('active');
   $(this).siblings('p').slideToggle();
   $(this).parent().siblings().find('p').slideUp(); 
$(this).parent().siblings().find('h3').removeClass('active');
    });
  });
  