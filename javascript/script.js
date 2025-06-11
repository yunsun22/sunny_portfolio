jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){        
        $(this).find('.submenu1').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu1').stop().slideUp(500);
    });

    $('.navi>li').mouseover(function(){        
        $(this).find('.submenu2').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu2').stop().slideUp(500);
    });

    $('.slide a:gt(0)').hide();
setInterval(function () {
  $('.slide a:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slide');
}, 3000);

});