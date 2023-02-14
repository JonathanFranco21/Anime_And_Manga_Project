fetch('animes.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  appendData(data);
})
.catch(function(err) {
  console.log('error: ' + err);
});
function appendData(data) {
  var mainContainer = document.getElementById("animeData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Anime Name: ' + data[i].name;
    div.innerHTML = 'Release Year: ' + data[i].release_year;
    div.innerHTML = 'Seasons: ' + data[i].seasons;
    div.innerHTML = 'Airing?: ' + data[i],airing;
    mainContainer.appendChild(div);
  }
}
