function dropdownInit(): void {
	const dropdowns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-dropdown]');
	if (dropdowns.length) {
		dropdowns.forEach((dropdown, index) => {
			dropdown.addEventListener('click', (): void => {
				dropdowns[index].classList.toggle('_active');
				dropdowns[index].nextElementSibling?.classList.toggle('_active');
			});
		});
	}
}

export default dropdownInit;