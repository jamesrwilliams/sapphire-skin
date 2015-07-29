/*
 * 
 * 
 * @version		0.1
 * @package		com.jamesrwilliams.yourstudentsunion
 * @description	Core Site JS file for UGSU		
 * @author 		James Williams (@James_RWilliams)
 * @copyright 	Copyright (c) 05/07/2015
 *
 */
 

function sortSportsClubs(){
	
	var divs = $(".club_list .msl_organisation_list li");
    	
    	for(var i = 0; i < divs.length; i+=2) {
		
			divs.slice(i, i+2).wrapAll("<li class='club_listing large-3 medium-6 small-6 column'></li>");
    	
    	}

	
}


$(document).ready(function(){
	
	var loggedInFlag = false;
	
	$(".small-toggle").click(function(){
	
		console.log("Clicked");
	
		$(".mobile_toggle").toggleClass("show-for-large-up");
	
	});
	
	if($('.sidepanel').length > 0){
		
		console.log("Logged In - Removing Login Button");
		
		$(".logged-out").toggle();
		
		
	}else{
			
		console.log("Logged Out");
		
		$(".logged-in").toggle();
			
	}
	
	
  
	/* Add Double Slash to enable Orbit following section.
  
	$(function() {
		
		$(".news_1col > div:gt(0)").hide();
		
		$(".news_1col .killfloat").remove();
		$(".news_1col .news_all").remove();

		setInterval(function() { 
		  $('.news_1col > div:first')
		    .fadeOut(2000)
		    .next()
		    .fadeIn(2000)
		    .end()
		    .appendTo('.news_1col');
		},  10000);
	
	
		
	});
	
	/* */
	
	sortSportsClubs();
	
	$(document).foundation();
	
});