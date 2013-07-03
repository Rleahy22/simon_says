$(document).ready(function(){
  $('#get_color').click(function(event) {
    event.preventDefault();
    $.getJSON('/color', function(data) {
      console.log(data);
      $('#color_me li:nth-child(' +data.cell+ ')').css({"backgroundColor": data.color});
    });
  });
});

