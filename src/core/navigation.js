"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var _ = require("lodash");
var cvNavigation = (function () {
    function cvNavigation() {
    }
    cvNavigation.init = function () {
        var _this = this;
        jquery_1.default('.cv-sub-navigation>.cv-navigation-link').on('mouseenter', function (event) {
            if (jquery_1.default('body').hasClass('minified')) {
                _this.openItem && _this.openItem.closest('li').removeClass('hovered');
                _this.openItem = jquery_1.default(event.target);
                setTimeout(function () { return jquery_1.default(event.target).closest('li').addClass('hovered'); }, 100);
            }
        });
        jquery_1.default('.cv-sub-navigation>.cv-navigation-link').on('mouseleave', function (event) {
            if (jquery_1.default('body').hasClass('minified')) {
                _this.closeSubNavigation();
            }
        });
        jquery_1.default('.cv-sub-navigation>.cv-sub-navigation-list').on('mouseenter', function (event) {
            _this.closeOkay = false;
        });
        jquery_1.default('.cv-sub-navigation>.cv-sub-navigation-list').on('mouseleave', function (event) {
            _this.closeOkay = true;
            _this.closeSubNavigation();
        });
        jquery_1.default('.cv-sub-navigation>.cv-navigation-link')
            .on('click', function (event) { return _this.subNavigationClicked(event); });
        jquery_1.default('.cv-sub-navigation>.cv-sub-navigation-list>li>.cv-navigation-link')
            .on('click', function (event) { return _this.subLinkClicked(event); });
        jquery_1.default('.cv-navigation>li:not(.cv-sub-navigation)>.cv-navigation-link')
            .on('click', function (event) { return _this.mainLinkClicked(event); });
        jquery_1.default('.cv-navigation-minifier').on('click', function () {
            cvNavigation.toggleMinified();
        });
        jquery_1.default('.cv-header-menu-icon').on('click', function () {
            cvNavigation.toggleMobileNav();
        });
    };
    cvNavigation.subNavigationClicked = function (event) {
        var parentItem = jquery_1.default(event.target).closest('li');
        if (parentItem.hasClass('open')) {
            parentItem.removeClass('open');
        }
        else {
            jquery_1.default('.cv-navigation>li.open').removeClass('open');
            parentItem.addClass('open');
        }
    };
    cvNavigation.subLinkClicked = function (event) {
        this.clear();
        var parentItem = jquery_1.default(event.target)
            .closest('ul')
            .closest('li');
        var parentSubItem = jquery_1.default(event.target).closest('li');
        parentItem
            .addClass('open')
            .addClass('active');
        parentSubItem.addClass('active');
    };
    cvNavigation.mainLinkClicked = function (event) {
        this.clear();
        var parentItem = jquery_1.default(event.target).closest('li');
        parentItem.addClass('active');
    };
    cvNavigation.toggleMinified = function () {
        var body = jquery_1.default('body');
        if (body.hasClass('minified')) {
            body.removeClass('minified');
            jquery_1.default('.cv-navigation').find('.hovered').removeClass('hovered');
        }
        else {
            body.addClass('minified');
        }
    };
    cvNavigation.toggleMobileNav = function () {
        var body = jquery_1.default('body');
        if (body.hasClass('mobile-show-nav')) {
            body.removeClass('mobile-show-nav');
        }
        else {
            body.addClass('mobile-show-nav');
        }
    };
    cvNavigation.clear = function () {
        jquery_1.default('.cv-navigation>li')
            .removeClass('open')
            .removeClass('active');
        jquery_1.default('.cv-sub-navigation-list>li')
            .removeClass('active');
    };
    cvNavigation.closeOkay = true;
    cvNavigation.closeSubNavigation = _.debounce(function () {
        cvNavigation.closeOkay && cvNavigation.openItem && cvNavigation.openItem.closest('li').removeClass('hovered');
    }, 50);
    return cvNavigation;
}());
exports.cvNavigation = cvNavigation;
//# sourceMappingURL=navigation.js.map