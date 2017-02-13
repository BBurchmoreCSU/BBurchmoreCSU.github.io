( function( $ ){
	$( document ).ready( function() {
		if( navigator.userAgent.search( /Firefox/ ) > 0 || navigator.userAgent.search( /Safari/ ) > 0 ) {
			$( ".featured-image-background" ).css({
				"bottom" : "0px"
			});
		}
		if( navigator.userAgent.search( /Chrome/ ) > 0 ) {
			$( ".featured-image-background" ).css({
				"bottom" : "3px"
			});
		}

		// Portfolio images
		if( navigator.userAgent.search( /Safari/ ) > 0 || navigator.userAgent.search( /Chrome/ ) > 0 ) {
			if( $( window ).width() <= 620 && $( window ).width() >= 481 ) {
				$( ".four-posts .post, .content .post_row .post-portfolio" ).css({
					"width" : "100%"
				});
			}	
			$( window ).resize( function() {
				if( $( window ).width() >= 980 ) {
					$( ".four-posts .post" ).css({
						"width" : "220px"
					});
					$( ".content .post_row .post-portfolio" ).css({
						"width" : "295px"
					});
				}
				else if ( $( window ).width() <= 979 && $( window ).width() >= 621 ) {
					$( ".four-posts .post" ).css({
						"width" : "48%"		
					});
					$( ".content .post_row .post-portfolio" ).css({
						"width" : "47%"
					});
				}
				else if ( $( window ).width() <= 620 && $( window ).width() >= 481 ) {
					$( ".four-posts .post, .content .post_row .post-portfolio" ).css({
						"width" : "100%"
					});
				}
				else {
					$( ".four-posts .post, .content .post_row .post-portfolio" ).css({
						"width" : "100%"		
					});
				}
			});
		}
		// Menu 			
		if( $( window ).width() <= 979 ) {
				$( "#main-menu" ).css({ 
					"width" : "100%",
					"display" : "none"
				});
		}
		$( window ).resize( function() {
			if( $( window ).width() >= 980 ) {			
				$( "#main-menu" ).css({ 
					"display" : "block",
					"width" : "auto",
					"height" : "auto",
					"margin" : "22px 0 28px"
				});
			} else {
				$( "#main-menu" ).css({
					"width" : "100%",
					"margin" : "0"
				});
			}
		});
		$( '#show-menu' ).click( function() {
			$( "#main-menu" ).css({ 
				"width" : "100%"
			});
			if($("#main-menu").css('display') != 'none')
				$("#main-menu").slideUp('slow');
			else
				$("#main-menu").slideDown('slow'); 
		});

		// Ad
		$( ".close" ).click( function () {
		    $( ".benefits" ).hide( "slide", { direction: "up" }, 1000, function() { $( "#benefits_container" ).hide() });
		});

		// Twitter
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}		(document,"script","twitter-wjs");

	    	// set twitter user and number of records
	    	var user = 'bestwebsoft';
	   	var count = 2;
	   	 // using jquery built in get json method with twitter api, return only COUNT results
	   	$.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + user + '&count=' + count + '&callback=?', function(data) {
			// result returned
			var text='<ul id="twitter">';
			var post_time = '';
			var tweet = new Array( count );
			for( var i = 0 ; i < count ; i++ ) {
			    	tweet[ i ] = data[ i ].text ;  

				// process links and reply
				tweet[ i ] = tweet[ i ].replace( /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function( url ) {
				    return '<a href="'+url+'">'+url+'</a>';
				}).replace( /(^|\s)@(\w+)/g, "$1<a href='http://www.twitter.com/$2' target='_blank'>@$2</a>"
				).replace( /(^|\s)#(\w+)/g, "$1<a href='http://search.twitter.com/search?q=%23$2' target='_blank'>#$2</a>" );
				text += '<li>' + tweet[ i ];

				// Add "ago" time
				var post_time = parseDate( data[ i ].created_at );
				var post_time_sec = post_time.getTime() / 1000; // convert post time to timestamp
				var time_ago = Math.round( new Date().getTime() / 1000 ) - post_time_sec; // get разница between current time and post time
				if( time_ago / 60 < 2 )
					text += '<p class="twitter_date">near 2 minutes ago</p></li>';
				else if( time_ago / 60 < 60 )
					text += '<p class="twitter_date">' + Math.round( time_ago / 60) + ' minutes ago</p></li>';
				else if( time_ago / 3600 < 2 )
					text += '<p class="twitter_date">' + 'near 1 hour ago </p></li>';
				else if( time_ago / 3600 >= 2 && time_ago / 3600 < 24 )
					text += '<p class="twitter_date">' + Math.round( time_ago / 3600 ) + ' hours ago</p></li>';
				else if( time_ago / ( 3600 * 24 ) >= 1 && time_ago / ( 3600 * 24 ) < 2 )
					text += '<p class="twitter_date">' + 'near 1 day ago</p></li>';
				else 
					text += '<p class="twitter_date">' + Math.round( time_ago / ( 3600 * 24 ) ) + ' days ago</p></li>';
	     	 	}
			text += "</ul>";
			// output the result
			$( ".tweet" ).html( text );
	   	});

		// Slider
		if ( $('#dots-container-secondary').length != 0 ) {
			var numberOfDots = $('#dots-container-secondary').children(".dot").length;
			if ( $.browser.msie && $.browser.version < 9 ) {			
				$( "#dots-container-secondary" ).css({
					"width" : numberOfDots * 18 + "px"
				});
				$( ".slider .dot" ).css({
					"width" : "12px"
				});
			}
			else {
				$( "#dots-container-secondary" ).css({
					"width" : numberOfDots * 16 + "px"
				});
			}
		}

		// hide arrow		
		$( ".left" ).css({
			"display" : "none"
		});
		$( "#button-" + dotNumber ).css( activeDotBackground );
		// Start autoplay 
		startSliderAutoplay( delay );
		// Select slide by dot
		$( ".dot" ).click( function() {
			dotId = this.id.split( "-" );
			sliderPosition = ( dotId[ 1 ] - 1 ) * ( -100 );
			$( ".sp-content .sp-slider" ).stop().animate({
				"left" : sliderPosition + "%"
			}, "slow" );
			$( ".dot" ).css( passiveDotBackground );
			$( this ).css( activeDotBackground );
			if( sliderPosition < ( n - 1 ) * ( -100 ) ) {
				$( ".right" ).css({
					"display" : "none"
				});	
			} else {
				$( ".right" ).css({
					"display" : "block"
				});	
			}
			if( sliderPosition > -100 ) {
				$( ".left" ).css({
					"display" : "none"
				});	
			} else {
				$( ".left" ).css({
					"display" : "block"
				});	
			}
		 	restartSliderAutoplay(); // restart autoplay
		});
		// Select slide by left arrow
		$( ".left" ).stop().click( function() {
			sliderPosition = sliderPosition + 100;
			$( ".right" ).css({
				"display" : "block"
			});
			if( sliderPosition > -100 ) {
				$( ".left" ).css({
					"display" : "none"
				});			
			}
			$( ".sp-content .sp-slider" ).stop().animate({
				"left" : sliderPosition + "%"
			});
			dotNumber = sliderPosition / ( -100 ) + 1;
			$( ".dot" ).css( passiveDotBackground );
			$( "#button-" + dotNumber ).css( activeDotBackground );
		 	restartSliderAutoplay(); // Restart autoplay
		});
		// Select slide by right arrow
		$( ".right" ).stop().click( function() {
			sliderPosition = sliderPosition - 100;
			$( ".left" ).css({
				"display" : "block"
			});
			if( sliderPosition < ( n - 1 ) * ( -100 ) ) {
				$( ".right" ).css({
					"display" : "none"
				});	
			};		
			$( ".sp-content .sp-slider" ).stop().animate({
				"left" : sliderPosition + "%"
			});
			dotNumber = sliderPosition / ( -100 ) + 1;
			$( ".dot" ).css( passiveDotBackground );
			$( "#button-" + dotNumber ).css( activeDotBackground );
		 	restartSliderAutoplay(); // restart autoplay
		});
	});
}) ( jQuery );
// Flickr
var api_key = "7737d855c64b4e38b071dc9d3ffb7354"; // Api key
var tag = "nature"; // searching tag
var per_page = 4; // number of images
( function( $ ){
	$.getJSON( 'http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=' + api_key + '&tags=' + tag + '&per_page=' + per_page + '&jsoncallback=?', function( data ) {
		if( data.stat != "ok" ) {
			return;
		}
	// Start putting together the HTML string
		var htmlString = "";
	// Now start cycling through our array of Flickr photo details
		$.each(data.photos.photo, function( i, photo ) {
			var url = window.location.pathname;
			function urlRebuild(url){
				var url = url.split("/");
				var url_construct="file:///";
				for(var i=1;i<url.length-1;i++){
					url_construct += url[i]+"/";
				}
				url_construct +="js/PIE/PIE.htc";
				return url_construct;
			};
			url = urlRebuild(url);
			t_url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "s.jpg";
			p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
			p_url = p_url.replace(/\'/g,"\'").replace(/\"/g, "\"");
			if(document.domain)
				pie = "behavior: url('js/PIE/PIE.php');";
			else
				pie = "behavior: url('" + url + "');";
			htmlString +=  '<div><a href="' + p_url + '" ><img class="shadow" alt="'+ photo.title + '" src="' + t_url + '" style="' + pie + '"/></a></div>';
	    });
	    $( '.flickr_images' ).html( htmlString );
	});
}) ( jQuery );

// Twitter Date
function parseDate(str) {
	var v=str.split(' ');
	return new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
} 

// Slider
function startSliderAutoplay( delay ) {
	interval = setInterval( sliderAutoplay , delay );
}

function restartSliderAutoplay() {
	clearTimeout( timeout ); // stop TimeOut
 	clearInterval( interval ); // stop interval
	timeout = setTimeout( function() {
		startSliderAutoplay( delay )
	}, timeOut );	
}
/* Start slider options */
// Slider dots for all browsers
var activeDotBackground = {
	"background" : "#000000"
};
var passiveDotBackground = {
	"background" : "#ffffff"
};
// Slider dots for "special" browsers
if ( $.browser.msie && $.browser.version < 9 ) {
	var activeDotBackground = {
		"background" : "url('images/sprite.png') -1px -94px no-repeat"
	};
	var passiveDotBackground = {
		"background" : "url('images/sprite.png') -17px -94px no-repeat"
	};
}
var sliderPosition = "0"; // Starting position of the slider
var delay = 5000; // delay between slide change
var timeOut = 10000; // timeout when arrow or dot was pressed
var dotNumber = 1; // current number of active dot
var n = 4; //number of slides, it will be recive from php
var dotId=0;
var timeout, interval;
n = n - 1; // because we start counting from 0
/* End slider options */

function sliderAutoplay() {
	( function( $ ){
		sliderPosition = sliderPosition - 100;
		$( ".left" ).css({
			"display" : "block"
		});
		if( sliderPosition < ( n ) * ( -100 ) ) { 
			sliderPosition = 0;
		}
		// Show&hide left\right arrows
		if( sliderPosition < ( n - 1 ) * ( -100 ) ) {
			$( ".right" ).css({
				"display" : "none"
			});	
		} else {
			$( ".right" ).css({
				"display" : "block"
			});	
		}
		if( sliderPosition > -100 ) {
			$( ".left" ).css({
				"display" : "none"
			});	
		} else {
			$( ".left" ).css({
				"display" : "block"
			});	
		}
		$( ".sp-content .sp-slider" ).stop().animate({
			"left" : sliderPosition+"%"
		});

		// Dots
		dotNumber = sliderPosition / ( -100 ) + 1;
		$( ".dot" ).css( passiveDotBackground );
		$( "#button-" + dotNumber ).css( activeDotBackground );
	}) ( jQuery );
}
