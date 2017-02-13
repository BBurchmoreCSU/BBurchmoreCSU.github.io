( function( $ ) {
	$( document ).ready( function() {		
		FB.init({
				appId  : "205693909562110",
				status : true, // check login status
				cookie : true, // enable cookies to allow the server to access the session
				xfbml  : true  // parse XFBML    
		});
		$(function(){
			loadLike();
			window.fbAsyncInit = function() {
				FB.init({
					status : true,
					cookie : true,
					xfbml: true
				});
			};
		});
	} );
} ) ( jQuery );
function loadLike() {
	var e = document.createElement('script');
	e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
	e.async = true;
	document.getElementById('fb-root').appendChild(e);
}
