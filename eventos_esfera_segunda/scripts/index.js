$(document).ready(function(){

    // Ocultar el menú al cargar la página en dispositivos móviles
    if ($(window).width() <= 768) {
      $('.menu').hide();
    }
  
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
      // Si la ventana es más grande que 768 píxeles, asegurarse de que el menú esté visible
      if ($(window).width() > 768) {
        $('.menu').show();
      } else {
        // Si la ventana es menor o igual a 768 píxeles, ocultar el menú
        $('.menu').hide();
      }
    });
    
    // Parallax
    $(window).scroll(function() {
      var windowscroll = $(this).scrollTop();
      
      $(".header__bg").css({
        "transform" : "translate(0%," + windowscroll /15 + "%"
      });
    });
    
  });
  
