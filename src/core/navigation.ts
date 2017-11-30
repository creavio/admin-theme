import 'jquery';
import * as _ from 'lodash';

export class cvNavigation {
	public static openItem: any;
	public static closeOkay: boolean = true;

	public static closeSubNavigation = _.debounce(() => {
		cvNavigation.closeOkay && cvNavigation.openItem.closest('li').removeClass('hovered');
	}, 50);


	public static init(): void {
		$('.cv-sub-navigation>.cv-navigation-link').on('mouseenter', (event: JQuery.Event) => {
			if ($('body').hasClass('minified')) {
				this.openItem = $(event.target);
				this.openItem.closest('li').addClass('hovered');
			}
		});

		$('.cv-sub-navigation>.cv-navigation-link').on('mouseleave', (event: JQuery.Event) => {
			if ($('body').hasClass('minified')) {
				this.closeSubNavigation();
			}
		});

		$('.cv-sub-navigation>.cv-sub-navigation-list').on('mouseenter', (event: JQuery.Event) => {
			this.closeOkay = false;
		});

		$('.cv-sub-navigation>.cv-sub-navigation-list').on('mouseleave', (event: JQuery.Event) => {
			this.closeOkay = true;
			this.closeSubNavigation();
		});


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

	public static toggleMinified(): void {
		let body = $('body');

		if (body.hasClass('minified')) {
			body.removeClass('minified');
			$('.cv-navigation').find('.hovered').removeClass('hovered');
		} else {
			body.addClass('minified');
		}

	}

	private static clear(): void {
		$('.cv-navigation>li')
			.removeClass('open')
			.removeClass('active');

		$('.cv-sub-navigation-list>li')
			.removeClass('active');
	}
}