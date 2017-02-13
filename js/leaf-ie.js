( function( $ ) {
	$( document ).ready( function() {
		$('[placeholder]').placeholder();
		$( ".menu .menu-item:first-child" ).addClass( "menu-first-item" );
		$( ".menu .menu-item:last-child" ).addClass( "menu-last-item" );
		$( "#benefits_container .benefits:last-child" ).addClass( "benefits-last-item" );
		if(document.domain) {
			piePath = {"behavior" : "url('js/PIE/PIE.php')"};
		} else {
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
			piePath = {"behavior" : "url('" + url + "')"};
		}
		$(".shadow, .slider .dot, .link, .benefits .commercial, #submit-contact, #menu-container, #show-menu, #tip_button, .search-text, .nav-button a, .single-comment, #name, #email, #user-comment, #submit-comment, #name-contact, #email-contact, #message-contact, .social_icon, .social_icon a, .social_icon a:hover, .navigations-button, .navigations-button a, .navigations-button a:hover, #wrapper .image-portfolio-title, .menu .menu-item, .contact-us .post-featured-image img, #tip-right, #tip_block, #menu-container, #show-menu, #menu-container, #show-menu, .icon-bar, #right-sidebar .widget_tag_cloud a, .flickr_images img, .commercial").css(piePath);		
		$( ".featured-image-background" ).hover(	
			function() {
				$( this ).stop().fadeTo( 300, 0.35, function() {
					// Animation complete.
				});
			},
			function() {
				$( this ).stop().fadeTo( 300, 0, function() {
					// Animation complete.
				});
			}
		);
	});
}) ( jQuery );

