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
		_data = '';

	$('#load-more').click(function() {
		var $loadMore = $(this),
			$moreBlocks = '',
			$container = $('#primary');

		$loadMore.text('Loading...');

		if (!$viewLoad){
			$.get('load-more.php', function( data ) {
				_data = data;
				$items = $(data).length;
				$moreBlocks = $(data[$currentItem] + data[$currentItem + 1]);

				$container.append($moreBlocks);
				$container.imagesLoaded( function() {
					$container.masonry('appended', $moreBlocks);
					$loadMore.text('Show More News');
				}); 			                                    
			}, 'json');

			$viewLoad = true;
			$currentItem = $currentItem + 2;

		}else{
			if ( $currentItem < $items){
				if( _data[$currentItem + 1] ){
					$moreBlocks = $(_data[$currentItem] + _data[$currentItem + 1]);
				}else{
					$moreBlocks = $(_data[$currentItem]);
				}
				
				$container.append($moreBlocks);
				$container.imagesLoaded( function() {
					$container.masonry('appended', $moreBlocks);
					$loadMore.text('Show More News');
				});
				$currentItem = $currentItem + 2;
			}else{
				$loadMore.addClass('disabled').text('No More News');
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
	/*	Preloader
	/*-----------------------------------------------------------------------------------*/
	
	/*$('body').queryLoader2({
        barColor: '#222222',
        backgroundColor: '#ffffff',
        percentage: true,
        barHeight: 3,
        completeAnimation: 'fade',
        minimumTime: 200
    });*/
	
	/*-----------------------------------------------------------------------------------*/
	/*	Show dropdown on hover
	/*-----------------------------------------------------------------------------------*/
	
	(function ($, window, delay) {
		var theTimer = 0,
			theElement = null,
			theLastPosition = {x:0,y:0},
			$window = $(window);

<<<<<<< HEAD
	  	$('[data-toggle]').closest('li').on('mouseenter', function (inEvent) {	  		
			//if (theElement) theElement.removeClass('open');
=======

	  	$('.navbar-nav').find('[data-toggle]').closest('li').on('mouseenter', function (inEvent) {	  		

>>>>>>> 79dea4f4b778aca01a7fef8b9d74f3c3fcbf3fa9
			window.clearTimeout(theTimer);
			theElement = $(this);
			theTimer = window.setTimeout(function () {
		  		if ($window.width() > 767) {
		  			if (theElement) theElement.removeClass('open');
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
		  		if ($window.width() > 767) {
		  			if (theElement) theElement.removeClass('open');
		  			theElement.addClass('open');
		  		}
			}, delay);
		})
		.on('mouseleave', function (inEvent) {			
			window.clearTimeout(theTimer);
			theElement = $(this);
			theTimer = window.setTimeout(function () {
		  		if ($window.width() > 767) {
		  			if (theElement) theElement.removeClass('open');
		  			theElement.removeClass('open');
		  		}
			}, delay);
	  	});
	})(jQuery, window, 200); // 200 is the delay in milliseconds
	
	/*-----------------------------------------------------------------------------------*/
	/*	Toggle
	/*-----------------------------------------------------------------------------------*/
	
	$('.navbar-toggle').click(function() {
		var position = $('.navbar-collapse').css('left'),
			menu = $('.navbar-collapse'),
			container = $('body');
			
		if( position != '15px'){
			container.animate({left: '230px'}, 'fast').addClass('modal-open');	
		 	menu.animate({left: '15px'}, 'fast');
			$('.navbar').animate({left: '230px'}, 'fast');
		}else{
			container.animate({left: '0'}, 'fast').removeClass('modal-open');	 
		 	menu.animate({left: '-230px'}, 'fast');
			$('.navbar').animate({left: '0'}, 'fast');	
		}
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Add class to navbar on mobile
	/*-----------------------------------------------------------------------------------*/

	(function($) {
    	var $window = $(window),
        	$html = $('.navbar-collapse');

    	$window.resize(function resize() {
        	if ($window.width() < 767) {
           		return $html.addClass('nav-side');           		
        	}else{
				$html.removeClass('nav-side');
				
				$( '.main-content' ).animate({
					left: '0',
				}, 'fast' );
			  
				$( '.navbar-collapse' ).animate({
					left: '-230px',
				}, 'fast' );
        	}        
    	}).trigger('resize');
	})(jQuery);

});