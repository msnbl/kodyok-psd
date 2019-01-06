$(document).ready(function() {
	$("li.dede").click(function() {
		$(".afterclick").toggle(400);
	});
	$(".nav-hidden").click(function() {
		$(".wrapper ul").slideToggle(300);
		$(".TextBlock").css('marginTop', '150px');
	
});
});