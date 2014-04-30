<?php

  $posts = array(
    
	'<div class="col-md-6 col-sm-6 box padding">'
	. '<div class="header">'  
	  . '<h2><a href="#">10 most improved teams after NHL trade deadline</a></h2>'    
	  . '<p class="date">March 7, 2014<span>&nbsp;/&nbsp;</span><a href="#">No Comments</a></p>'    
	. '</div>'  
	. '<div class="image category4">'  
	  . '<h3 class="category-badge"><a href="#">Sports</a></h3>'    
	  . '<a href="#"><img class="img-responsive" src="images/posts/post5.jpg" alt="Content Post" /></a>'    
	. '</div>'  
	. '<p class="excerpt">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id ultricies ut vehicula ut id. Integer posuere erat a venenatis dapibus posuere velit aliquet duis...</p>'
	. '</div>',
	
	'<div class="col-md-6 col-sm-6 box padding">'
	  . '<div class="header">'  
		. '<h2><a href="#">Obama: Russian intervention completely illegitimate</a></h2>'    
		. '<p class="date">March 7, 2014<span>&nbsp;/&nbsp;</span><a href="#">No Comments</a></p>'    
	  . '</div>'  
	  . '<div class="image category5">'  
		. '<h3 class="category-badge"><a href="#">Politics</a></h3>'    
		. '<a href="#"><img class="img-responsive" src="images/posts/post6.jpg" alt="Content Post" /></a>'  
	  . '</div>'  
	  . '<p class="excerpt">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id ultricies ut vehicula ut id. Integer posuere erat a venenatis dapibus posuere velit aliquet duis...</p>'
	. '</div>',
	
	'<div class="col-md-6 col-sm-6 box padding">'
	. '<div class="header">'  
	  . '<h2><a href="#">Walmart enters the auto insurance business</a></h2>'    
	  . '<p class="date">March 7, 2014<span>&nbsp;/&nbsp;</span><a href="#">No Comments</a></p>'    
	. '</div>'  
	. '<div class="image category2">'  
	  . '<h3 class="category-badge"><a href="#">Money</a></h3>'   
	  . '<div class="format"><span class="fa fa-picture-o"></span></div>' 
	  . '<a href="#"><img class="img-responsive" src="images/posts/post7.jpg" alt="Content Post" /></a>'    
	. '</div>'  
	. '<p class="excerpt">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id ultricies ut vehicula ut id. Integer posuere erat a venenatis dapibus posuere velit aliquet duis...</p>'
	. '</div>',
	
	'<div class="col-md-6 col-sm-6 box padding">'
	  . '<div class="header">'  
		. '<h2><a href="#">Tablets and the future of education</a></h2>'    
		. '<p class="date">March 7, 2014<span>&nbsp;/&nbsp;</span><a href="#">No Comments</a></p>'    
	  . '</div>'  
	  . '<div class="image category3">'  
		. '<h3 class="category-badge"><a href="#">Tech</a></h3>'    
		. '<a href="#"><img class="img-responsive" src="images/posts/post8.jpg" alt="Content Post" /></a>'  
	  . '</div>'  
	  . '<p class="excerpt">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id ultricies ut vehicula ut id. Integer posuere erat a venenatis dapibus posuere velit aliquet duis...</p>'
	. '</div>'
	
  );

  $array = array();
  for ($x = 0; $x < count($posts); $x++){
    $array[$x] = $posts[$x];
  }

  $returnArray = $array;
  print json_encode($returnArray);

?>