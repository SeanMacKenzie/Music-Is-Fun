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
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var result = songList[i];
      template += `
        <div class="col-md-4">
          <img src="${result.albumArt}">
          <h4>${result.artist}</h4>
          <h6>${result.collection}</h6>
          <h6>${result.preview}</h6>
          <h4>${result.price}</h4>
          <h6>${result.title}</h6>
        </div>
        `
    }
     document.getElementById('results').innerHTML = template 
  }
      








}
