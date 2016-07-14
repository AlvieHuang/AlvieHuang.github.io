

//
//


$(document).ready(function(){
    $( "#content p" ).hover(
      function() {
        $( this ).text("HOW DARE YOU HOVOR !!");
      }, function() {
        $( this ).text("this is a test");
      }
    );
});

$(document).ready(function(){
    $( "#games #WvA" ).hover(
      function() {
        $(this).children("div").stop().slideToggle("fast");
      }, function() {
        $(this).children("div").stop().slideToggle("fast");
      }
    );
});


$(document).ready(function(){
    $( "#games #Asteroid" ).hover(
      function() {
        $(this).children("div").stop().fadeIn("fast");
      }, function() {
        $(this).children("div").stop().fadeOut("fast");
      }
    );
});
