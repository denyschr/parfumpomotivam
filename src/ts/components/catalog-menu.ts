import isMobile from "./is-mobile";
const catalogIconButton = document.querySelector('.catalog-icon') as HTMLButtonElement;
const dropdownCatalog = document.querySelector('.dropdown-catalog') as HTMLUListElement;
const dropdownCatalogItems: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.dropdown-catalog__link');

dropdownCatalogItems.forEach(item => {
	item.addEventListener('click', (): void => {
		document.body.classList.remove('locked');
		document.documentElement.classList.remove('_menu-open');
	});
});

function catalogMenuChecker(): void {
	if (isMobile.any()) {
		document.body.classList.add('touch');
		catalogIconButton.addEventListener('click', (): void => {
			catalogIconButton.classList.toggle('_active');
			dropdownCatalog.classList.toggle('_active');
		});
		dropdownCatalogItems.forEach(item => {
			item.addEventListener('click', (): void => {
				catalogIconButton.classList.remove('_active');
				dropdownCatalog.classList.remove('_active');
			});
		});
		document.addEventListener('click', (e): void => {
			if (e.target !== catalogIconButton) {
				catalogIconButton.classList.remove('_active');
				dropdownCatalog.classList.remove('_active');
			}
		});
	} else {
		document.body.classList.add('mouse');
	}
}

export default catalogMenuChecker;

