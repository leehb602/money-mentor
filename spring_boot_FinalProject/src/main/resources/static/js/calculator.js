/**
 * calculator.js
 */
 
 $(document).ready(function() {
	$('.menu').hide();
	$('.salaryTab').css('color','blue');
	$('.salary').show();
	$btn = $('.tabBtn');

	var menu = ["salary", "deposit", "saving", "loan"];
	$btn.each(function(index) {
		$(this).on('click', function() {
			$('.tabBtn').css('color','black');
			$(this).css('color','blue');
			$('.menu').hide();
			$('.' + menu[index]).show();
		});
	});

});