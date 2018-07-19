//this is code pulled from internet to function the incrementation
$(".preview-remove").on("click", function() {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "+") {
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

//some opacity work
$(document).ready(function() {
	$(".preview-box").click(function() {
		var source = $(this).attr("src");
		$(".hat-details").attr('src', source);
		$(".preview-box").addClass("hat-opacity");
		$(this).removeClass("hat-opacity");
	});
});


//next up: on click --> display the section ive chosen from top gallery boxes