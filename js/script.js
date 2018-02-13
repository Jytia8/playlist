// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Finesse (Remix)",
	"artist":"Bruno Mars ft. Cardi B",
	"mp3-url":"https://www.youtube.com/watch?v=LsoLEjrDogU",
	"image-url":"https://pbs.twimg.com/media/DSphA7KWAAETM4C.jpg:large",
}

var myPlayList = [
	{
		"title":"Finesse (Remix)",
		"artist":"Bruno Mars ft. Cardi B",
		"mp3-url":"https://www.youtube.com/watch?v=LsoLEjrDogU",
		"image-url":"https://pbs.twimg.com/media/DSphA7KWAAETM4C.jpg:large",
	},
	{
		"title":"Motorsport",
		"artist":"Nicki Minaji, Cardi B, Migos",
		"mp3-url":"https://www.youtube.com/watch?v=9v_rtaye2yY",
		"image-url":"https://i.ytimg.com/vi/TbfxmTQkLAE/maxresdefault.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
displayList();


});

function displayList(){

$('body').append("<p>Title: " + mySong.title + "</p>");
$('body').append("<p>Artist: " + mySong.artist + "</p>");
$('body').append("<a href= " + mySong["mp3-url"] + ">Listen Here</a>");
$('body').append("<img src= " + mySong["image-url"] + ">");

for (var i=0; i < mySong.length; i = i + 1) {
	  	$(".mySong").append("<p>" + myPlayList[i] + "</p>");
	}

	
//var myPlayLists = myPlayList[0].title;
//var artist = myPlayList[1].artist;
//$("#play").append("<p> Title "  + myPlayLists + "by " + artist);


function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
}