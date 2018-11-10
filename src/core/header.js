"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var cvHeader = (function () {
    function cvHeader() {
    }
    cvHeader.init = function () {
        var _this = this;
        jquery_1.default('.cv-header-search').on('click', function (event) { return _this.toggleSearch(event); });
        jquery_1.default('.cv-search-container').on('click', function (event) { return _this.toggleSearch(event); });
        jquery_1.default('.cv-logout-button').on('click', function (event) { return _this.showLogout(event); });
        jquery_1.default('.cv-header-inbox').on('click', function (event) { return _this.toggleInbox(event); });
    };
    cvHeader.toggleSearch = function (event) {
        var searchContainer = jquery_1.default('.cv-search-container');
        if (searchContainer.hasClass('cv-hide')) {
            searchContainer.removeClass('cv-hide');
            jquery_1.default('.cv-search-input').focus();
        }
        else if (jquery_1.default(event.target).hasClass('cv-search-container')) {
            searchContainer.addClass('cv-hide');
        }
    };
    cvHeader.showLogout = function (event) {
        var logoutContainer = jquery_1.default('.cv-logout');
        if (logoutContainer.hasClass('cv-hide')) {
            logoutContainer.removeClass('cv-hide');
        }
    };
    cvHeader.toggleInbox = function (event) {
        var inboxContainer = jquery_1.default('.cv-inbox-container');
        if (inboxContainer.hasClass('cv-hide')) {
            inboxContainer.removeClass('cv-hide');
        }
        else if (!jquery_1.default(event.target).hasClass('cv-inbox-container')) {
            inboxContainer.addClass('cv-hide');
        }
    };
    return cvHeader;
}());
exports.cvHeader = cvHeader;
//# sourceMappingURL=header.js.map