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

           $(".gallery-image").click(function(){
              var source = $(this).attr("src");
              $("#main-gallery-image").attr('src', source);
              $(".gallery-image").removeClass("gallery-image-highlight"); 
              $(this).addClass( "gallery-image-highlight");
      });

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
  $(document).ready(function(){  /* DOM ready callback */

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
//Toggle Filter Section in Headwear page
    $('.product').click(function(){
      $(this).toggleClass('clicked');
      $('.look').toggleClass('unclicked');
    });
    $('.look').click(function(){
      $(this).toggleClass('unclicked');
      $('.product').toggleClass('clicked');
    });
//Choose Hat Selection ????WHY THE F ARENT YOU WORKING
  $('.caps').click(function(){
    $(this).data('no-hat-opacity',true)
  });
  if ($('.caps').data('no-hat-opacity')) {
    $(this).toggleClass('no-hat-opacity')
  } else {
    $(this).toggleClass('no-hat-opacity')
    $('.winter-hats').toggleClass('hat-opacity')
    $('hat-gear').toggleClass('hat-opacity')
  }
  $('.winter-hats').click(function(){
    $(this).data('no-hat-opacity',true)
  });
  if ($('.winter-hats').data('no-hat-opacity')){
    $(this).toggleClass('no-hat-opacity')
  } else {
    $(this).toggleClass('no-hat-opacity')
    $('.caps').toggleClass('hat-opacity')
    $('hat-gear').toggleClass('hat-opacity')
  }
