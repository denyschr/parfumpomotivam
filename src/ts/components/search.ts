const searchForm = document.querySelector('.header__form') as HTMLFormElement;
const searchHeaderBtn = document.querySelector('.search-icon') as HTMLButtonElement;

function searchHeaderHandler(): void {
	if (searchForm && searchHeaderBtn) {
		const overlay = document.querySelector('.overlay') as HTMLDivElement;
		searchHeaderBtn.addEventListener('click', (): void => {
			document.body.classList.add('locked');
			document.documentElement.classList.add('_search-open');
		});
		window.addEventListener('click', (e: Event): void => {
			if (e.target == overlay) {
				document.body.classList.remove('locked');
				document.documentElement.classList.remove('_search-open');
			}
		});
	}
}

export default searchHeaderHandler;