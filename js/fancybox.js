$(document).ready(function() {
	$(".fancybox-button").fancybox({
		openEffect	: 'elastic',
    	closeEffect	: 'elastic',
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
});