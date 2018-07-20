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