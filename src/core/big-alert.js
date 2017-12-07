"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var cvBigAlert = (function () {
    function cvBigAlert() {
    }
    cvBigAlert.init = function () {
        var _this = this;
        $('.cv-big-alert-container').on('click', function (event) { return _this.hideBigAlert(event); });
    };
    cvBigAlert.hideBigAlert = function (event, sure) {
        if (sure === void 0) { sure = false; }
        var bigAlertContainer = $('.cv-big-alert-container');
        if ($(event.target).hasClass('cv-big-alert-container') || sure) {
            bigAlertContainer.addClass('cv-hide');
        }
    };
    return cvBigAlert;
}());
exports.cvBigAlert = cvBigAlert;
//# sourceMappingURL=big-alert.js.map