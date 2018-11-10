import $ from 'jquery';

export class cvBigAlert {

	public static init(): void {
		$('.cv-big-alert-container').on('click', (event: JQuery.Event) => this.hideBigAlert(event));
	}

	public static hideBigAlert(event: JQuery.Event, sure: boolean = false): void {
		let bigAlertContainer = $('.cv-big-alert-container');

		if($(event.target).hasClass('cv-big-alert-container') || sure) {
			bigAlertContainer.addClass('cv-hide');
		}
	}

}