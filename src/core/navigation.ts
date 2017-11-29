import 'jquery';

export class Navigation {

	public static init(): void {
		$('.cv-sub-navigation>.cv-navigation-link')
			.on('click', (event) => this.subNavigationClicked(event));

		$('.cv-sub-navigation>.cv-sub-navigation-list>li>.cv-navigation-link')
			.on('click', (event) => this.subLinkClicked(event));

		$('.cv-navigation>li:not(.cv-sub-navigation)>.cv-navigation-link')
			.on('click', (event) => this.mainLinkClicked(event));
	}

	public static subNavigationClicked(event: JQuery.Event): void {
		let parentItem = $(event.target).closest('li');

		if (parentItem.hasClass('open')) {
			parentItem.removeClass('open');
		} else {
			// Close all open navigation & open clicked
			$('.cv-navigation>li.open').removeClass('open');
			parentItem.addClass('open');
		}
	}

	public static subLinkClicked(event: JQuery.Event): void {
		this.clear();

		let parentItem = $(event.target)
							.closest('ul')
							.closest('li');

		let parentSubItem = $(event.target).closest('li');

		parentItem
			.addClass('open')
			.addClass('active');

		parentSubItem.addClass('active');
	}

	public static mainLinkClicked(event: JQuery.Event): void {
		this.clear();
		let parentItem = $(event.target).closest('li');

		parentItem.addClass('active');
	}

	private static clear(): void {
		$('.cv-navigation>li')
			.removeClass('open')
			.removeClass('active');

		$('.cv-sub-navigation-list>li')
			.removeClass('active');
	}
}