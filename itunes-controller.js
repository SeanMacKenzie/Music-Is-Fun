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
      var result = songList[i];
      result.albumArt = result.albumArt.replace('100x100bb', '1000x1000bb')
      
      template += `
        <div class="col-sm-6 border">
          <img src="${result.albumArt}">
          <h3>${result.artist}</h3>
          <h6>${result.collection}</h6>
          <h4>${result.title}</h4>
          <h6>${result.price}</h6>
          <audio controls="controls">
            <source src="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/00/23/38/0023383d-1616-fbe2-b3a3-7f2de268911b/mzaf_7209253486009554987.plus.aac.p.m4a" />
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

  // <audio controls="controls">
  //   <source src="${result.preview}" />
  // </audio>



}
