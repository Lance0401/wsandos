jQuery(document).ready(function($) {
	$(".product .item").hover(function() {
		$(this).animate({
			top: '-3px'
		}, "fast");
	}, function() {
		$(this).animate({
			top: '0px'
		}, "fast");
	});

	$(function() {
		// $(".gototop").gototop();
		$(".gototop").gototop({
			position: 0,
			duration: 1250,
			visibleAt: 300,
			classname: "isvisible"
		});
	});
	

});