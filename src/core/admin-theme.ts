import * as $ from 'jquery';
import {cvNavigation} from "./navigation";
import {cvHeader} from "./header";

export class cvAdminTheme {
	public static init(): void {
		cvNavigation.init();
		cvHeader.init();

		this.initTooltips();
	}

	private static initTooltips(): void {
		($('[data-toggle="tooltip"]') as any).tooltip();
	}

}