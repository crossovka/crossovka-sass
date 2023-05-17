$('.menu__link').on('click', function (event) {
	var $anchor = $(this);
	$('html, body')
		.stop()
		.animate(
			{
				scrollTop:
					$($anchor.attr('href')).offset().top - $('header')[0].offsetHeight,
			},
			{
				duration: 200,
				specialEasing: {
					width: 'linear',
					height: 'easeInOutCubick',
				},
			}
		);
	event.preventDefault();
});
