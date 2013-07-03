$(document).ready(function(){
  var rand = 1 + Math.floor(Math.random() * 9);

  $('#get_color').click(function(event) {
    event.preventDefault();
    console.log(rand);
    $.post('/color', function(results) {
      $('#color_me li:nth-child(' + rand + ')').css({"backgroundColor": results});
    });
  });
});