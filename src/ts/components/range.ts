import * as noUiSlider from 'nouislider';

function rangeInit(): void {
	const rangeItems: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const rangeSlider = rangeItem.querySelector('[data-range-slider]') as HTMLDivElement;
			const textFrom = rangeItem.querySelector('[data-range-from]') as HTMLElement;
			const textTo = rangeItem.querySelector('[data-range-to]') as HTMLElement;
			noUiSlider.create(rangeSlider, {
				start: [Number(textFrom.dataset.value), Number(textTo.dataset.value)],
				connect: true,
				tooltips: [true, true],
				range: {
					'min': [Number(textFrom.dataset.value)],
					'max': [Number(textTo.dataset.value)]
				},
			});
		});
	}
}

export default rangeInit;