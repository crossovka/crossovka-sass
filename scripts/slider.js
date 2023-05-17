// инициализация jquery
$(document).ready(function () {
	// инициализация слайдера
	$('.slider__content').slick({
		adaptiveHeight: true,
		// если слайды заканчиваются то все начинается заново
		infinity: true,
		// сколкьо показать
		slidesToShow: 3,
		// по сколько перелистывается
		slidesToScroll: 2,
		// скорость перелистывания при нажатии на точку
		speed: 2500,
		pauseOnHover: true,
		// автоплей
		autoplay: true,
		autoplaySpeed: 2700,
		// автоплей
		// точки
		dots: true,
		arrows: false,
		// waitForAnimate: false,
		// точки
		// адаптивность по брейкпоинтам из офф документации. брейкпоитны из containers.scss
		responsive: [
			{
				//
				breakpoint: 1306,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					easing: true,
				},
			},
			{
				// планшеты
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 900,
					autoplaySpeed: 1800,
					easing: true,
				},
			},
			{
				// мобилки
				breakpoint: 767.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 900,
					autoplaySpeed: 1800,
					easing: true,
				},
			},
			{
				// мобилки поменьше
				breakpoint: 565.98,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 900,
					autoplaySpeed: 1000,
					easing: true,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
	// $('.slider').on('afterChange', function (event, slick, currentSlide) {
	// 	console.log(currentSlide);
	// });
	// $('.slider').slick('setPosition');
});
