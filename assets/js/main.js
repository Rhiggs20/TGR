$(document).ready(function(){
        
      $('.title img').addClass('visible');

    /* var swiper = new Swiper('.swiper-container', {
          slidesPerView: 2.8,
            spaceBetween: 6,
            freeMode: true,
            loop: true,
            loopedSlides: 10000,
            speed: 5000,
            simulateTouch: false,
            autoplay: {
          delay: 1,
          },
            pagination: {
            el: '.swiper-pagination',
              clickable: true,
          },
        });*/
//Gallery opacity 
  $(".gallery-image").click(function(){
    var source = $(this).attr("src");
    $("#main-gallery-image").attr('src', source);
    $(".gallery-image").removeClass("gallery-image-highlight"); 
    $(this).addClass( "gallery-image-highlight");
  });
//Gallery switch out content
          $(".gallery-arrow").click(function(){
              var images = jQuery(".gallery-image");

              for (var i=0; i < images.length; i++) {
                var image = $(images[i]);
                var nextimage = $(images[i + 1]);
                
                if (image.attr("src") === $("#main-gallery-image").attr("src")) {
                  if ((images.length - 1) === i) {
                    $(images[0]).click();
                  } else {
                    nextimage.click();
                  }
                  break;
                }
              }
           });

           $(".gallery-arrow-left").click(function(){
              var images = jQuery(".gallery-image");

              for (var i=0; i < images.length; i++) {
                var image = $(images[i]);
                var nextimage = $(images[i - 1]);
                
                if (image.attr("src") === $("#main-gallery-image").attr("src")) {
                  if ((images.length - 4) === i) {
                    $(images[3]).click();
                  } else {
                    nextimage.click();
                  }
                  break;
                }
              }
            });

           $(".black").click(function() {
              var images = jQuery(".gallery-image");
                $(images[0]).click(); 
           });

           $(".red").click(function() {
              var images = jQuery(".gallery-image");
                $(images[1]).click();
           });

           $(".blue").click(function() {
              var images = jQuery(".gallery-image");
                $(images[2]).click(); 
           });
        });
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

// Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  $(document).ready(function(x){  /* DOM ready callback */

  });

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 5,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//Change # of swiper slides at screen width
$(window).resize(function(){
  var ww = $(window).width()
  if (ww>1280) swiper.params.slidesPerView = 4;
  if (ww>800 && ww<=1280) swiper.params.slidesPerView = 3;
  if (ww>800 && ww<=1280) swiper.params.slidesPerGroup = 3;
  if (ww>640 && ww<=960) swiper.params.slidesPerView = 2;
  if (ww> 640 && ww<=960) swiper.params.slidesPerGroup = 2;
  if (ww<=640) swiper.params.slidesPerView = 1;
  if (ww<=640) swiper.params.slidesPerGroup = 1;
})
$(window).trigger('resize')
// GALLERY PREVIEW //

//Choose Hat Selection 
$(document).ready(function(){ 
  $(".filter-hat").click(function() {
    var source = $(this).attr("src");
    $(".filter-hat").addClass("hat-opacity");
    $(this).removeClass("hat-opacity");
  });
});
//Toggle Product/Look slider
$(document).ready(function() {
  $(".format-toggle-product").click(function() {
    $('.product').toggleClass('clicked');
    $('.look').toggleClass('unclicked');
  });
  $(".format-toggle-look").click(function() {
    $('.look').toggleClass('unclicked');
    $('.product').toggleClass('clicked');
  });
});
//Opacity on gallery boxes
$(document).ready(function() {
  $(".preview-box").click(function() {
    var source = $(this).attr("src");
    $(".preview-box").addClass("opacity");
    $(this).removeClass("opacity");
  });
});
//Quantity Incrementation and Decrementation
$(".preview-remove").on("click", function() {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "add") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find("input").val(newVal);
});
//My New & Improved Dropdown
function myThing() {
  document.getElementById("mydP").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dP-btn')) {
    var dropdowns = document.getElementsByClassName("dP-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//Switch out main content area in Filter area 
var $filters = $('#byProduct, #byLook').hide();
$('#byProduct').show();
$('.switchFilters').click(function() {
  var href = $(this).attr('href');
  $filters.hide();
  $(href).show();
});
