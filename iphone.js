/*
if (window.innerWidth && window.innerWidth <=480) {
  $(document).ready(function(){
    $('header ul').addClass('hide');
    $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
  });
  function toggleMenu() {
    $('#header ul').toggleClass('hide');
    $('#header .leftButton').toggleClass('pressed');
  }
}
*/
var hist = [];
var startUrl = 'index.html';
$(document).ready(function(){
    loadPage(startUrl);
});
function loadPage(url) {
    $('body').append('<div id="progress">Loading...</div>');
    scrollTo(0,0);
}


/*
function hijackLinks() {
  $('#container a').click(function(e){
    var url = e.target.href;
    if (url.match(AlvieHuang.github.io)){
      e.preventDefault();
      loadPage(e.target.href);
    }
  });
  var title=$('h2').html() || 'Hello!';
  $('h1').html(title);
  $('h2').remove();
  $('#progress').remove();
}
*/
