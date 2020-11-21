function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./layouts/auth-layout/auth-layout.module": ["./src/app/layouts/auth-layout/auth-layout.module.ts", "default~layouts-auth-layout-auth-layout-module~views-views-module", "layouts-auth-layout-auth-layout-module"],
      "./layouts/blank-layout/blank-layout.module": ["./src/app/layouts/blank-layout/blank-layout.module.ts", "layouts-blank-layout-blank-layout-module"],
      "./layouts/layout1/layout1.module": ["./src/app/layouts/layout1/layout1.module.ts", "layouts-layout1-layout1-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxBreadcrumbsBreadcrumb1Breadcrumb1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar-breadcrumb\">\n  <h5 class=\"mb-0\">{{ title }}</h5>\n  <nav aria-label=\"breadcrumb\">\n    <ul class=\"breadcrumb\">\n      <li *ngFor=\"let item of items\" class=\"breadcrumb-item {{ (item.isActive) ? 'active' : '' }}\">\n        <span *ngIf=\"item.isActive\">{{ item.label }}</span>\n        <a *ngIf=\"!item.isActive\" [href]=\"item.link\">{{ item.label }}</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/card-with-image/card-with-image.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/card-with-image/card-with-image.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxCardWithImageCardWithImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"cardClass\">\n  <div [ngClass]=\"cardRowClass\">\n    <div class=\"col-md-4\">\n      <ng-content select=\"[card-image]\"></ng-content>\n    </div>\n    <div class=\"col-md-8\">\n      <div [ngClass]=\"cardBodyClass\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/cards/iq-card/iq-card.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/cards/iq-card/iq-card.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxCardsIqCardIqCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"cardClass\">\n  <!-- card image or extra content here -->\n  <ng-content select=\"[card-top]\"></ng-content>\n  <!-- card header content here -->\n  <div [ngClass]=\"cardHeaderClass\" *ngIf=\"isCardHeader\">\n    <ng-content select=\"[card-header]\"></ng-content>\n  </div>\n  <!-- card body content here  -->\n  <div [ngClass]=\"cardBodyClass\" *ngIf=\"isCardBody\">\n    <ng-content></ng-content>\n  </div>\n  <!-- card footer content here  -->\n  <div [ngClass]=\"cardFooterClass\" *ngIf=\"isCardFooter\">\n    <ng-content select=\"[card-footer]\"></ng-content>\n  </div>\n  <!-- card extra content here  -->\n  <ng-content select=\"[card-bottom]\"></ng-content>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/apex-chart/apex-chart.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/apex-chart/apex-chart.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxChartsApexChartApexChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [id]=\"ids\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/high-chart/high-chart.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/high-chart/high-chart.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxChartsHighChartHighChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [id]=\"ids\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/full-calendar/full-calendar.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/full-calendar/full-calendar.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxFullCalendarFullCalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<full-calendar\n  defaultView=\"dayGridMonth\"\n  [plugins]=\"calendarPlugins\"\n  [events]=\"calendarEvents\"\n  [weekends]=\"calendarWeekends\"\n></full-calendar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/loaders/loader1/loader.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/loaders/loader1/loader.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxLoadersLoader1LoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loader [START] -->\n<div id=\"loading\">\n  <div id=\"loading-center\">\n    <div class=\"loader\">\n      <div class=\"cube\">\n        <div class=\"sides\">\n          <div class=\"top\"></div>\n          <div class=\"right\"></div>\n          <div class=\"bottom\"></div>\n          <div class=\"left\"></div>\n          <div class=\"front\"></div>\n          <div class=\"back\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Loader [END] -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/menus/list-style1/list-style1.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/menus/list-style1/list-style1.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxMenusListStyle1ListStyle1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul [class]=\"listClass\">\n  <li *ngFor=\"let listItem of listItems\" [class]=\"(listItem.isHeading ? 'iq-menu-title' : activeLink(listItem) && listItem.children ? 'active' : activeLink(listItem) ? 'active' : '')\">\n\n    <!-- Heading Menu Items -->\n    <i *ngIf=listItem.isHeading [class]=\"listItem.icon\"></i>\n    <span *ngIf=listItem.isHeading>{{ listItem.title }}</span>\n\n    <!-- Menu Items -->\n    <a href=\"javascript:void(0)\" *ngIf=!listItem.isHeading&&listItem.children  [class]=\"'iq-waves-effect '+ activeLink(listItem) && listItem.children ? 'active' : activeLink(listItem) ? 'active' : ''\"\n       data-toggle=\"collapse\" [attr.data-target]=\"'#'+listItem.name\" aria-expanded=\"false\"\n       [attr.aria-controls]=\"listItem.name\"\n    >\n      <i *ngIf=listItem.isIconClass [class]=\"listItem.icon\"></i><span>{{ listItem.title }}</span>\n      <i *ngIf=\"listItem.children\" class=\"ri-arrow-right-s-line iq-arrow-right\"></i>\n    </a>\n\n    <a href=\"javascript:void(0)\" *ngIf=!listItem.isHeading&&!listItem.children\n        class=\"iq-waves-effect\" [routerLink]=\"listItem.link != '' ? [listItem.link] : []\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact: true}\"\n    >\n      <i *ngIf=listItem.isIconClass [class]=\"listItem.icon\"></i><span>{{ listItem.title }}</span>\n      <small *ngIf=\"listItem.append\" class=\"badge badge-pill badge-primary float-right font-weight-normal ml-auto\">{{ listItem.append }}</small>\n      <i *ngIf=\"listItem.children\" class=\"ri-arrow-right-s-line iq-arrow-right\"></i>\n    </a>\n    <!-- Child Menu Items -->\n    <app-list-style1 *ngIf=\"listItem.children\" listClass=\"iq-submenu\" [class]=\"'collapse '+(activeLink(listItem) && listItem.children ? 'show' : activeLink(listItem) ? 'show' : '')\" [listItems]=\"listItem.children\" [id]=\"listItem.name\" data-parent=\"#iq-sidebar-toggle\"></app-list-style1>\n\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxNavBarsNavBar1NavBar1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TOP Nav Bar [START] -->\n<div class=\"iq-top-navbar\">\n  <div class=\"iq-navbar-custom\">\n    <div class=\"iq-sidebar-logo\">\n      <div class=\"top-logo\">\n        <a href=\"index.html\" class=\"logo\">\n          <img src=\"/assets/images/logo.png\" class=\"img-fluid\" alt=\"\">\n          <span>Sofbox</span>\n        </a>\n      </div>\n    </div>\n    <app-breadcrumb1 title=\"Dashboard\" [items]=\"breadCrumbItems\"></app-breadcrumb1>\n    <nav class=\"navbar navbar-expand-lg navbar-light p-0\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"ri-menu-3-line\"></i>\n      </button>\n      <div class=\"iq-menu-bt align-self-center\">\n        <div class=\"wrapper-menu\">\n          <div class=\"line-menu half start\"></div>\n          <div class=\"line-menu\"></div>\n          <div class=\"line-menu half end\"></div>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto navbar-list\">\n          <li class=\"nav-item\">\n            <a class=\"search-toggle iq-waves-effect\" href=\"javascript:void(0);\"><i class=\"ri-search-line\"></i></a>\n            <form action=\"#\" class=\"search-box\">\n              <input type=\"text\" class=\"text search-input\" placeholder=\"Type here to search...\" />\n            </form>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a href=\"javascript:void(0);\" class=\"search-toggle iq-waves-effect\"><i class=\"ri-mail-line\"></i></a>\n            <div class=\"iq-sub-dropdown\">\n              <div class=\"iq-card shadow-none m-0\">\n                <div class=\"iq-card-body p-0 \">\n                  <div class=\"bg-primary p-3\">\n                    <h5 class=\"mb-0 text-white\">All Messages<small class=\"badge  badge-light float-right pt-1\">{{ messagesList.length }}</small></h5>\n                  </div>\n                  <a *ngFor=\"let message of messagesList\" [href]=\"message.link\" class=\"iq-sub-card\" >\n                    <div class=\"media align-items-center\">\n                      <div class=\"\">\n                        <img class=\"avatar-40 rounded\" [src]=\"message.image\" alt=\"\">\n                      </div>\n                      <div class=\"media-body ml-3\">\n                        <h6 class=\"mb-0 \">{{ message.title }}</h6>\n                        <small class=\"float-left font-size-12\">{{ message.date_format }}</small>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item iq-film-block\" *ngIf=\"countTicket\" (click)=\"clickPaymentShow(countTicket)\">\n            <a href=\"javascript:void(0);\" class=\"iq-waves-effect\"><i class=\"ri-film-line\"></i>\n              <span class=\"menu-tag\">{{ countTicket }}</span>\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a href=\"javascript:void(0);\" class=\"iq-waves-effect\"><i class=\"ri-shopping-cart-2-line\"></i></a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"javascript:void(0);\" class=\"search-toggle iq-waves-effect\"><i class=\"ri-notification-2-line\"></i></a>\n            <div class=\"iq-sub-dropdown\">\n              <div class=\"iq-card shadow-none m-0\">\n                <div class=\"iq-card-body p-0 \">\n                  <div class=\"bg-danger p-3\">\n                    <h5 class=\"mb-0 text-white\">All Notifications<small class=\"badge  badge-light float-right pt-1\">{{ notificationList.length }}</small></h5>\n                  </div>\n                  <a *ngFor=\"let notification of notificationList\" href=\"javascript:void(0);\" class=\"iq-sub-card\" >\n                    <div class=\"media align-items-center\">\n                      <div class=\"\" *ngIf=\"notification.image\">\n                        <img class=\"avatar-40 rounded\" [src]=\"notification.image\" alt=\"\">\n                      </div>\n                      <div class=\"media-body ml-3\">\n                        <h6 class=\"mb-0 \">{{ notification.title }}</h6>\n                        <small class=\"float-right font-size-12\">{{ notification.date_format }}</small>\n                        <p class=\"mb-0\">{{ notification.sub_title }}</p>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item iq-full-screen\"><a href=\"javascript:void(0);\" class=\"iq-waves-effect\" id=\"btnFullscreen\"><i class=\"ri-fullscreen-line\"></i></a></li>\n        </ul>\n      </div>\n      <ul class=\"navbar-list\">\n        <li>\n          <a href=\"javascript:void(0);\" class=\"search-toggle iq-waves-effect bg-primary text-white\"><img src=\"/assets/images/user/1.jpg\" class=\"img-fluid rounded\" alt=\"user\"></a>\n          <div class=\"iq-sub-dropdown iq-user-dropdown\">\n            <div class=\"iq-card shadow-none m-0\">\n              <div class=\"iq-card-body p-0 \">\n                <div class=\"bg-primary p-3\">\n                  <h5 class=\"mb-0 text-white line-height\">Hello Nik jone</h5>\n                  <span class=\"text-white font-size-12\">Available</span>\n                </div>\n                <a href=\"javascript:void(0);\" class=\"iq-sub-card iq-bg-primary-hover\">\n                  <div class=\"media align-items-center\">\n                    <div class=\"rounded iq-card-icon iq-bg-primary\">\n                      <i class=\"ri-file-user-line\"></i>\n                    </div>\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-0 \">My Profile</h6>\n                      <p class=\"mb-0 font-size-12\">View personal profile details.</p>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0);\" class=\"iq-sub-card iq-bg-primary-success-hover\">\n                  <div class=\"media align-items-center\">\n                    <div class=\"rounded iq-card-icon iq-bg-success\">\n                      <i class=\"ri-profile-line\"></i>\n                    </div>\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-0 \">Edit Profile</h6>\n                      <p class=\"mb-0 font-size-12\">Modify your personal details.</p>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0);\" class=\"iq-sub-card iq-bg-primary-danger-hover\">\n                  <div class=\"media align-items-center\">\n                    <div class=\"rounded iq-card-icon iq-bg-danger\">\n                      <i class=\"ri-account-box-line\"></i>\n                    </div>\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-0 \">Account settings</h6>\n                      <p class=\"mb-0 font-size-12\">Manage your account parameters.</p>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0);\" class=\"iq-sub-card iq-bg-primary-secondary-hover\">\n                  <div class=\"media align-items-center\">\n                    <div class=\"rounded iq-card-icon iq-bg-secondary\">\n                      <i class=\"ri-lock-line\"></i>\n                    </div>\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-0 \">Privacy Settings</h6>\n                      <p class=\"mb-0 font-size-12\">Control your privacy parameters.</p>\n                    </div>\n                  </div>\n                </a>\n                <div class=\"d-inline-block w-100 text-center p-3\">\n                  <a class=\"iq-bg-danger iq-sign-btn\" href=\"javascript:void(0);\" role=\"button\">Sign out<i class=\"ri-login-box-line ml-2\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n<!-- TOP Nav Bar [END] -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/scroll-top/scroll-top.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/scroll-top/scroll-top.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxScrollTopScrollTopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- back-to-top -->\n<div id=\"back-to-top\" style=\"display: none;\">\n  <a class=\"top\" id=\"top\" href=\"javascript:void(0)\" (click)=\"scrollTop()\"> <i class=\"ion-ios-upload-outline\"></i> </a>\n</div>\n<!-- back-to-top End -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxSideBarsSideBar1SideBar1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Sidebar [START] -->\n<div class=\"iq-sidebar\">\n  <div class=\"iq-sidebar-logo d-flex justify-content-between\">\n    <a routerLink=\"/\">\n      <img src=\"assets/images/logo.png\" class=\"img-fluid\" alt=\"\">\n      <span>Sofbox</span>\n    </a>\n    <div class=\"iq-menu-bt align-self-center\">\n      <div class=\"wrapper-menu\">\n        <div class=\"line-menu half start\"></div>\n        <div class=\"line-menu\"></div>\n        <div class=\"line-menu half end\"></div>\n      </div>\n    </div>\n  </div>\n  <ng-scrollbar>\n    <nav class=\"iq-sidebar-menu\">\n      <app-list-style1 [listItems]=\"menuItems\" [collapseOpen]=\"true\" id=\"iq-sidebar-toggle\"></app-list-style1>\n    </nav>\n    <div class=\"p-3\"></div>\n  </ng-scrollbar>\n</div>\n<!-- Sidebar [END] -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-content/tab-content.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-content/tab-content.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxTabsTabContentTabContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tab-pane fade\" [id]=\"tabContentLink\" role=\"tabpanel\">\n   <ng-content select=\"[tab-content]\"></ng-content>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSofboxTabsTabNavTabNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul [classList]=\"tabClass\">\n  <li *ngFor=\"let tabNavItem of tabNavItems; let index = index\">\n    <a [href]=\"tabNavItem.link\"\n       [ngClass]=\"(tabNavItem.isActive ? 'nav-link active' : 'nav-link' )\"\n       role=\"tab\" data-toggle=\"pill\"\n       [attr.active]=\"tabNavItem.isActive\">\n      <i *ngIf=\"tabNavItem.icon\" [classList]=\"tabNavItem.icon\"></i>{{ tabNavItem.label }}\n      <span [innerHTML]=\"tabNavItem.append\"></span>\n    </a>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/error-page/error-page.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/error-page/error-page.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesErrorPageErrorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Wrapper Start -->\n<div class=\"wrapper\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-sm-12 text-center\">\n        <div class=\"iq-error\">\n          <h1>{{ errorType }}</h1>\n          <h4 class=\"mb-0\">Oops! This Page is Not Found.</h4>\n          <p>The requested page dose not exist.</p>\n          <a class=\"btn btn-primary mt-3\" href=\"javascript:void(0);\"><i class=\"ri-home-4-line\"></i>Back to Home</a>\n          <img src=\"./assets/images/error/01.png\" class=\"img-fluid iq-error-img\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Wrapper END -->\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/pages/error-page/error-page.component */
    "./src/app/views/pages/error-page/error-page.component.ts");

    var routes = [{
      path: '',
      loadChildren: './layouts/layout1/layout1.module#Layout1Module'
    }, {
      path: 'page',
      loadChildren: './layouts/blank-layout/blank-layout.module#BlankLayoutModule'
    }, {
      path: 'auth',
      loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
    }, {
      path: '**',
      component: _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./plugins.service */
    "./src/app/plugins.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(plugins, router) {
        _classCallCheck(this, AppComponent);

        this.plugins = plugins;
        this.router = router;
        this.title = 'sofbox-dashboard-angular';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sofbox/sofbox.module */
    "./src/app/components/sofbox/sofbox.module.ts");
    /* harmony import */


    var _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./views/pages/error-page/error-page.component */
    "./src/app/views/pages/error-page/error-page.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store/reducers */
    "./src/app/store/reducers/index.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-scrollbar */
    "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var ngx_wow__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
        metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([]), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_17__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressbarModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__["ButtonsModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_21__["CarouselModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressbarModule"].forRoot(), ngx_scrollbar__WEBPACK_IMPORTED_MODULE_23__["NgScrollbarModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_24__["SlickCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_25__["NgwWowModule"]],
      exports: [_components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.ts ***!
    \************************************************************************************/

  /*! exports provided: Breadcrumb1Component */

  /***/
  function srcAppComponentsSofboxBreadcrumbsBreadcrumb1Breadcrumb1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breadcrumb1Component", function () {
      return Breadcrumb1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Breadcrumb1Component = /*#__PURE__*/function () {
      function Breadcrumb1Component() {
        _classCallCheck(this, Breadcrumb1Component);
      }

      _createClass(Breadcrumb1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Breadcrumb1Component;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Breadcrumb1Component.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Breadcrumb1Component.prototype, "items", void 0);
    Breadcrumb1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumb1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./breadcrumb1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.html"))["default"]
    })], Breadcrumb1Component);
    /***/
  },

  /***/
  "./src/app/components/sofbox/card-with-image/card-with-image.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/sofbox/card-with-image/card-with-image.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CardWithImageComponent */

  /***/
  function srcAppComponentsSofboxCardWithImageCardWithImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardWithImageComponent", function () {
      return CardWithImageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardWithImageComponent = /*#__PURE__*/function () {
      function CardWithImageComponent() {
        _classCallCheck(this, CardWithImageComponent);

        this.cardClass = 'iq-card';
        this.cardRowClass = 'row no-gutters';
        this.cardBodyClass = 'card-body';
      }

      _createClass(CardWithImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardWithImageComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardWithImageComponent.prototype, "cardClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardWithImageComponent.prototype, "cardRowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardWithImageComponent.prototype, "cardBodyClass", void 0);
    CardWithImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-with-image',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-with-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/card-with-image/card-with-image.component.html"))["default"]
    })], CardWithImageComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/cards/iq-card/iq-card.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/sofbox/cards/iq-card/iq-card.component.ts ***!
    \**********************************************************************/

  /*! exports provided: IqCardComponent */

  /***/
  function srcAppComponentsSofboxCardsIqCardIqCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IqCardComponent", function () {
      return IqCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IqCardComponent = /*#__PURE__*/function () {
      function IqCardComponent() {
        _classCallCheck(this, IqCardComponent);

        this.cardClass = 'iq-card';
        this.cardHeaderClass = 'iq-card-header d-flex justify-content-between';
        this.cardBodyClass = 'iq-card-body';
        this.cardFooterClass = 'card-footer';
        this.isCardHeader = true;
        this.isCardBody = true;
        this.isCardFooter = false;
      }

      _createClass(IqCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IqCardComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IqCardComponent.prototype, "cardClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IqCardComponent.prototype, "cardHeaderClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IqCardComponent.prototype, "cardBodyClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IqCardComponent.prototype, "cardFooterClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IqCardComponent.prototype, "isCardHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IqCardComponent.prototype, "isCardBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IqCardComponent.prototype, "isCardFooter", void 0);
    IqCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-iq-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./iq-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/cards/iq-card/iq-card.component.html"))["default"]
    })], IqCardComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/charts/apex-chart/apex-chart.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/sofbox/charts/apex-chart/apex-chart.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ApexChartComponent */

  /***/
  function srcAppComponentsSofboxChartsApexChartApexChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function () {
      return ApexChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../plugins.service */
    "./src/app/plugins.service.ts");

    var ApexChartComponent = /*#__PURE__*/function () {
      function ApexChartComponent(plugins) {
        _classCallCheck(this, ApexChartComponent);

        this.plugins = plugins;
      }

      _createClass(ApexChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.plugins.apexChart(_this.ids, _this.options);
          }, 500);
        }
      }]);

      return ApexChartComponent;
    }();

    ApexChartComponent.ctorParameters = function () {
      return [{
        type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "ids", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "options", void 0);
    ApexChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apex-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./apex-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/apex-chart/apex-chart.component.html"))["default"]
    })], ApexChartComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/charts/high-chart/high-chart.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/sofbox/charts/high-chart/high-chart.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: HighChartComponent */

  /***/
  function srcAppComponentsSofboxChartsHighChartHighChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighChartComponent", function () {
      return HighChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../plugins.service */
    "./src/app/plugins.service.ts");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);

    var HighChartComponent = /*#__PURE__*/function () {
      function HighChartComponent(plugins) {
        _classCallCheck(this, HighChartComponent);

        this.plugins = plugins;
      }

      _createClass(HighChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setTimeout(function () {
            if (_this2.ids !== undefined) {
              highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"](_this2.ids, _this2.options);
            }
          }, 500);
        }
      }]);

      return HighChartComponent;
    }();

    HighChartComponent.ctorParameters = function () {
      return [{
        type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HighChartComponent.prototype, "ids", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HighChartComponent.prototype, "options", void 0);
    HighChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-high-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./high-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/high-chart/high-chart.component.html"))["default"]
    })], HighChartComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/full-calendar/full-calendar.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/sofbox/full-calendar/full-calendar.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSofboxFullCalendarFullCalendarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.fc {\n  direction: ltr;\n  text-align: left;\n}\n.fc-rtl {\n  text-align: right;\n}\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em;\n}\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: 0.3;\n}\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: 0.3;\n}\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7;\n}\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 4px;\n}\n.fc-rtl .fc-popover .fc-header {\n  flex-direction: row-reverse;\n}\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px;\n}\n.fc-popover .fc-header .fc-close {\n  cursor: pointer;\n  opacity: 0.65;\n  font-size: 1.1em;\n}\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px;\n}\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0;\n}\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */\n}\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */\n}\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */\n}\n.fc th {\n  text-align: center;\n}\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top;\n}\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */\n}\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer;\n}\na[data-goto]:hover {\n  text-decoration: underline;\n}\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0;\n}\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\n     the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent;\n}\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */\n}\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative;\n}\n.fc-row .fc-bg {\n  z-index: 1;\n}\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */\n}\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */\n}\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent;\n}\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2;\n}\n.fc-row .fc-highlight-skeleton {\n  z-index: 3;\n}\n/*\nrow content (which contains day/week numbers and events) as well as \"mirror\" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */\n}\n.fc-row .fc-mirror-skeleton {\n  z-index: 5;\n}\n.fc .fc-row .fc-content-skeleton table,\n.fc .fc-row .fc-content-skeleton td,\n.fc .fc-row .fc-mirror-skeleton td {\n  /* see-through to the background below */\n  /* extra precedence to prevent theme-provided backgrounds */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n}\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-mirror-skeleton td {\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0;\n}\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-mirror-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0;\n}\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch;\n}\n/* TODO: move to timegrid/daygrid */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: 0.85em;\n  line-height: 1.4;\n  border-radius: 3px;\n  border: 1px solid #3788d8;\n}\n.fc-event,\n.fc-event-dot {\n  background-color: #3788d8;\n  /* default BACKGROUND color */\n}\n.fc-event,\n.fc-event:hover {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */\n}\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */\n}\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed;\n}\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2;\n}\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4;\n}\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none;\n}\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block;\n}\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.fc-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: 0.25;\n}\n/* Event Dragging\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-dragging.fc-selected {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n.fc-event.fc-dragging:not(.fc-selected) {\n  opacity: 0.75;\n}\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n}\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */\n}\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */\n}\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */\n}\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px;\n}\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */\n}\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */\n}\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px;\n}\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */\n}\n.fc-mirror-skeleton tr:first-child > td > .fc-day-grid-event {\n  margin-top: 0;\n  /* except for mirror skeleton */\n}\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden;\n}\n.fc-day-grid-event .fc-time {\n  font-weight: bold;\n}\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */\n}\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */\n}\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: 0.85em;\n  cursor: pointer;\n  text-decoration: none;\n}\na.fc-more:hover {\n  text-decoration: underline;\n}\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none;\n}\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */\n}\n.fc-more-popover {\n  z-index: 2;\n  width: 220px;\n}\n.fc-more-popover .fc-event-container {\n  padding: 10px;\n}\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red;\n}\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n/*\nTODO: more distinction between this file and common.css\n*/\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd;\n}\n.fc-unthemed .fc-popover {\n  background-color: #fff;\n}\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee;\n}\n.fc-unthemed td.fc-today {\n  background: #fcf8e3;\n}\n.fc-unthemed .fc-disabled-day {\n  background: #d7d7d7;\n  opacity: 0.3;\n}\n/* Icons\n--------------------------------------------------------------------------------------------------\nfrom https://feathericons.com/ and built with IcoMoon\n*/\n@font-face {\n  font-family: \"fcicons\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,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\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fc-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"fcicons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fc-icon-chevron-left:before {\n  content: \"\";\n}\n.fc-icon-chevron-right:before {\n  content: \"\";\n}\n.fc-icon-chevrons-left:before {\n  content: \"\";\n}\n.fc-icon-chevrons-right:before {\n  content: \"\";\n}\n.fc-icon-minus-square:before {\n  content: \"\";\n}\n.fc-icon-plus-square:before {\n  content: \"\";\n}\n.fc-icon-x:before {\n  content: \"\";\n}\n.fc-icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n}\n/* Buttons\n--------------------------------------------------------------------------------------------------\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n*/\n/* reset */\n.fc-button {\n  border-radius: 0;\n  overflow: visible;\n  text-transform: none;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.fc-button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.fc-button {\n  -webkit-appearance: button;\n}\n.fc-button:not(:disabled) {\n  cursor: pointer;\n}\n.fc-button::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n/* theme */\n.fc-button {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.4em 0.65em;\n  font-size: 1em;\n  line-height: 1.5;\n  border-radius: 0.25em;\n}\n.fc-button:hover {\n  color: #212529;\n  text-decoration: none;\n}\n.fc-button:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n}\n.fc-button:disabled {\n  opacity: 0.65;\n}\n/* \"primary\" coloring */\n.fc-button-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n.fc-button-primary:hover {\n  color: #fff;\n  background-color: #1e2b37;\n  border-color: #1a252f;\n}\n.fc-button-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n.fc-button-primary:disabled {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n.fc-button-primary:not(:disabled):active,\n.fc-button-primary:not(:disabled).fc-button-active {\n  color: #fff;\n  background-color: #1a252f;\n  border-color: #151e27;\n}\n.fc-button-primary:not(:disabled):active:focus,\n.fc-button-primary:not(:disabled).fc-button-active:focus {\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n/* icons within buttons */\n.fc-button .fc-icon {\n  vertical-align: middle;\n  font-size: 1.5em;\n}\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.fc-button-group > .fc-button {\n  position: relative;\n  flex: 1 1 auto;\n}\n.fc-button-group > .fc-button:hover {\n  z-index: 1;\n}\n.fc-button-group > .fc-button:focus,\n.fc-button-group > .fc-button:active,\n.fc-button-group > .fc-button.fc-button-active {\n  z-index: 1;\n}\n.fc-button-group > .fc-button:not(:first-child) {\n  margin-left: -1px;\n}\n.fc-button-group > .fc-button:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.fc-button-group > .fc-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid;\n}\n/* List View\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-list-item:hover td {\n  background-color: #f5f5f5;\n}\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.fc-toolbar.fc-header-toolbar {\n  margin-bottom: 1.5em;\n}\n.fc-toolbar.fc-footer-toolbar {\n  margin-top: 1.5em;\n}\n/* inner content */\n.fc-toolbar > * > :not(:first-child) {\n  margin-left: 0.75em;\n}\n.fc-toolbar h2 {\n  font-size: 1.75em;\n  margin: 0;\n}\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-view-container {\n  position: relative;\n}\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  box-sizing: content-box;\n}\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1;\n}\n@media print {\n  .fc {\n    max-width: 100% !important;\n  }\n\n  /* Global Event Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc-event {\n    background: #fff !important;\n    color: #000 !important;\n    page-break-inside: avoid;\n  }\n\n  .fc-event .fc-resizer {\n    display: none;\n  }\n\n  /* Table & Day-Row Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc th,\n.fc td,\n.fc hr,\n.fc thead,\n.fc tbody,\n.fc-row {\n    border-color: #ccc !important;\n    background: #fff !important;\n  }\n\n  /* kill the overlaid, absolutely-positioned components */\n  /* common... */\n  .fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton,\n.fc-bgevent-container,\n.fc-business-container,\n.fc-highlight-container,\n.fc-mirror-container {\n    display: none;\n  }\n\n  /* don't force a min-height on rows (for DayGrid) */\n  .fc tbody .fc-row {\n    height: auto !important;\n    /* undo height that JS set in distributeHeight */\n    min-height: 0 !important;\n    /* undo the min-height from each view's specific stylesheet */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton {\n    position: static;\n    /* undo .fc-rigid */\n    padding-bottom: 0 !important;\n    /* use a more border-friendly method for this... */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton tbody tr:last-child td {\n    /* only works in newer browsers */\n    padding-bottom: 1em;\n    /* ...gives space within the skeleton. also ensures min height in a way */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton table {\n    /* provides a min-height for the row, but only effective for IE, which exaggerates this value,\n       making it look more like 3em. for other browers, it will already be this tall */\n    height: 1em;\n  }\n\n  /* Undo month-view event limiting. Display all events and hide the \"more\" links\n  --------------------------------------------------------------------------------------------------*/\n  .fc-more-cell,\n.fc-more {\n    display: none !important;\n  }\n\n  .fc tr.fc-limited {\n    display: table-row !important;\n  }\n\n  .fc td.fc-limited {\n    display: table-cell !important;\n  }\n\n  .fc-popover {\n    display: none;\n    /* never display the \"more..\" popover in print mode */\n  }\n\n  /* TimeGrid Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* undo the min-height 100% trick used to fill the container's height */\n  .fc-time-grid {\n    min-height: 0 !important;\n  }\n\n  /* don't display the side axis at all (\"all-day\" and time cells) */\n  .fc-timeGrid-view .fc-axis {\n    display: none;\n  }\n\n  /* don't display the horizontal lines */\n  .fc-slats,\n.fc-time-grid hr {\n    /* this hr is used when height is underused and needs to be filled */\n    display: none !important;\n    /* important overrides inline declaration */\n  }\n\n  /* let the container that holds the events be naturally positioned and create real height */\n  .fc-time-grid .fc-content-skeleton {\n    position: static;\n  }\n\n  /* in case there are no events, we still want some height */\n  .fc-time-grid .fc-content-skeleton table {\n    height: 4em;\n  }\n\n  /* kill the horizontal spacing made by the event container. event margins will be done below */\n  .fc-time-grid .fc-event-container {\n    margin: 0 !important;\n  }\n\n  /* TimeGrid *Event* Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* naturally position events, vertically stacking them */\n  .fc-time-grid .fc-event {\n    position: static !important;\n    margin: 3px 2px !important;\n  }\n\n  /* for events that continue to a future day, give the bottom border back */\n  .fc-time-grid .fc-event.fc-not-end {\n    border-bottom-width: 1px !important;\n  }\n\n  /* indicate the event continues via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-end:after {\n    content: \"...\";\n  }\n\n  /* for events that are continuations from previous days, give the top border back */\n  .fc-time-grid .fc-event.fc-not-start {\n    border-top-width: 1px !important;\n  }\n\n  /* indicate the event is a continuation via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-start:before {\n    content: \"...\";\n  }\n\n  /* time */\n  /* undo a previous declaration and let the time text span to a second line */\n  .fc-time-grid .fc-event .fc-time {\n    white-space: normal !important;\n  }\n\n  /* hide the the time that is normally displayed... */\n  .fc-time-grid .fc-event .fc-time span {\n    display: none;\n  }\n\n  /* ...replace it with a more verbose version (includes AM/PM) stored in an html attribute */\n  .fc-time-grid .fc-event .fc-time:after {\n    content: attr(data-full);\n  }\n\n  /* Vertical Scroller & Containers\n  --------------------------------------------------------------------------------------------------*/\n  /* kill the scrollbars and allow natural height */\n  .fc-scroller,\n.fc-day-grid-container,\n.fc-time-grid-container {\n    /* */\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  /* kill the horizontal border/padding used to compensate for scrollbars */\n  .fc-row {\n    border: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* Button Controls\n  --------------------------------------------------------------------------------------------------*/\n  .fc-button-group,\n.fc button {\n    display: none;\n    /* don't display any button-related controls */\n  }\n}\n/* DayGridView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-dayGridWeek-view .fc-content-skeleton,\n.fc-dayGridDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */\n}\n.fc-dayGrid-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */\n}\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden;\n}\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3;\n}\n.fc-dayGrid-view .fc-week-number,\n.fc-dayGrid-view .fc-day-number {\n  padding: 2px;\n}\n.fc-dayGrid-view th.fc-week-number,\n.fc-dayGrid-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can't have as much v space */\n}\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: right;\n}\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: left;\n}\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0;\n}\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px;\n}\n.fc-dayGrid-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080;\n}\n/* when week/day number have own column */\n.fc-dayGrid-view td.fc-week-number {\n  text-align: center;\n}\n.fc-dayGrid-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em;\n}\n.fc-day-grid-event {color: white!important;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2NvcmUvbWFpbi5jc3MiLCJub2RlX21vZHVsZXMvQGZ1bGxjYWxlbmRhci9kYXlncmlkL21haW4uY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvZmJveC9mdWxsLWNhbGVuZGFyL2Z1bGwtY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCO0FBRUE7bUdBQ21HO0FBQ25HO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjtBQUVBO21HQUNtRztBQUNuRztFQUNFLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFFQTttR0FDbUc7QUFDbkc7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULGdCQUFnQjtFQUNoQix5REFBeUQ7RUFDekQsbUJBQW1CO0FBQ3JCO0FBRUE7Ozs7RUFJRSxnRUFBZ0U7RUFDaEUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtBQUNWO0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkJBQTZCO0FB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QUN6QztFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUVBQXlFO0VBQ3pFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUMzRUEsb0JBQW9CLHNCQUFzQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2Zib3gvZnVsbC1jYWxlbmRhci9mdWxsLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmMge1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZjLXJ0bCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5ib2R5IC5mYyB7XG4gIC8qIGV4dHJhIHByZWNlZGVuY2UgdG8gb3ZlcmNvbWUganF1aSAqL1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLyogQ29sb3JzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtaGlnaGxpZ2h0IHtcbiAgLyogd2hlbiB1c2VyIGlzIHNlbGVjdGluZyBjZWxscyAqL1xuICBiYWNrZ3JvdW5kOiAjYmNlOGYxO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5mYy1iZ2V2ZW50IHtcbiAgLyogZGVmYXVsdCBsb29rIGZvciBiYWNrZ3JvdW5kIGV2ZW50cyAqL1xuICBiYWNrZ3JvdW5kOiAjOGZkZjgyO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5mYy1ub25idXNpbmVzcyB7XG4gIC8qIGRlZmF1bHQgbG9vayBmb3Igbm9uLWJ1c2luZXNzLWhvdXJzIGFyZWFzICovXG4gIC8qIHdpbGwgaW5oZXJpdCAuZmMtYmdldmVudCdzIHN0eWxlcyAqL1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xufVxuXG4vKiBQb3BvdmVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtcG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5mYy1wb3BvdmVyIC5mYy1oZWFkZXIge1xuICAvKiBUT0RPOiBiZSBtb3JlIGNvbnNpc3RlbnQgd2l0aCBmYy1oZWFkL2ZjLWJvZHkgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG4uZmMtcnRsIC5mYy1wb3BvdmVyIC5mYy1oZWFkZXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5mYy1wb3BvdmVyIC5mYy1oZWFkZXIgLmZjLXRpdGxlIHtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLmZjLXBvcG92ZXIgLmZjLWhlYWRlciAuZmMtY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNjU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi8qIE1pc2MgUmV1c2FibGUgQ29tcG9uZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLWRpdmlkZXIge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuaHIuZmMtZGl2aWRlciB7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMnB4O1xuICAvKiBoZWlnaHQgaXMgdW5yZWxpYWJsZSBhY3Jvc3MgYnJvd3NlcnMsIHNvIHVzZSBwYWRkaW5nICovXG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG59XG5cbi5mYy1iZyxcbi5mYy1iZ2V2ZW50LXNrZWxldG9uLFxuLmZjLWhpZ2hsaWdodC1za2VsZXRvbixcbi5mYy1taXJyb3Itc2tlbGV0b24ge1xuICAvKiB0aGVzZSBlbGVtZW50IHNob3VsZCBhbHdheXMgY2xpbmcgdG8gdG9wLWxlZnQvcmlnaHQgY29ybmVycyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5mYy1iZyB7XG4gIGJvdHRvbTogMDtcbiAgLyogc3RyZWNoIGJnIHRvIGJvdHRvbSBlZGdlICovXG59XG5cbi5mYy1iZyB0YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogc3RyZWNoIGJnIHRvIGJvdHRvbSBlZGdlICovXG59XG5cbi8qIFRhYmxlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIGZpeCBzY3JvbGxiYXIgaXNzdWUgaW4gZmlyZWZveCAqL1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIG5vcm1hbGl6ZSBjcm9zcy1icm93c2VyICovXG59XG5cbi5mYyB0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZjIHRoLFxuLmZjIHRkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5mYyB0ZC5mYy10b2RheSB7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICAvKiBvdmVyY29tZSBuZWlnaGJvcmluZyBib3JkZXJzICovXG59XG5cbi8qIEludGVybmFsIE5hdiBMaW5rc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYVtkYXRhLWdvdG9dIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hW2RhdGEtZ290b106aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogRmFrZSBUYWJsZSBSb3dzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMgLmZjLXJvdyB7XG4gIC8qIGV4dHJhIHByZWNlZGVuY2UgdG8gb3ZlcmNvbWUgdGhlbWVzIGZvcmNpbmcgYSAxcHggYm9yZGVyICovXG4gIC8qIG5vIHZpc2libGUgYm9yZGVyIGJ5IGRlZmF1bHQuIGJ1dCBtYWtlIGF2YWlsYWJsZSBpZiBuZWVkIGJlIChzY3JvbGxiYXIgd2lkdGggY29tcGVuc2F0aW9uKSAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDA7XG59XG5cbi5mYy1yb3cgdGFibGUge1xuICAvKiBkb24ndCBwdXQgbGVmdC9yaWdodCBib3JkZXIgb24gYW55dGhpbmcgd2l0aGluIGEgZmFrZSByb3cuXG4gICAgIHRoZSBvdXRlciB0Ym9keSB3aWxsIHdvcnJ5IGFib3V0IHRoaXMgKi9cbiAgYm9yZGVyLWxlZnQ6IDAgaGlkZGVuIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDAgaGlkZGVuIHRyYW5zcGFyZW50O1xuICAvKiBubyBib3R0b20gYm9yZGVycyBvbiByb3dzICovXG4gIGJvcmRlci1ib3R0b206IDAgaGlkZGVuIHRyYW5zcGFyZW50O1xufVxuXG4uZmMtcm93OmZpcnN0LWNoaWxkIHRhYmxlIHtcbiAgYm9yZGVyLXRvcDogMCBoaWRkZW4gdHJhbnNwYXJlbnQ7XG4gIC8qIG5vIHRvcCBib3JkZXIgb24gZmlyc3Qgcm93ICovXG59XG5cbi8qIERheSBSb3cgKHVzZWQgd2l0aGluIHRoZSBoZWFkZXIgYW5kIHRoZSBEYXlHcmlkKVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZjLXJvdyAuZmMtYmcge1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBoaWdobGlnaHRpbmcgY2VsbHMgJiBiYWNrZ3JvdW5kIGV2ZW50IHNrZWxldG9uICovXG4uZmMtcm93IC5mYy1iZ2V2ZW50LXNrZWxldG9uLFxuLmZjLXJvdyAuZmMtaGlnaGxpZ2h0LXNrZWxldG9uIHtcbiAgYm90dG9tOiAwO1xuICAvKiBzdHJldGNoIHNrZWxldG9uIHRvIGJvdHRvbSBvZiByb3cgKi9cbn1cblxuLmZjLXJvdyAuZmMtYmdldmVudC1za2VsZXRvbiB0YWJsZSxcbi5mYy1yb3cgLmZjLWhpZ2hsaWdodC1za2VsZXRvbiB0YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogc3RyZXRjaCBza2VsZXRvbiB0byBib3R0b20gb2Ygcm93ICovXG59XG5cbi5mYy1yb3cgLmZjLWhpZ2hsaWdodC1za2VsZXRvbiB0ZCxcbi5mYy1yb3cgLmZjLWJnZXZlbnQtc2tlbGV0b24gdGQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZmMtcm93IC5mYy1iZ2V2ZW50LXNrZWxldG9uIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmZjLXJvdyAuZmMtaGlnaGxpZ2h0LXNrZWxldG9uIHtcbiAgei1pbmRleDogMztcbn1cblxuLypcbnJvdyBjb250ZW50ICh3aGljaCBjb250YWlucyBkYXkvd2VlayBudW1iZXJzIGFuZCBldmVudHMpIGFzIHdlbGwgYXMgXCJtaXJyb3JcIiAod2hpY2ggY29udGFpbnNcbnRlbXBvcmFyeSByZW5kZXJlZCBldmVudHMpLlxuKi9cbi5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIC8qIG1hdGNoZXMgdGhlIHNwYWNlIGFib3ZlIHRoZSBldmVudHMgKi9cbn1cblxuLmZjLXJvdyAuZmMtbWlycm9yLXNrZWxldG9uIHtcbiAgei1pbmRleDogNTtcbn1cblxuLmZjIC5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGFibGUsXG4uZmMgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0ZCxcbi5mYyAuZmMtcm93IC5mYy1taXJyb3Itc2tlbGV0b24gdGQge1xuICAvKiBzZWUtdGhyb3VnaCB0byB0aGUgYmFja2dyb3VuZCBiZWxvdyAqL1xuICAvKiBleHRyYSBwcmVjZWRlbmNlIHRvIHByZXZlbnQgdGhlbWUtcHJvdmlkZWQgYmFja2dyb3VuZHMgKi9cbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLyogaW4gY2FzZSA8dGQ+cyBhcmUgZ2xvYmFsbHkgc3R5bGVkICovXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGQsXG4uZmMtcm93IC5mYy1taXJyb3Itc2tlbGV0b24gdGQge1xuICAvKiBkb24ndCBwdXQgYSBib3JkZXIgYmV0d2VlbiBldmVudHMgYW5kL29yIHRoZSBkYXkgbnVtYmVyICovXG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGJvZHkgdGQsXG4uZmMtcm93IC5mYy1taXJyb3Itc2tlbGV0b24gdGJvZHkgdGQge1xuICAvKiBkb24ndCBwdXQgYSBib3JkZXIgYmV0d2VlbiBldmVudCBjZWxscyAqL1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4vKiBTY3JvbGxpbmcgQ29udGFpbmVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtc2Nyb2xsZXIge1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi8qIFRPRE86IG1vdmUgdG8gdGltZWdyaWQvZGF5Z3JpZCAqL1xuLmZjLXNjcm9sbGVyID4gLmZjLWRheS1ncmlkLFxuLmZjLXNjcm9sbGVyID4gLmZjLXRpbWUtZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcmUtc2NvcGUgYWxsIHBvc2l0aW9ucyAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogaGFjayB0byBmb3JjZSByZS1zaXppbmcgdGhpcyBpbm5lciBlbGVtZW50IHdoZW4gc2Nyb2xsYmFycyBhcHBlYXIvZGlzYXBwZWFyICovXG59XG5cbi8qIEdsb2JhbCBFdmVudCBTdHlsZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1ldmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogZm9yIHJlc2l6ZSBoYW5kbGUgYW5kIG90aGVyIGlubmVyIHBvc2l0aW9uaW5nICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBtYWtlIHRoZSA8YT4gdGFnIGJsb2NrICovXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzg4ZDg7XG59XG5cbi5mYy1ldmVudCxcbi5mYy1ldmVudC1kb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4OGQ4O1xuICAvKiBkZWZhdWx0IEJBQ0tHUk9VTkQgY29sb3IgKi9cbn1cblxuLmZjLWV2ZW50LFxuLmZjLWV2ZW50OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIGRlZmF1bHQgVEVYVCBjb2xvciAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qIGlmIDxhPiBoYXMgYW4gaHJlZiAqL1xufVxuXG4uZmMtZXZlbnRbaHJlZl0sXG4uZmMtZXZlbnQuZmMtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBnaXZlIGV2ZW50cyB3aXRoIGxpbmtzIGFuZCBkcmFnZ2FibGUgZXZlbnRzIGEgaGFuZCBtb3VzZSBwb2ludGVyICovXG59XG5cbi5mYy1ub3QtYWxsb3dlZCxcbi5mYy1ub3QtYWxsb3dlZCAuZmMtZXZlbnQge1xuICAvKiB0byBvdmVycmlkZSBhbiBldmVudCdzIGN1c3RvbSBjdXJzb3IgKi9cbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZjLWV2ZW50IC5mYy1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiByZXNpemVyIChjdXJzb3IgQU5EIHRvdWNoIGRldmljZXMpICovXG4uZmMtZXZlbnQgLmZjLXJlc2l6ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi8qIHJlc2l6ZXIgKHRvdWNoIGRldmljZXMpICovXG4uZmMtZXZlbnQgLmZjLXJlc2l6ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmMtZXZlbnQuZmMtYWxsb3ctbW91c2UtcmVzaXplIC5mYy1yZXNpemVyLFxuLmZjLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1yZXNpemVyIHtcbiAgLyogb25seSBzaG93IHdoZW4gaG92ZXJpbmcgb3Igc2VsZWN0ZWQgKHdpdGggdG91Y2gpICovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBoaXQgYXJlYSAqL1xuLmZjLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1yZXNpemVyOmJlZm9yZSB7XG4gIC8qIDQweDQwIHRvdWNoIGFyZWEgKi9cbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICAvKiB1c2VyIG9mIHRoaXMgdXRpbCBjYW4gc2NvcGUgd2l0aGluIGEgbG93ZXIgei1pbmRleCAqL1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4vKiBFdmVudCBTZWxlY3Rpb24gKG9ubHkgZm9yIHRvdWNoIGRldmljZXMpXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtZXZlbnQuZmMtc2VsZWN0ZWQge1xuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG4gIC8qIG92ZXJjb21lcyBpbmxpbmUgei1pbmRleCAqL1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZmMtZXZlbnQuZmMtc2VsZWN0ZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIC8qIHNhbWUgei1pbmRleCBhcyBmYy1iZywgYmVoaW5kIHRleHQgKi9cbiAgLyogb3ZlcmNvbWUgdGhlIGJvcmRlcnMgKi9cbiAgdG9wOiAtMXB4O1xuICByaWdodDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICBsZWZ0OiAtMXB4O1xuICAvKiBkYXJrZW5pbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG5cbi8qIEV2ZW50IERyYWdnaW5nXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtZXZlbnQuZmMtZHJhZ2dpbmcuZmMtc2VsZWN0ZWQge1xuICBib3gtc2hhZG93OiAwIDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZmMtZXZlbnQuZmMtZHJhZ2dpbmc6bm90KC5mYy1zZWxlY3RlZCkge1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4vKiBIb3Jpem9udGFsIEV2ZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogYmlnZ2VyIHRvdWNoIGFyZWEgd2hlbiBzZWxlY3RlZCAqL1xuLmZjLWgtZXZlbnQuZmMtc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICAvKiBiZWxvdyByZXNpemVycyAqL1xuICB0b3A6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLyogZXZlbnRzIHRoYXQgYXJlIGNvbnRpbnVpbmcgdG8vZnJvbSBhbm90aGVyIHdlZWsuIGtpbGwgcm91bmRlZCBjb3JuZXJzIGFuZCBidXR0IHVwIGFnYWluc3QgZWRnZSAqL1xuLmZjLWx0ciAuZmMtaC1ldmVudC5mYy1ub3Qtc3RhcnQsXG4uZmMtcnRsIC5mYy1oLWV2ZW50LmZjLW5vdC1lbmQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICAvKiByZXBsYWNlIHRoZSBib3JkZXIgd2l0aCBwYWRkaW5nICovXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5mYy1sdHIgLmZjLWgtZXZlbnQuZmMtbm90LWVuZCxcbi5mYy1ydGwgLmZjLWgtZXZlbnQuZmMtbm90LXN0YXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgLyogcmVwbGFjZSB0aGUgYm9yZGVyIHdpdGggcGFkZGluZyAqL1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi8qIHJlc2l6ZXIgKGN1cnNvciBBTkQgdG91Y2ggZGV2aWNlcykgKi9cbi8qIGxlZnQgcmVzaXplciAgKi9cbi5mYy1sdHIgLmZjLWgtZXZlbnQgLmZjLXN0YXJ0LXJlc2l6ZXIsXG4uZmMtcnRsIC5mYy1oLWV2ZW50IC5mYy1lbmQtcmVzaXplciB7XG4gIGN1cnNvcjogdy1yZXNpemU7XG4gIGxlZnQ6IC0xcHg7XG4gIC8qIG92ZXJjb21lIGJvcmRlciAqL1xufVxuXG4vKiByaWdodCByZXNpemVyICovXG4uZmMtbHRyIC5mYy1oLWV2ZW50IC5mYy1lbmQtcmVzaXplcixcbi5mYy1ydGwgLmZjLWgtZXZlbnQgLmZjLXN0YXJ0LXJlc2l6ZXIge1xuICBjdXJzb3I6IGUtcmVzaXplO1xuICByaWdodDogLTFweDtcbiAgLyogb3ZlcmNvbWUgYm9yZGVyICovXG59XG5cbi8qIHJlc2l6ZXIgKG1vdXNlIGRldmljZXMpICovXG4uZmMtaC1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLXJlc2l6ZXIge1xuICB3aWR0aDogN3B4O1xuICB0b3A6IC0xcHg7XG4gIC8qIG92ZXJjb21lIHRvcCBib3JkZXIgKi9cbiAgYm90dG9tOiAtMXB4O1xuICAvKiBvdmVyY29tZSBib3R0b20gYm9yZGVyICovXG59XG5cbi8qIHJlc2l6ZXIgKHRvdWNoIGRldmljZXMpICovXG4uZmMtaC1ldmVudC5mYy1zZWxlY3RlZCAuZmMtcmVzaXplciB7XG4gIC8qIDh4OCBsaXR0bGUgZG90ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIHZlcnRpY2FsbHkgY2VudGVyICovXG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG4vKiBsZWZ0IHJlc2l6ZXIgICovXG4uZmMtbHRyIC5mYy1oLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1zdGFydC1yZXNpemVyLFxuLmZjLXJ0bCAuZmMtaC1ldmVudC5mYy1zZWxlY3RlZCAuZmMtZW5kLXJlc2l6ZXIge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgLyogY2VudGVycyB0aGUgOHg4IGRvdCBvbiB0aGUgbGVmdCBlZGdlICovXG59XG5cbi8qIHJpZ2h0IHJlc2l6ZXIgKi9cbi5mYy1sdHIgLmZjLWgtZXZlbnQuZmMtc2VsZWN0ZWQgLmZjLWVuZC1yZXNpemVyLFxuLmZjLXJ0bCAuZmMtaC1ldmVudC5mYy1zZWxlY3RlZCAuZmMtc3RhcnQtcmVzaXplciB7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbiAgLyogY2VudGVycyB0aGUgOHg4IGRvdCBvbiB0aGUgcmlnaHQgZWRnZSAqL1xufVxuXG4vKiBEYXlHcmlkIGV2ZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuV2UgdXNlIHRoZSBmdWxsIFwiZmMtZGF5LWdyaWQtZXZlbnRcIiBjbGFzcyBpbnN0ZWFkIG9mIHVzaW5nIGRlc2NlbmRhbnRzIGJlY2F1c2UgdGhlIGV2ZW50IHdvbid0XG5iZSBhIGRlc2NlbmRhbnQgb2YgdGhlIGdyaWQgd2hlbiBpdCBpcyBiZWluZyBkcmFnZ2VkLlxuKi9cbi5mYy1kYXktZ3JpZC1ldmVudCB7XG4gIG1hcmdpbjogMXB4IDJweCAwO1xuICAvKiBzcGFjaW5nIGJldHdlZW4gZXZlbnRzIGFuZCBlZGdlcyAqL1xuICBwYWRkaW5nOiAwIDFweDtcbn1cblxudHI6Zmlyc3QtY2hpbGQgPiB0ZCA+IC5mYy1kYXktZ3JpZC1ldmVudCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgLyogYSBsaXR0bGUgYml0IG1vcmUgc3BhY2UgYmVmb3JlIHRoZSBmaXJzdCBldmVudCAqL1xufVxuXG4uZmMtbWlycm9yLXNrZWxldG9uIHRyOmZpcnN0LWNoaWxkID4gdGQgPiAuZmMtZGF5LWdyaWQtZXZlbnQge1xuICBtYXJnaW4tdG9wOiAwO1xuICAvKiBleGNlcHQgZm9yIG1pcnJvciBza2VsZXRvbiAqL1xufVxuXG4uZmMtZGF5LWdyaWQtZXZlbnQgLmZjLWNvbnRlbnQge1xuICAvKiBmb3JjZSBldmVudHMgdG8gYmUgb25lLWxpbmUgdGFsbCAqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmMtZGF5LWdyaWQtZXZlbnQgLmZjLXRpbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogcmVzaXplciAoY3Vyc29yIGRldmljZXMpICovXG4vKiBsZWZ0IHJlc2l6ZXIgICovXG4uZmMtbHRyIC5mYy1kYXktZ3JpZC1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLXN0YXJ0LXJlc2l6ZXIsXG4uZmMtcnRsIC5mYy1kYXktZ3JpZC1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLWVuZC1yZXNpemVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIC8qIHRvIHRoZSBkYXkgY2VsbCdzIGVkZ2UgKi9cbn1cblxuLyogcmlnaHQgcmVzaXplciAqL1xuLmZjLWx0ciAuZmMtZGF5LWdyaWQtZXZlbnQuZmMtYWxsb3ctbW91c2UtcmVzaXplIC5mYy1lbmQtcmVzaXplcixcbi5mYy1ydGwgLmZjLWRheS1ncmlkLWV2ZW50LmZjLWFsbG93LW1vdXNlLXJlc2l6ZSAuZmMtc3RhcnQtcmVzaXplciB7XG4gIG1hcmdpbi1yaWdodDogLTJweDtcbiAgLyogdG8gdGhlIGRheSBjZWxsJ3MgZWRnZSAqL1xufVxuXG4vKiBFdmVudCBMaW1pdGluZ1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogXCJtb3JlXCIgbGluayB0aGF0IHJlcHJlc2VudHMgaGlkZGVuIGV2ZW50cyAqL1xuYS5mYy1tb3JlIHtcbiAgbWFyZ2luOiAxcHggM3B4O1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEuZmMtbW9yZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZmMtbGltaXRlZCB7XG4gIC8qIHJvd3MgYW5kIGNlbGxzIHRoYXQgYXJlIGhpZGRlbiBiZWNhdXNlIG9mIGEgXCJtb3JlXCIgbGluayAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBwb3BvdmVyIHRoYXQgYXBwZWFycyB3aGVuIFwibW9yZVwiIGxpbmsgaXMgY2xpY2tlZCAqL1xuLmZjLWRheS1ncmlkIC5mYy1yb3cge1xuICB6LWluZGV4OiAxO1xuICAvKiBtYWtlIHRoZSBcIm1vcmVcIiBwb3BvdmVyIG9uZSBoaWdoZXIgdGhhbiB0aGlzICovXG59XG5cbi5mYy1tb3JlLXBvcG92ZXIge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMjIwcHg7XG59XG5cbi5mYy1tb3JlLXBvcG92ZXIgLmZjLWV2ZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIE5vdyBJbmRpY2F0b3Jcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1ub3ctaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDAgc29saWQgcmVkO1xufVxuXG4vKiBVdGlsaXRpZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy11bnNlbGVjdGFibGUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4vKlxuVE9ETzogbW9yZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIHRoaXMgZmlsZSBhbmQgY29tbW9uLmNzc1xuKi9cbi8qIENvbG9yc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXVudGhlbWVkIHRoLFxuLmZjLXVudGhlbWVkIHRkLFxuLmZjLXVudGhlbWVkIHRoZWFkLFxuLmZjLXVudGhlbWVkIHRib2R5LFxuLmZjLXVudGhlbWVkIC5mYy1kaXZpZGVyLFxuLmZjLXVudGhlbWVkIC5mYy1yb3csXG4uZmMtdW50aGVtZWQgLmZjLWNvbnRlbnQsXG4uZmMtdW50aGVtZWQgLmZjLXBvcG92ZXIsXG4uZmMtdW50aGVtZWQgLmZjLWxpc3Qtdmlldyxcbi5mYy11bnRoZW1lZCAuZmMtbGlzdC1oZWFkaW5nIHRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuXG4uZmMtdW50aGVtZWQgLmZjLXBvcG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZmMtdW50aGVtZWQgLmZjLWRpdmlkZXIsXG4uZmMtdW50aGVtZWQgLmZjLXBvcG92ZXIgLmZjLWhlYWRlcixcbi5mYy11bnRoZW1lZCAuZmMtbGlzdC1oZWFkaW5nIHRkIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmZjLXVudGhlbWVkIHRkLmZjLXRvZGF5IHtcbiAgYmFja2dyb3VuZDogI2ZjZjhlMztcbn1cblxuLmZjLXVudGhlbWVkIC5mYy1kaXNhYmxlZC1kYXkge1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi8qIEljb25zXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnJvbSBodHRwczovL2ZlYXRoZXJpY29ucy5jb20vIGFuZCBidWlsdCB3aXRoIEljb01vb25cbiovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZmNpY29uc1wiO1xuICBzcmM6IHVybChcImRhdGE6YXBwbGljYXRpb24veC1mb250LXR0ZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBTEFJQUFBd0F3VDFNdk1nOFNCZkFBQUFDOEFBQUFZR050WVhBWFZ0S05BQUFCSEFBQUFGUm5ZWE53QUFBQUVBQUFBWEFBQUFBSVoyeDVaZ1l5ZHhJQUFBRjRBQUFGTkdobFlXUVVKN2NJQUFBR3JBQUFBRFpvYUdWaEIyMER6QUFBQnVRQUFBQWthRzEwZUNJQUJoUUFBQWNJQUFBQUxHeHZZMkVENEFVNkFBQUhOQUFBQUJodFlYaHdBQThBakFBQUIwd0FBQUFnYm1GdFpYc3I2OTBBQUFkc0FBQUJobkJ2YzNRQUF3QUFBQUFJOUFBQUFDQUFBd1BBQVpBQUJRQUFBcGtDekFBQUFJOENtUUxNQUFBQjZ3QXpBUWtBQUFBQUFBQUFBQUFBQUFBQUFBQUJFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQURwQmdQQS84QUFRQVBBQUVBQUFBQUJBQUFBQUFBQUFBQUFBQUFnQUFBQUFBQURBQUFBQXdBQUFCd0FBUUFEQUFBQUhBQURBQUVBQUFBY0FBUUFPQUFBQUFvQUNBQUNBQUlBQVFBZzZRYi8vZi8vQUFBQUFBQWc2UUQvL2YvL0FBSC80eGNFQUFNQUFRQUFBQUFBQUFBQUFBQUFBUUFCLy84QUR3QUJBQUFBQUFBQUFBQUFBZ0FBTnprQkFBQUFBQUVBQUFBQUFBQUFBQUFDQUFBM09RRUFBQUFBQVFBQUFBQUFBQUFBQUFJQUFEYzVBUUFBQUFBQkFXSUFqUUtlQXNrQUV3QUFKU2MzTmpRbkppSUhBUVlVRndFV01qYzJOQ2NDbnVMaURRME1KQXovQUEwTkFRQU1KQXdORGNuaTRnd2pEUXdNL3dBTkl3ei9BQTBORENNTkFBQUFBUUZpQUkwQ25nTEpBQk1BQUNVQk5qUW5BU1lpQndZVUh3RUhCaFFYRmpJM0FaNEJBQTBOL3dBTUpBd05EZUxpRFEwTUpBeU5BUUFNSXcwQkFBd01EU01NNHVJTkl3d05EUUFBQUFJQTRnQzNBeDRDbmdBVEFDY0FBQ1VuTnpZMEp5WWlEd0VHRkI4QkZqSTNOalFuSVNjM05qUW5KaUlQQVFZVUh3RVdNamMyTkNjQjg3ZTNEUTBNSXczVkRRM1ZEU01NRFEwQks3ZTNEUTBNSkF6VkRRM1ZEQ1FNRFEzenVMY01KQXdORGRVTkl3eldEQXdOSXd5NHR3d2tEQTBOMVEwakROWU1EQTBqREFBQUFnRGlBTGNESGdLZUFCTUFKd0FBSlRjMk5DOEJKaUlIQmhRZkFRY0dGQmNXTWpjaE56WTBMd0VtSWdjR0ZCOEJCd1lVRnhZeU53SkoxUTBOMVEwakRBME50N2NORFF3akRmN1YxUTBOMVF3a0RBME50N2NORFF3a0RMZldEQ01OMVEwTkRDUU10N2dNSXcwTUROWU1JdzNWRFEwTUpBeTN1QXdqRFF3TUFBQURBRlVBQUFPckExVUFNd0JvQUhjQUFCTWlCZ2NPQVFjT0FRY09BUlVSRkJZWEhnRVhIZ0VYSGdFeklUSTJOejRCTno0Qk56NEJOUkUwSmljdUFTY3VBU2N1QVNNRklUSVdGeDRCRng0QkZ4NEJGUkVVQmdjT0FRY09BUWNPQVNNaElpWW5MZ0VuTGdFbkxnRTFFVFEyTno0Qk56NEJOejRCTXhNaE1qWTFOQ1lqSVNJR0ZSUVdNOVVOR0F3TEZRa0pEZ1VGQlFVRkJRNEpDUlVMREJnTkFsWU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOL2FvQ1ZnUUlCQVFIQXdNRkFRSUJBUUlCQlFNREJ3UUVDQVQ5cWdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBU0FBVllSR1JrUi9xb1JHUmtSQTFVRkJBVU9DUWtWREFzWkRmMnJEUmtMREJVSkNBNEZCUVVGQlFVT0NRZ1ZEQXNaRFFKVkRSa0xEQlVKQ1E0RkJBVlZBZ0VDQlFNQ0J3UUVDQVg5cXdRSkF3UUhBd01GQVFJQ0FnSUJCUU1EQndRRENRUUNWUVVJQkFRSEFnTUZBZ0VDL29BWkVoRVpHUkVTR1FBQUFBQURBRlVBQUFPckExVUFNd0JvQUlrQUFCTWlCZ2NPQVFjT0FRY09BUlVSRkJZWEhnRVhIZ0VYSGdFeklUSTJOejRCTno0Qk56NEJOUkUwSmljdUFTY3VBU2N1QVNNRklUSVdGeDRCRng0QkZ4NEJGUkVVQmdjT0FRY09BUWNPQVNNaElpWW5MZ0VuTGdFbkxnRTFFVFEyTno0Qk56NEJOejRCTXhNekZSUVdNekkyUFFFek1qWTFOQ1lyQVRVMEppTWlCaDBCSXlJR0ZSUVdNOVVOR0F3TEZRa0pEZ1VGQlFVRkJRNEpDUlVMREJnTkFsWU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOL2FvQ1ZnUUlCQVFIQXdNRkFRSUJBUUlCQlFNREJ3UUVDQVQ5cWdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBU0FnQmtTRWhtQUVSa1pFWUFaRWhJWmdCRVpHUkVEVlFVRUJRNEpDUlVNQ3hrTi9hc05HUXNNRlFrSURnVUZCUVVGQlE0SkNCVU1DeGtOQWxVTkdRc01GUWtKRGdVRUJWVUNBUUlGQXdJSEJBUUlCZjJyQkFrREJBY0RBd1VCQWdJQ0FnRUZBd01IQkFNSkJBSlZCUWdFQkFjQ0F3VUNBUUwrZ0lBU0dSa1NnQmtTRVJtQUVoa1pFb0FaRVJJWkFBQUJBT0lBalFNZUFza0FJQUFBRXhjSEJoUVhGakkvQVJjV01qYzJOQzhCTnpZMEp5WWlEd0VuSmlJSEJoUVg0dUxpRFEwTUpBemk0Z3drREEwTjR1SU5EUXdrRE9MaURDUU1EUTBDamVMaURTTU1EUTNoNFEwTkRDTU40dUlNSXcwTURPTGlEQXdOSXd3QUFBQUJBQUFBQVFBQWE1bjB5MThQUFBVQUN3UUFBQUFBQU5pdk9Wc0FBQUFBMks4NVd3QUFBQUFEcXdOVkFBQUFDQUFDQUFBQUFBQUFBQUVBQUFQQS84QUFBQVFBQUFBQUFBT3JBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUxCQUFBQUFBQUFBQUFBQUFBQWdBQUFBUUFBV0lFQUFGaUJBQUE0Z1FBQU9JRUFBQlZCQUFBVlFRQUFPSUFBQUFBQUFvQUZBQWVBRVFBYWdDcUFPb0JuZ0prQXBvQUFRQUFBQXNBaWdBREFBQUFBQUFDQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE0QXJnQUJBQUFBQUFBQkFBY0FBQUFCQUFBQUFBQUNBQWNBWUFBQkFBQUFBQUFEQUFjQU5nQUJBQUFBQUFBRUFBY0FkUUFCQUFBQUFBQUZBQXNBRlFBQkFBQUFBQUFHQUFjQVN3QUJBQUFBQUFBS0FCb0FpZ0FEQUFFRUNRQUJBQTRBQndBREFBRUVDUUFDQUE0QVp3QURBQUVFQ1FBREFBNEFQUUFEQUFFRUNRQUVBQTRBZkFBREFBRUVDUUFGQUJZQUlBQURBQUVFQ1FBR0FBNEFVZ0FEQUFFRUNRQUtBRFFBcEdaamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMxWmxjbk5wYjI0Z01TNHdBRllBWlFCeUFITUFhUUJ2QUc0QUlBQXhBQzRBTUdaamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMyWmphV052Ym5NQVpnQmpBR2tBWXdCdkFHNEFjMUpsWjNWc1lYSUFVZ0JsQUdjQWRRQnNBR0VBY21aamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMwWnZiblFnWjJWdVpYSmhkR1ZrSUdKNUlFbGpiMDF2YjI0dUFFWUFid0J1QUhRQUlBQm5BR1VBYmdCbEFISUFZUUIwQUdVQVpBQWdBR0lBZVFBZ0FFa0FZd0J2QUUwQWJ3QnZBRzRBTGdBQUFBTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE9XCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uZmMtaWNvbiB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiBcImZjaWNvbnNcIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5mYy1pY29uLWNoZXZyb24tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgFwiO1xufVxuXG4uZmMtaWNvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSBXCI7XG59XG5cbi5mYy1pY29uLWNoZXZyb25zLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIJcIjtcbn1cblxuLmZjLWljb24tY2hldnJvbnMtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupINcIjtcbn1cblxuLmZjLWljb24tbWludXMtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSEXCI7XG59XG5cbi5mYy1pY29uLXBsdXMtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSFXCI7XG59XG5cbi5mYy1pY29uLXg6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIZcIjtcbn1cblxuLmZjLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEJ1dHRvbnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5Mb3RzIHRha2VuIGZyb20gRmxhdGx5IChNSVQpOiBodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZmxhdGx5L2Jvb3RzdHJhcC5jc3NcbiovXG4vKiByZXNldCAqL1xuLmZjLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmZjLWJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbn1cblxuLmZjLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4uZmMtYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmMtYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiB0aGVtZSAqL1xuLmZjLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjRlbSAwLjY1ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG59XG5cbi5mYy1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmMtYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0NCwgNjIsIDgwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDQsIDYyLCA4MCwgMC4yNSk7XG59XG5cbi5mYy1idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY1O1xufVxuXG4vKiBcInByaW1hcnlcIiBjb2xvcmluZyAqL1xuLmZjLWJ1dHRvbi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XG4gIGJvcmRlci1jb2xvcjogIzJDM0U1MDtcbn1cblxuLmZjLWJ1dHRvbi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTJiMzc7XG4gIGJvcmRlci1jb2xvcjogIzFhMjUyZjtcbn1cblxuLmZjLWJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3NiwgOTEsIDEwNiwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzYsIDkxLCAxMDYsIDAuNSk7XG59XG5cbi5mYy1idXR0b24tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzRTUwO1xuICBib3JkZXItY29sb3I6ICMyQzNFNTA7XG59XG5cbi5mYy1idXR0b24tcHJpbWFyeTpub3QoOmRpc2FibGVkKTphY3RpdmUsXG4uZmMtYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCkuZmMtYnV0dG9uLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNTJmO1xuICBib3JkZXItY29sb3I6ICMxNTFlMjc7XG59XG5cbi5mYy1idXR0b24tcHJpbWFyeTpub3QoOmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXG4uZmMtYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCkuZmMtYnV0dG9uLWFjdGl2ZTpmb2N1cyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzYsIDkxLCAxMDYsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc2LCA5MSwgMTA2LCAwLjUpO1xufVxuXG4vKiBpY29ucyB3aXRoaW4gYnV0dG9ucyAqL1xuLmZjLWJ1dHRvbiAuZmMtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi8qIEJ1dHRvbnMgR3JvdXBzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtYnV0dG9uLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbjpob3ZlciB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOmZvY3VzLFxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246YWN0aXZlLFxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b24uZmMtYnV0dG9uLWFjdGl2ZSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLyogUG9wb3ZlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXVudGhlbWVkIC5mYy1wb3BvdmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi8qIExpc3QgVmlld1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXVudGhlbWVkIC5mYy1saXN0LWl0ZW06aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4vKiBUb29sYmFyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZjLXRvb2xiYXIuZmMtaGVhZGVyLXRvb2xiYXIge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cblxuLmZjLXRvb2xiYXIuZmMtZm9vdGVyLXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbn1cblxuLyogaW5uZXIgY29udGVudCAqL1xuLmZjLXRvb2xiYXIgPiAqID4gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcbn1cblxuLmZjLXRvb2xiYXIgaDIge1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBWaWV3IFN0cnVjdHVyZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXZpZXctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiB1bmRvIHR3aXR0ZXIgYm9vdHN0cmFwJ3MgYm94LXNpemluZyBydWxlcy4gbm9ybWFsaXplcyBwb3NpdGlvbmluZyB0ZWNobmlxdWVzICovXG4vKiBkb24ndCBkbyB0aGlzIGZvciB0aGUgdG9vbGJhciBiZWNhdXNlIHdlJ2xsIHdhbnQgYm9vdHN0cmFwIHRvIHN0eWxlIHRob3NlIGJ1dHRvbnMgYXMgc29tZSBwdCAqL1xuLmZjLXZpZXctY29udGFpbmVyICosXG4uZmMtdmlldy1jb250YWluZXIgKjpiZWZvcmUsXG4uZmMtdmlldy1jb250YWluZXIgKjphZnRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uZmMtdmlldyxcbi5mYy12aWV3ID4gdGFibGUge1xuICAvKiBzbyBkcmFnZ2VkIGVsZW1lbnRzIGNhbiBiZSBhYm92ZSB0aGUgdmlldydzIG1haW4gZWxlbWVudCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5mYyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBHbG9iYWwgRXZlbnQgUmVzdHlsaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmZjLWV2ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cblxuICAuZmMtZXZlbnQgLmZjLXJlc2l6ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBUYWJsZSAmIERheS1Sb3cgUmVzdHlsaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmZjIHRoLFxuLmZjIHRkLFxuLmZjIGhyLFxuLmZjIHRoZWFkLFxuLmZjIHRib2R5LFxuLmZjLXJvdyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyoga2lsbCB0aGUgb3ZlcmxhaWQsIGFic29sdXRlbHktcG9zaXRpb25lZCBjb21wb25lbnRzICovXG4gIC8qIGNvbW1vbi4uLiAqL1xuICAuZmMtYmcsXG4uZmMtYmdldmVudC1za2VsZXRvbixcbi5mYy1oaWdobGlnaHQtc2tlbGV0b24sXG4uZmMtbWlycm9yLXNrZWxldG9uLFxuLmZjLWJnZXZlbnQtY29udGFpbmVyLFxuLmZjLWJ1c2luZXNzLWNvbnRhaW5lcixcbi5mYy1oaWdobGlnaHQtY29udGFpbmVyLFxuLmZjLW1pcnJvci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBkb24ndCBmb3JjZSBhIG1pbi1oZWlnaHQgb24gcm93cyAoZm9yIERheUdyaWQpICovXG4gIC5mYyB0Ym9keSAuZmMtcm93IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAvKiB1bmRvIGhlaWdodCB0aGF0IEpTIHNldCBpbiBkaXN0cmlidXRlSGVpZ2h0ICovXG4gICAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIC8qIHVuZG8gdGhlIG1pbi1oZWlnaHQgZnJvbSBlYWNoIHZpZXcncyBzcGVjaWZpYyBzdHlsZXNoZWV0ICovXG4gIH1cblxuICAuZmMgdGJvZHkgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAvKiB1bmRvIC5mYy1yaWdpZCAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgLyogdXNlIGEgbW9yZSBib3JkZXItZnJpZW5kbHkgbWV0aG9kIGZvciB0aGlzLi4uICovXG4gIH1cblxuICAuZmMgdGJvZHkgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICAvKiBvbmx5IHdvcmtzIGluIG5ld2VyIGJyb3dzZXJzICovXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAvKiAuLi5naXZlcyBzcGFjZSB3aXRoaW4gdGhlIHNrZWxldG9uLiBhbHNvIGVuc3VyZXMgbWluIGhlaWdodCBpbiBhIHdheSAqL1xuICB9XG5cbiAgLmZjIHRib2R5IC5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGFibGUge1xuICAgIC8qIHByb3ZpZGVzIGEgbWluLWhlaWdodCBmb3IgdGhlIHJvdywgYnV0IG9ubHkgZWZmZWN0aXZlIGZvciBJRSwgd2hpY2ggZXhhZ2dlcmF0ZXMgdGhpcyB2YWx1ZSxcbiAgICAgICBtYWtpbmcgaXQgbG9vayBtb3JlIGxpa2UgM2VtLiBmb3Igb3RoZXIgYnJvd2VycywgaXQgd2lsbCBhbHJlYWR5IGJlIHRoaXMgdGFsbCAqL1xuICAgIGhlaWdodDogMWVtO1xuICB9XG5cbiAgLyogVW5kbyBtb250aC12aWV3IGV2ZW50IGxpbWl0aW5nLiBEaXNwbGF5IGFsbCBldmVudHMgYW5kIGhpZGUgdGhlIFwibW9yZVwiIGxpbmtzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmZjLW1vcmUtY2VsbCxcbi5mYy1tb3JlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmMgdHIuZmMtbGltaXRlZCB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmMgdGQuZmMtbGltaXRlZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZjLXBvcG92ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogbmV2ZXIgZGlzcGxheSB0aGUgXCJtb3JlLi5cIiBwb3BvdmVyIGluIHByaW50IG1vZGUgKi9cbiAgfVxuXG4gIC8qIFRpbWVHcmlkIFJlc3R5bGluZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qIHVuZG8gdGhlIG1pbi1oZWlnaHQgMTAwJSB0cmljayB1c2VkIHRvIGZpbGwgdGhlIGNvbnRhaW5lcidzIGhlaWdodCAqL1xuICAuZmMtdGltZS1ncmlkIHtcbiAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBkb24ndCBkaXNwbGF5IHRoZSBzaWRlIGF4aXMgYXQgYWxsIChcImFsbC1kYXlcIiBhbmQgdGltZSBjZWxscykgKi9cbiAgLmZjLXRpbWVHcmlkLXZpZXcgLmZjLWF4aXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBkb24ndCBkaXNwbGF5IHRoZSBob3Jpem9udGFsIGxpbmVzICovXG4gIC5mYy1zbGF0cyxcbi5mYy10aW1lLWdyaWQgaHIge1xuICAgIC8qIHRoaXMgaHIgaXMgdXNlZCB3aGVuIGhlaWdodCBpcyB1bmRlcnVzZWQgYW5kIG5lZWRzIHRvIGJlIGZpbGxlZCAqL1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAvKiBpbXBvcnRhbnQgb3ZlcnJpZGVzIGlubGluZSBkZWNsYXJhdGlvbiAqL1xuICB9XG5cbiAgLyogbGV0IHRoZSBjb250YWluZXIgdGhhdCBob2xkcyB0aGUgZXZlbnRzIGJlIG5hdHVyYWxseSBwb3NpdGlvbmVkIGFuZCBjcmVhdGUgcmVhbCBoZWlnaHQgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gIC8qIGluIGNhc2UgdGhlcmUgYXJlIG5vIGV2ZW50cywgd2Ugc3RpbGwgd2FudCBzb21lIGhlaWdodCAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1jb250ZW50LXNrZWxldG9uIHRhYmxlIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxuXG4gIC8qIGtpbGwgdGhlIGhvcml6b250YWwgc3BhY2luZyBtYWRlIGJ5IHRoZSBldmVudCBjb250YWluZXIuIGV2ZW50IG1hcmdpbnMgd2lsbCBiZSBkb25lIGJlbG93ICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBUaW1lR3JpZCAqRXZlbnQqIFJlc3R5bGluZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qIG5hdHVyYWxseSBwb3NpdGlvbiBldmVudHMsIHZlcnRpY2FsbHkgc3RhY2tpbmcgdGhlbSAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1ldmVudCB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogM3B4IDJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogZm9yIGV2ZW50cyB0aGF0IGNvbnRpbnVlIHRvIGEgZnV0dXJlIGRheSwgZ2l2ZSB0aGUgYm90dG9tIGJvcmRlciBiYWNrICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LmZjLW5vdC1lbmQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogaW5kaWNhdGUgdGhlIGV2ZW50IGNvbnRpbnVlcyB2aWEgXCIuLi5cIiB0ZXh0ICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LmZjLW5vdC1lbmQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiLi4uXCI7XG4gIH1cblxuICAvKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGNvbnRpbnVhdGlvbnMgZnJvbSBwcmV2aW91cyBkYXlzLCBnaXZlIHRoZSB0b3AgYm9yZGVyIGJhY2sgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQuZmMtbm90LXN0YXJ0IHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIGluZGljYXRlIHRoZSBldmVudCBpcyBhIGNvbnRpbnVhdGlvbiB2aWEgXCIuLi5cIiB0ZXh0ICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LmZjLW5vdC1zdGFydDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLi4uXCI7XG4gIH1cblxuICAvKiB0aW1lICovXG4gIC8qIHVuZG8gYSBwcmV2aW91cyBkZWNsYXJhdGlvbiBhbmQgbGV0IHRoZSB0aW1lIHRleHQgc3BhbiB0byBhIHNlY29uZCBsaW5lICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50IC5mYy10aW1lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBoaWRlIHRoZSB0aGUgdGltZSB0aGF0IGlzIG5vcm1hbGx5IGRpc3BsYXllZC4uLiAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1ldmVudCAuZmMtdGltZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogLi4ucmVwbGFjZSBpdCB3aXRoIGEgbW9yZSB2ZXJib3NlIHZlcnNpb24gKGluY2x1ZGVzIEFNL1BNKSBzdG9yZWQgaW4gYW4gaHRtbCBhdHRyaWJ1dGUgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQgLmZjLXRpbWU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1mdWxsKTtcbiAgfVxuXG4gIC8qIFZlcnRpY2FsIFNjcm9sbGVyICYgQ29udGFpbmVyc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qIGtpbGwgdGhlIHNjcm9sbGJhcnMgYW5kIGFsbG93IG5hdHVyYWwgaGVpZ2h0ICovXG4gIC5mYy1zY3JvbGxlcixcbi5mYy1kYXktZ3JpZC1jb250YWluZXIsXG4uZmMtdGltZS1ncmlkLWNvbnRhaW5lciB7XG4gICAgLyogKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyoga2lsbCB0aGUgaG9yaXpvbnRhbCBib3JkZXIvcGFkZGluZyB1c2VkIHRvIGNvbXBlbnNhdGUgZm9yIHNjcm9sbGJhcnMgKi9cbiAgLmZjLXJvdyB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBCdXR0b24gQ29udHJvbHNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuZmMtYnV0dG9uLWdyb3VwLFxuLmZjIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBkb24ndCBkaXNwbGF5IGFueSBidXR0b24tcmVsYXRlZCBjb250cm9scyAqL1xuICB9XG59XG4iLCIvKiBEYXlHcmlkVmlld1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogZGF5IHJvdyBzdHJ1Y3R1cmUgKi9cbi5mYy1kYXlHcmlkV2Vlay12aWV3IC5mYy1jb250ZW50LXNrZWxldG9uLFxuLmZjLWRheUdyaWREYXktdmlldyAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gIC8qIHRoZXJlIG1heSBiZSB3ZWVrIG51bWJlcnMgaW4gdGhlc2Ugdmlld3MsIHNvIG5vIHBhZGRpbmctdG9wICovXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIC8qIGVuc3VyZSBhIHNwYWNlIGF0IGJvdHRvbSBvZiBjZWxsIGZvciB1c2VyIHNlbGVjdGluZy9jbGlja2luZyAqL1xufVxuXG4uZmMtZGF5R3JpZC12aWV3IC5mYy1ib2R5IC5mYy1yb3cge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIC8qIGVuc3VyZSB0aGF0IGFsbCByb3dzIGFyZSBhdCBsZWFzdCB0aGlzIHRhbGwgKi9cbn1cblxuLyogYSBcInJpZ2lkXCIgcm93IHdpbGwgdGFrZSB1cCBhIGNvbnN0YW50IGFtb3VudCBvZiBoZWlnaHQgYmVjYXVzZSBjb250ZW50LXNrZWxldG9uIGlzIGFic29sdXRlICovXG4uZmMtcm93LmZjLXJpZ2lkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZjLXJvdy5mYy1yaWdpZCAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLyogd2VlayBhbmQgZGF5IG51bWJlciBzdHlsaW5nICovXG4uZmMtZGF5LXRvcC5mYy1vdGhlci1tb250aCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmZjLWRheUdyaWQtdmlldyAuZmMtd2Vlay1udW1iZXIsXG4uZmMtZGF5R3JpZC12aWV3IC5mYy1kYXktbnVtYmVyIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZmMtZGF5R3JpZC12aWV3IHRoLmZjLXdlZWstbnVtYmVyLFxuLmZjLWRheUdyaWQtdmlldyB0aC5mYy1kYXktbnVtYmVyIHtcbiAgcGFkZGluZzogMCAycHg7XG4gIC8qIGNvbHVtbiBoZWFkZXJzIGNhbid0IGhhdmUgYXMgbXVjaCB2IHNwYWNlICovXG59XG5cbi5mYy1sdHIgLmZjLWRheUdyaWQtdmlldyAuZmMtZGF5LXRvcCAuZmMtZGF5LW51bWJlciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZjLXJ0bCAuZmMtZGF5R3JpZC12aWV3IC5mYy1kYXktdG9wIC5mYy1kYXktbnVtYmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mYy1sdHIgLmZjLWRheUdyaWQtdmlldyAuZmMtZGF5LXRvcCAuZmMtd2Vlay1udW1iZXIge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAwO1xufVxuXG4uZmMtcnRsIC5mYy1kYXlHcmlkLXZpZXcgLmZjLWRheS10b3AgLmZjLXdlZWstbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAzcHg7XG59XG5cbi5mYy1kYXlHcmlkLXZpZXcgLmZjLWRheS10b3AgLmZjLXdlZWstbnVtYmVyIHtcbiAgbWluLXdpZHRoOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLyogd2hlbiB3ZWVrL2RheSBudW1iZXIgaGF2ZSBvd24gY29sdW1uICovXG4uZmMtZGF5R3JpZC12aWV3IHRkLmZjLXdlZWstbnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmMtZGF5R3JpZC12aWV3IHRkLmZjLXdlZWstbnVtYmVyID4gKiB7XG4gIC8qIHdvcmsgYXJvdW5kIHRoZSB3YXkgd2UgZG8gY29sdW1uIHJlc2l6aW5nIGFuZCBlbnN1cmUgYSBtaW5pbXVtIHdpZHRoICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxLjI1ZW07XG59XG4iLCJAaW1wb3J0ICd+QGZ1bGxjYWxlbmRhci9jb3JlL21haW4uY3NzJztcbkBpbXBvcnQgJ35AZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3MnO1xuLmZjLWRheS1ncmlkLWV2ZW50IHtjb2xvcjogd2hpdGUhaW1wb3J0YW50O31cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/sofbox/full-calendar/full-calendar.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/sofbox/full-calendar/full-calendar.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FullCalendarComponent */

  /***/
  function srcAppComponentsSofboxFullCalendarFullCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullCalendarComponent", function () {
      return FullCalendarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fullcalendar/daygrid */
    "./node_modules/@fullcalendar/daygrid/main.esm.js");
    /* harmony import */


    var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fullcalendar/timegrid */
    "./node_modules/@fullcalendar/timegrid/main.esm.js");

    var FullCalendarComponent = /*#__PURE__*/function () {
      function FullCalendarComponent() {
        _classCallCheck(this, FullCalendarComponent);

        this.calendarWeekends = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"]];
      }

      _createClass(FullCalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FullCalendarComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FullCalendarComponent.prototype, "calendarWeekends", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FullCalendarComponent.prototype, "calendarPlugins", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FullCalendarComponent.prototype, "calendarEvents", void 0);
    FullCalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-full-calendar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./full-calendar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/full-calendar/full-calendar.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./full-calendar.component.css */
      "./src/app/components/sofbox/full-calendar/full-calendar.component.css"))["default"]]
    })], FullCalendarComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/loaders/loader1/loader.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/sofbox/loaders/loader1/loader.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppComponentsSofboxLoadersLoader1LoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/loaders/loader1/loader.component.html"))["default"]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/menus/list-style1/list-style1.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/sofbox/menus/list-style1/list-style1.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ListStyle1Component */

  /***/
  function srcAppComponentsSofboxMenusListStyle1ListStyle1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListStyle1Component", function () {
      return ListStyle1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../plugins.service */
    "./src/app/plugins.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ListStyle1Component = /*#__PURE__*/function () {
      function ListStyle1Component(plugins, router) {
        _classCallCheck(this, ListStyle1Component);

        this.plugins = plugins;
        this.router = router;
        this.listClass = 'iq-menu';
        this.collapseName = '';
      }

      _createClass(ListStyle1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {}
      }, {
        key: "activeLink",
        value: function activeLink(item) {
          return this.plugins.getActiveLink(item, this.router.url);
        }
      }]);

      return ListStyle1Component;
    }();

    ListStyle1Component.ctorParameters = function () {
      return [{
        type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListStyle1Component.prototype, "listClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListStyle1Component.prototype, "listItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListStyle1Component.prototype, "collapseOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListStyle1Component.prototype, "collapseName", void 0);
    ListStyle1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-style1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-style1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/menus/list-style1/list-style1.component.html"))["default"]
    })], ListStyle1Component);
    /***/
  },

  /***/
  "./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NavBar1Component */

  /***/
  function srcAppComponentsSofboxNavBarsNavBar1NavBar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBar1Component", function () {
      return NavBar1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

    var NavBar1Component = /*#__PURE__*/function () {
      function NavBar1Component(store) {
        _classCallCheck(this, NavBar1Component);

        this.store = store;
        this.breadCrumbItems = [{
          isActive: false,
          label: 'Dashboard',
          link: '/dashboard'
        }, {
          isActive: true,
          label: 'Dashboard',
          link: '/dashboard'
        }];
        this.messagesList = [{
          title: 'Nik Emma Watson',
          image: '/assets/images/user/01.jpg',
          link: '#',
          date_format: '13 Apr'
        }, {
          title: 'Lorem Ipsum Watson',
          image: '/assets/images/user/02.jpg',
          link: '#',
          date_format: '20 Jun'
        }, {
          title: 'Why do we use it?',
          image: '/assets/images/user/03.jpg',
          link: '#',
          date_format: '08 July'
        }, {
          title: 'Variations Passages',
          image: '/assets/images/user/04.jpg',
          link: '#',
          date_format: '12 Sep'
        }, {
          title: 'Lorem Ipsum generators',
          image: '/assets/images/user/05.jpg',
          link: '#',
          date_format: '5 Dec'
        }];
        this.notificationList = [{
          title: 'New Order Received',
          sub_title: 'Lorem is simply',
          image: null,
          link: '#',
          date_format: '23 hrs ago'
        }, {
          title: 'Emma Watson Nik',
          sub_title: '95 MB',
          image: '/assets/images/user/01.jpg',
          link: '#',
          date_format: 'Just Now'
        }, {
          title: 'New customer is join',
          sub_title: 'John Nik',
          image: '/assets/images/user/02.jpg',
          link: '#',
          date_format: '5 days ago'
        }, {
          title: 'Updates Available',
          sub_title: '120 MB',
          image: '/assets/images/small/jpg.svg',
          link: '#',
          date_format: 'Just Now'
        }];
        this.countTicket = 0;
      }

      _createClass(NavBar1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.store.subscribe(function (state) {
            return _this3.countTicket = state.ticketBooking.ticketCount;
          });
        }
      }, {
        key: "clickPaymentShow",
        value: function clickPaymentShow(countTicketBooking) {
          if (countTicketBooking > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.iq-sidebar-right-menu').addClass('film-side');
          }
        }
      }]);

      return NavBar1Component;
    }();

    NavBar1Component.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    NavBar1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nav-bar1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.html"))["default"]
    })], NavBar1Component);
    /***/
  },

  /***/
  "./src/app/components/sofbox/scroll-top/scroll-top.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/sofbox/scroll-top/scroll-top.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ScrollTopComponent */

  /***/
  function srcAppComponentsSofboxScrollTopScrollTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function () {
      return ScrollTopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var ScrollTopComponent = /*#__PURE__*/function () {
      function ScrollTopComponent() {
        _classCallCheck(this, ScrollTopComponent);
      }

      _createClass(ScrollTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('body,html').animate({
            scrollTop: 0
          }, 800);
        }
      }]);

      return ScrollTopComponent;
    }();

    ScrollTopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scroll-top',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./scroll-top.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/scroll-top/scroll-top.component.html"))["default"]
    })], ScrollTopComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SideBar1Component */

  /***/
  function srcAppComponentsSofboxSideBarsSideBar1SideBar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBar1Component", function () {
      return SideBar1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../fake-api/json/SideBar.json */
    "./src/app/fake-api/json/SideBar.json");

    var _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../../fake-api/json/SideBar.json */
    "./src/app/fake-api/json/SideBar.json", 1);

    var SideBar1Component = /*#__PURE__*/function () {
      function SideBar1Component(apiService) {
        _classCallCheck(this, SideBar1Component);

        this.apiService = apiService;
        this.menuItems = _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_3__.data;
      }

      _createClass(SideBar1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMenuItems();
        }
      }, {
        key: "getMenuItems",
        value: function getMenuItems() {
          /*this.apiService.getMenuList().subscribe((data: {}) => {
            this.menuItems = data;
          });*/
        }
      }]);

      return SideBar1Component;
    }();

    SideBar1Component.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    SideBar1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./side-bar1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.html"))["default"]
    })], SideBar1Component);
    /***/
  },

  /***/
  "./src/app/components/sofbox/sofbox.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/sofbox/sofbox.module.ts ***!
    \****************************************************/

  /*! exports provided: SofboxModule */

  /***/
  function srcAppComponentsSofboxSofboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SofboxModule", function () {
      return SofboxModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loaders/loader1/loader.component */
    "./src/app/components/sofbox/loaders/loader1/loader.component.ts");
    /* harmony import */


    var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./scroll-top/scroll-top.component */
    "./src/app/components/sofbox/scroll-top/scroll-top.component.ts");
    /* harmony import */


    var _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav-bars/nav-bar1/nav-bar1.component */
    "./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.ts");
    /* harmony import */


    var _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./side-bars/side-bar1/side-bar1.component */
    "./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.ts");
    /* harmony import */


    var _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./charts/apex-chart/apex-chart.component */
    "./src/app/components/sofbox/charts/apex-chart/apex-chart.component.ts");
    /* harmony import */


    var _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./breadcrumbs/breadcrumb1/breadcrumb1.component */
    "./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.ts");
    /* harmony import */


    var _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cards/iq-card/iq-card.component */
    "./src/app/components/sofbox/cards/iq-card/iq-card.component.ts");
    /* harmony import */


    var _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./menus/list-style1/list-style1.component */
    "./src/app/components/sofbox/menus/list-style1/list-style1.component.ts");
    /* harmony import */


    var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-scrollbar */
    "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
    /* harmony import */


    var _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./charts/high-chart/high-chart.component */
    "./src/app/components/sofbox/charts/high-chart/high-chart.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./tabs/tab-nav/tab-nav.component */
    "./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.ts");
    /* harmony import */


    var _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tabs/tab-content/tab-content.component */
    "./src/app/components/sofbox/tabs/tab-content/tab-content.component.ts");
    /* harmony import */


    var _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./full-calendar/full-calendar.component */
    "./src/app/components/sofbox/full-calendar/full-calendar.component.ts");
    /* harmony import */


    var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @fullcalendar/angular */
    "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
    /* harmony import */


    var _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./card-with-image/card-with-image.component */
    "./src/app/components/sofbox/card-with-image/card-with-image.component.ts");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");

    var SofboxModule = function SofboxModule() {
      _classCallCheck(this, SofboxModule);
    };

    SofboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__["ScrollTopComponent"], _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_5__["NavBar1Component"], _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_6__["SideBar1Component"], _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartComponent"], _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_8__["Breadcrumb1Component"], _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__["IqCardComponent"], _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_10__["ListStyle1Component"], _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_14__["TabNavComponent"], _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_15__["TabContentComponent"], _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_12__["HighChartComponent"], _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_16__["FullCalendarComponent"], _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_18__["CardWithImageComponent"]],
      exports: [_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__["ScrollTopComponent"], _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_5__["NavBar1Component"], _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_6__["SideBar1Component"], _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartComponent"], _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_8__["Breadcrumb1Component"], _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__["IqCardComponent"], _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_10__["ListStyle1Component"], _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_14__["TabNavComponent"], _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_15__["TabContentComponent"], _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_12__["HighChartComponent"], _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_16__["FullCalendarComponent"], _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_18__["CardWithImageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_11__["NgScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__["CollapseModule"].forRoot()]
    })], SofboxModule);
    /***/
  },

  /***/
  "./src/app/components/sofbox/tabs/tab-content/tab-content.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/sofbox/tabs/tab-content/tab-content.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TabContentComponent */

  /***/
  function srcAppComponentsSofboxTabsTabContentTabContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabContentComponent", function () {
      return TabContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TabContentComponent = /*#__PURE__*/function () {
      function TabContentComponent() {
        _classCallCheck(this, TabContentComponent);

        this.tabContentClass = 'tab-pane fade';
      }

      _createClass(TabContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabContentComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TabContentComponent.prototype, "tabContentClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TabContentComponent.prototype, "tabContentLink", void 0);
    TabContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab-content',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-content/tab-content.component.html"))["default"]
    })], TabContentComponent);
    /***/
  },

  /***/
  "./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TabNavComponent */

  /***/
  function srcAppComponentsSofboxTabsTabNavTabNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabNavComponent", function () {
      return TabNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TabNavComponent = /*#__PURE__*/function () {
      function TabNavComponent() {
        _classCallCheck(this, TabNavComponent);

        this.tabClass = 'nav nav-pills';
        this.tagToggleType = 'pill';
        this.tabNavItems = [];
      }

      _createClass(TabNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabNavComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TabNavComponent.prototype, "tabClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TabNavComponent.prototype, "tagToggleType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TabNavComponent.prototype, "tabNavItems", void 0);
    TabNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab-nav',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.html"))["default"]
    })], TabNavComponent);
    /***/
  },

  /***/
  "./src/app/fake-api/json/SideBar.json":
  /*!********************************************!*\
    !*** ./src/app/fake-api/json/SideBar.json ***!
    \********************************************/

  /*! exports provided: data, default */

  /***/
  function srcAppFakeApiJsonSideBarJson(module) {
    module.exports = JSON.parse("{\"data\":[{\"title\":\"Main\",\"isHeading\":true,\"isActive\":false,\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-separator\"},{\"title\":\"Dashboard\",\"name\":\"dashboard\",\"isHeading\":false,\"isActive\":true,\"link\":\"/\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-home-4-line\",\"children\":[{\"title\":\"Dashboard 1\",\"isActive\":false,\"link\":\"/\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Dashboard 2\",\"isActive\":false,\"link\":\"/dashboard2\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Analytics\",\"isActive\":false,\"link\":\"/analytics\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Tracking\",\"isActive\":false,\"link\":\"/tracking\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Web Analytics\",\"isActive\":false,\"link\":\"/web-analytics\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Patient\",\"isActive\":false,\"link\":\"/patient\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Ticket Booking\",\"isActive\":false,\"link\":\"/ticket-booking\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Email\",\"name\":\"email\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-mail-open-line\",\"children\":[{\"title\":\"Inbox\",\"isActive\":false,\"link\":\"/email\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Email Compose\",\"isActive\":false,\"link\":\"/email/compose\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Calendar\",\"isHeading\":false,\"isActive\":false,\"link\":\"/calendar\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-calendar-2-line\"},{\"title\":\"Chat\",\"isHeading\":false,\"isActive\":false,\"link\":\"/chat\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-message-line\"},{\"title\":\"eCommerce\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-shopping-cart-line\",\"children\":[{\"title\":\"Product\",\"isActive\":false,\"link\":\"/ecommerce/product\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Item Details\",\"isActive\":false,\"link\":\"/ecommerce/itemdetail\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Checkout\",\"isActive\":false,\"link\":\"/ecommerce/checkout\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Components\",\"isHeading\":true,\"isActive\":false,\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-separator\"},{\"title\":\"UI Elements\",\"name\":\"ui-elements\",\"isHeading\":false,\"isActive\":false,\"className\":\"\",\"link\":\"\",\"isIconClass\":true,\"icon\":\"ri-pencil-ruler-line\",\"children\":[{\"title\":\"Color\",\"isActive\":false,\"link\":\"/core/colors\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Typography\",\"isActive\":false,\"link\":\"/core/typography\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Alert\",\"isActive\":false,\"link\":\"/core/alert\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Badges\",\"isActive\":false,\"link\":\"/core/badges\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Breadcrumb\",\"isActive\":false,\"link\":\"/core/breadcrumb\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Button\",\"isActive\":false,\"link\":\"/core/buttons\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Cards\",\"isActive\":false,\"link\":\"/core/cards\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Carousel\",\"isActive\":false,\"link\":\"/core/carousel\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Video\",\"isActive\":false,\"link\":\"/core/video\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Grid\",\"isActive\":false,\"link\":\"/core/grid\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Images\",\"isActive\":false,\"link\":\"/core/images\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"List group\",\"isActive\":false,\"link\":\"/core/list-group\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Media\",\"isActive\":false,\"link\":\"/core/media\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Modal\",\"isActive\":false,\"link\":\"/core/modal\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Notifications\",\"isActive\":false,\"link\":\"/core/notification\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Pagination\",\"isActive\":false,\"link\":\"/core/pagination\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Popovers\",\"isActive\":false,\"link\":\"/core/popovers\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Progress Bars\",\"isActive\":false,\"link\":\"/core/progressbars\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Tabs\",\"isActive\":false,\"link\":\"/core/tabs\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Tooltips\",\"isActive\":false,\"link\":\"/core/tooltips\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Forms\",\"name\":\"forms\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-file-list-3-line\",\"children\":[{\"title\":\"Form Elements\",\"isActive\":false,\"link\":\"/forms/form-layout\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Form Validation\",\"isActive\":false,\"link\":\"/forms/form-validation\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Form Switch\",\"isActive\":false,\"link\":\"/forms/form-switch\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Form Checkbox\",\"isActive\":false,\"link\":\"/forms/form-checkbox\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Form Radio\",\"isActive\":false,\"link\":\"/forms/form-radio\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Form Wizard\",\"isActive\":false,\"link\":\"/forms/form-wizard\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Tables\",\"name\":\"tables\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-table-line\",\"children\":[{\"title\":\"Basic Table\",\"isActive\":false,\"link\":\"/table/table-basic\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Data Table\",\"isActive\":false,\"link\":\"/table/data-table\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Editable Table\",\"isActive\":false,\"link\":\"/table/table-editable\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Charts\",\"name\":\"charts\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-bar-chart-box-line\",\"children\":[{\"title\":\"High Charts\",\"isActive\":false,\"link\":\"/charts/chart-high\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Am Charts\",\"isActive\":false,\"link\":\"/charts/chart-am\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Apex Chart\",\"isActive\":false,\"link\":\"/charts/chart-apex\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Icons\",\"name\":\"icons\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-remixicon-line\",\"children\":[{\"title\":\"Dripicons\",\"isActive\":false,\"link\":\"/icons/icon-dripicons\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Font Awesome 5\",\"isActive\":false,\"link\":\"/icons/icon-fontawesome\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Line Awesome\",\"isActive\":false,\"link\":\"/icons/icon-lineawesome\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Remixicon\",\"isActive\":false,\"link\":\"/icons/icon-remixicon\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"unicons\",\"isActive\":false,\"link\":\"/icons/icon-unicons\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Pages\",\"isHeading\":true,\"isActive\":false,\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-separator\"},{\"title\":\"Authentication\",\"name\":\"authentication\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-pages-line\",\"children\":[{\"title\":\"Login\",\"isActive\":false,\"link\":\"/auth/sign-in\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Register\",\"isActive\":false,\"link\":\"/auth/sign-up\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Recover Password\",\"isActive\":false,\"link\":\"/auth/password-reset\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Confirm Mail\",\"isActive\":false,\"link\":\"/auth/confirm-mail\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Lock Screen\",\"isActive\":false,\"link\":\"/auth/lock-screen\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Maps\",\"name\":\"maps\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-map-2-fill\",\"children\":[{\"title\":\"Google Map\",\"isActive\":false,\"link\":\"/maps/map\",\"className\":\"/maps/map\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Extra Pages\",\"name\":\"extra-pages\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-pantone-line\",\"children\":[{\"title\":\"Timeline\",\"isActive\":false,\"link\":\"/extra-pages/timeline\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Invoice\",\"isActive\":false,\"link\":\"/extra-pages/invoice\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Blank Page\",\"isActive\":false,\"link\":\"/extra-pages/blank-page\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Error 404\",\"isActive\":false,\"link\":\"/page/error400\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Error 500\",\"isActive\":false,\"link\":\"/extra-pages/error/500\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Pricing\",\"isActive\":false,\"link\":\"/extra-pages/pricing\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Pricing 1\",\"isActive\":false,\"link\":\"/extra-pages/pricing-one\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Maintainance\",\"isActive\":false,\"link\":\"/page/maintainance\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Coming Soon\",\"isActive\":false,\"link\":\"/page/comingsoon\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"FAQ\",\"isActive\":false,\"link\":\"/extra-pages/faq\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]}]}");
    /***/
  },

  /***/
  "./src/app/plugins.service.ts":
  /*!************************************!*\
    !*** ./src/app/plugins.service.ts ***!
    \************************************/

  /*! exports provided: PluginsService */

  /***/
  function srcAppPluginsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PluginsService", function () {
      return PluginsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PluginsService = /*#__PURE__*/function () {
      function PluginsService() {
        _classCallCheck(this, PluginsService);

        // @ts-ignore
        this.$ = window.$;
      }

      _createClass(PluginsService, [{
        key: "index",
        value: function index() {
          this.loaderInit();
        }
      }, {
        key: "dashboardIndex",
        value: function dashboardIndex() {
          this.sideBarToggle(this.$);
          this.navBarAction(this.$);
          this.wrapperMenuToggle(this.$);
          this.fullscreen(this.$);
          this.accordionToggle(this.$);
        } // Function for toggle page Loader...

      }, {
        key: "loaderInit",
        value: function loaderInit() {
          this.$('#load').fadeOut();
          this.$('#loading').delay(1000).fadeOut('slow');
        }
      }, {
        key: "checkElement",
        value: function checkElement(type, element) {
          var found = false;
          var elements;

          switch (type) {
            case 'class':
              elements = document.getElementsByClassName(element);

              if (elements !== undefined && elements !== null && elements.length > 0) {
                found = true;
              }

              break;

            case 'id':
              elements = document.getElementById(element);

              if (elements !== undefined && elements !== null) {
                found = true;
              }

              break;
          }

          return found;
        }
      }, {
        key: "sideBarToggle",
        value: function sideBarToggle($) {
          var elementExist = this.checkElement('class', 'iq-sidebar-menu');

          if (elementExist) {// $(document).on('click', '.iq-sidebar-menu li', function() {
            //   if ($(this).hasClass('menu-open')) {
            //     $(this).find('.iq-submenu').slideUp('slow');
            //     $(this).removeClass('menu-open');
            //     if (!$(this).find('.iq-submenu.menu-open .menu-open').length) {
            //       $(this).find('.menu-open').removeClass('menu-open');
            //     } else {
            //       $(this).find('.iq-submenu').removeClass('menu-open');
            //     }
            //   } else if ($(this).find('.iq-submenu').length) {
            //     $(this).find('.iq-submenu').slideDown('slow');
            //     $(this).addClass('menu-open');
            //     $(this).find('.iq-submenu').addClass('menu-open');
            //   }
            // });
          }
        }
      }, {
        key: "navBarAction",
        value: function navBarAction($) {
          $(document).on('click', function (e) {
            var myTargetElement = e.target; // tslint:disable-next-line:one-variable-per-declaration

            var selector, mainElement;

            if ($(myTargetElement).hasClass('search-toggle') || $(myTargetElement).parent().hasClass('search-toggle') || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
              if ($(myTargetElement).hasClass('search-toggle')) {
                selector = $(myTargetElement).parent();
                mainElement = $(myTargetElement);
              } else if ($(myTargetElement).parent().hasClass('search-toggle')) {
                selector = $(myTargetElement).parent().parent();
                mainElement = $(myTargetElement).parent();
              } else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
                selector = $(myTargetElement).parent().parent().parent();
                mainElement = $(myTargetElement).parent().parent();
              }

              if (!mainElement.hasClass('active') && $('.navbar-list li').find('.active')) {
                $('.navbar-list li').removeClass('iq-show');
                $('.navbar-list li .search-toggle').removeClass('active');
              }

              selector.toggleClass('iq-show');
              mainElement.toggleClass('active');
              e.preventDefault();
            } else if ($(myTargetElement).is('.search-input')) {} else {
              $('.navbar-list li').removeClass('iq-show');
              $('.navbar-list li .search-toggle').removeClass('active');
            }
          });
        }
      }, {
        key: "wrapperMenuToggle",
        value: function wrapperMenuToggle($) {
          var elementExist = this.checkElement('class', 'wrapper-menu');

          if (elementExist) {
            (function () {
              var wrapperMenu = document.querySelectorAll('.wrapper-menu');
              var body = document.querySelector('body');

              var _loop = function _loop(i) {
                wrapperMenu[i].addEventListener('click', function () {
                  wrapperMenu[i].classList.toggle('open');
                  body.classList.toggle('sidebar-main');
                });
              };

              for (var i = 0; i < wrapperMenu.length; i++) {
                _loop(i);
              }
            })();
          }
        }
      }, {
        key: "fullscreen",
        value: function fullscreen($) {
          var elementExist = this.checkElement('class', 'iq-full-screen');

          if (elementExist) {
            $(document).on('click', '.iq-full-screen', function () {
              /*const elem = $(this);
              if (!document.fullscreenElement &&
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                  document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                  document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if (document.documentElement.msRequestFullscreen) {
                  document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
              } else {
                if (document.cancelFullScreen) {
                  document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                  document.msExitFullscreen();
                }
              }
              elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');*/
            });
          }
        }
      }, {
        key: "apexChart",
        value: function apexChart(element, chartOption) {
          var selector = '#' + element;

          if (chartOption !== undefined) {
            var chart = new ApexCharts(document.querySelector(selector), chartOption);
            chart.render();
          }
        }
      }, {
        key: "accordionToggle",
        value: function accordionToggle($) {
          $('.iq-accordion .iq-accordion-block .accordion-details').hide();
          $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
          $(document).on('click', '.iq-accordion .iq-accordion-block', function () {
            if ($(this).children('div.accordion-details ').is(':hidden')) {
              $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
              $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
            }
          });
        }
      }, {
        key: "getActiveLink",
        value: function getActiveLink(item, activeRoute) {
          var active = false;

          if (item.children !== undefined) {
            item.children.filter(function (child) {
              if (child.link === activeRoute) {
                active = true;
              }
            });
          } else {
            if (item.link === activeRoute) {
              active = true;
            }
          }

          return active;
        }
      }]);

      return PluginsService;
    }();

    PluginsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PluginsService);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint; // Add options on Http Request

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // Handle error on Http Request


      _createClass(ApiService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error("Status : ".concat(error.status, ", ") + "Response : ".concat(error.error));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something want wrong. please try again later.');
        } // Get users data

      }, {
        key: "getList",
        value: function getList() {
          return this.http.get(this.BASE_PATH + '/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "getMenuList",
        value: function getMenuList() {
          return this.http.get('http://localhost:3000/data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/store/actions/ticket-booking.actions.ts":
  /*!*********************************************************!*\
    !*** ./src/app/store/actions/ticket-booking.actions.ts ***!
    \*********************************************************/

  /*! exports provided: TicketBookingActionTypes, TicketBookingAction, CountTicketBooking */

  /***/
  function srcAppStoreActionsTicketBookingActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketBookingActionTypes", function () {
      return TicketBookingActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketBookingAction", function () {
      return TicketBookingAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountTicketBooking", function () {
      return CountTicketBooking;
    });

    var TicketBookingActionTypes;

    (function (TicketBookingActionTypes) {
      TicketBookingActionTypes["countTicketBooking"] = "[TicketBooking] Count TicketBookings";
    })(TicketBookingActionTypes || (TicketBookingActionTypes = {}));

    var TicketBookingAction = function TicketBookingAction() {
      _classCallCheck(this, TicketBookingAction);
    };

    var CountTicketBooking = function CountTicketBooking(payload) {
      _classCallCheck(this, CountTicketBooking);

      this.payload = payload;
      this.type = TicketBookingActionTypes.countTicketBooking;
    };
    /***/

  },

  /***/
  "./src/app/store/reducers/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/reducers/index.ts ***!
    \*****************************************/

  /*! exports provided: reducers, metaReducers */

  /***/
  function srcAppStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ticket_booking_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ticket-booking.reducer */
    "./src/app/store/reducers/ticket-booking.reducer.ts");

    var reducers = {
      ticketBooking: _ticket_booking_reducer__WEBPACK_IMPORTED_MODULE_1__["TicketBookingReducer"]
    };
    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];
    /***/
  },

  /***/
  "./src/app/store/reducers/ticket-booking.reducer.ts":
  /*!**********************************************************!*\
    !*** ./src/app/store/reducers/ticket-booking.reducer.ts ***!
    \**********************************************************/

  /*! exports provided: TicketBookingReducer */

  /***/
  function srcAppStoreReducersTicketBookingReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketBookingReducer", function () {
      return TicketBookingReducer;
    });
    /* harmony import */


    var _states_ticket_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../states/ticket-booking.state */
    "./src/app/store/states/ticket-booking.state.ts");
    /* harmony import */


    var _actions_ticket_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/ticket-booking.actions */
    "./src/app/store/actions/ticket-booking.actions.ts");

    function TicketBookingReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _states_ticket_booking_state__WEBPACK_IMPORTED_MODULE_0__["initialTicketBookingState"];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_ticket_booking_actions__WEBPACK_IMPORTED_MODULE_1__["TicketBookingActionTypes"].countTicketBooking:
          return {
            ticketCount: action.payload.countTicket
          };

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/store/states/ticket-booking.state.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/states/ticket-booking.state.ts ***!
    \******************************************************/

  /*! exports provided: initialTicketBookingState */

  /***/
  function srcAppStoreStatesTicketBookingStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialTicketBookingState", function () {
      return initialTicketBookingState;
    });

    var initialTicketBookingState = {
      ticketCount: 0,
      ticketData: []
    };
    /***/
  },

  /***/
  "./src/app/views/pages/error-page/error-page.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/views/pages/error-page/error-page.component.ts ***!
    \****************************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppViewsPagesErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent() {
        _classCallCheck(this, ErrorPageComponent);

        this.errorType = '400';
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var url = window.location.href;
          this.errorType = url.substr(url.lastIndexOf('/') + 1);
        }
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/error-page/error-page.component.html"))["default"]
    })], ErrorPageComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiEndpoint: 'http://localhost:3000',
      mapbox: {
        accessToken: 'pk.eyJ1IjoiZ29sZGVubWFjZWRldiIsImEiOiJjazBnYnFxb3AwNWdqM2JuNWRwazZxMWY0In0._I3zpcM9QTHNqcXWjWpD6Q',
        mapStyle: 'mapbox://styles/goldenmacedev/ck49vpeap08b61cnubglcag7l'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\sofbox\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map