import 'jquery';

export class Navigation {

	constructor() {
		this.init();
	}

	private init():void {
		$('.cv-navigation-link.sub-navigation').on('click', (event) => this.subNavigationClicked(event));
	}

	public subNavigationClicked(event: JQuery.Event) {
		let element = $(event.target).parent().first();

		if (element.hasClass('open')) {
			element.removeClass('open');
		} else {
			element.addClass('open');
		}
	}
}