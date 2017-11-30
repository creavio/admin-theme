import {cvNavigation} from "../core/navigation";

$(
	() => {
		cvNavigation.init();

		$('.cv-header-menu-icon').on('click', () => {
			cvNavigation.toggleMinified();
		})
	}
);
