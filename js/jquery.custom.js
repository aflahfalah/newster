/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/
 
jQuery(document).ready(function($) {
	
	/*-----------------------------------------------------------------------------------*/
	/*	Search Button
	/*-----------------------------------------------------------------------------------*/

	$("#open" ).click(function() {
		$( ".search" ).slideToggle(200);
	});
	
	$("#close" ).click(function() {
		$( ".search" ).slideToggle(200);
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


/*
	$("#load-more").click(function() {
	var $loadMore = $(this),
		$moreBlocks = "",
		$container = $("#primary");
		$container.masonry( {
		    itemSelector: 'div.box'
		} );


	$loadMore.text('Loading...');
		$.get('load-more.html', function( data ) {
			var data_test = '<div class="col-md-6 col-sm-6 box padding"> <div class="header"> <h2><a href="#">10 most improved teams after NHL trade deadline</a></h2> <p class="date">March 7, 2014<span>&nbsp;/&nbsp;</span><a href="#">No Comments</a></p> </div><!-- /.header --> <div class="image category4"> <h3 class="category-badge"><a href="#">Sports</a></h3> <a href="#"><img class="img-responsive" src="images/posts/post5.jpg" alt="Content Post" /></a> </div><p class="excerpt">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id ultricies ut vehicula ut id. Integer posuere erat a venenatis dapibus posuere velit aliquet duis...</p></div>';

			console.log($(data).filter('div.box'))
			//$moreBlocks = $(data).filter('div.box');
			$moreBlocks = $(data_test);
			$container.append($moreBlocks);
			$container.imagesLoaded( function() {
				$container.masonry('appended', $moreBlocks);
				$loadMore.text('Show More News');
			}); 
			                                    
		});         
	});

*/

	/*-----------------------------------------------------------------------------------*/
	/*	LoadMore
	/*-----------------------------------------------------------------------------------*/
	var $viewLoad = false,
		$items = 0,
		$currentItem = 0,
		_data = "";

	$("#load-more").click(function() {
	var $loadMore = $(this),
		$moreBlocks = "",
		$container = $("#primary");

		$loadMore.text('Loading...');//changes loading text

		if ( !$viewLoad ){

			$.get('load-more.php', function( data ) {
				_data = data;
				$items = $(data).length;

				$moreBlocks = $(data[$currentItem]);
				$container.append($moreBlocks);
				$container.imagesLoaded( function() {
					$container.masonry('appended', $moreBlocks);
					$loadMore.text('Show More News');
				}); 			                                    
			}, "json");

			$viewLoad = true;
			$currentItem++;

		}else{
			if ( $currentItem < $items){
				$moreBlocks = $(_data[$currentItem]);
				$container.append($moreBlocks);
				$container.imagesLoaded( function() {
					$container.masonry('appended', $moreBlocks);
					$loadMore.text('Show More News');
				});
				$currentItem++;

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
	
	$(".video-widget").fitVids();
	$(".media-content").fitVids();
	$(".content").fitVids();

	/*-----------------------------------------------------------------------------------*/
	/*	Fix YouTube z-index bug
	/*-----------------------------------------------------------------------------------*/

	$('iframe').each(function() {
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });
	
	/*-----------------------------------------------------------------------------------*/
	/*	Boostrap Swipe
	/*-----------------------------------------------------------------------------------*/

	$("#slider").swiperight(function() {
		$("#slider").carousel('prev');
	});
	$("#slider").swipeleft(function() {
		$("#slider").carousel('next');
	});
	
	$("#featured").swiperight(function() {
		$("#featured").carousel('prev');
	});
	$("#featured").swipeleft(function() {
		$("#featured").carousel('next');
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Preloader
	/*-----------------------------------------------------------------------------------*/
	
	$("body").queryLoader2({
        barColor: "#222222",
        backgroundColor: "#ffffff",
        percentage: true,
        barHeight: 3,
        completeAnimation: "fade",
        minimumTime: 200
    });
	
	/*-----------------------------------------------------------------------------------*/
	/*	Show dropdown on hover
	/*-----------------------------------------------------------------------------------*/
	
	(function ($, window, delay) {
		var theTimer = 0,
			theElement = null,
			theLastPosition = {x:0,y:0},
			$window = $(window);

	  	$('[data-toggle]').closest('li').on('mouseenter', function (inEvent) {	  		
			if (theElement) theElement.removeClass('open');
			window.clearTimeout(theTimer);
			theElement = $(this);
			theTimer = window.setTimeout(function () {
		  		//theElement.addClass('open');
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
			  	//theElement.addClass('open');
		  		if ($window.width() > 768) {
		  			theElement.addClass('open');
		  		}
			}, delay);
		})
		.on('mouseleave', function (inEvent) {			
			window.clearTimeout(theTimer);
			theElement = $(this);
			theTimer = window.setTimeout(function () {
			  //theElement.removeClass('open');
		  		if ($window.width() > 768) {
		  			theElement.removeClass('open');
		  		}

			}, delay);
	  	});
	})(jQuery, window, 200); // 200 is the delay in milliseconds
	
	/*-----------------------------------------------------------------------------------*/
	/*	Toggle
	/*-----------------------------------------------------------------------------------*/
	
	$(".navbar-toggle").click(function() {
		var position = $(".navbar-collapse").css('left'),
			menu = $(".navbar-collapse"),
			container = $( ".main-content" );

		if( position != "15px"){
			container.animate({left: "200px"}, "fast");		  
		 	menu.animate({left: "15px"}, "fast");
			$(".navbar").animate({left: "200px"}, "fast");
			$("body").css("overflow-y","hidden");
		}else{
			container.animate({left: "0px"}, "fast");		  
		 	menu.animate({left: "-200px"}, "fast");
			$(".navbar").animate({left: "0px"}, "fast");
			$( "body" ).css("overflow-y","auto");	
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
           		return $html.addClass('nav-stacked');           		
        	}else{
				$html.removeClass('nav-stacked');
				
				$( ".main-content" ).animate({
					left: "0",
				}, "fast" );
			  
				$( ".navbar-collapse" ).animate({
					left: "-200px",
				}, "fast" );
        	}        
    	}).trigger('resize');
	})(jQuery);

});