import {cvAdminTheme} from "../core/admin-theme";
import {cvBigAlert} from "../core/big-alert";

$(
	() => {
		cvAdminTheme.init();

		$('.cv-logout-yes').on('click', (event: JQuery.Event) => cvBigAlert.hideBigAlert(event, true));
		$('.cv-logout-no').on('click', (event: JQuery.Event) => cvBigAlert.hideBigAlert(event, true));
	}
);
