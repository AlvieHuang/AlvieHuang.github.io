var stop = false;
var animation = true;

//
//
var animateDown = function(targetElement, speed){
    if (stop){return;}
    $(targetElement).animate(
        {
            top:'100px'
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
            top:'10px'
        },
        {
        duration: speed,
        complete: function(){
            animateDown(this, speed);
            }
        }
    );
};

var animations = function(){
  if (animation){
    animation=false;
    $("#animations span").text="unlock all animations";
  }
  else {
    animation=true;
    $("#animations span").text="lock all animations";
  }
};

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
        if (animation){
          stop=false;
          $("#ball").fadeIn("fast");
          animateDown($("#WvA .leftimg"),"slow");
          animateDown($("#WvA .rightimg"),"slow");
        }
      },
      function() {
        $(this).children("div").stop().slideToggle("fast");
        if (animation){
          stop=true;
          $("#WvA .leftimg").finish();
          $("#WvA .rightimg").finish();
          $("#ball").stop().fadeOut("fast");
        }
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
