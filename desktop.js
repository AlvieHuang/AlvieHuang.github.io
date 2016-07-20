var stop = false;

//
//
var animateDown = function(targetElement, speed){
    if (stop){return;}
    $(targetElement).animate(
        {
            top:'+=100px'
        },
        {
        duration: speed,
        complete: function(){
            animateUp(this, speed);
            }
        }
    );
};

var animateUp = function(targetElement, speed){
    $(targetElement).animate(
        {
            top:'-=100px'
        },
        {
        duration: speed,
        complete: function(){
            animateDown(this, speed);
            }
        }
    );
};

var stopAnimation = function(){
  stop=true;
  $(".leftimg").stop("true,false")
}

$(document).ready(function(){
    animateDown($(".leftimg"),"slow");
    animateDown($(".rightimg"),"slow");
});

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
