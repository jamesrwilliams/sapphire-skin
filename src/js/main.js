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

$(document).ready(function(){
	
	$(".small-toggle").click(function(){
	
		$(".mobile_toggle").toggleClass("show-for-large-up");
	
	});
	
	if($('.sidepanel').length > 0){
		
		$(".logged-out").toggle();
		
		
	}else{
		
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
	
	$(document).foundation(); // Init Foundation Components
	
	sortNavigation();
	sortSportsClubs();
	
});