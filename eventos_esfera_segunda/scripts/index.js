$(document).ready(function(){
  
    // Función para manejar el click en el botón de la hamburguesa
    $('.menu__trigger').click(function(){
      var that = $(this);
      
      // Mostrar/ocultar el menú
      $('.menu').slideToggle(500);
      
      // Cambiar el fondo del icono de la hamburguesa
      if (that.hasClass('closed')) {
        $(".menu__trigger span").css({background: '#FFED4A'});
        that.removeClass('closed');
        that.addClass('open');
      } else {
        $(".menu__trigger span").css({background: '#ffffff'});
        that.removeClass('open');
        that.addClass('closed');
      }
    });
    
    // Manejar cambios en el tamaño de la ventana
    $(window).resize(function(){
      if($(window).width() > 768) {
        // Si la ventana es más grande que 768 píxeles, mostrar el menú
        $('.menu').removeAttr('style');
      }
    });
    
    // Parallax
    $(window).scroll(function() {
      var windowscroll = $(this).scrollTop();
      
      $(".header__bg").css({
        "transform" : "translate(0%," + windowscroll /15 + "%"
      });
    });
    
    // Ocultar el menú en dispositivos móviles al cargar la página
    if ($(window).width() <= 768) {
      $('.menu').hide();
    }
    
  });
  
