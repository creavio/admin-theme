import 'jquery';

export class cvHeader {

	public static init(): void {
		$('.cv-header-search').on('click', (event: JQuery.Event) => this.toggleSearch(event));
		$('.cv-search-container').on('click', (event: JQuery.Event) => this.toggleSearch(event));

		$('.cv-logout-button').on('click', (event: JQuery.Event) => this.showLogout(event));
		$('.cv-header-inbox').on('click', (event: JQuery.Event) => this.toggleInbox(event));
	}

	private static toggleSearch(event: JQuery.Event): void {
		let searchContainer = $('.cv-search-container');

		if (searchContainer.hasClass('cv-hide')) {
			searchContainer.removeClass('cv-hide');
			$('.cv-search-input').focus();
		} else if($(event.target).hasClass('cv-search-container')) {
			searchContainer.addClass('cv-hide');
		}
	}

	private static showLogout(event: JQuery.Event): void {
		let logoutContainer = $('.cv-logout');

		if (logoutContainer.hasClass('cv-hide')) {
			logoutContainer.removeClass('cv-hide');
		}
	}

	private static toggleInbox(event: JQuery.Event): void {
		let inboxContainer = $('.cv-inbox-container');

		if (inboxContainer.hasClass('cv-hide')) {
			inboxContainer.removeClass('cv-hide');
		} else if(!$(event.target).hasClass('cv-inbox-container')) {
			inboxContainer.addClass('cv-hide');
		}
	}

}