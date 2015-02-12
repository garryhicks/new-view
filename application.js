$(document).ready(function(){
  $('.container').on("click", "#fetch-button", function(){
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: "https://api.instagram.com/v1/tags/lighthouse/media/recent?access_token=1700796495.1fb234f.2b336c55a90147a79124f80baaa5f868",
      success: function(data){
        for (var i = 0; i < 50; i++) {
          var $img = $('<img>');
          $img.attr('src', data.data[i].images.standard_resolution.url);
          $('#picture-frame').append($img);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
      }
    });
  });
});