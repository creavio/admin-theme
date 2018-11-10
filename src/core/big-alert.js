"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var cvBigAlert = (function () {
    function cvBigAlert() {
    }
    cvBigAlert.init = function () {
        var _this = this;
        jquery_1.default('.cv-big-alert-container').on('click', function (event) { return _this.hideBigAlert(event); });
    };
    cvBigAlert.hideBigAlert = function (event, sure) {
        if (sure === void 0) { sure = false; }
        var bigAlertContainer = jquery_1.default('.cv-big-alert-container');
        if (jquery_1.default(event.target).hasClass('cv-big-alert-container') || sure) {
            bigAlertContainer.addClass('cv-hide');
        }
    };
    return cvBigAlert;
}());
exports.cvBigAlert = cvBigAlert;
//# sourceMappingURL=big-alert.js.map