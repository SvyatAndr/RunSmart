// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 	speed: 1200,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevrons/chevron-left-solid.svg"></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="icons/chevrons/chevron-right-solid.svg"></button>',
// 	autoplay: true,
// 	autoplaySpeed: 2500,
// 	responsive: [
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				dots: true,
// 				arrows: false,
// 			}
// 		}
// 	]
// 	});
// });


const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: true,
	speed: 800,
	autoplayTimeout: 4000,
	autoplayButtonOutput: false,
	autoplayHoverPause: true,
	controls: false,
	nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});


$(function() {
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function() {
		$(this)
		.addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

});