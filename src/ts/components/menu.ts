function menuInit() {
	const header = document.querySelector('.header') as HTMLElement;
	const menuBtn = document.querySelector('.menu-icon') as HTMLButtonElement;
	const menuItems: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.menu__link');
	if (menuBtn) {
		menuBtn.addEventListener('click', (): void => {
			document.body.classList.toggle('locked');
			document.documentElement.classList.toggle('_menu-open');
		});
	}
	if (menuItems.length) {
		menuItems.forEach(item => {
			item.addEventListener('click', (): void => {
				document.body.classList.remove('locked');
				document.documentElement.classList.remove('_menu-open');
			});
		});
	}
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.98) {
			document.body.classList.remove('locked');
			document.documentElement.classList.remove('_menu-open');
		}
	});
	let initialScrollPos: number = window.scrollY;
	window.addEventListener('scroll', function () {
		let currentScrollPos: number = window.scrollY;
		if (initialScrollPos >= currentScrollPos) {
			header.classList.remove('_active');
		} else {
			header.classList.add('_active');
			const dropdownCatalog = document.querySelector('.dropdown-catalog') as HTMLUListElement;
			if (dropdownCatalog.classList.contains('_active')) {
				dropdownCatalog.classList.remove('_active');
			}
		}
		initialScrollPos = currentScrollPos;
	});
}

export default menuInit;