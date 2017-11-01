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
      result.albumArt = result.albumArt.replace('100x100bb','1000x1000bb')
      template += `
        <div class="col-md-6 border">
          <img src="${result.albumArt}">
          <h3>${result.artist}</h3>
          <h6>${result.collection}</h6>
          <h4>${result.title}</h4>
          <audio controls="controls">
            <source src="${result.preview}" />
          </audio>
          <h6>${result.price}</h6>
          
        </div>
        `
    }
    document.getElementById('results').innerHTML = template
  }









}
