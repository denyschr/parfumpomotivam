import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import '../../scss/libs/swiper.scss';

if (document.querySelector('.hero__slider')) {
	const heroSlider: Swiper = new Swiper('.hero__slider', {
		modules: [Pagination, Autoplay],
		loop: true,
		speed: 800,
		effect: "fade",
		pagination: {
			el: '.hero__pagination',
			clickable: true,
			dynamicBullets: true,
		},
		autoplay: {
			delay: 4000,
		},
	});
}

interface SwiperBreakpoints {
	[width: number]: SwiperSettings;
	[ratio: string]: SwiperSettings;
}

interface SwiperSettings {
	spaceBetween?: number;
	slidesPerView?: number;
	freeMode?: boolean;
	breakpoints?: SwiperBreakpoints,
}

const resizableSlider = (
	breakpoint: string,
	swiperClass: string,
	swiperSettings?: SwiperSettings,
): void => {
	let swiper: Swiper;

	const breakpointMediaQuery: MediaQueryList = window.matchMedia(breakpoint);

	const enableSwiper = (className: string, settings?: SwiperSettings): void => {
		swiper = new Swiper(className, settings);
	};

	const checker = (): void => {
		if (breakpointMediaQuery.matches) {
			return enableSwiper(swiperClass, swiperSettings);
		} else {
			if (swiper !== undefined) swiper.destroy(true, true);
			return;
		}
	};

	breakpointMediaQuery.addEventListener('change', checker);
	checker();
};

resizableSlider(
	'(max-width: 991.98px)',
	'.popular__slider',
	{
		spaceBetween: 20,
		slidesPerView: 2.5,
		freeMode: true,
		breakpoints: {
			768: {
				slidesPerView: 2.3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 1.5,
			},
			320: {
				slidesPerView: 1,
			}
		}
	},
);

