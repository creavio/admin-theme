import {cvNavigation} from "../core/navigation";

$(
	() => {
		cvNavigation.init();

		$('.cv-navigation-minifier').on('click', () => {
			cvNavigation.toggleMinified();
		});

		$('.cv-header-menu-icon').on('click', () => {
			cvNavigation.toggleMobileNav();
		});
	}
);
