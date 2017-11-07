function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList) {
    console.log(songList)
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      song.albumArt = song.albumArt.replace('100x100bb', '1000x1000bb')

      template += `
        <div class="col-sm-6 border">
          <img src="${song.albumArt}">
          <h3>${song.artist}</h3>
          <h6>${song.collection}</h6>
          <h4>${song.title}</h4>
          <h6>${song.price}</h6>
          <audio controls="controls">
            <source src="${song.preview}" />
          </audio>
        </div>
        `
      // I know the audio src isn't correct. At the bottom of the this .js file is the correct information to plug in. I couldn't resist a rick roll.

    }
    document.getElementById('results').innerHTML = template
  }

  window.addEventListener("play", function (evt) {
    if (window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) {
      window.$_currentlyPlaying.pause();
    }
    window.$_currentlyPlaying = evt.target;
  }, true);

  // document.addEventListener('play', function (e) {
  //   var audios = document.getElementsByClassName('audio');
  //   for (var i = 0, len = audios.length; i < len; i++) {
  //     if (audios[i] != e.target) {
  //       audios[i].pause();
  //     }
  //   }
  // }, true);

 


}
