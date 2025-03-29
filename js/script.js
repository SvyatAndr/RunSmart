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