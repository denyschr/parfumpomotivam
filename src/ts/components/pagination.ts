const MOBILE_SMALL_SCREEN: number = 480;
const paginInitialContent = document.querySelector('.pagination__list')?.innerHTML ?? '';

function paginChecker(): void {
	const paginList = document.querySelector('.pagination__list') as HTMLUListElement;
	if (window.innerWidth < MOBILE_SMALL_SCREEN) {
		paginList.innerHTML = `<li>Страница 1 из 41</li>`;
	} else {
		paginList.innerHTML = paginInitialContent;
	}
}

export default paginChecker;