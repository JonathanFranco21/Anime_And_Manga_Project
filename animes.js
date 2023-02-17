var animeInformation = [
  {
    "Name": "SPY X FAMILY",
    "Release Year": "2022",
    "Seasons": "1",
    "Airing?": "Yes"
  },
  {
    "Name": "My Hero Academia",
    "Release Year": "2016",
    "Seasons": "6",
    "Airing?": "Yes"
  },
  {
    "Name": "The Prince of Tennis",
    "Release Year": "2001",
    "Seasons": "7",
    "Airing?": "No"
  },
  {
    "Name": "Haikyuu!",
    "Release Year": "2014",
    "Seasons": "4",
    "Airing?": "No"
  },
  {
    "Name": "Fairy Tail",
    "Release Year": "2009",
    "Seasons": "9",
    "Airing?": "No"
  },
  {
    "Name": "Snow White with the Red Hair",
    "Release Year": "2015",
    "Seasons": "1",
    "Airing?": "No"
  },
  {
    "Name": "Gamers!",
    "Release Year": "2017",
    "Seasons": "1",
    "Airing?": "No"
  },
  {
    "Name": "Cells At Work!",
    "Release Year": "2018",
    "Seasons": "2",
    "Airing?": "No"
  },
  {
    "Name": "Attack on Titan",
    "Release Year": "2013",
    "Seasons": "4",
    "Airing?": "Yes"
  },
  {
    "Name": "One Piece",
    "Release Year": "1999",
    "Seasons": "20",
    "Airing?": "Yes"
  }
]; 

function convertJsonToHtmlTable(){
  var headers = Object.keys(animeInformation[0]);
   
  var headerRowHTML='<tr>';
  for(var i=0;i<headers.length;i++){
      headerRowHTML+='<th>'+headers[i]+'</th>';
  }
  headerRowHTML+='</tr>';       
   
  var allRecordsHTML='';
  for(var i=0;i<animeInformation.length;i++){
      allRecordsHTML+='<tr>';
      for(var j=0;j<headers.length;j++){
          var header=headers[j];
          allRecordsHTML+='<td>'+animeInformation[i][header]+'</td>';
      }
      allRecordsHTML+='</tr>';
  }
   
  var table=document.getElementById("animeData");
  table.innerHTML=headerRowHTML + allRecordsHTML;
}