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
	console.log('resized')
		$('.masonry').masonry('bindResize');
	});

	$( "#load-more" ).click(function() {
	var $loadMore = $(this);
	$loadMore.text('Loading...');
		$.get('load-more.html', function( data ) {
			var $moreBlocks = $(data).filter('div.box');
			var $container = $("#primary");
			$container.append($moreBlocks);
			$container.imagesLoaded( function() {
				$container.masonry('appended', $moreBlocks);
				$loadMore.text('Show More News');
			}); 
			                                    
		});         
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

});