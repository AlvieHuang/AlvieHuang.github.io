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
        if (animation){
          stop=false;
          animateball2();
          animateplayer();
          $("#asteroid1").fadeIn("fast");
          $("#asteroid2").fadeIn("fast");
          $("#asteroid3").fadeIn("fast");
          rotateasteroid();
          animateasteroid();
          // animateAlien();
        }
      }, function() {
        $(this).children("div").stop().fadeOut("fast");
        if (animation){
          stop=true;
          $("#Asteroid .leftimg").finish();
          $("#Asteroid .rightimg").finish();
          $("#asteroid1").stopRotate();
          $("#asteroid1").finish().fadeOut("fast");
          $("#asteroid2").finish().fadeOut("fast");
          $("#asteroid3").finish().fadeOut("fast");
        }
      }
    );
});

//************************************************************************
//All of the animation for Asteroid 9000
//************************************************************************
var rotateasteroid = function(){
    if (stop){return;}
    $("#asteroid1").rotate({angle:0,animateTo:360,callback:rotateasteroid,
    easing:function(x,t,b,c,d){ // t: current time, b: begInnIng value, c: change In value, d: duration
      return c*(t/d)+b;
    }});
    $("#asteroid2").rotate({angle:-180,animateTo:180,
    easing:function(x,t,b,c,d){
      return c*(t/(2*d))+b;
    }});
    $("#asteroid3").rotate({angle:100,animateTo:-260,
    easing:function(x,t,b,c,d){
      return c*(t/(1.5*d))+b;
    }});

};

var animateball2 = function(){
    if (stop){return;}
    var targetElement = $("#ball2");
    targetElement.animate({top:'30%', right:'30%'},1000,'linear');
    targetElement.delay(1000);
    targetElement.animate({top:'10px',right:'3%'},100,function(){
      animateball2();
    });
    targetElement.delay(1000);
};

var animateplayer = function(){
  if (stop){return;}
  var targetElement = $("#player");
  targetElement.rotate({angle:0,animateTo:135,duration:1000});
  targetElement.animate({left:'30%',top:'30%'},2000,'linear',function(){
    targetElement.rotate({angle:135,angle:315,duration:100});
  });
  targetElement.animate({left:'3%',top:'10px'},100,'linear',function(){
    animateplayer();
  })
  targetElement.delay(1000);
}

var animateasteroid = function(){
    if (stop){return;}
    var targetElement=$("#asteroid1");
    targetElement.animate({left:'50%'},1200,'linear', function(){
      animateasteroid();
    });
    targetElement.css({"left":"-5px"});
};
