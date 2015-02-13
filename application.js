var interval;
$(document).ready(function(){
  $('.container').on("click", "#fetch-button", function(){
    var searchTerm = $('#search-field').val();
    var poll = function() {
      $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: "https://api.instagram.com/v1/tags/" + searchTerm + "/media/recent?access_token=YOUR_INSTAGRAM_ACCESS_TOKEN_HERE",
        success: function(data){
          $('#pictures-frame').empty();
          $('#picture-link').empty();
          for (var i = 0; i < 20; i++) {
            var $img = $('<img>');
            var $imgLink = $('<a>');
            // console.log(data.data[i].images.standard_resolution.url);
            // console.log(data.data[i].link);
            $img.attr('src', data.data[i].images.standard_resolution.url);
            $imgLink.attr("href", data.data[i].link);
            $imgLink.html($img);
            $('#pictures-frame').append($imgLink);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR)
        }
      });
    }
    window.clearInterval(interval)
    interval = setInterval(poll, 20000); // make another ajax call every 20 secs to 'refresh';
    poll();
  });

});