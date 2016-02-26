if (annyang) {

  // Add our commands to annyang
  annyang.addCommands({

    'My name is *name': function (name) {
      $('.hello').text('Hello, ' + name + '!');
      annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
        $('.response-name').text('Did you say \"' + userSaid + '\"?');
        $('.response-music').text('');
      });
    },

    'red': function() {
      $('.btn').removeClass().addClass('btn btn-lg btn-danger');
    },

    'blue': function () {
      $('.btn').removeClass().addClass('btn btn-lg btn-info');
    },

    'green': function () {
      $('.btn').removeClass().addClass('btn btn-lg btn-success');
    },

    'decade': function () {
      $('.btn').removeClass().addClass('btn btn-lg').css('background-color', '#decade');
    },

    'Play *song by *artist': function (song, artist) {
      var nowPlaying = $('.now-playing'),
      url = 'https://api.spotify.com/v1/search?q=track:'+ song +'+artist:'+ artist +'&type=track';

      $.getJSON(url, function (data) {
        var status = $('.status'),
            songPreview;
        for (var i = 0; i <= data.tracks.items.length; i++) {

          if (song.toLowerCase() === data.tracks.items[i].name.toLowerCase()) {
            songPreview = data.tracks.items[i];
            status.hide();
            nowPlaying.find('audio').attr('src', songPreview.preview_url);
            $('.artist').text(artist + ':');
            $('.song').text(song).css('text-transform', 'capitalize');
            break;
          }else {
            console.log('nope');
            status.show(400);
            setTimeout(function () {
              console.log('timeout');
              status.hide(400);}, 5000);
              break;
          }
        }
      });

      annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
        $('.response-music').text('Did you say \"' + userSaid + '\"?');
        $('.response-name').text('');
      });
    },

    'Rotate': function () {
      rx = 0.01;
      ry = 0.01;
    },

    'Rotate x': function () {
      console.log('rotating x');
      rx = 0.01;
    },

    'Rotate y': function () {
      console.log('rotating y');
      ry = 0.01;
    },

    'Stop rotating': function () {
      rx = 0;
      ry = 0;
    }
  });


  annyang.addCallback('resultNoMatch', function () {
    $('.response').text('I don\'t know what you said. Could you repeat that?');
  });

  // Start listening.
  annyang.start();
}
