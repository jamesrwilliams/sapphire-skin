function basketCount(){var e=$("#ctl00_basket_pnlBasket dt").length;e>0&&$(".basket_dropdown > a").append(" ("+e+")")}function handleVisibilityChange(){document[hidden]?Clock.pause():Clock.resume()}function sortSportsClubs(){for(var e=$(".club_list .msl_organisation_list li"),i=0;i<e.length;i+=2)e.slice(i,i+2).wrapAll("<li class='club_listing large-3 medium-6 small-6 column'></li>")}function sortNavigation(){$("sidepanel ul li:nth-child(1)").after("<li><a href='/profile/'>Profile</a></li>"),$("sidepanel ul").prepend("<li><a href='/account/' class='msl_person'>Account</a></li>"),$("#ctl00_usercontrolpanel_liAccount").remove()}function reOrderCSSImports(){$("head").append($("link[href='/stylesheet/Sapphire/foundation.css']")),$("head").append($("link[href='/stylesheet/Sapphire/main.css']"))}function goBack(){window.history.back()}function getTimeRemaining(e){var i=Date.parse(e)-Date.parse(new Date),t=Math.floor(i/1e3%60),n=Math.floor(i/1e3/60%60),o=Math.floor(i/36e5%24),s=Math.floor(i/864e5),a="Only "+s+" days to go until the new SU website is launched!";return a}var hidden,visibilityChange;"undefined"!=typeof document.hidden?(hidden="hidden",visibilityChange="visibilitychange"):"undefined"!=typeof document.mozHidden?(hidden="mozHidden",visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(hidden="msHidden",visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(hidden="webkitHidden",visibilityChange="webkitvisibilitychange");var slideSpeed=1e4,Clock={totalSeconds:0,start:function(){var e=this;this.interval=setInterval(function(){e.totalSeconds+=1,$(".orbitslider .news_1col > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo(".orbitslider .news_1col")},slideSpeed)},pause:function(){clearInterval(this.interval),delete this.interval},resume:function(){this.interval||this.start()}},kkeys=[],konami="38,38,40,40,37,39,37,39,66,65";$(document).keydown(function(e){kkeys.push(e.keyCode),kkeys.toString().indexOf(konami)>=0&&($(document).unbind("keydown",arguments.callee),$("body").addClass("konami"),$("body").prepend('<iframe id="somethingsomethingdarkside" width="420" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe>'))}),window.onload=function(){setTimeout(function(){var e=document.querySelector("ins.adsbygoogle");e&&0==e.innerHTML.replace(/\s/g,"").length&&("undefined"!=typeof ga?(ga("send","event","Adblock","Yes",{nonInteraction:1}),console.log("Adblock Is Active")):"undefined"!=typeof _gaq&&(_gaq.push(["_trackEvent","Adblock","Yes",void 0,void 0,!0]),console.log("Adblock Is Active")))},2e3)},$(document).ready(function(){console.time("JS"),$(document).foundation(),$(".sidepanel.controlpanel").length>0?$(".logged-out").hide():$(".logged-in").hide();var e="2016-01-11";if(console.log(getTimeRemaining(e)),sortNavigation(),sortSportsClubs(),basketCount(),document.addEventListener(visibilityChange,handleVisibilityChange,!1),$("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube-nocookie.com'], iframe[src^='//www.youtube.com'], object, embed").wrap("<div class='flex-video'></div>"),$("#skin_Sapphire.page_root").length>0&&($(".orbitslider .news_1col > div:gt(0)").hide(),$(".orbitslider .news_1col .killfloat").remove(),$(".orbitslider .news_1col .news_all").remove(),Clock.start()),$("#skin_Sapphire").length>0&&$(".msl-product-image").each(function(){var e=this.src;$(this).attr("src",getPathFromUrl(e)),$(this).attr("style","")}),$("#skin_Sapphire.page_whatson ").length>0){console.log("Whats on Page");var i=[],t=[];$(".event_item").each(function(e){var t="";$(this).find(".msl_event_types a").each(function(e){var n=$(this).text();t=t+n+", ",-1===$.inArray(n,i)&&i.push(n)})}),$.each(i,function(e,i){$(".search_options ul").append("<li>"+i+"</li>")}),$(".search_options li").click(function(){if($(this).hasClass("active")){var e=$(this).text();$(this).removeClass("active"),t=$.grep(t,function(i){return i!=e})}else{$(this).addClass("active");var i=$(this).text();-1===$.inArray(i,t)&&t.push(i)}$(".search_options li").hasClass("active")?($(".event_item").hide(),$(".event_item").each(function(e){var i=!1;$(this).find(".msl_event_types a").each(function(){$.inArray($(this).text(),t)>-1&&(i=!0)}),i===!0&&$(this).show()})):$(".event_item").show()})}$(".small-toggle").click(function(){$(".mobile_toggle").toggleClass("show-for-large-up")}),reOrderCSSImports(),console.timeEnd("JS")});