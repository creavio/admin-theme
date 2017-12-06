"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var cvHeader = (function () {
    function cvHeader() {
    }
    cvHeader.init = function () {
        var _this = this;
        $('.cv-header-search').on('click', function (event) { return _this.toggleSearch(event); });
        $('.cv-search-container').on('click', function (event) { return _this.toggleSearch(event); });
        $('.cv-logout-button').on('click', function (event) { return _this.showLogout(event); });
    };
    cvHeader.toggleSearch = function (event) {
        var searchContainer = $('.cv-search-container');
        if (searchContainer.hasClass('cv-hide')) {
            searchContainer.removeClass('cv-hide');
            $('.cv-search-input').focus();
        }
        else if ($(event.target).hasClass('cv-search-container')) {
            searchContainer.addClass('cv-hide');
        }
    };
    cvHeader.showLogout = function (event) {
        var logoutContainer = $('.cv-logout');
        if (logoutContainer.hasClass('cv-hide')) {
            logoutContainer.removeClass('cv-hide');
        }
    };
    return cvHeader;
}());
exports.cvHeader = cvHeader;
//# sourceMappingURL=header.js.map