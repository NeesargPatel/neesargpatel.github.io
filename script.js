function init() {
	
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 100;
		shrinkOn2 = 100;
		
        if (distanceY > shrinkOn) {
            $("#name").addClass("shrink-name-header");
			$("#subtitle").addClass("shrink-subtitle");
			$("#my-name").addClass("shrink-my-name");
			//$("#about-me").addClass("extra-padding");

			
			//console.log("sticking");
        } else if (distanceY < shrinkOn - 7) {
			//console.log("unsticking");
            if ($("#name").hasClass("shrink-name-header")) {
				$("#name").removeClass("shrink-name-header");
            }
			if ($("#subtitle").hasClass("shrink-subtitle")) {
				$("#subtitle").removeClass("shrink-subtitle");
            }
			if ($("#my-name").hasClass("shrink-my-name")) {
				$("#my-name").removeClass("shrink-my-name");
            }
			//if ($("#about-me").hasClass("extra-padding")) {
			//	$("#about-me").removeClass("extra-padding");
            //}

        }
		if (distanceY > shrinkOn2) {
			$("#profile-picture").addClass("smaller");
			
		} else if (distanceY < shrinkOn2 - 7) {
			if ($("#profile-picture").hasClass("smaller")) {
				$("#profile-picture").removeClass("smaller");
            }
		}
    });
}
window.onload = init();
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $(id).offset().top - 120;
    if (id == "#about-me") {
		pos = 105;
	}
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});