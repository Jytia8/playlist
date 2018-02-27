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
		"title":"Bartier Cardi",
		"artist":"Cardi B ft. 21 Savage",
		"mp3-url":"https://www.youtube.com/watch?v=sXP6vliZIHI",
		"image-url":"https://images.complex.com/complex/images/c_crop,h_1200,w_1172,x_4,y_0/c_limit,w_680/fl_lossy,pg_1,q_auto/wcnqxs8k8ipbjfbn0dlj/bartier-cardi-album-cover",
	},
		{
		"title":"Too Good At Goodbyes",
		"artist":"Sam Smith",
		"mp3-url":"https://www.youtube.com/watch?v=J_ub7Etch2U",
		"image-url":"http://www.kiss925.com/wp-content/uploads/sites/59/2017/09/Sam-Smith-Too-Good-at-Goodbyes-Video.jpg",
	},	{
		"title":"Feelings",
		"artist":"PnB Rock",
		"mp3-url":"https://www.youtube.com/watch?v=uzANdtLhDUI",
		"image-url":"https://i.ytimg.com/vi/uzANdtLhDUI/maxresdefault.jpg",
	},	{
		"title":"When we",
		"artist":"Tank",
		"mp3-url":"https://www.youtube.com/watch?v=QRF9TgkBCjc",
		"image-url":"https://i.ytimg.com/vi/QRF9TgkBCjc/hqdefault.jpg",
	},
		{
		"title":"No limit Remix",
		"artist":"G-Easy ft. A$AP Rocky, Cardi B, French Montana, Juicy J, Belly",
		"mp3-url":"https://www.youtube.com/watch?v=l_lblj8Cq0o",
		"image-url":"https://i.ytimg.com/vi/PGfSaVDymjk/maxresdefault.jpg",
	},	
	{
		"title":"Privacy",
		"artist":"Chris Brown",
		"mp3-url":"https://www.youtube.com/watch?v=Fq0xEpRDL9Q",
		"image-url":"https://i.ytimg.com/vi/Fq0xEpRDL9Q/maxresdefault.jpg",
	},
]



//DOCUMENT READY FUNCTION
$( document ).ready(function() {
	console.log("page load");

	displayList();
	
  $("button").click(function(){
  	
  	
  	//for (var i=0; i < displayList.length; i= i + i){
  	//	console.log(displayList[i]);
  	//}
  	
  });
  
});

function displayList(){
	
	for (var i=0; i < myPlayList.length; i++){
		var song = myPlayList[i];
	  	//(".songs").append("<p>" + song.title + "</p>");
	  	
	  	$(".songs").append(
	  		"<p>" + 
	  			"<div> Title: " + song.title + "</div>" +
	  			"<div> Artist:" + song.artist + "</div>" +
	  			"<div><img src=" + song["image-url"] + "></div>" +
	  			'<div><a href="' + song["mp3-url"] + '">Listen Here</a></div>' +
	  		"</p>"
	  	);
	  	
 
//$('body').append("<p>Title: " + myPlayList[i].title + "</p>");
//$('body').append("<p>Artist: " + myPlayList[i].artist + "</p>");
//$('body').append("<a href= " + myPlayList["mp3-url"][i] + ">Listen Here</a>");
//$('body').append("<img src= " + myPlayList["image-url"][i] + ">");

   }

}


	



function clearList(){
  
  $(".songs").empty();
  
}

function addSong(){
 
  
  
}
