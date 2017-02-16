$(document).ready(function () {
   //If you hold the Q button...

   $('body').keydown(function (key) {
      if (key.which == 81) {
           $('.thumbs img, .image, .slides, .text').css("visibility", "hidden");
           $('.radio, .blurfx').css("visibility", "visible");
           $('.septagon span').css("opacity", "1");
      }
   })
      .keyup(function (key) {
           if (key.which == 81) {
               $('.thumbs img, .image, .slides, .text').css("visibility", "visible");
               $('.radio, .blurfx').css("visibility", "hidden");
               $('.septagon span').css("opacity", "0");
           }
      });

   //If you then click on a radio station...

   var radio = document.getElementById('playmusic');


   $('.deg40').click(function () {
      $('audio source').attr('src', 'music/come.mp3');
      $('.labels p:nth-child(1) em').text("Vice Rock Radio");
      $('.labels p:nth-child(2)').text("COME WITH ME");
      $('.labels p:last-child').text("Puff Daddy & Jimmy Page");
      radio.load(); //If it doesn't load 1st, then it won't switch the tracks later on
      radio.play();
   });

   $('.deg140').click(function () {
      $('audio source').attr('src', 'music/girls.mp3');
      $('.labels p:nth-child(1) em').text("Blue Crest Radio")
      $('.labels p:nth-child(2)').text("GIRLS DEM SUGAR");
      $('.labels p:last-child').text("Beenie Man & Mya");
      radio.load();
      radio.play();
   });

   $('.deg195').click(function () {
      $('audio source').attr('src', 'music/you.mp3');
      $('.labels p:nth-child(1) em').text("Flashpoint FM")
      $('.labels p:nth-child(2)').text("WHAT DO YOU MEAN");
      $('.labels p:last-child').text("My Man Bieber");
      radio.load();
      radio.play();
   });

   $('.deg245').click(function () {
      $('audio source').attr('src', 'music/rgtn.mp3');
      $('.labels p:nth-child(1) em').text("Estimulación FM")
      $('.labels p:nth-child(2)').text("REGGAETON TRACK");
      $('.labels p:last-child').text("Some guy on Youtube");
      radio.load();
      radio.play();
   });

   $('.deg295').click(function () {
      $('audio source').attr('src', 'music/panda.mp3');
      $('.labels p:nth-child(1) em').text("Urban Beach Radio")
      $('.labels p:nth-child(2)').text("PANDA");
      $('.labels p:last-child').text("Desiigner");
      radio.load();
      radio.play();
   });

   $('.deg345').click(function () {
      $('audio source').attr('src', 'music/nouse.mp3');
      $('.labels p:nth-child(1) em').text("International FM")
      $('.labels p:nth-child(2)').text("NO USE");
      $('.labels p:last-child').text("Jazzanova & Clara Hill");
      radio.load();
      radio.play();
   });

   //Stop the music
   $('.deg90').click(function () {
      $('audio source').attr('src', '');
      $('.labels p:nth-child(1) em').text("")
      $('.labels p:nth-child(2)').text("Radio");
      $('.labels p:last-child').text("Off");
      radio.pause();
      radio.currentTime = 0; //Apparently this is optional
   });
});
