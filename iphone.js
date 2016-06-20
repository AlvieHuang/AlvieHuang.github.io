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
    if (url == startUrl) {
        var element = ' #header ul';
    } else {
        var element = ' #content';
    }
    $('#container').load(url + element, function(){
        var title = $('h2').html() || 'Hello!';
        $('h1').html(title); $('h2').remove();
        $('.leftButton').remove();
        hist.unshift({'url':url, 'title':title});
        if (hist.length > 1) {
            $('#header').append('<div class="leftButton">'+hist[1].title+'</div>');
            $('#header .leftButton').click(function(e){
                $(e.target).addClass('clicked');
                var thisPage = hist.shift();
                var previousPage = hist.shift();
                loadPage(previousPage.url);
            });
        }
        $('#container a').click(function(e){
            var url = e.target.href;
            /* NOTE: You MUST replace jonathanstark.com in the following line with your domain name. For more info, please visit http://ofps.oreilly.com/titles/9780596805784/ch03.html#ch03_id35816921 */
            if (url.match(/AlvinHuang.github.io/)) { 
                e.preventDefault();
                loadPage(url);
            }
        });
        $('#progress').remove();
    });
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
