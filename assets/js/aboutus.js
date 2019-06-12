$(window).scroll(function() {
  if ( $(this).scrollTop() > 200){
          $('.idea').addClass('idea1');
          $('.idea').removeClass('hidden');
      }
      if ( $(this).scrollTop() > 230){
          $('.team').addClass('team1');
          $('.team').removeClass('hidden');
      }

})