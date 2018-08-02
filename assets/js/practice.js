$(".right-arrow").click(function(){
  var images = jQuery(".preview-image");

  for (var i=0; i < images.length; i++) {
    var image = $(images[i]);
    var nextimage = $(images[i + 1]);
                
    if (image.attr("src") === $("#main-preview").attr("src")) {
      if ((images.length - 1) === i) {
        $(images[0]).click();
        } else {
          nextimage.click();
        }
        break;
    }
  }
});

//This is to switch out entire content area
var $filters = $('#byProduct, #byLook').hide();
$('#byProduct').show();
$('.switchFilters').click(function() {
  var href = $(this).attr('href');
    console.log(href);
  $filters.hide();
    console.log(href);
  $(href).show();
})

 /* <div class="swiper-container">
<div class="swiper-wrapper">
 <div class="swiper-slide">enjoy <a>free shipping</a> on orders over $50</div>
   <div class="swiper-slide"> TGR apparel delivered every other month <a>find out more</a></div>
   <div class="swiper-slide">enjoy <a>free shipping</a> on orders over $50</div>
          <div class="swiper-slide"> TGR apparel delivered every other month <a>find out more</a></div>
       </div>  
  </div>*/

  //Next Up: On click switch out preview body content to what I want - may 
  //end up adding to previously placed javascript or creating new 
  //not sure yet but am bound to find out 