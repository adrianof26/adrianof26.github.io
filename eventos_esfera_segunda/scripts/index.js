$(document).ready(function(){
  
  $('.menu__trigger').click(function(){
    var that = $(this);
    
    $('.menu').slideToggle(500);
    $('.menu').css('display', 'grid');
    
    if (that.hasClass('closed')) {
      $(".menu__trigger span").css({background: '#FFED4A'});
      that.removeClass('closed');
      that.addClass('open');
    }
    else {
      $(".menu__trigger span").css({background: '#ffffff'});
      that.removeClass('open');
      that.addClass('closed');
    }
  });
  
  $(window).resize(function(){
    if($(window).width() > 768) {
      $('.menu').removeAttr('style');
    }
  });
  
});

/*parallax*/

$(window).scroll(function() {
  var windowscroll = $(this).scrollTop();
  
  $(".header__bg").css({
    "transform" : "translate(0%," + windowscroll /15 + "%"
  });
  
});