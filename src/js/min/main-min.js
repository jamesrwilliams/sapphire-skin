function basketCount(){var e=$("#ctl00_basket_pnlBasket dt").length;e>0&&$(".basket_dropdown > a, .mobile-only-basket-ui > a").append(" ("+e+")")}function handleVisibilityChange(){document[hidden]?Clock.pause():Clock.resume()}function sortSportsClubs(){for(var e=$(".club_list .msl_organisation_list li"),i=0;i<e.length;i+=2)e.slice(i,i+2).wrapAll("<li class='club_listing large-3 medium-6 small-6 column'></li>")}function isEmpty(e){return!$.trim(e.html())}function sortNavigation(){$("sidepanel ul li:nth-child(1)").after("<li><a href='/profile/'>Profile</a></li>"),$("sidepanel ul").prepend("<li><a href='/account/' class='msl_person'>Account</a></li>"),$("#ctl00_usercontrolpanel_liAccount").remove()}function reOrderCSSImports(){$("head").append($("link[href='/stylesheet/Sapphire/foundation.css']")),$("head").append($("link[href='/stylesheet/Sapphire/main.css']"))}function goBack(){window.history.back()}function getTimeRemaining(e){var i=Date.parse(e)-Date.parse(new Date),t=Math.floor(i/1e3%60),n=Math.floor(i/1e3/60%60),s=Math.floor(i/36e5%24),a=Math.floor(i/864e5),o="Only "+a+" days to go until the new SU website is launched!";return o}var hidden,visibilityChange;"undefined"!=typeof document.hidden?(hidden="hidden",visibilityChange="visibilitychange"):"undefined"!=typeof document.mozHidden?(hidden="mozHidden",visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(hidden="msHidden",visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(hidden="webkitHidden",visibilityChange="webkitvisibilitychange");var slideSpeed=8e3,Clock={totalSeconds:0,start:function(){var e=this;this.interval=setInterval(function(){e.totalSeconds+=1,$(".main_news_slider .news_1col > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo(".main_news_slider .news_1col")},slideSpeed)},pause:function(){clearInterval(this.interval),delete this.interval},resume:function(){this.interval||this.start()}},kkeys=[],konami="38,38,40,40,37,39,37,39,66,65";$(document).keydown(function(e){kkeys.push(e.keyCode),kkeys.toString().indexOf(konami)>=0&&($(document).unbind("keydown",arguments.callee),$("body").addClass("konami"),$("body").prepend('<iframe id="somethingsomethingdarkside" width="420" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe>'))}),window.onload=function(){setTimeout(function(){var e=document.querySelector("ins.adsbygoogle");e&&0==e.innerHTML.replace(/\s/g,"").length&&("undefined"!=typeof ga?(ga("send","event","Adblock","Yes",{nonInteraction:1}),console.log("Adblock Is Active")):"undefined"!=typeof _gaq&&(_gaq.push(["_trackEvent","Adblock","Yes",void 0,void 0,!0]),console.log("Adblock Is Active")))},2e3)},$(document).ready(function(){console.time("JS"),reOrderCSSImports(),$(document).foundation({"magellan-expedition":{active_class:"active",threshold:0,destination_threshold:125,throttle_delay:50,fixed_top:0,offset_by_height:!0}}),$(".sidepanel.controlpanel").length>0?$(".logged-out").hide():$(".logged-in").hide();var e="2016-01-11";if(console.log(getTimeRemaining(e)),sortNavigation(),sortSportsClubs(),$("#skin_Sapphire").hasClass("page_feedback")){var i=$("msl-idea-status"),t=i.innerHTML;switch(t){case"Current":i.className+=" alertbox";break;case"Passed":i.className+=" alertbox";break;case"Rejected":i.className+=" alertbox";break;case"Locked":i.className+=" alertbox"}}if(basketCount(),document.addEventListener(visibilityChange,handleVisibilityChange,!1),$("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube-nocookie.com'], iframe[src^='//www.youtube.com'], object, embed").wrap("<div class='flex-video'></div>"),$(".main_news_slider .news_1col > div:gt(0)").hide(),$(".main_news_slider .news_1col .killfloat").remove(),$(".main_news_slider .news_1col .news_all").remove(),Clock.start(),$("#skin_Sapphire.page_full-time-officers").length>0&&($(".news_item").each(function(){$(this).find("p.leader").is(":empty")&&$(this).find("p.leader").remove()}),$(".news_item").click(function(){$(this).find("p.leader").slideToggle()})),$("#skin_Sapphire.page_jobs").length>0&&($("#job-signup input[checked=checked]").length?($(".vacancy").show(),$("#job-signup").hide()):$(".vacancy").remove()),$("#skin_Sapphire.page_student-reps.page_course").length>0&&$.getScript("https://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js",function(){$(".tableizer-table").DataTable()}),$("#skin_Sapphire").length>0&&(console.log("Product on Page"),$(".msl-product-image").each(function(){var e=this.src,i=0,t=e;i=e.indexOf("?"),-1==i&&(i=e.indexOf("#")),-1!=i&&(t=e.substring(0,i)),$(this).attr("src",t),$(this).attr("style","")})),$("#skin_Sapphire.page_whatson, #skin_Sapphire.page_events").length>0){console.log("Whats on Page");var n=[],s=[];$(".event_item").each(function(e){var i="";$(this).find(".msl_event_types a").each(function(e){var t=$(this).text();i=i+t+", ",-1===$.inArray(t,n)&&n.push(t)})}),$.each(n,function(e,i){$(".search_options ul").append("<li>"+i+"</li>")}),$(".search_options li").click(function(){if($(this).hasClass("active")){var e=$(this).text();$(this).removeClass("active"),s=$.grep(s,function(i){return i!=e})}else{$(this).addClass("active");var i=$(this).text();-1===$.inArray(i,s)&&s.push(i)}$(".search_options li").hasClass("active")?($(".event_item").hide(),$(".event_item").each(function(e){var i=!1;$(this).find(".msl_event_types a").each(function(){$.inArray($(this).text(),s)>-1&&(i=!0)}),i===!0&&$(this).show()})):$(".event_item").show()})}$(".small-toggle").click(function(){$(".mobile_toggle").toggleClass("show-for-large-up")}),console.timeEnd("JS")});