/* Style Changer */

jQuery(document).ready(function(){
	jQuery('#stlChanger input#numeric-spinner').spinner({
		min:0, 
		max:1, 
		step:0.05
	}).change(function(){
		jQuery('#page').css({background:'rgba(0, 0, 0, ' + jQuery('#stlChanger input#numeric-spinner').spinner('value') + ')'});
	});;
	
	jQuery('#stlChanger #bgColor').parent('a').ColorPicker({
		onChange:function(hsb, hex, rgb){
			jQuery('#stlChanger').find('#bgColor').css({backgroundColor:'#' + hex});
			jQuery('body').css({backgroundColor:'#' + hex});
		},
		onSubmit:function(hsb, hex, rgb, el){
			jQuery('#stlChanger .stCols span').removeClass('current');
			jQuery(el).find('#bgColor').css({backgroundColor:'#' + hex});
			jQuery(el).ColorPickerHide();
		}
	});
		
	jQuery('#stlChanger .stCols span').click(function(){
		var bgCol = jQuery(this).css('background-color');
		jQuery('#stlChanger .stCols span').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#stlChanger #bgColor').css({backgroundColor:bgCol});
		jQuery('body').css({backgroundColor:bgCol});
	});

	jQuery('#stlChanger .stBgs a').click(function(){
		var bgBgCol = jQuery(this).attr('href');
		
		jQuery('#stlChanger .stBgs a').removeClass('current');
		jQuery(this).addClass('current');
		
		jQuery('body').css({backgroundImage:'url(' + bgBgCol + ')'});
		
		if (jQuery(this).hasClass('bg_t')){
			jQuery('body').css({backgroundRepeat:'repeat', backgroundPosition:'0 0', backgroundAttachment:'scroll'});
		} else {
			jQuery('body').css({backgroundRepeat:'no-repeat', backgroundPosition:'50% 0', backgroundAttachment:'fixed'});
		}
		
		return false;
	});
	
	jQuery('#stlChanger a#black').click(function(){
		jQuery('#stlChanger a#white').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#middle').removeClass('white_ver');
		if (jQuery('#stlChanger #cFontColor1').css('background-color') == '#d83f35' || jQuery('#stlChanger #cFontColor1').css('background-color') == 'rgb(216, 63, 53)'){
			jQuery('#stlChanger #cFontColor1').css('background-color', '#e6e1a8');
			jQuery('#cFontStyleColor1').text('#middle a, #middle .entry h2, #middle .entry h3, #middle .entry h4, #middle .entry h5, #middle .entry h6, #middle .post h2, #middle .product h2 a, #middle .map ul li a, #middle .error h1, #middle .error_block h4, #middle a.yellow:hover, #middle span.yellow, #middle a.comment_left.yellow:hover, #middle .post a.comment_left:hover, #middle .dotted_line a.comment_left:hover, #middle .widget a.comment_left:hover, #middle .p_options_block a, #middle h2.posttitle a, #middle h4.posttitle a, #middle .widget_links a:hover, #middle ul.tabs a, #middle .accordion .tog, #middle .togg .tog, #middle .quotation, #middle table.table a, #middle ul.tour li, #middle.white_ver small, #middle.white_ver a, #middle.white_ver .entry h2, #middle.white_ver .entry h3, #middle.white_ver .entry h4, #middle.white_ver .entry h5, #middle.white_ver .entry h6, #middle.white_ver .product h2 a, #middle.white_ver .quotation, #middle.white_ver .map ul li a, #middle.white_ver .error h1, #middle.white_ver .error_block h4, #middle.white_ver a.yellow:hover, #middle.white_ver span.yellow, #middle.white_ver a.comment_left.yellow:hover, #middle.white_ver a.comment_left:hover, #middle.white_ver .widget a.comment_left:hover, #middle.white_ver .p_options_block a, #middle.white_ver ul.p_filter li.current a, #middle.white_ver ul.p_filter li a:hover, #middle.white_ver .widget_links a:hover, #middle.white_ver table.table a {color:#e6e1a8;} .widget_links li a:hover, #middle.white_ver .widget_links li a:hover {background-color:#e6e1a8;}');
		}
		if (jQuery('#stlChanger #cFontColor2').css('background-color') == '#191919' || jQuery('#stlChanger #cFontColor2').css('background-color') == 'rgb(25, 25, 25)'){
			jQuery('#stlChanger #cFontColor2').css('background-color', '#fefefe');
			jQuery('#cFontStyleColor2').text('#middle h1, #middle h2, #middle h3, #middle h4, #middle h5, #middle h6, #middle h1.headline, #middle h1.headline2, #middle .product h2 a, #middle h3.headwhite, #middle .entry .center_text, #middle.white_ver h1.headline, #middle.white_ver h1.headline2, #middle.white_ver h1, #middle.white_ver h2, #middle.white_ver h3, #middle.white_ver h4, #middle.white_ver h5, #middle.white_ver h6, #middle.white_ver .sidebar_bg #sidebar .widget h3.widgettitle, #middle.white_ver .entry .center_text, #middle.white_ver .middle_content_sidebar h3.widgettitle {color:#fefefe;}');
		}
		if (jQuery('#stlChanger #cFontColor3').css('background-color') == '#191919' || jQuery('#stlChanger #cFontColor3').css('background-color') == 'rgb(25, 25, 25)'){
			jQuery('#stlChanger #cFontColor3').css('background-color', '#fefefe');
			jQuery('#cFontStyleColor3').text('#middle, #middle a.comment_left, #middle code, #middle input[type="text"], #middle textarea, #middle table.table, #middle table.table thead, #middle ul.tabs a.current, #middle .togg .tog.current, #middle .accordion .tog.current, #middle.white_ver, #middle.white_ver code, #middle.white_ver textarea, #middle.white_ver input[type="text"], #middle.white_ver .error_block .search input[type="text"], #middle.white_ver .not_sel_post, #middle.white_ver table.table thead, #middle.white_ver ul.tabs a, #middle.white_ver .accordion .tog, #middle.white_ver .togg .tog, #middle.white_ver .accordion .tog.current, #middle.white_ver .togg .tog.current, #middle.white_ver table.table {color:#fefefe;}');
		}
		return false;
	});
	jQuery('#stlChanger a#white').click(function(){
		jQuery('#stlChanger a#black').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#middle').addClass('white_ver');
		if (jQuery('#stlChanger #cFontColor1').css('background-color') == '#e6e1a8' || jQuery('#stlChanger #cFontColor1').css('background-color') == 'rgb(230, 225, 168)'){
			jQuery('#stlChanger #cFontColor1').css('background-color', '#d83f35');
			jQuery('#cFontStyleColor1').text('#middle a, #middle .entry h2, #middle .entry h3, #middle .entry h4, #middle .entry h5, #middle .entry h6, #middle .post h2, #middle .product h2 a, #middle .map ul li a, #middle .error h1, #middle .error_block h4, #middle a.yellow:hover, #middle span.yellow, #middle a.comment_left.yellow:hover, #middle .post a.comment_left:hover, #middle .dotted_line a.comment_left:hover, #middle .widget a.comment_left:hover, #middle .p_options_block a, #middle h2.posttitle a, #middle h4.posttitle a, #middle .widget_links a:hover, #middle ul.tabs a, #middle .accordion .tog, #middle .togg .tog, #middle .quotation, #middle table.table a, #middle ul.tour li, #middle.white_ver small, #middle.white_ver a, #middle.white_ver .entry h2, #middle.white_ver .entry h3, #middle.white_ver .entry h4, #middle.white_ver .entry h5, #middle.white_ver .entry h6, #middle.white_ver .product h2 a, #middle.white_ver .quotation, #middle.white_ver .map ul li a, #middle.white_ver .error h1, #middle.white_ver .error_block h4, #middle.white_ver a.yellow:hover, #middle.white_ver span.yellow, #middle.white_ver a.comment_left.yellow:hover, #middle.white_ver a.comment_left:hover, #middle.white_ver .widget a.comment_left:hover, #middle.white_ver .p_options_block a, #middle.white_ver ul.p_filter li.current a, #middle.white_ver ul.p_filter li a:hover, #middle.white_ver .widget_links a:hover, #middle.white_ver table.table a {color:#d83f35;} .widget_links li a:hover, #middle.white_ver .widget_links li a:hover {background-color:#d83f35;}');
		}
		if (jQuery('#stlChanger #cFontColor2').css('background-color') == '#fefefe' || jQuery('#stlChanger #cFontColor2').css('background-color') == 'rgb(254, 254, 254)'){
			jQuery('#stlChanger #cFontColor2').css('background-color', '#191919');
			jQuery('#cFontStyleColor2').text('#middle h1, #middle h2, #middle h3, #middle h4, #middle h5, #middle h6, #middle h1.headline, #middle h1.headline2, #middle .product h2 a, #middle h3.headwhite, #middle .entry .center_text, #middle.white_ver h1.headline, #middle.white_ver h1.headline2, #middle.white_ver h1, #middle.white_ver h2, #middle.white_ver h3, #middle.white_ver h4, #middle.white_ver h5, #middle.white_ver h6, #middle.white_ver .sidebar_bg #sidebar .widget h3.widgettitle, #middle.white_ver .entry .center_text, #middle.white_ver .middle_content_sidebar h3.widgettitle {color:#191919;}');
		}
		if (jQuery('#stlChanger #cFontColor3').css('background-color') == '#fefefe' || jQuery('#stlChanger #cFontColor3').css('background-color') == 'rgb(254, 254, 254)'){
			jQuery('#stlChanger #cFontColor3').css('background-color', '#191919');
			jQuery('#cFontStyleColor3').text('#middle, #middle a.comment_left, #middle code, #middle input[type="text"], #middle textarea, #middle table.table, #middle table.table thead, #middle ul.tabs a.current, #middle .togg .tog.current, #middle .accordion .tog.current, #middle.white_ver, #middle.white_ver code, #middle.white_ver textarea, #middle.white_ver input[type="text"], #middle.white_ver .error_block .search input[type="text"], #middle.white_ver .not_sel_post, #middle.white_ver table.table thead, #middle.white_ver ul.tabs a, #middle.white_ver .accordion .tog, #middle.white_ver .togg .tog, #middle.white_ver .accordion .tog.current, #middle.white_ver .togg .tog.current, #middle.white_ver table.table {color:#191919;}');
		}
		return false;
	});
	
	jQuery('#stlChanger a#one').click(function(){
		jQuery('#stlChanger a#two').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#header').removeClass('alternative');
		return false;
	});
	jQuery('#stlChanger a#two').click(function(){
		jQuery('#stlChanger a#one').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#header').addClass('alternative');
		return false;
	});
	
	jQuery('#gFont').change(function(){
		var gFontVal = $("#gFont option:selected").val();
		var gFontName = $("#gFont option:selected").text();
		jQuery('link#gFontName').attr({href:'http://fonts.googleapis.com/css?family=' + gFontVal + ':rerular,italic,bold,bolditalic'});
		jQuery('style#gFontStyles').text('h1, h2, h3, h4, h5, h6, .quotation, .dropcap, .but_large_trans, .but_medium_trans, .but_large_white, .but_medium_white { font-family:"' + gFontName + '", "Trebuchet MS", Arial, "Helvetica CY", "Nimbus Sans L", sans-serif; }');
	});
	
	jQuery('#cFont').change(function(){
		var cFontVal = $("#cFont option:selected").val();
		jQuery('style#cFontStyles').text('body, code, input[type="text"], textarea { font-family:' + cFontVal + '; }');
	});
	
	jQuery('#stlChanger #cFontColor1').parent('a').ColorPicker({
		onChange:function(hsb, hex, rgb){
			jQuery('#stlChanger').find('#cFontColor1').css({backgroundColor:'#' + hex});
			jQuery('#cFontStyleColor1').text('#middle a, #middle .entry h2, #middle .entry h3, #middle .entry h4, #middle .entry h5, #middle .entry h6, #middle .post h2, #middle .product h2 a, #middle .map ul li a, #middle .error h1, #middle .error_block h4, #middle a.yellow:hover, #middle span.yellow, #middle a.comment_left.yellow:hover, #middle .post a.comment_left:hover, #middle .dotted_line a.comment_left:hover, #middle .widget a.comment_left:hover, #middle .p_options_block a, #middle h2.posttitle a, #middle h4.posttitle a, #middle .widget_links a:hover, #middle ul.tabs a, #middle .accordion .tog, #middle .togg .tog, #middle .quotation, #middle table.table a, #middle ul.tour li, #middle.white_ver small, #middle.white_ver a, #middle.white_ver .entry h2, #middle.white_ver .entry h3, #middle.white_ver .entry h4, #middle.white_ver .entry h5, #middle.white_ver .entry h6, #middle.white_ver .product h2 a, #middle.white_ver .quotation, #middle.white_ver .map ul li a, #middle.white_ver .error h1, #middle.white_ver .error_block h4, #middle.white_ver a.yellow:hover, #middle.white_ver span.yellow, #middle.white_ver a.comment_left.yellow:hover, #middle.white_ver a.comment_left:hover, #middle.white_ver .widget a.comment_left:hover, #middle.white_ver .p_options_block a, #middle.white_ver ul.p_filter li.current a, #middle.white_ver ul.p_filter li a:hover, #middle.white_ver .widget_links a:hover, #middle.white_ver table.table a {color:#' + hex + '} .widget_links li a:hover, #middle.white_ver .widget_links li a:hover {background-color:#' + hex + ';}');
		},
		onSubmit:function(hsb, hex, rgb, el){
			jQuery('#cFontStyleColor1').text('#middle a, #middle .entry h2, #middle .entry h3, #middle .entry h4, #middle .entry h5, #middle .entry h6, #middle .post h2, #middle .product h2 a, #middle .map ul li a, #middle .error h1, #middle .error_block h4, #middle a.yellow:hover, #middle span.yellow, #middle a.comment_left.yellow:hover, #middle .post a.comment_left:hover, #middle .dotted_line a.comment_left:hover, #middle .widget a.comment_left:hover, #middle .p_options_block a, #middle h2.posttitle a, #middle h4.posttitle a, #middle .widget_links a:hover, #middle ul.tabs a, #middle .accordion .tog, #middle .togg .tog, #middle .quotation, #middle table.table a, #middle ul.tour li, #middle.white_ver small, #middle.white_ver a, #middle.white_ver .entry h2, #middle.white_ver .entry h3, #middle.white_ver .entry h4, #middle.white_ver .entry h5, #middle.white_ver .entry h6, #middle.white_ver .product h2 a, #middle.white_ver .quotation, #middle.white_ver .map ul li a, #middle.white_ver .error h1, #middle.white_ver .error_block h4, #middle.white_ver a.yellow:hover, #middle.white_ver span.yellow, #middle.white_ver a.comment_left.yellow:hover, #middle.white_ver a.comment_left:hover, #middle.white_ver .widget a.comment_left:hover, #middle.white_ver .p_options_block a, #middle.white_ver ul.p_filter li.current a, #middle.white_ver ul.p_filter li a:hover, #middle.white_ver .widget_links a:hover, #middle.white_ver table.table a {color:#' + hex + '} .widget_links li a:hover, #middle.white_ver .widget_links li a:hover {background-color:#' + hex + ';}');
			jQuery(el).find('#cFontColor1').css({backgroundColor:'#' + hex});
			jQuery(el).ColorPickerHide();
		}
	});
	
	jQuery('#stlChanger #cFontColor2').parent('a').ColorPicker({
		onChange:function(hsb, hex, rgb){
			jQuery('#stlChanger').find('#cFontColor2').css({backgroundColor:'#' + hex});
			jQuery('#cFontStyleColor2').text('#middle h1, #middle h2, #middle h3, #middle h4, #middle h5, #middle h6, #middle h1.headline, #middle h1.headline2, #middle .product h2 a, #middle h3.headwhite, #middle .entry .center_text, #middle.white_ver h1.headline, #middle.white_ver h1.headline2, #middle.white_ver h1, #middle.white_ver h2, #middle.white_ver h3, #middle.white_ver h4, #middle.white_ver h5, #middle.white_ver h6, #middle.white_ver .sidebar_bg #sidebar .widget h3.widgettitle, #middle.white_ver .entry .center_text, #middle.white_ver .middle_content_sidebar h3.widgettitle {color:#' + hex + ';}');
		},
		onSubmit:function(hsb, hex, rgb, el){
			jQuery('#cFontStyleColor2').text('#middle h1, #middle h2, #middle h3, #middle h4, #middle h5, #middle h6, #middle h1.headline, #middle h1.headline2, #middle .product h2 a, #middle h3.headwhite, #middle .entry .center_text, #middle.white_ver h1.headline, #middle.white_ver h1.headline2, #middle.white_ver h1, #middle.white_ver h2, #middle.white_ver h3, #middle.white_ver h4, #middle.white_ver h5, #middle.white_ver h6, #middle.white_ver .sidebar_bg #sidebar .widget h3.widgettitle, #middle.white_ver .entry .center_text, #middle.white_ver .middle_content_sidebar h3.widgettitle {color:#' + hex + ';}');
			jQuery(el).find('#cFontColor2').css({backgroundColor:'#' + hex});
			jQuery(el).ColorPickerHide();
		}
	});
	
	jQuery('#stlChanger #cFontColor3').parent('a').ColorPicker({
		onChange:function(hsb, hex, rgb){
			jQuery('#stlChanger').find('#cFontColor3').css({backgroundColor:'#' + hex});
			jQuery('#cFontStyleColor3').text('#middle, #middle a.comment_left, #middle code, #middle input[type="text"], #middle textarea, #middle table.table, #middle table.table thead, #middle ul.tabs a.current, #middle .togg .tog.current, #middle .accordion .tog.current, #middle.white_ver, #middle.white_ver code, #middle.white_ver textarea, #middle.white_ver input[type="text"], #middle.white_ver .error_block .search input[type="text"], #middle.white_ver .not_sel_post, #middle.white_ver table.table thead, #middle.white_ver ul.tabs a, #middle.white_ver .accordion .tog, #middle.white_ver .togg .tog, #middle.white_ver .accordion .tog.current, #middle.white_ver .togg .tog.current, #middle.white_ver table.table {color:#' + hex + ';}');
		},
		onSubmit:function(hsb, hex, rgb, el){
			jQuery('#cFontStyleColor3').text('#middle, #middle a.comment_left, #middle code, #middle input[type="text"], #middle textarea, #middle table.table, #middle table.table thead, #middle ul.tabs a.current, #middle .togg .tog.current, #middle .accordion .tog.current, #middle.white_ver, #middle.white_ver code, #middle.white_ver textarea, #middle.white_ver input[type="text"], #middle.white_ver .error_block .search input[type="text"], #middle.white_ver .not_sel_post, #middle.white_ver table.table thead, #middle.white_ver ul.tabs a, #middle.white_ver .accordion .tog, #middle.white_ver .togg .tog, #middle.white_ver .accordion .tog.current, #middle.white_ver .togg .tog.current, #middle.white_ver table.table {color:#' + hex + ';}');
			jQuery(el).find('#cFontColor3').css({backgroundColor:'#' + hex});
			jQuery(el).ColorPickerHide();
		}
	});
	
	jQuery('#styleSave').click(function(){
		jQuery('#styleLoader').fadeIn(1000, function(){
			var $bgColor = jQuery('#stlChanger #bgColor').css('background-color');
			var $bgOverlay = jQuery('#stlChanger #numeric-spinner').val();
			var $bgImage = jQuery('#stlChanger .stBgs a.current').attr('href');
			var $bgImageClass = jQuery('#stlChanger .stBgs a.current').attr('class');
			var $bodyColor = jQuery('#stlChanger .buts.middleBg a.current').attr('id');
			var $headerStyle = jQuery('#stlChanger .buts.headerType a.current').attr('id');
			var $headingFont = jQuery('#stlChanger #gFont option:selected').val();
			var $contentFont = jQuery('#stlChanger #cFont option:selected').val();
			var $headingColor = jQuery('#stlChanger #cFontColor1').css('background-color');
			var $headingContentColor = jQuery('#stlChanger #cFontColor2').css('background-color');
			var $contentColor = jQuery('#stlChanger #cFontColor3').css('background-color');
			
			jQuery.post('styleChanger/changer.php', 
			{bgColor: $bgColor, bgOverlay: $bgOverlay, bgImage: $bgImage, bgImageClass: $bgImageClass, bodyColor: $bodyColor, headerStyle: $headerStyle, headingFont: $headingFont, contentFont: $contentFont, headingColor: $headingColor, headingContentColor: $headingContentColor, contentColor: $contentColor}, 
			function(data){
				jQuery('#styleLoader').fadeOut(1000);
				window.location.reload();
			});
		});
		return false;
	});
	
	jQuery('#styleReset').click(function(){
		jQuery('#styleLoader').fadeIn(1000, function(){
			var $remove = jQuery('#styleReset').attr('id');
			jQuery.post('styleChanger/changer.php', 
			{remove: $remove}, 
			function(data){
				jQuery('#styleLoader').fadeOut(1000);
				window.location.reload();
			});
		});
		return false;
	});
	
	jQuery('.chBut').click(function(){
		if (jQuery(this).hasClass('closed')){
			jQuery('#stlChanger').css({width:'155px'});
			jQuery(this).next('.chBody').css({display:'block'}).parent().animate({left:0}, 500, function(){
				jQuery(this).find('.chBut').removeClass('closed');
			});
		} else {
			jQuery(this).parent().animate({left:'-120px'}, 500, function(){
				jQuery(this).find('.chBut').next('.chBody').css({display:'none'});
				jQuery(this).find('.chBut').addClass('closed');
				jQuery('#stlChanger').css({width:'35px'});
			});
		}
		return false;
	});
	
	jQuery('.chBut').parent().delay(1000).animate({left:'-120px'}, 500, function(){
		jQuery(this).find('.chBut').next('.chBody').css({display:'none'});
		jQuery(this).find('.chBut').addClass('closed');
		jQuery('#stlChanger').css({width:'35px'});
	});
});