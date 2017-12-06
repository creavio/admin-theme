"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var navigation_1 = require("./navigation");
var header_1 = require("./header");
var big_alert_1 = require("./big-alert");
var cvAdminTheme = (function () {
    function cvAdminTheme() {
    }
    cvAdminTheme.init = function () {
        navigation_1.cvNavigation.init();
        header_1.cvHeader.init();
        big_alert_1.cvBigAlert.init();
        this.initTooltips();
        this.removePreLoad();
    };
    cvAdminTheme.initTooltips = function () {
        $('[data-toggle="tooltip"]').tooltip();
    };
    cvAdminTheme.removePreLoad = function () {
        var body = $('body');
        if (body.hasClass('cv-preload')) {
            body.removeClass('cv-preload');
        }
    };
    return cvAdminTheme;
}());
exports.cvAdminTheme = cvAdminTheme;
//# sourceMappingURL=admin-theme.js.map