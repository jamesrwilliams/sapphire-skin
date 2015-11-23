/*
 * Core Sapphire Javascript File
 * 
 * @version		0.1
 * @package		com.jamesrwilliams.yourstudentsunion
 * @description	Core Site JS file for UGSU		
 * @author 		James Williams (@James_RWilliams)
 * @copyright 	Copyright (c) 05/07/2015
 *
 */
 
/**
 *	Basket Highlight Logic
 * 
 */
 
function basketCount(){
	
	var productcount = $('#ctl00_basket_pnlBasket dt').length;
	
	if( productcount > 0 ){
		
		$('.basket_dropdown > a').append(" (" + productcount + ")");
		
	}
	
}

/**
 *	Handle The Visibility Change
 * 
 */		
 
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}



function handleVisibilityChange() {
  if (document[hidden]) {
    Clock.pause();
  } else {
    Clock.resume();
  }
}

/**
 *	JS Clock Object
 *
 *	Controlls the sldier elements and pauses using the Page Visibility API
 *	when page is idle.
 * 
 */		

var slideSpeed = 10000;

var Clock = {
		
	totalSeconds: 0,

	start: function () {

		var self = this;

		this.interval = setInterval(function () {
		self.totalSeconds += 1;

		$('.orbitslider .news_1col > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('.orbitslider .news_1col');
		
		
		
	}, slideSpeed);

	},

	pause: function () {

		clearInterval(this.interval);
		delete this.interval;

	},

	resume: function () {

		if (!this.interval) this.start();

	}

};

/**
 *	Konami Fun
 * 
 */
 
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {

  kkeys.push( e.keyCode );

  if ( kkeys.toString().indexOf( konami ) >= 0 ) {

    $(document).unbind('keydown',arguments.callee);
    
    // do something awesome
    $("body").addClass("konami");
    
    $("body").prepend('<iframe id="somethingsomethingdarkside" width="420" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe>');
  
  }

});

/**
 *	Sort Sorts Clubs
 *
 *	Wraps each pair output from the MSL orginiaiton list 
 *	object in a parent <li> element for easy styling. Also
 *	adds Foundation 5 classes for the grid system.
 * 
 */		

function sortSportsClubs(){
	
	var divs = $(".club_list .msl_organisation_list li");
    	
    for(var i = 0; i < divs.length; i+=2) {
		
		divs.slice(i, i+2).wrapAll("<li class='club_listing large-3 medium-6 small-6 column'></li>");
    	
    }
	
}

/**
 *	Rearrange Naviagation	
 *
 *	Following three lines reogansiae the account dropdown, 
 *	removing redundant plain text and separates options 
 *	into list elements
 * 
 */	

function sortNavigation(){
	
	$("sidepanel ul li:nth-child(1)").after("<li><a href='/profile/'>Profile</a></li>");
	$("sidepanel ul").prepend("<li><a href='/account/' class='msl_person'>Account</a></li>");
	$("#ctl00_usercontrolpanel_liAccount").remove();
	
	
}

/**
 *	Reorders the Skins CSS Imports in the <HEAD>
 *
 *	Moves the skin stylesheet to the bototm of the <HEAD> to allow easy 
 *	overrides of MSL defaults rather than using the css !important directive.
 * 
 */		

function reOrderCSSImports(){

	$("head").append($("link[href='/stylesheet/Sapphire/foundation.css']"));
	$("head").append($("link[href='/stylesheet/Sapphire/main.css']"));
	
}

 window.onload = function() { 
  
    // Delay to allow the async Google Ads to load
    setTimeout(function() { 
      
      // Get the first AdSense ad unit on the page
      var ad = document.querySelector("ins.adsbygoogle");
      
      // If the ads are not loaded, track the event
      if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) {
 
        if (typeof ga !== 'undefined') {
 
            // Log an event in Universal Analytics
            // but without affecting overall bounce rate
            ga('send', 'event', 'Adblock', 'Yes', {'nonInteraction': 1});
            console.log("Adblock Is Active");
 
        } else if (typeof _gaq !== 'undefined') {
 
            // Log a non-interactive event in old Google Analytics
            _gaq.push(['_trackEvent', 'Adblock', 'Yes', undefined, undefined, true]);
             console.log("Adblock Is Active");
 
        }
      }
    }, 2000); // Run ad block detection 2 seconds after page load
  }; 



$(document).ready(function(){
	
	console.time("JS");
	
	if($('.sidepanel.controlpanel').length > 0){
		
		$(".logged-out").hide();
	
	}else{
		
		$(".logged-in").hide();
	
	}
	

	$(document).foundation(); 	// Init Foundation Components
	
	/*
	 * 	Function Animates the Main News Slider
	 */
	
	$(".orbitslider .news_1col > div:gt(0)").hide();
	$(".orbitslider .news_1col .killfloat").remove();
	$(".orbitslider .news_1col .news_all").remove();
	
	Clock.start();
	
	sortNavigation();
	sortSportsClubs();
	basketCount();
	
	$("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube-nocookie.com'], iframe[src^='//www.youtube.com'], object, embed").wrap("<div class='flex-video'></div>");
	
	// DEBUG SCRIPTS
	
	reOrderCSSImports();
	
	// END DEBUG SCRIPTS
	
	if ($('#skin_Sapphire').length > 0) {
        
    	$(".msl-product-image").each(function() {  

            var imgsrc = this.src;         
            $(this).attr("src", getPathFromUrl(imgsrc));
            $(this).attr('style', '');

        });  
	}
	


	
	document.addEventListener(visibilityChange, handleVisibilityChange, false); // Adds the Visibility Event Listener for the Orbit Slider
	
	$(".small-toggle").click(function(){
	
		$(".mobile_toggle").toggleClass("show-for-large-up");
	
	});
	
	console.timeEnd("JS");
	
});