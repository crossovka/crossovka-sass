$(document).ready(function () {
	$('.header__burger').click(function (event) {
		// при клике на бургер действия.нажал-добавился класс.нажали-убрался
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.menu__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});
