"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin_theme_1 = require("../core/admin-theme");
var big_alert_1 = require("../core/big-alert");
$(function () {
    admin_theme_1.cvAdminTheme.init();
    $('.cv-logout-yes').on('click', function (event) { return big_alert_1.cvBigAlert.hideBigAlert(event, true); });
    $('.cv-logout-no').on('click', function (event) { return big_alert_1.cvBigAlert.hideBigAlert(event, true); });
});
//# sourceMappingURL=example.js.map