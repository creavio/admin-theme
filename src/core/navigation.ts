import 'jquery';

export class Navigation {

	constructor() {
		this.init();
	}

	private init():void {
		$('.cv-navigation-link.sub-navigation').on('click', (event) => this.subNavigationClicked(event));
	}

	public subNavigationClicked(event: JQuery.Event) {
		let parentList = $(event.target).parent().first();

		if (parentList.hasClass('open')) {
			parentList.removeClass('open');
		} else {
			// Close all open navigation & open clicked
			$('.cv-navigation>li.open').removeClass('open');
			parentList.addClass('open');
		}
	}
}