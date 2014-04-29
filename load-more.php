<?php

  $post_a = 
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
. '</div>'; 

  $post_b = 
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
  . '</div>';

  $array = array();
  for ($x = 1; $x <= 5; $x++){

    if($x%2==0){
      $array[] = $post_a;
    }else{
      $array[] = $post_b;
    }
  }


  //Respuesta en Formato JSON  
  //$returnArray = Array('post' => $post_1);
  $returnArray = $array;
  print json_encode($returnArray);

?>