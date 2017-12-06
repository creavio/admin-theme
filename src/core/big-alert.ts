import 'jquery';

export class cvBigAlert {

	public static init(): void {
		$('.cv-big-alert-container').on('click', (event: JQuery.Event) => this.hideBigAlert(event));
	}

	private static hideBigAlert(event: JQuery.Event): void {
		let bigAlertContainer = $('.cv-big-alert-container');

		if($(event.target).hasClass('cv-big-alert-container')) {
			bigAlertContainer.addClass('cv-hide');
		}
	}

}