import * as $ from 'jquery';
import {cvNavigation} from "./navigation";
import {cvHeader} from "./header";

export class cvAdminTheme {
	public static init(): void {
		cvNavigation.init();
		cvHeader.init();

		this.initTooltips();
		this.removePreLoad();
	}

	private static initTooltips(): void {
		($('[data-toggle="tooltip"]') as any).tooltip();
	}

	private static removePreLoad(): void {
		let body = $('body');

		if (body.hasClass('cv-preload')) {
			body.removeClass('cv-preload');
		}
	}

}