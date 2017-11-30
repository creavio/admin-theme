import 'jquery';

export class cvResponsive {

	private static xs: number = 576;
	private static sm: number = 768;
	private static md: number = 992;
	private static lg: number = 1200;

	public static init(): void {
		this.handle();

		$(window).on('resize', () => this.handle());
	}

	private static handle(): void {
		let width = $(window).width();
		let body = $('body');

		this.removeRdClasses();

		if (width <= this.xs) {
			// XS
			body
				.addClass('rd-lt-sm rd-lt-md rd-lt-lg rd-lt-hg')
				.addClass('rd-xs');

			console.log("xs");

		} else if (width > this.xs && width <= this.sm) {
			// SM
			body
				.addClass('rd-gt-xs rd-lt-md rd-lt-lg rd-lt-hg')
				.addClass('rd-sm');

			console.log("sm");

		} else if (width > this.sm && width <= this.md) {
			// MD
			body
				.addClass('rd-gt-xs rd-gt-sm rd-lt-lg rd-lt-hg')
				.addClass('rd-md');

			console.log("md");

		} else if (width > this.md && width <= this.lg) {
			// LG
			body
				.addClass('rd-gt-xs rd-gt-sm rd-gt-md rd-lt-hg')
				.addClass('rd-lg');

			console.log("lg");

		} else {
			// HG
			body
				.addClass('rd-gt-xs rd-gt-sm rd-gt-md rd-gt-lg')
				.addClass('rd-hg');

			console.log("hg");
		}
	}

	private static removeRdClasses(): void {
		let body = $('body');

		body
			.removeClass('rd-xs rd-sm rd-md rd-lg rd-hg rd-lt-xs rd-lt-sm rd-lt-md rd-lt-lg rd-lt-hg rd-gt-xs rd-gt-sm rd-gt-md rd-gt-lg rd-gt-hg')
	}
}