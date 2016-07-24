var stop = false;
var animation = true;

//
//

//************************************************************************
//test
//************************************************************************
$(document).ready(function(){
    $( "#content p" ).hover(
      function() {
        $( this ).text("HOW DARE YOU HOVOR !!");
      }, function() {
        $( this ).text("this is a test");
      }
    );
});


//************************************************************************
//Function to lock animations
//************************************************************************
var animations = function(){
  if (animation){
    animation=false;
    $("#games button").text("Unlock all animations");
  }
  else {
    animation=true;
    $("#games button").text("Lock all animations");
  }
};


//************************************************************************
//Section code for Witches Vs. Aliens
//************************************************************************
$(document).ready(function(){
    $( "#games #WvA" ).hover(
      function() {
        $(this).children("div").stop().slideToggle("fast");
        if (animation){
          stop=false;
          $("#ball").fadeIn("fast");
          animateWitch();
          animateAlien();
        }
      },
      function() {
        $(this).children("div").stop().slideToggle("fast");
        if (animation){
          stop=true;
          $("#WvA .leftimg").finish();
          $("#WvA .rightimg").finish();
          $("#ball").finish().fadeOut("fast");
        }
      }
    );
});

//************************************************************************
//All of the animation for Witches vs. Aliens
//************************************************************************
var animateWitch = function(){
    if (stop){return;}
    var targetElement = $("#witch");
    targetElement.animate({top:'30%'},600,function()
        {document.getElementById("witch").src = "images/witch-right.gif";}
    );
    targetElement.delay(100);
    targetElement.animate({left:'30%'},900);
    targetElement.delay(50);
    targetElement.animate({left:'27%'},100);
    targetElement.delay(100);
    targetElement.animate({left:'29%'},100,'linear',function()
        {document.getElementById("witch").src = "images/witch-left.gif";}
    );
    targetElement.delay(100);
    targetElement.animate({top:'27%', left:'15%'},300,'linear');
    targetElement.animate({top:'20%', left:'7%'},200,'linear',function()
        {document.getElementById("witch").src = "images/witch-back.gif";}
    );
    targetElement.animate({top:'10px', left:'3%'},600,function()
        {
          animateWitch();
          document.getElementById("witch").src = "images/witch-front.gif";
        }
    );
    targetElement.delay(200);
};

var animateAlien = function(){
    if (stop){return;}
    var targetElement = $("#alien");
    targetElement.animate({top:'30%'},600,function()
          {document.getElementById("alien").src = "images/alien-left.gif";}
    );
    targetElement.animate({right:'21%'},400,'linear',function()
          {animateBall();}
    );
    targetElement.animate({right:'18%'},100,'linear');
    targetElement.delay(100);
    targetElement.animate({right:'23%'},300,'linear',function()
          {document.getElementById("alien").src = "images/alien-back.gif";}
    );
    targetElement.animate({top:'26%', right:'25%'},100,'linear');
    targetElement.animate({top:'23%'},100,'linear');
    targetElement.animate({top:'18%', right:'23%'},100,'linear',function()
          {document.getElementById("alien").src = "images/alien-right.gif";}
    );
    targetElement.animate({top:'10px', right:'3%'},600,function()
          {
            animateAlien();
            document.getElementById("alien").src = "images/alien-front.gif";
          }
    );
    targetElement.delay(1000);
};

var animateBall = function(){
    var targetElement = $('#ball');
    targetElement.animate({left:'-=21%'},600,'linear');
    targetElement.delay(50);
    targetElement.animate({left:'+=21%'},600,'linear');
}


//************************************************************************
//Section code for Asteroid 9000
//************************************************************************
$(document).ready(function(){
    $( "#games #Asteroid" ).hover(
      function() {
        $(this).children("div").stop().fadeIn("fast");
      }, function() {
        $(this).children("div").stop().fadeOut("fast");
      }
    );
});
