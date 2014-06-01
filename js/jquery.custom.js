/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/
 
jQuery(document).ready(function($) {
	
	/*-----------------------------------------------------------------------------------*/
	/*	Search Button
	/*-----------------------------------------------------------------------------------*/

	$('#open').click(function() {
		$('.search').slideToggle(200);
		$('.search input').focus();
	});
	
	$('#close').click(function() {
		$('.search').slideToggle(200);
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Boostrap Carousel
	/*-----------------------------------------------------------------------------------*/

	$('#media-content').carousel({
	  interval: 10000
	});
	
	$('#featured').carousel({
	  interval: false
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Masonry
	/*-----------------------------------------------------------------------------------*/
	
	$('.masonry').imagesLoaded(function(){
		$('.masonry').masonry({
			itemSelector: '.box',
		  	columnWidth: '.box'
		});
	});

	/*-----------------------------------------------------------------------------------*/
	/*	LoadMore
	/*-----------------------------------------------------------------------------------*/
	
	var $viewLoad = false,
		$items = 0,
		$currentItem = 0,
		post = '';

	$('#load-more').click(function() {
		var $loadMore = $(this),
			$moreBlocks = '',
			$container = $('#primary');

		$loadMore.text('Loading...');

		if (!$viewLoad){
			$.get('load-more.php', function( data ) {
				post = data;
				$items = $(data).length;
				$moreBlocks = $(post[$currentItem] + post[$currentItem + 1]);
				$container.append($moreBlocks);
				$container.imagesLoaded( function() {
					$container.masonry('appended', $moreBlocks);
					$loadMore.text('Show More News');
				}); 			                                    
			}, 'json').done(function(){
				$viewLoad = true;
				$currentItem = $currentItem + 2;
			});
		}else{
			if ( $currentItem < $items){
				if( post[$currentItem + 1] ){
					$moreBlocks = $(post[$currentItem] + post[$currentItem + 1]);
				}else{
					$moreBlocks = $(post[$currentItem]);
				}
				$container.append($moreBlocks);
				$container.imagesLoaded( function() {
					$container.masonry('appended', $moreBlocks);
					$loadMore.text('Show More News');
				})

				$currentItem = $currentItem + 2;
				if( $currentItem >= $items){
					$loadMore.addClass('disabled');
				}
			}
		}
	});    

	/*-----------------------------------------------------------------------------------*/
	/*	Tooltips
	/*-----------------------------------------------------------------------------------*/
	
	$('.link').tooltip()
	
	/*-----------------------------------------------------------------------------------*/
	/*	Back to top
	/*-----------------------------------------------------------------------------------*/
	
	$('#back-to-top').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 500);
		return false;
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Responsive Videos
	/*-----------------------------------------------------------------------------------*/
	
	$('#media-content').fitVids();
	$('.video-widget').fitVids();
	$('.content').fitVids();

	/*-----------------------------------------------------------------------------------*/
	/*	Fix YouTube z-index bug
	/*-----------------------------------------------------------------------------------*/

	$('iframe').each(function() {
        var url = $(this).attr('src');
        $(this).attr('src',url+'?wmode=transparent');
    });
	
	/*-----------------------------------------------------------------------------------*/
	/*	Boostrap Swipe
	/*-----------------------------------------------------------------------------------*/

	$('#media-content').swiperight(function() {
		$('#media-content').carousel('prev');
	});
	$('#media-content').swipeleft(function() {
		$('#media-content').carousel('next');
	});
	
	$('#featured').swiperight(function() {
		$('#featured').carousel('prev');
	});
	$('#featured').swipeleft(function() {
		$('#featured').carousel('next');
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Image Scroll Animations
	/*-----------------------------------------------------------------------------------*/
	
	$('#media-content, #featured .carousel-inner, #primary .image, .widget, .media-content, .content, .author, .related, #comments ol li, #respond').addClass('no-display');
	
	$('#media-content, #featured .carousel-inner, #primary .image, .widget, .media-content, .content, .author, .related, #comments ol li, #respond').one('inview', function() {
		$(this).addClass('appear');
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Make placeholders work on IE8/IE9
	/*-----------------------------------------------------------------------------------*/

	$(function() {
	  $('input, textarea').placeholder();
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Show dropdown on hover
	/*-----------------------------------------------------------------------------------*/
	
	(function ($, window, delay) {
		var theTimer = 0,
			theElement = null,
			theLastPosition = {x:0,y:0},
			$window = $(window);
	  	$('.navbar-nav').find('[data-toggle]').closest('li').on('mouseenter', function (inEvent) {
	  		if ($window.width() > 768) {
		  		if (theElement) theElement.removeClass('open');		  			
		  	}
			window.clearTimeout(theTimer);
			theElement = $(this);
			theTimer = window.setTimeout(function () {
		  		if ($window.width() > 768) {
		  			theElement.addClass('open');
		  		}
			}, delay);
	  	})
		.on('mousemove', function (inEvent) {			
			if(Math.abs(theLastPosition.x - inEvent.ScreenX) > 4 || 
			   Math.abs(theLastPosition.y - inEvent.ScreenY) > 4){
				theLastPosition.x = inEvent.ScreenX;
				theLastPosition.y = inEvent.ScreenY;
				return;
			}
			if (theElement.hasClass('open')) return;
				window.clearTimeout(theTimer);
				theTimer = window.setTimeout(function () {
		  		if ($window.width() > 768) {
		  			theElement.addClass('open');
		  		}
			}, delay);
		})
		.on('mouseleave', function (inEvent) {			
			window.clearTimeout(theTimer);
			theElement = $(this);
			theTimer = window.setTimeout(function () {
		  		if ($window.width() > 768) {
		  			theElement.removeClass('open');
		  		}
			}, delay);
	  	});
	})(jQuery, window, 200); // 200 is the delay in milliseconds
	
	/*-----------------------------------------------------------------------------------*/
	/*	Toggle
	/*-----------------------------------------------------------------------------------*/

	$('.navbar-toggle').click(function() {
		var position = $('.navbar-collapse').css('left');
		if( position != '0px'){
			$('body').addClass('modal-open');
			$('.main-content, .navbar').animate({left: '230px'}, 300);
			$('.navbar-collapse').animate({left: '0px'}, 300);
			$('.navbar-toggle').html('<i class="fa fa-times"></i>');		
		}else{
			$('body').removeClass('modal-open');
			$('.main-content, .navbar').animate({left: '0px'}, 300);	 
		 	$('.navbar-collapse').animate({left: '-230px'}, 300);
			$('.navbar-toggle').html('<i class="fa fa-bars"></i>');
		}
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Add class to navbar on mobile
	/*-----------------------------------------------------------------------------------*/

	(function($) {
    	var $window = $(window),
        	$html = $('.navbar-collapse');
    	$window.resize(function resize() {      		
        	if ($window.width() < 768) {
           		$('.navbar-collapse').addClass('nav-side');           		           		
        	}else{
				$('body').removeClass('modal-open');
				$('.main-content, .navbar').animate({left: '0',}, 300);
        		$('.navbar-collapse').removeClass('nav-side').animate({left: '-230px',}, 300);			
				$('.navbar-toggle').html('<i class="fa fa-bars"></i>');
        	}        
    	}).trigger('resize');
	})(jQuery);

});

/*-----------------------------------------------------------------------------------

 	Plugins and 3rd Party Libraries
 
-----------------------------------------------------------------------------------*/

/**
* author Remy Sharp
* url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
*/
(function(b){function t(){var e,a={height:k.innerHeight,width:k.innerWidth};a.height||!(e=l.compatMode)&&b.support.boxModel||(e="CSS1Compat"===e?f:l.body,a={height:e.clientHeight,width:e.clientWidth});return a}function u(){var e=b(),g,q=0;b.each(m,function(a,b){var c=b.data.selector,d=b.$element;e=e.add(c?d.find(c):d)});if(g=e.length)for(d=d||t(),a=a||{top:k.pageYOffset||f.scrollTop||l.body.scrollTop,left:k.pageXOffset||f.scrollLeft||l.body.scrollLeft};q<g;q++)if(b.contains(f,e[q])){var h=b(e[q]),n=h.height(),p=h.width(),c=h.offset(),r=h.data("inview");if(!a||!d)break;c.top+n>a.top&&c.top<a.top+d.height&&c.left+p>a.left&&c.left<a.left+d.width?(p=a.left>c.left?"right":a.left+d.width<c.left+p?"left":"both",n=a.top>c.top?"bottom":a.top+d.height<c.top+n?"top":"both",c=p+"-"+n,r&&r===c||h.data("inview",c).trigger("inview",[!0,p,n])):r&&h.data("inview",!1).trigger("inview",[!1])}}var m={},d,a,l=document,k=window,f=l.documentElement,s=b.expando,g;b.event.special.inview={add:function(a){m[a.guid+"-"+this[s]]={data:a,$element:b(this)};g||b.isEmptyObject(m)||(g=setInterval(u,250))},remove:function(a){try{delete m[a.guid+"-"+this[s]]}catch(d){}b.isEmptyObject(m)&&(clearInterval(g),g=null)}};b(k).bind("scroll resize",function(){d=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null})})(jQuery);