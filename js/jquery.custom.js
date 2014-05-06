/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/
 
jQuery(document).ready(function($) {
	
	/*-----------------------------------------------------------------------------------*/
	/*	Search Button
	/*-----------------------------------------------------------------------------------*/

	$('#open').click(function() {
		$('.search').slideToggle(200);
	});
	
	$('#close').click(function() {
		$('.search').slideToggle(200);
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Boostrap Carousel
	/*-----------------------------------------------------------------------------------*/

	$('#slider').carousel({
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
		  columnWidth: '.box',
		});
	});
	
	$(window).resize(function() {
		//console.log('resized')
		//$('.masonry').masonry('bindResize');
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

				console.log($currentItem)

				$items = $(data).length;
				//$moreBlocks = $(post[$currentItem]);
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
		$('html, body').animate({scrollTop: '0'}, 500);
		return false;
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Responsive Videos
	/*-----------------------------------------------------------------------------------*/
	
	$('.video-widget').fitVids();
	$('.media-content').fitVids();
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

	$('#slider').swiperight(function() {
		$('#slider').carousel('prev');
	});
	$('#slider').swipeleft(function() {
		$('#slider').carousel('next');
	});
	
	$('#featured').swiperight(function() {
		$('#featured').carousel('prev');
	});
	$('#featured').swipeleft(function() {
		$('#featured').carousel('next');
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
		if( position != '15px'){
			$('.main-content').animate({left: '230px'}, 'fast');
		 	$('.navbar-collapse').animate({left: '15px'}, 'fast');
			$('.navbar').animate({left: '230px'}, 'fast');
			$('.navbar-toggle').html('<i class="fa fa-times"></i>');	
			$('body').addClass('modal-open');	
		}else{
			$('.main-content').animate({left: '0'}, 'fast');	 
		 	$('.navbar-collapse').animate({left: '-230px'}, 'fast');
			$('.navbar').animate({left: '0'}, 'fast');	
			$('.navbar-toggle').html('<i class="fa fa-bars"></i>');
			$('body').removeClass('modal-open');
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
        		$('.navbar-collapse').animate({left: '-230',}, 'fast').css('display','block');
				$('.navbar-collapse').removeClass('nav-side');				
				$('.main-content').animate({left: '0',}, 'fast');
				$('.navbar').animate({left: '0',}, 'fast');
				$('body').removeClass('modal-open');
        	}        
    	}).trigger('resize');
	})(jQuery);

});