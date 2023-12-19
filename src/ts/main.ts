import '../scss/style.scss';
import './components/simplebar';
import './libs/dynamic-adaptive';
import './components/slider';
import './libs/select';
// import './libs/spoilers';
import preloader from './components/preloader';
import menuInit from './components/menu';
import searchHeaderHandler from './components/search';
import catalogMenuChecker from './components/catalog-menu';
import goToTopInit from './components/go-to-top';
import dropdownInit from './components/dropdown';
import rangeInit from './components/range';
import paginChecker from './components/pagination';

preloader();
menuInit();
goToTopInit();
catalogMenuChecker();
searchHeaderHandler();

const locationButton = document.querySelector('.header__location') as HTMLButtonElement;

locationButton.addEventListener('click', (): void => {
	document.body.classList.remove('locked');
	document.documentElement.classList.remove('_menu-open');
});

const filterCatalog = document.querySelector('.filter-catalog') as HTMLDivElement;
const filterCatalogBtn = filterCatalog.querySelector('.filter-catalog__button') as HTMLButtonElement;

filterCatalogBtn.addEventListener('click', (): void => {
	filterCatalog.classList.toggle('_active');
});

dropdownInit();
rangeInit();

paginChecker();
window.addEventListener('resize', paginChecker);