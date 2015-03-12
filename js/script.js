/* Smooth scrolling action */
$(document).ready(function() {
	$(".js-next-section").click(function(e) {
		e.preventDefault();

		var dest = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(dest).offset().top
		}, 500);
	});
});

