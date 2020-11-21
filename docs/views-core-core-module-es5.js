function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-core-core-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-alert/ui-alert.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-alert/ui-alert.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiAlertUiAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Alerts</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"secondary\">\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success\">\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger\" role=\"alert\">\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning\" role=\"alert\">\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info\" role=\"alert\">\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light\" role=\"alert\">\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"dark\" role=\"alert\">\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Alerts With Icons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>primary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"secondary\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Line Alerts</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary bg-white\">\n        <div class=\"iq-alert-text\">A simple <b>primary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"secondary bg-white\">\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success bg-white\">\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger bg-white\">\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning bg-white\">\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info bg-white\">\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light bg-white\">\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Line Alerts With Icons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary bg-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>primary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"secondary bg-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success bg-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger bg-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning bg-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info bg-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light bg-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Alerts With Background</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary text-white bg-primary\">\n        <div class=\"iq-alert-text\">A simple <b>primary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"secondary bg-secondary text-white\">\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success text-white bg-success\">\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger text-white bg-danger\">\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning text-white bg-warning\">\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info text-white bg-info\">\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light bg-light\">\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Background Alerts With Icons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary bg-primary text-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>primary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"secondary bg-secondary text-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success bg-success text-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger bg-danger text-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning bg-warning text-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info bg-info text-white\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light\" role=\"alert\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Alerts Dismissing</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary text-white bg-primary\" [dismissible]=true>\n        <div class=\"iq-alert-text\">A simple <b>primary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"secondary text-white bg-secondary\" [dismissible]=true>\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success text-white bg-success\" [dismissible]=true>\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger text-white bg-danger\" [dismissible]=true>\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning text-white bg-warning\" [dismissible]=true>\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info text-white bg-info\" [dismissible]=true>\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light bg-light\" [dismissible]=true>\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Alerts Dismissing With Icons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary text-white bg-primary\" [dismissible]=true>\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>primary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"secondary text-white bg-secondary\"[dismissible]=true>\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>secondary</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"success text-white bg-success\"[dismissible]=true>\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>success</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"danger text-white bg-danger\"[dismissible]=true>\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>danger</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"warning text-white bg-warning\" [dismissible]=true>\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>warning</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"info text-white bg-info\"[dismissible]=true>\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>info</b> alert—check it out!</div>\n      </alert>\n      <alert type=\"light bg-light\"[dismissible]=true>\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">A simple <b>light</b> alert—check it out!</div>\n      </alert>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Alerts With Background</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary alert-primary\">\n        <div class=\"iq-alert-text\">A simple primary alert with <a href=\"javascript:void(0);\" class=\"alert-link\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"secondary alert-secondary\">\n        <div class=\"iq-alert-text\">A simple secondary alert with <a href=\"javascript:void(0);\" class=\"alert-link\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"success alert-success\">\n        <div class=\"iq-alert-text\">A simple success alert with <a href=\"javascript:void(0);\" class=\"alert-link\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"danger alert-danger\">\n        <div class=\"iq-alert-text\">A simple danger alert with <a href=\"javascript:void(0);\" class=\"alert-link\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"warning alert-warning\">\n        <div class=\"iq-alert-text\">A simple warning alert with <a href=\"javascript:void(0);\" class=\"alert-link\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"info alert-info\">\n        <div class=\"iq-alert-text\">A simple info alert with <a href=\"javascript:void(0);\" class=\"alert-link\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"light alert-light\">\n        <div class=\"iq-alert-text\">A simple light alert with <a href=\"javascript:void(0);\" class=\"alert-link\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Background Alerts With Icons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <alert type=\"primary text-white bg-primary\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">simple primary alert with <a href=\"javascript:void(0);\" class=\"alert-link text-white\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"secondary text-white bg-secondary\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">simple primary alert with <a href=\"javascript:void(0);\" class=\"alert-link text-white\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"success text-white bg-success\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">simple primary alert with <a href=\"javascript:void(0);\" class=\"alert-link text-white\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"danger text-white bg-danger\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">simple primary alert with <a href=\"javascript:void(0);\" class=\"alert-link text-white\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"warning text-white bg-warning\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-alert-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">simple primary alert with <a href=\"javascript:void(0);\" class=\"alert-link text-white\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n      <alert type=\"info text-white bg-info\">\n        <div class=\"iq-alert-icon\">\n          <i class=\"ri-information-line\"></i>\n        </div>\n        <div class=\"iq-alert-text\">simple primary alert with <a href=\"javascript:void(0);\" class=\"alert-link text-white\">an\n            example link</a>. Give it a click if you like.\n        </div>\n      </alert>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Additional content</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever\n      </p>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-lg-6\">\n          <div class=\"alert alert-primary\" role=\"alert\">\n            <div class=\"iq-alert-text\">\n              <h5 class=\"alert-heading\">Well done!</h5>\n              <p>Aww yeah, you successfully read this important alert message. This\n                example text is going to run a bit longer so that you can see how\n                spacing within an alert works with this kind of content.\n              </p>\n              <hr>\n              <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to\n                keep things nice and tidy.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-lg-6\">\n          <alert type=\"success\">\n            <div class=\"iq-alert-text\">\n              <h5 class=\"alert-heading\">Well done!</h5>\n              <p>Aww yeah, you successfully read this important alert message. This\n                example text is going to run a bit longer so that you can see how\n                spacing within an alert works with this kind of content.\n              </p>\n              <hr>\n              <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to\n                keep things nice and tidy.\n              </p>\n            </div>\n          </alert>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-badges/ui-badges.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-badges/ui-badges.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiBadgesUiBadgesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Badge</h4>\n            </div>\n            <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>\n            <h1 class=\"mb-3\">Example heading <span class=\"badge badge-primary\">New</span></h1>\n            <h2 class=\"mb-3\">Example heading <span class=\"badge badge-secondary\">New</span></h2>\n            <h3 class=\"mb-3\">Example heading <button type=\"button\" class=\"btn btn-success\">\n                Notifications <span class=\"badge badge-light ml-2\">4</span>\n                </button>\n            </h3>\n            <h4 class=\"mb-3\">Example heading <span class=\"badge badge-danger\">New</span></h4>\n            <h5 class=\"mb-3\">Example heading <span class=\"badge badge-warning\">New</span></h5>\n            <h6 class=\"mb-0\">Example heading <span class=\"badge badge-info\">New</span></h6>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Button Badges</h4>\n            </div>\n            <p>Badges can be used as part of buttons to provide a counter.</p>\n            <button type=\"button\" class=\"btn mb-1 btn-primary\">\n            Notifications <span class=\"badge ml-1 badge-light ml-2\">4</span>\n            </button>\n            <button type=\"button\" class=\"btn ml-1 mb-1 btn-success\">\n            Notifications <span class=\"badge ml-1 badge-light ml-2\">4</span>\n            </button>\n            <button type=\"button\" class=\"btn ml-1 mb-1 btn-danger\">\n            Notifications <span class=\"badge ml-1 badge-light ml-2\">4</span>\n            </button>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Button Light background Badges</h4>\n            </div>\n            <p>Badges can be used as part of buttons to provide a counter.</p>\n            <button type=\"button\" class=\"btn mb-1 btn-outline-primary\">\n            Notifications <span class=\"badge ml-1 badge-primary ml-2\">4</span>\n            </button>\n            <button  type=\"button\" class=\"btn mb-1 ml-1 btn-outline-success\">\n            Notifications <span class=\"badge ml-1 badge-success ml-2\">4</span>\n            </button>\n            <button  type=\"button\" class=\"btn mb-1 ml-1 btn-outline-danger\">\n            Notifications <span class=\"badge ml-1 badge-danger ml-2\">4</span>\n            </button>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n               <h4 class=\"card-title\">Button Border Badges</h4>\n            </div>\n            <p>Badges can be used as part of buttons to provide a counter.</p>\n            <button type=\"button\" class=\"btn mb-1 iq-bg-primary\">\n            Notifications <span class=\"badge ml-1 badge-primary ml-2\">4</span>\n            </button>\n            <button type=\"button\" class=\"btn ml-1 mb-1 iq-bg-success\">\n            Notifications <span class=\"badge ml-1 badge-success ml-2\">4</span>\n            </button>\n            <button type=\"button\" class=\"btn ml-1 mb-1 iq-bg-danger\">\n            Notifications <span class=\"badge ml-1 badge-danger ml-2\">4</span>\n            </button>\n        </app-iq-card>\n\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Contextual variations</h4>\n            </div>\n            <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>\n            <span class=\"badge badge-primary\">Primary</span>\n            <span class=\"badge ml-1 badge-secondary\">Secondary</span>\n            <span class=\"badge ml-1 badge-success\">Success</span>\n            <span class=\"badge ml-1 badge-danger\">Danger</span>\n            <span class=\"badge ml-1 badge-warning\">Warning</span>\n            <span class=\"badge ml-1 badge-info\">Info</span>\n            <span class=\"badge ml-1 badge-light\">Light</span>\n            <span class=\"badge ml-1 badge-dark\">Dark</span>\n            <h5 class=\"card-title mt-4\">Pill badges</h5>\n            <p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>\n            <span class=\"badge badge-pill badge-primary\">Primary</span>\n            <span class=\"badge ml-1 badge-pill badge-secondary\">Secondary</span>\n            <span class=\"badge ml-1 badge-pill badge-success\">Success</span>\n            <span class=\"badge ml-1 badge-pill badge-danger\">Danger</span>\n            <span class=\"badge ml-1 badge-pill badge-warning\">Warning</span>\n            <span class=\"badge ml-1 badge-pill badge-info\">Info</span>\n            <span class=\"badge ml-1 badge-pill badge-light\">Light</span>\n            <span class=\"badge ml-1 badge-pill badge-dark\">Dark</span>\n            <h5 class=\"card-title mt-4\">Links</h5>\n            <p>Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-primary\">Primary</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-secondary\">Secondary</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-success\">Success</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-danger\">Danger</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-warning\">Warning</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-info\">Info</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-light\">Light</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 badge-dark\">Dark</a>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n               <h4 class=\"card-title\">Contextual variations Border</h4>\n            </div>\n            <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>\n            <span class=\"badge border border-primary text-primary\">Primary</span>\n            <span class=\"badge ml-1 border border-secondary text-secondary\">Secondary</span>\n            <span class=\"badge ml-1 border border-success text-success\">Success</span>\n            <span class=\"badge ml-1 border border-danger text-danger\">Danger</span>\n            <span class=\"badge ml-1 border border-warning text-warning\">Warning</span>\n            <span class=\"badge ml-1 border border-info text-info\">Info</span>\n            <span class=\"badge ml-1 border border-light text-light\">Light</span>\n            <span class=\"badge ml-1 border border-dark text-dark\">Dark</span>\n            <h5 class=\"card-title mt-4\">Pill badges</h5>\n            <p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>\n            <span class=\"badge badge-pill border border-primary text-primary\">Primary</span>\n            <span class=\"badge ml-1 badge-pill border border-secondary text-secondary\">Secondary</span>\n            <span class=\"badge ml-1 badge-pill border border-success text-success\">Success</span>\n            <span class=\"badge ml-1 badge-pill border border-danger text-danger\">Danger</span>\n            <span class=\"badge ml-1 badge-pill border border-warning text-warning\">Warning</span>\n            <span class=\"badge ml-1 badge-pill border border-info text-info\">Info</span>\n            <span class=\"badge ml-1 badge-pill border border-light text-light\">Light</span>\n            <span class=\"badge ml-1 badge-pill border border-dark text-dark\">Dark</span>\n            <h5 class=\"card-title mt-4\">Links</h5>\n            <p>Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>\n<<<<<<< HEAD\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-primary text-primary\">Primary</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-secondary text-secondary\">Secondary</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-success text-success\">Success</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-danger text-danger\">Danger</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-warning text-warning\">Warning</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-info text-info\">Info</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-light text-light\">Light</a>\n            <a href=\"javascript:void(0);\" class=\"badge ml-1 border border-dark text-dark\">Dark</a>\n=======\n            <a href=\"#\" class=\"badge border border-primary text-primary\">Primary</a>\n            <a href=\"#\" class=\"badge ml-1 border border-secondary text-secondary\">Secondary</a>\n            <a href=\"#\" class=\"badge ml-1 border border-success text-success\">Success</a>\n            <a href=\"#\" class=\"badge ml-1 border border-danger text-danger\">Danger</a>\n            <a href=\"#\" class=\"badge ml-1 border border-warning text-warning\">Warning</a>\n            <a href=\"#\" class=\"badge ml-1 border border-info text-info\">Info</a>\n            <a href=\"#\" class=\"badge ml-1 border border-light text-light\">Light</a>\n            <a href=\"#\" class=\"badge ml-1 border border-dark text-dark\">Dark</a>\n>>>>>>> ui-element\n        </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-breadcrumb/ui-breadcrumb.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-breadcrumb/ui-breadcrumb.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiBreadcrumbUiBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Breadcrumb With Icon</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Library</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n                </ol>\n            </nav>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n               <h4 class=\"card-title\">Breadcrumb With Icon</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Library</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n                </ol>\n            </nav>\n        </app-iq-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Breadcrumb</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <nav aria-label=\"breadcrumb \">\n                <ol class=\"breadcrumb bg-primary\">\n                    <li class=\"breadcrumb-item active text-white\" aria-current=\"page\">Home</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb bg-primary\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-white\">Home</a></li>\n                    <li class=\"breadcrumb-item active text-white\" aria-current=\"page\">Library</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb bg-primary mb-0\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-white\">Home</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-white\">Library</a></li>\n                    <li class=\"breadcrumb-item active text-white\" aria-current=\"page\">Data</li>\n                </ol>\n            </nav>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Breadcrumb With Icon</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb bg-primary\">\n                    <li class=\"breadcrumb-item active text-white\" aria-current=\"page\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb bg-primary\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-white\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item active text-white\" aria-current=\"page\">Library</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb bg-primary mb-0\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-white\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-white\">Library</a></li>\n                    <li class=\"breadcrumb-item active text-white\" aria-current=\"page\">Data</li>\n                </ol>\n            </nav>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Breadcrumb With Icon</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb iq-bg-primary\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb iq-bg-primary\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb iq-bg-primary mb-0\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Library</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n                </ol>\n            </nav>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Breadcrumb With Icon</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb iq-bg-danger\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb iq-bg-danger\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-danger\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n                </ol>\n            </nav>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb iq-bg-danger mb-0\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-danger\"><i class=\"ri-home-4-line mr-1 float-left\"></i>Home</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" class=\"text-danger\">Library</a></li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n                </ol>\n            </nav>\n        </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-buttons/ui-buttons.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-buttons/ui-buttons.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiButtonsUiButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Default Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary mb-3 mr-1\">Primary</button>\n      <button type=\"button\" class=\"btn btn-secondary mb-3 mr-1\">Secondary</button>\n      <button type=\"button\" class=\"btn btn-success mb-3 mr-1\">Success</button>\n      <button type=\"button\" class=\"btn btn-danger mb-3 mr-1\">Danger</button>\n      <button type=\"button\" class=\"btn btn-warning mb-3 mr-1\">Warning</button>\n      <button type=\"button\" class=\"btn btn-info mb-3 mr-1\">Info</button>\n      <button type=\"button\" class=\"btn btn-light mb-3 mr-1\">Light</button>\n      <button type=\"button\" class=\"btn btn-dark mb-3 mr-1\">Dark</button>\n      <button type=\"button\" class=\"btn btn-link mb-3 mr-1\">Link</button>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Default Buttons Rounded Shape</h4>\n     </div>\n     <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary rounded-pill mb-3 mr-1\">Primary</button>\n      <button type=\"button\" class=\"btn btn-secondary rounded-pill mb-3 mr-1\">Secondary</button>\n      <button type=\"button\" class=\"btn btn-success rounded-pill mb-3 mr-1\">Success</button>\n      <button type=\"button\" class=\"btn btn-danger rounded-pill mb-3 mr-1\">Danger</button>\n      <button type=\"button\" class=\"btn btn-warning rounded-pill mb-3 mr-1\">Warning</button>\n      <button type=\"button\" class=\"btn btn-info rounded-pill mb-3 mr-1\">Info</button>\n      <button type=\"button\" class=\"btn btn-light rounded-pill mb-3 mr-1\">Light</button>\n      <button type=\"button\" class=\"btn btn-dark rounded-pill mb-3 mr-1\">Dark</button>\n      <button type=\"button\" class=\"btn btn-link rounded-pill mb-3 mr-1\">Link</button>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Outline Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-outline-primary mb-3 mr-1\">Primary</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary mb-3 mr-1\">Secondary</button>\n      <button type=\"button\" class=\"btn btn-outline-success mb-3 mr-1\">Success</button>\n      <button type=\"button\" class=\"btn btn-outline-danger mb-3 mr-1\">Danger</button>\n      <button type=\"button\" class=\"btn btn-outline-warning mb-3 mr-1\">Warning</button>\n      <button type=\"button\" class=\"btn btn-outline-info mb-3 mr-1\">Info</button>\n      <button type=\"button\" class=\"btn btn-outline-dark mb-3 mr-1\">Dark</button>\n      <button type=\"button\" class=\"btn btn-outline-link\">Link</button>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Rounded Outline Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-outline-primary rounded-pill mb-3 mr-1\">Primary</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill mb-3 mr-1\">Secondary</button>\n      <button type=\"button\" class=\"btn btn-outline-success rounded-pill mb-3 mr-1\">Success</button>\n      <button type=\"button\" class=\"btn btn-outline-danger rounded-pill mb-3 mr-1\">Danger</button>\n      <button type=\"button\" class=\"btn btn-outline-warning rounded-pill mb-3 mr-1\">Warning</button>\n      <button type=\"button\" class=\"btn btn-outline-info rounded-pill mb-3 mr-1\">Info</button>\n      <button type=\"button\" class=\"btn btn-outline-dark rounded-pill mb-3 mr-1\">Dark</button>\n      <button type=\"button\" class=\"btn btn-outline-link rounded-pill mb-3 mr-1\">Link</button>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Default Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-primary\"><i class=\"ri-bill-fill\"></i>Primary</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-secondary\"><i class=\"ri-heart-fill\"></i>Secondary</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-success\"><i class=\"ri-bill-fill\"></i>Success</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-danger\"><i class=\"ri-heart-fill\"></i>Danger</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-warning\"><i class=\"ri-bill-fill\"></i>Warning</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-info\"><i class=\"ri-heart-fill\"></i>Info</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-light\"><i class=\"ri-bill-fill\"></i>Light</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-dark\"><i class=\"ri-heart-fill\"></i>Dark</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-link\"><i class=\"ri-bill-fill\"></i>Link</button>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Default Buttons Rounded Shape</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-primary rounded-pill\"><i class=\"ri-bill-fill\"></i>Primary</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-secondary rounded-pill\"><i class=\"ri-heart-fill\"></i>Secondary</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-success rounded-pill\"><i class=\"ri-bill-fill\"></i>Success</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-danger rounded-pill\"><i class=\"ri-heart-fill\"></i>Danger</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-warning rounded-pill\"><i class=\"ri-bill-fill\"></i>Warning</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-info rounded-pill\"><i class=\"ri-heart-fill\"></i>Info</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-light rounded-pill\"><i class=\"ri-bill-fill\"></i>Light</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-dark rounded-pill\"><i class=\"ri-heart-fill\"></i>Dark</button>\n      <button type=\"button\" class=\"btn mb-3 mr-1 btn-link rounded-pill\"><i class=\"ri-bill-fill\"></i>Link</button>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Outline Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-outline-primary mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Primary</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Secondary</button>\n      <button type=\"button\" class=\"btn btn-outline-success mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Success</button>\n      <button type=\"button\" class=\"btn btn-outline-danger mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Danger</button>\n      <button type=\"button\" class=\"btn btn-outline-warning mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Warning</button>\n      <button type=\"button\" class=\"btn btn-outline-info mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Info</button>\n      <button type=\"button\" class=\"btn btn-outline-dark mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Dark</button>\n      <button type=\"button\" class=\"btn btn-outline-link mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Link</button>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Rounded Outline Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-outline-primary rounded-pill mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Primary</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Secondary</button>\n      <button type=\"button\" class=\"btn btn-outline-success rounded-pill mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Success</button>\n      <button type=\"button\" class=\"btn btn-outline-danger rounded-pill mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Danger</button>\n      <button type=\"button\" class=\"btn btn-outline-warning rounded-pill mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Warning</button>\n      <button type=\"button\" class=\"btn btn-outline-info rounded-pill mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Info</button>\n      <button type=\"button\" class=\"btn btn-outline-dark rounded-pill mb-3 mr-1\"><i class=\"ri-alert-line\"></i>Dark</button>\n      <button type=\"button\" class=\"btn btn-outline-link rounded-pill mb-3 mr-1\"><i class=\"ri-heart-line\"></i>Link</button>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Button Tags</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <a class=\"btn btn-primary mr-1\" href=\"javascript:void(0);\" role=\"button\">Link</a>\n      <button class=\"btn btn-success mr-1\" type=\"submit\">Button</button>\n      <input class=\"btn btn-danger mr-1\" type=\"button\" value=\"Input\">\n      <input class=\"btn btn-warning mr-1\" type=\"submit\" value=\"Submit\">\n      <input class=\"btn btn-info mr-1\" type=\"reset\" value=\"Reset\">\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Buttons Sizes</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary btn-sm mr-2\">Small Button</button>\n      <button type=\"button\" class=\"btn btn-success mr-2\">Button</button>\n      <button type=\"button\" class=\"btn btn-info btn-lg\">Large Button</button>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Block Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary btn-block\">Block level button</button>\n      <button type=\"button\" class=\"btn btn-success btn-block\">Block level button</button>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Icons Buttons</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary mb-3 mr-1\"><i class=\"ri-heart-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-secondary mb-3 mr-1\"><i class=\"ri-star-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-success mb-3 mr-1\"><i class=\"ri-settings-4-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-danger mb-3 mr-1\"><i class=\"ri-radio-button-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-warning mb-3 mr-1\"><i class=\"ri-delete-bin-2-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-info mb-3 mr-1\"><i class=\"ri-lock-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-light mb-3 mr-1\"><i class=\"ri-time-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-dark mb-3 mr-1\"><i class=\"ri-sun-fill pr-0\"></i></button>\n      <button type=\"button\" class=\"btn btn-link mb-3 mr-1\"><i class=\"ri-moon-fill pr-0\"></i></button>\n      <div class=\"d-inline-block w-100 mt-3\">\n          <button type=\"button\" class=\"btn btn-primary mb-3 mr-1\"><i class=\"ri-heart-fill\"></i>Buttons</button>\n          <button type=\"button\" class=\"btn btn-secondary mb-3 mr-1\"><i class=\"ri-star-fill\"></i>Buttons</button>\n          <button type=\"button\" class=\"btn btn-success mb-3 mr-1\"><i class=\"ri-settings-4-fill\"></i>Buttons</button>\n          <button type=\"button\" class=\"btn btn-danger mb-3 mr-1\"><i class=\"ri-radio-button-fill\"></i>Buttons</button>\n          <button type=\"button\" class=\"btn btn-info mb-3 mr-1\"><i class=\"ri-lock-fill\"></i>Buttons</button>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Social Disabled State</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary mr-1\" disabled>Primary button</button>\n      <button type=\"button\" class=\"btn btn-success mr-1\" disabled>Button</button>\n      <button type=\"button\" class=\"btn btn-outline-primary mr-1\" disabled>Button</button>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Buttons Toggle States</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" aria-pressed=\"false\" >\n      Single toggle\n      </button>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Default Buttons Active</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <button type=\"button\" class=\"btn btn-primary active mb-3 mr-1\">Active</button>\n      <button type=\"button\" class=\"btn btn-secondary active mb-3 mr-1\">Active</button>\n      <button type=\"button\" class=\"btn btn-warning active mb-3 mr-1\">Active</button>\n      <button type=\"button\" class=\"btn btn-accent disabled mb-3 mr-1\" disabled=\"\">Disabled</button>\n      <button type=\"button\" class=\"btn btn-primary disabled mb-3 mr-1\" disabled=\"\">Disabled</button>\n      <button type=\"button\" class=\"btn btn-outline-primary disabled mb-3 mr-1\" disabled=\"\">Disabled</button>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4  class=\"card-title\">Button Group Sizing</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <div class=\"d-block\">\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-primary\">Left</button>\n            <button type=\"button\" class=\"btn btn-primary\">Middle</button>\n            <button type=\"button\" class=\"btn btn-primary\">Right</button>\n          </div>\n      </div>\n      <div class=\"d-block\">\n          <div class=\"btn-group mt-3\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-primary\">Left</button>\n            <button type=\"button\" class=\"btn btn-primary\">Middle</button>\n            <button type=\"button\" class=\"btn btn-primary\">Right</button>\n          </div>\n      </div>\n      <div class=\"d-block\">\n          <div class=\"btn-group  btn-group-sm mt-3\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-primary\">Left</button>\n            <button type=\"button\" class=\"btn btn-primary\">Middle</button>\n            <button type=\"button\" class=\"btn btn-primary\">Right</button>\n          </div>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Button Group</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n          <button type=\"button\" class=\"btn btn-primary\">Left</button>\n          <button type=\"button\" class=\"btn btn-primary\">Middle</button>\n          <button type=\"button\" class=\"btn btn-primary\">Right</button>\n      </div>\n      <div class=\"btn-toolbar mt-3\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn btn-secondary\">1</button>\n            <button type=\"button\" class=\"btn btn-secondary\">2</button>\n            <button type=\"button\" class=\"btn btn-secondary\">3</button>\n            <button type=\"button\" class=\"btn btn-secondary\">4</button>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n            <button type=\"button\" class=\"btn btn-secondary\">5</button>\n            <button type=\"button\" class=\"btn btn-secondary\">6</button>\n            <button type=\"button\" class=\"btn btn-secondary\">7</button>\n          </div>\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\n            <button type=\"button\" class=\"btn btn-secondary\">8</button>\n          </div>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Button Dropdown</h4>\n      </div>\n      <p class=\"mb-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button type=\"button\" class=\"btn btn-primary\">1</button>\n        <button type=\"button\" class=\"btn btn-primary\">2</button>\n        <div class=\"btn-group\" role=\"group\">\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\n              <a class=\"dropdown-item\" href=\"javascript:void(0);\">Dropdown link</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0);\">Dropdown link</a>\n            </div>\n        </div>\n      </div>\n      <div class=\"d-block mt-3\">\n        <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n            <button type=\"button\" class=\"btn btn-primary\">1</button>\n            <button type=\"button\" class=\"btn btn-primary\">2</button>\n            <div class=\"btn-group\" role=\"group\">\n              <button id=\"btnGroupDrop2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Dropdown\n              </button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop2\">\n                  <a class=\"dropdown-item\" href=\"javascript:void(0);\">Dropdown link</a>\n                  <a class=\"dropdown-item\" href=\"javascript:void(0);\">Dropdown link</a>\n              </div>\n            </div>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-cards/ui-cards.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-cards/ui-cards.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiCardsUiCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-iq-card [isCardHeader]=false>\n            <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n            <h4 class=\"card-title\">Card title</h4>\n            <p class=\"card-text\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary\">Button</a>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-3\">\n        <app-iq-card [isCardHeader]=false>\n            <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n            <h4 class=\"card-title\">Card title</h4>\n            <p class=\"card-text\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>\n            <p>It is a long established fact that a the readable content of a page when looking at its layout.</p>\n            <a href=\"javascript:void(0);\" class=\"card-link\">Card link</a>\n            <a href=\"javascript:void(0);\" class=\"card-link\">Another link</a>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-3\">\n        <app-iq-card [isCardHeader]=false>\n            <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n            <h4 class=\"card-title\">Card title</h4>\n            <p class=\"card-text\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">Cras justo odio</li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n            </ul>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"card iq-mb-3\">\n        <img src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n        <div class=\"card-body\">\n           <h4 class=\"card-title\">Card title</h4>\n           <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n           <li class=\"list-group-item\">Cras justo odio</li>\n        </ul>\n        <div class=\"card-body\">\n           <a href=\"javascript:void(0);\" class=\"card-link\">Card link</a>\n           <a href=\"javascript:void(0);\" class=\"card-link\">Another link</a>\n        </div>\n     </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <app-iq-card [isCardHeader]=false>\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block\">Go somewhere</a>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-6\">\n        <app-iq-card [isCardHeader]=false>\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block\">Go somewhere</a>\n        </app-iq-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-4\">\n        <app-iq-card [isCardHeader]=false>\n            <div card-top class=\"card-header\">\n                Featured\n            </div>\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary\">Go somewhere</a>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card [isCardHeader]=false>\n            <div card-top class=\"card-header\">\n                Quote\n            </div>\n            <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card [isCardFooter]=true [isCardHeader]=false>\n            <div card-top class=\"card-header\">\n                Featured\n            </div>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary\">Go somewhere</a>\n            <div card-footer>\n                2 days ago\n            </div>\n        </app-iq-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-4\">\n        <app-iq-card [isCardHeader]=false>\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block\">Go somewhere</a>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4 text-center\">\n        <app-iq-card [isCardHeader]=false>\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block\">Go somewhere</a>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4 text-right\">\n        <app-iq-card [isCardHeader]=false>\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block\">Go somewhere</a>\n        </app-iq-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-4\">\n        <app-iq-card [isCardHeader]=false>\n            <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n            <h4 class=\"card-title\">Card title</h4>\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-4\">\n        <app-iq-card [isCardHeader]=false>\n            <h4 class=\"card-title\">Card title</h4>\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n            <img card-bottom src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-4\">\n        <app-iq-card cardClass=\"card bg-dark text-white iq-mb-3\" [isCardHeader]=false [isCardBody]=false>\n            <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img\" alt=\"#\">\n            <div card-bottom class=\"card-img-overlay\">\n                <h4 class=\"card-title text-white\">Card title</h4>\n                <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                <p class=\"card-text\">Last updated 3 mins ago</p>\n             </div>\n        </app-iq-card>\n    </div>\n</div>\n\n<!-- pending work[start] -->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h3 card-top class=\"mt-4 mb-3\">Horizontal Card</h3>\n    </div>\n    <div class=\"col-lg-6\">\n      <app-card-with-image>\n        <img card-image src=\"assets/images/page-img/08.jpg\" class=\"card-img\" alt=\"#\">\n        <h4 class=\"card-title\">Card title</h4>\n        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in. a little bit longer.</p>\n        <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n      </app-card-with-image>\n    </div>\n  <div class=\"col-lg-6\">\n    <app-card-with-image cardBodyClass=\"card-body text-right\" cardRowClass=\"row no-gutters flex-row-reverse\">\n      <img card-image src=\"assets/images/page-img/09.jpg\" class=\"card-img\" alt=\"#\">\n      <h4 class=\"card-title\">Card title</h4>\n      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in. a little bit longer.</p>\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n    </app-card-with-image>\n  </div>\n</div>\n<!-- pending work[start] -->\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h3 class=\"mt-4 mb-3\">Card Colored Styles</h3>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card text-white bg-primary iq-mb-3\"  [isCardHeader]=false>\n            <h4  class=\"card-title text-white\">Primary card title</h4>\n            <blockquote class=\"blockquote mb-0\">\n                <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer text-white font-size-12\">Someone famous in <cite title=\"Source Title\" class=\"text-white\" >Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-white bg-secondary\"  [isCardHeader]=false>\n            <h4  class=\"card-title text-white\">Secondary card title</h4>\n            <blockquote class=\"blockquote mb-0\">\n                <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer text-white font-size-12\">Someone famous in <cite title=\"Source Title\" class=\"text-white\" >Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-white bg-success\"  [isCardHeader]=false>\n            <h4  class=\"card-title text-white\">Success card title</h4>\n            <blockquote class=\"blockquote mb-0\">\n                <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer text-white font-size-12\">Someone famous in <cite title=\"Source Title\" class=\"text-white\" >Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-white bg-danger\"  [isCardHeader]=false>\n            <h4  class=\"card-title text-white\">Danger card title</h4>\n            <blockquote class=\"blockquote mb-0\">\n                <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer text-white font-size-12\">Someone famous in <cite title=\"Source Title\" class=\"text-white\" >Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-white bg-warning\"  [isCardHeader]=false>\n            <h4  class=\"card-title text-white\">Warning card title</h4>\n            <blockquote class=\"blockquote mb-0\">\n                <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer text-white font-size-12\">Someone famous in <cite title=\"Source Title\" class=\"text-white\" >Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-white bg-info\"  [isCardHeader]=false>\n            <h4  class=\"card-title text-white\">Info card title</h4>\n            <blockquote class=\"blockquote mb-0\">\n                <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer text-white font-size-12\">Someone famous in <cite title=\"Source Title\" class=\"text-white\" >Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h3 class=\"mt-4 mb-3\">Border Card</h3>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-primary\" [isCardHeader]=false>\n            <h4 class=\"card-title text-primary\">Primary card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-secondary\" [isCardHeader]=false>\n            <h4 class=\"card-title text-secondary\">Secondary card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-success\" [isCardHeader]=false>\n            <h4 class=\"card-title text-success\">Success card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-danger\" [isCardHeader]=false>\n            <h4 class=\"card-title text-danger\">Danger card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-warning\" [isCardHeader]=false>\n            <h4 class=\"card-title text-warning\">Warning card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-4\">\n        <app-iq-card cardClass=\"card iq-mb-3 text-info\" [isCardHeader]=false>\n            <h4 class=\"card-title text-info\">Info card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>\n        </app-iq-card>\n    </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h3 class=\"mt-4 mb-3\">Card groups</h3>\n  </div>\n  <div class=\"col-sm-12\">\n    <div class=\"card-group iq-mb-3\">\n      <div class=\"card\">\n        <img src=\"assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img src=\"assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img src=\"assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h3 class=\"mb-3\">Card Masonry Columns</h3>\n    </div>\n    <div class=\"card-columns\">\n      <app-iq-card cardClass=\"card iq-mb-3\" [isCardHeader]=false>\n        <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n        <h4 class=\"card-title\">Card title that wraps to a new line</h4>\n        <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n      </app-iq-card>\n      <app-iq-card cardClass=\"card iq-mb-3\">\n        <blockquote class=\"blockquote mb-0\">\n          <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">\n             <small class=\"text-muted\">\n             Someone famous in <cite title=\"Source Title\">Source Title</cite>\n             </small>\n          </footer>\n       </blockquote>\n      </app-iq-card>\n      <app-iq-card cardClass=\"card iq-mb-3\" [isCardHeader]=false>\n        <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n        <h4 class=\"card-title\">Card title</h4>\n        <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n        <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n      </app-iq-card>\n      <app-iq-card cardClass=\"card bg-primary text-white text-center iq-mb-3\" [isCardHeader]=false>\n        <blockquote class=\"blockquote mb-0\">\n          <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">\n             <small class=\"text-white\">\n             Someone famous in <cite title=\"Source Title\">Source Title</cite>\n             </small>\n          </footer>\n       </blockquote>\n      </app-iq-card>\n      <app-iq-card cardClass=\"card text-center iq-mb-3\" [isCardHeader]=false>\n        <h4 class=\"card-title\">Card title</h4>\n        <p class=\"card-text\">This card has a regular title and short paragraphy of text below it.</p>\n        <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n      </app-iq-card>\n      <app-iq-card cardClass=\"card iq-mb-3\" [isCardHeader]=false [isCardBody]=false>\n        <img card-top src=\"/assets/images/page-img/07.jpg\" class=\"card-img-top\" alt=\"#\">\n      </app-iq-card>\n      <app-iq-card cardClass=\"card text-right iq-mb-3\" [isCardHeader]=false>\n        <blockquote class=\"blockquote mb-0\">\n          <p class=\"font-size-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">\n             <small class=\"text-muted\">\n             Someone famous in <cite title=\"Source Title\">Source Title</cite>\n             </small>\n          </footer>\n       </blockquote>\n      </app-iq-card>\n      <app-iq-card cardClass=\"card iq-mb-3\" [isCardHeader]=false>\n        <h4 class=\"card-title\">Card title</h4>\n        <p class=\"card-text\">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>\n        <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n      </app-iq-card>\n    </div>\n\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-carousel/ui-carousel.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-carousel/ui-carousel.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiCarouselUiCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Slides only</h4>\n      </div>\n      <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>\n      <carousel [showIndicators]=false>\n        <slide>\n          <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\"  alt=\"first slide\" style=\"display: block;\">\n        </slide>\n        <slide>\n          <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"second slide\">\n        </slide>\n        <slide>\n          <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"third slide\">\n        </slide>\n      </carousel>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Slides With Controls</h4>\n      </div>\n      <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>\n          <carousel [showIndicators]=false>\n            <slide>\n              <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\"  alt=\"first slide\" style=\"display: block;\">\n            </slide>\n            <slide>\n              <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"#\">\n            </slide>\n            <slide>\n              <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"#\">\n            </slide>\n          </carousel>\n\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Slides With Indicators</h4>\n      </div>\n      <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>\n      <carousel>\n        <slide>\n          <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\"  alt=\"first slide\" style=\"display: block;\">\n        </slide>\n        <slide>\n          <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"#\">\n        </slide>\n        <slide>\n          <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"#\">\n        </slide>\n      </carousel>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Slides With Captions</h4>\n     </div>\n     <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>\n     <carousel>\n      <slide>\n        <img src=\"/assets/images/small/img-1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"text-light\">First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n      </slide>\n      <slide>\n        <img src=\"/assets/images/small/img-1.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"text-light\">Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </div>\n      </slide>\n      <slide>\n        <img src=\"/assets/images/small/img-1.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"text-light\">Third slide label</h3>\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n        </div>\n      </slide>\n    </carousel>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Slides With Crossfade</h4>\n      </div>\n      <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>\n      <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"#\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"#\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"/assets/images/small/img-1.jpg\" class=\"d-block w-100\" alt=\"#\">\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-colors/ui-colors.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-colors/ui-colors.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiColorsUiColorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Sofbox Color</h4>\n      </div>\n      <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>\n      <div class=\"row mt-4\">\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"bg-primary pt-5 pb-5 text-center rounded\"></p>\n          <h6>Primary</h6>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"bg-secondary pt-5 pb-5 text-center rounded\"></p>\n          <h6>Secondary</h6>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"bg-success pt-5 pb-5 text-center rounded\"></p>\n          <h6>Success</h6>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"bg-danger pt-5 pb-5 text-center rounded\"></p>\n          <h6>Danger</h6>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"bg-warning pt-5 pb-5 text-center rounded\"></p>\n          <h6>Warning</h6>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"bg-info pt-5 pb-5 text-center rounded\"></p>\n          <h6>Info</h6>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center mt-4\">\n          <p class=\"bg-light pt-5 pb-5 text-center rounded\"></p>\n          <h6>Light</h6>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center mt-4\">\n          <p class=\"bg-dark pt-5 pb-5 text-center rounded\"></p>\n          <h6>Dark</h6>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-md-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Sofbox Color</h4>\n      </div>\n      <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>\n      <div class=\"row mt-4\">\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"iq-bg-primary pt-5 pb-5 text-center rounded font-size-18\">Primary</p>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"iq-bg-secondary pt-5 pb-5 text-center rounded font-size-18\">Secondary</p>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"iq-bg-success pt-5 pb-5 text-center rounded font-size-18\">Success</p>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"iq-bg-danger pt-5 pb-5 text-center rounded font-size-18\">Danger</p>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"iq-bg-warning pt-5 pb-5 text-center rounded font-size-18\">Warning</p>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center\">\n          <p class=\"iq-bg-info pt-5 pb-5 text-center rounded font-size-18\">Info</p>\n        </div>\n        <div class=\"col-lg-2 col-md-6 text-center mt-4\">\n          <p class=\"iq-bg-dark pt-5 pb-5 text-center rounded font-size-18\">Dark</p>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Sofbox Text Color</h4>\n      </div>\n      <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>\n      <p class=\"text-primary\">.text-primary</p>\n      <p class=\"text-secondary\">.text-secondary</p>\n      <p class=\"text-success\">.text-success</p>\n      <p class=\"text-danger\">.text-danger</p>\n      <p class=\"text-warning\">.text-warning</p>\n      <p class=\"text-info\">.text-info</p>\n      <p class=\"text-light bg-dark\">.text-light</p>\n      <p class=\"text-dark\">.text-dark</p>\n      <p class=\"text-muted\">.text-muted</p>\n      <p class=\"text-white bg-dark\">.text-white</p>\n      <p class=\"text-black-50\">.text-black-50</p>\n      <p class=\"text-white-50 bg-dark mb-0\">.text-white-50</p>\n    </app-iq-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Sofbox Text Color</h4>\n      </div>\n      <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-primary\">Primary link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-secondary\">Secondary link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-success\">Success link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-danger\">Danger link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-warning\">Warning link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-info\">Info link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-light bg-dark\">Light link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-dark\">Dark link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"text-muted\">Muted link</a></p>\n      <p class=\"mb-0\"><a href=\"javascript:void(0);\" class=\"text-white bg-dark\">White link</a></p>\n    </app-iq-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Sofbox Text Color</h4>\n      </div>\n      <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>\n      <p class=\"iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded\">Primary link</p>\n      <p class=\"iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded\">Secondary link</p>\n      <p class=\"iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded\">Success link</p>\n      <p class=\"iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded\">Danger link</p>\n      <p class=\"iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded\">Warning link</p>\n      <p class=\"iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded\">Info link</p>\n      <p class=\"iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded mb-0\">Dark link</p>\n    </app-iq-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Sofbox Text Color</h4>\n      </div>\n      <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>\n      <p><a href=\"javascript:void(0);\" class=\"iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block\">Primary link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block\">Secondary link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded d-inline-block\">Success link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded d-inline-block\">Danger link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded d-inline-block\">Warning link</a></p>\n      <p><a href=\"javascript:void(0);\" class=\"iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded d-inline-block\">Info link</a></p>\n      <p class=\"mb-0\"><a href=\"javascript:void(0);\" class=\"iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded d-inline-block\">Dark link</a></p>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-grid/ui-grid.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-grid/ui-grid.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiGridUiGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Grid options</h4>\n            </div>\n            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>\n            <table class=\"table table-bordered table-striped\">\n                <thead>\n                    <tr>\n                    <th></th>\n                    <th class=\"text-center\">\n                        Extra small<br>\n                        <small>&lt;576px</small>\n                    </th>\n                    <th class=\"text-center\">\n                        Small<br>\n                        <small>≥576px</small>\n                    </th>\n                    <th class=\"text-center\">\n                        Medium<br>\n                        <small>≥768px</small>\n                    </th>\n                    <th class=\"text-center\">\n                        Large<br>\n                        <small>≥992px</small>\n                    </th>\n                    <th class=\"text-center\">\n                        Extra large<br>\n                        <small>≥1200px</small>\n                    </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                    <th class=\"text-nowrap text-left\" scope=\"row\">Max container width</th>\n                    <td>None (auto)</td>\n                    <td>540px</td>\n                    <td>720px</td>\n                    <td>960px</td>\n                    <td>1140px</td>\n                    </tr>\n                    <tr>\n                    <th class=\"text-nowrap text-left\" scope=\"row\">Class prefix</th>\n                    <td><code>.col-</code></td>\n                    <td><code>.col-sm-</code></td>\n                    <td><code>.col-md-</code></td>\n                    <td><code>.col-lg-</code></td>\n                    <td><code>.col-xl-</code></td>\n                    </tr>\n                    <tr>\n                    <th class=\"text-nowrap text-left\" scope=\"row\"># of columns</th>\n                    <td colspan=\"5\" class=\"text-left\" >12</td>\n                    </tr>\n                    <tr>\n                    <th class=\"text-nowrap text-left\" scope=\"row\">Gutter width</th>\n                    <td colspan=\"5\" class=\"text-left\">30px (15px on each side of a column)</td>\n                    </tr>\n                    <tr>\n                    <th class=\"text-nowrap text-left\" scope=\"row\">Nestable</th>\n                    <td colspan=\"5\" class=\"text-left\">Yes</td>\n                    </tr>\n                    <tr>\n                    <th class=\"text-nowrap text-left\" scope=\"row\">Column ordering</th>\n                    <td colspan=\"5\" class=\"text-left\">Yes</td>\n                    </tr>\n                </tbody>\n            </table>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Equal-width</h4>\n            </div>\n            <p>For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to <code>xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid\">\n                    <!-- Stack the columns on mobile by making one full-width and the other half-width -->\n                    <div class=\"row mb-3\">\n                    <div class=\"col-12 col-md-8\">.col-12 .col-md-8</div>\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    </div>\n                    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\n                    <div class=\"row mb-3\">\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    </div>\n                    <!-- Columns are always 50% wide, on mobile and desktop -->\n                    <div class=\"row\">\n                    <div class=\"col-6\">.col-6</div>\n                    <div class=\"col-6\">.col-6</div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Setting one column width</h4>\n            </div>\n            <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid\">\n                    <div class=\"row mb-3\">\n                    <div class=\"col\">\n                        1 of 3\n                    </div>\n                    <div class=\"col-6\">\n                        2 of 3 (wider)\n                    </div>\n                    <div class=\"col\">\n                        3 of 3\n                    </div>\n                    </div>\n                    <div class=\"row\">\n                    <div class=\"col\">\n                        1 of 3\n                    </div>\n                    <div class=\"col-5\">\n                        2 of 3 (wider)\n                    </div>\n                    <div class=\"col\">\n                        3 of 3\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Variable width content</h4>\n            </div>\n            <p>Use <code>col-auto</code> classes to size columns based on the natural width of their content.</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid\">\n                    <div class=\"row justify-content-md-center mb-3\">\n                    <div class=\"col col-lg-2\">\n                        1 of 3\n                    </div>\n                    <div class=\"col-md-auto\">\n                        Variable width content\n                    </div>\n                    <div class=\"col col-lg-2\">\n                        3 of 3\n                    </div>\n                    </div>\n                    <div class=\"row\">\n                    <div class=\"col\">\n                        1 of 3\n                    </div>\n                    <div class=\"col-md-auto\">\n                        Variable width content\n                    </div>\n                    <div class=\"col col-lg-2\">\n                        3 of 3\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Equal-width multi-row</h4>\n            </div>\n            <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href=\"/docs/4.3/utilities/display/\">responsive display utilities</a>.</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                    <div class=\"col\">col</div>\n                    <div class=\"col\">col</div>\n                    <div class=\"w-100\"></div>\n                    <div class=\"col\">col</div>\n                    <div class=\"col\">col</div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Responsive classes</h4>\n             </div>\n             <p>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>\n                <h4 class=\"card-title\">All breakpoints</h4>\n                <p>For grids that are the same from the smallest of devices to the largest, use the <code>.col</code> and <code>.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code>.col</code>.</p>\n                <div class=\"iq-example-row\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row mb-3\">\n                        <div class=\"col\">col</div>\n                        <div class=\"col\">col</div>\n                        <div class=\"col\">col</div>\n                        <div class=\"col\">col</div>\n                        </div>\n                        <div class=\"row\">\n                        <div class=\"col-8\">col-8</div>\n                        <div class=\"col-4\">col-4</div>\n                        </div>\n                    </div>\n                </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Stacked to horizontal</h4>\n            </div>\n            <p>Using a single set of <code>.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code>sm</code>).</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid\">\n                    <div class=\"row mb-3\">\n                    <div class=\"col-sm-8\">col-sm-8</div>\n                    <div class=\"col-sm-4\">col-sm-4</div>\n                    </div>\n                    <div class=\"row\">\n                    <div class=\"col-sm\">col-sm</div>\n                    <div class=\"col-sm\">col-sm</div>\n                    <div class=\"col-sm\">col-sm</div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Mix and match</h4>\n            </div>\n            <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid\">\n                    <!-- Stack the columns on mobile by making one full-width and the other half-width -->\n                    <div class=\"row mb-3\">\n                    <div class=\"col-12 col-md-8\">.col-12 .col-md-8</div>\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    </div>\n                    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\n                    <div class=\"row mb-3\">\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                    </div>\n                    <!-- Columns are always 50% wide, on mobile and desktop -->\n                    <div class=\"row\">\n                    <div class=\"col-6\">.col-6</div>\n                    <div class=\"col-6\">.col-6</div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Gutters</h4>\n            </div>\n            <p>Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the <code>.row</code> and matching padding utilities on the <code>.col</code>s. The <code>.container</code> or <code>.container-fluid</code> parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.</p>\n            <p>Here’s an example of customizing the Bootstrap grid at the large (<code>lg</code>) breakpoint and above. We’ve increased the <code>.col</code> padding with <code>.px-lg-5</code>, counteracted that with <code>.mx-lg-n5</code> on the parent <code>.row</code> and then adjusted the <code>.container</code> wrapper with <code>.px-lg-5</code>.</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid px-lg-5\">\n                    <div class=\"row mx-lg-n5\">\n                    <div class=\"col py-3 px-lg-5 border bg-light\">Custom column padding</div>\n                    <div class=\"col py-3 px-lg-5 border bg-light\">Custom column padding</div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Alignment</h4>\n            </div>\n            <p>Use flexbox alignment utilities to vertically and horizontally align columns. <strong>Internet Explorer 10-11 do not support vertical alignment of flex items when the flex container has a <code>min-height</code> as shown below.</strong> <a href=\"https://github.com/philipwalton/flexbugs#flexbug-3\">See Flexbugs #3 for more details.</a></p>\n            <h4 class=\"mb-3\">Vertical alignment</h4>\n            <div class=\"iq-example-row iq-example-row-flex-cols\">\n                <div class=\"container-fluid\">\n                    <div class=\"row align-items-start\">\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    </div>\n                    <div class=\"row align-items-center\">\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    </div>\n                    <div class=\"row align-items-end\">\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    <div class=\"col\">\n                        One of three columns\n                    </div>\n                    </div>\n                </div>\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                    <div class=\"col align-self-start\">\n                        One of three columns\n                    </div>\n                    <div class=\"col align-self-center\">\n                        One of three columns\n                    </div>\n                    <div class=\"col align-self-end\">\n                        One of three columns\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Horizontal alignment</h4>\n            </div>\n            <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href=\"/docs/4.3/utilities/display/\">responsive display utilities</a>.</p>\n            <div class=\"iq-example-row\">\n                <div class=\"container-fluid\">\n                    <div class=\"row justify-content-start mb-3\">\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    </div>\n                    <div class=\"row justify-content-center mb-3\">\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    </div>\n                    <div class=\"row justify-content-end mb-3\">\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    </div>\n                    <div class=\"row justify-content-around mb-3\">\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    </div>\n                    <div class=\"row justify-content-between\">\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    <div class=\"col-4\">\n                        One of two columns\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-images/ui-images.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-images/ui-images.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiImagesUiImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Responsive images</h4>\n            </div>\n            <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>\n            <img src=\"/assets/images/small/img-1.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Equal-width multi-row</h4>\n            </div>\n            <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href=\"/docs/4.3/utilities/display/\">responsive display utilities</a>.</p>\n            <div class=\"media\">\n                <img src=\"/assets/images/page-img/15.jpg\" class=\"mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Media heading</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n            <div class=\"media\">\n                <img src=\"/assets/images/page-img/16.jpg\" class=\"mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Media heading</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    <div class=\"media mt-3\">\n                    <a class=\"mr-3\" href=\"javascript:void(0);\">\n                    <img src=\"/assets/images/page-img/17.jpg\" class=\"mr-3\" alt=\"#\">\n                    </a>\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0\">Media heading</h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Order</h4>\n            </div>\n            <p>Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>\n            <div class=\"media mb-5\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Media object</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n                <img src=\"/assets/images/page-img/18.jpg\" class=\"ml-3\" alt=\"#\">\n            </div>\n            <div class=\"media mb-5\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Center-aligned media</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n                <img src=\"/assets/images/page-img/19.jpg\" class=\"align-self-center mr-3\" alt=\"#\">\n            </div>\n            <div class=\"media\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Bottom-aligned media</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n                <img src=\"/assets/images/page-img/20.jpg\" class=\"align-self-end mr-3\" alt=\"#\">\n            </div>\n        </app-iq-card>\n\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Image thumbnails</h4>\n            </div>\n            <p>In addition to our <a href=\"/docs/4.3/utilities/borders/\">border-radius utilities</a>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>\n            <img src=\"/assets/images/page-img/10.jpg\" class=\"img-thumbnail ml-3\" alt=\"Responsive image\">\n            <img src=\"/assets/images/page-img/11.jpg\" class=\"rounded ml-3\" alt=\"Responsive image\">\n            <img src=\"/assets/images/page-img/12.jpg\" class=\"rounded-circle\" alt=\"Responsive image\">\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Image thumbnails</h4>\n            </div>\n            <p>In addition to our <a href=\"/docs/4.3/utilities/borders/\">border-radius utilities</a>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>\n            <img src=\"/assets/images/page-img/13.jpg\" class=\"\" alt=\"Responsive image\">\n            <img src=\"/assets/images/page-img/14.jpg\" class=\"float-right\" alt=\"Responsive image\">\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Media object</h4>\n            </div>\n            <p>The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>\n            <div class=\"media mb-4\">\n                <img src=\"/assets/images/page-img/21.jpg\" class=\"align-self-start mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Top-aligned media</h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n            </div>\n            <div class=\"media mb-4\">\n                <img src=\"/assets/images/page-img/22.jpg\" class=\"align-self-center mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Center-aligned media</h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n            </div>\n            <div class=\"media\">\n                <img src=\"/assets/images/page-img/23.jpg\" class=\"align-self-end mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Bottom-aligned media</h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Media list</h4>\n            </div>\n            <p>Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the <code>.list-unstyled</code> to remove any browser default list styles, and then apply <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever needed to fine tune.</p>\n            <ul class=\"list-unstyled\">\n                <li class=\"media\">\n                    <img src=\"/assets/images/page-img/24.jpg\" class=\"mr-3\" alt=\"#\">\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media my-4\">\n                    <img src=\"/assets/images/page-img/15.jpg\" class=\"mr-3\" alt=\"#\">\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img src=\"/assets/images/page-img/16.jpg\" class=\"mr-3\" alt=\"#\">\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n            </ul>\n        </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-list-group/ui-list-group.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-list-group/ui-list-group.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiListGroupUiListGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">List group</h4>\n            </div>\n            <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">Cras justo odio</li>\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item\">Morbi leo risus</li>\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Disabled items</h4>\n            </div>\n            <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</p>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item disabled\" aria-disabled=\"true\">Cras justo odio</li>\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item\">Morbi leo risus</li>\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Flush</h4>\n            </div>\n            <p>Add <code class=\"highlighter-rouge\">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">Cras justo odio</li>\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item\">Morbi leo risus</li>\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Contextual classes</h4>\n            </div>\n            <p>Use contextual classes to style list items with a stateful background and color.</p>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item list-group-item-primary\">A simple primary list group item</li>\n                <li class=\"list-group-item list-group-item-secondary\">A simple secondary list group item</li>\n                <li class=\"list-group-item list-group-item-success\">A simple success list group item</li>\n                <li class=\"list-group-item list-group-item-danger\">A simple danger list group item</li>\n                <li class=\"list-group-item list-group-item-warning\">A simple warning list group item</li>\n                <li class=\"list-group-item list-group-item-info\">A simple info list group item</li>\n                <li class=\"list-group-item list-group-item-light\">A simple light list group item</li>\n                <li class=\"list-group-item list-group-item-dark\">A simple dark list group item</li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">With badges</h4>\n            </div>\n            <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <a href=\"/docs/4.3/utilities/flex/\">utilities</a>.</p>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    Cras justo odio\n                    <span class=\"badge badge-primary badge-pill\">14</span>\n                </li>\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    Dapibus ac facilisis in\n                    <span class=\"badge badge-success badge-pill\">2</span>\n                </li>\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    Morbi leo risus\n                    <span class=\"badge badge-danger badge-pill\">1</span>\n                </li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">With badges</h4>\n            </div>\n            <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <a href=\"/docs/4.3/utilities/flex/\">utilities</a>.</p>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item d-flex justify-content-between align-items-center iq-bg-primary\">\n                    Cras justo odio\n                    <span class=\"badge badge-primary badge-pill\">14</span>\n                </li>\n                <li class=\"list-group-item d-flex justify-content-between align-items-center iq-bg-success\" >\n                    Dapibus ac facilisis in\n                    <span class=\"badge badge-success badge-pill\">2</span>\n                </li>\n                <li class=\"list-group-item d-flex justify-content-between align-items-center iq-bg-danger\">\n                    Morbi leo risus\n                    <span class=\"badge badge-danger badge-pill\">1</span>\n                </li>\n            </ul>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">List Active</h4>\n            </div>\n            <p>Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item active\">Cras justo odio</li>\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item\">Morbi leo risus</li>\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Links and buttons</h4>\n            </div>\n            <p>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.</p>\n            <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>\n            <div class=\"list-group\">\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action active\">\n                Cras justo odio\n                </a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">Morbi leo risus</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">Porta ac consectetur ac</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action disabled\" tabindex=\"-1\" aria-disabled=\"true\">Vestibulum at eros</a>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Horizontal</h4>\n            </div>\n            <p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal-sm|md|lg|xl}</code> to make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently <strong>horizontal list groups cannot be combined with flush list groups.</strong></p>\n            <p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add <code>.flex-fill</code> to each list group item.</p>\n            <ul class=\"list-group list-group-horizontal\">\n                <li class=\"list-group-item\">Cras justo odio</li>\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item\">Morbi leo risus</li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Contextual classes Action</h4>\n            </div>\n            <p>Use contextual classes to style list items with a stateful background and color.</p>\n            <div class=\"list-group\">\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-primary\">A simple primary list group item</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-secondary\">A simple secondary list group item</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-success\">A simple success list group item</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-danger\">A simple danger list group item</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-warning\">A simple warning list group item</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-info\">A simple info list group item</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-light\">A simple light list group item</a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-dark\">A simple dark list group item</a>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Custom content</h4>\n            </div>\n            <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <a href=\"/docs/4.3/utilities/flex/\">flexbox utilities</a>.</p>\n            <div class=\"list-group\">\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action active\">\n                    <div class=\"d-flex w-100 justify-content-between\">\n                    <h5 class=\"mb-1 text-white\">List group item heading</h5>\n                    <small>3 days ago</small>\n                    </div>\n                    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                    <small>Donec id elit non mi porta.</small>\n                </a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">\n                    <div class=\"d-flex w-100 justify-content-between\">\n                    <h5 class=\"mb-1\">List group item heading</h5>\n                    <small class=\"text-muted\">3 days ago</small>\n                    </div>\n                    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                    <small class=\"text-muted\">Donec id elit non mi porta.</small>\n                </a>\n                <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">\n                    <div class=\"d-flex w-100 justify-content-between\">\n                    <h5 class=\"mb-1\">List group item heading</h5>\n                    <small class=\"text-muted\">3 days ago</small>\n                    </div>\n                    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                    <small class=\"text-muted\">Donec id elit non mi porta.</small>\n                </a>\n            </div>\n        </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-media/ui-media.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-media/ui-media.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiMediaUiMediaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Equal-width multi-row</h4>\n            </div>\n            <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href=\"/docs/4.3/utilities/display/\">responsive display utilities</a>.</p>\n            <div class=\"media\">\n                <img src=\"/assets/images/page-img/15.jpg\" class=\"mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Media heading</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n            <div class=\"media\">\n                <img src=\"/assets/images/page-img/16.jpg\" class=\"mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Media heading</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    <div class=\"media mt-3\">\n                    <a class=\"mr-3\" href=\"javascript:void(0);\">\n                    <img src=\"/assets/images/page-img/17.jpg\" class=\"mr-3\" alt=\"#\">\n                    </a>\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0\">Media heading</h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Order</h4>\n            </div>\n            <p>Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>\n            <div class=\"media mb-5\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Media object</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n                <img src=\"/assets/images/page-img/18.jpg\" class=\"ml-3\" alt=\"#\">\n            </div>\n            <div class=\"media mb-5\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Center-aligned media</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n                <img src=\"/assets/images/page-img/19.jpg\" class=\"align-self-center mr-3\" alt=\"#\">\n            </div>\n            <div class=\"media\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Bottom-aligned media</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n                <img src=\"/assets/images/page-img/20.jpg\" class=\"align-self-end mr-3\" alt=\"#\">\n            </div>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Media object</h4>\n            </div>\n            <p>The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>\n            <div class=\"media mb-4\">\n                <img src=\"/assets/images/page-img/21.jpg\" class=\"align-self-start mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Top-aligned media</h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n            </div>\n            <div class=\"media mb-4\">\n                <img src=\"/assets/images/page-img/22.jpg\" class=\"align-self-center rounded mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Center-aligned media</h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n            </div>\n            <div class=\"media\">\n                <img src=\"/assets/images/page-img/23.jpg\" class=\"align-self-end rounded-circle mr-3\" alt=\"#\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\">Bottom-aligned media</h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Media list</h4>\n            </div>\n            <p>Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the <code>.list-unstyled</code> to remove any browser default list styles, and then apply <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever needed to fine tune.</p>\n            <ul class=\"list-unstyled\">\n                <li class=\"media\">\n                    <img src=\"/assets/images/page-img/24.jpg\" class=\"mr-3\" alt=\"#\">\n                    <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media my-4\">\n                    <img src=\"/assets/images/page-img/15.jpg\" class=\"mr-3\" alt=\"#\">\n                    <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img src=\"/assets/images/page-img/16.jpg\" class=\"mr-3\" alt=\"#\">\n                    <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n            </ul>\n        </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-modal/ui-modal.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-modal/ui-modal.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiModalUiModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Modal components</h4>\n     </div>\n     <p>Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>\n      <!-- Button trigger modal -->\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      Launch demo modal\n      </button>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  ...\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Modal Scrolling </h4>\n     </div>\n     <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>\n        <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalScrollable\">\n        Launch demo modal\n        </button>\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"exampleModalScrollable\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalScrollableTitle\">Modal title</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                </div>\n              </div>\n          </div>\n        </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Optional sizes</h4>\n     </div>\n     <p>Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>\n      <!-- Extra large modal -->\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-xl\">Extra large modal</button>\n      <div class=\"modal fade bd-example-modal-xl\" tabindex=\"-1\" role=\"dialog\"   aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-xl\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <p>Modal body text goes here.</p>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n      <!-- Large modal -->\n      <button type=\"button\" class=\"btn ml-1 btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">Large modal</button>\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <p>Modal body text goes here.</p>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n      <!-- Small modal -->\n      <button type=\"button\" class=\"btn ml-1 btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">Small modal</button>\n      <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-sm\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <p>Modal body text goes here.</p>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Scrolling long content</h4>\n     </div>\n     <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>\n      <!-- Button trigger modal -->\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n      Launch demo modal\n      </button>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Vertically centered</h4>\n     </div>\n     <p>Add <code class=\"highlighter-rouge\">.modal-dialog-centered</code> to <code class=\"highlighter-rouge\">.modal-dialog</code> to vertically center the modal.</p>\n      <!-- Button trigger modal -->\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n      Launch demo modal\n      </button>\n      <button type=\"button\" class=\"btn ml-1 btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenteredScrollable\">\n      Vertically centered scrollable modal\n      </button>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  ...\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n      <div id=\"exampleModalCenteredScrollable\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenteredScrollableTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-scrollable modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalCenteredScrollableTitle\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">×</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Using the grid</h4>\n     </div>\n     <p>Utilize the Bootstrap grid system within a modal by nesting <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.</p>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#gridSystemModal\">\n      Launch demo modal\n      </button>\n      <div id=\"gridSystemModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"gridModalLabel\">Grids in modals</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n              </div>\n              <div class=\"modal-body\">\n                  <div class=\"iq-example-row\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row mb-3\">\n                          <div class=\"col-md-4\">.col-md-4</div>\n                          <div class=\"col-md-4 ml-auto\">.col-md-4 .ml-auto</div>\n                        </div>\n                        <div class=\"row mb-3\">\n                          <div class=\"col-md-3 ml-auto\">.col-md-3 .ml-auto</div>\n                          <div class=\"col-md-2 ml-auto\">.col-md-2 .ml-auto</div>\n                        </div>\n                        <div class=\"row mb-3\">\n                          <div class=\"col-md-6 ml-auto\">.col-md-6 .ml-auto</div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-sm-9\">\n                              Level 1: .col-sm-9\n                              <div class=\"row\">\n                                <div class=\"col-8 col-sm-6\">\n                                    Level 2: .col-8 .col-sm-6\n                                </div>\n                                <div class=\"col-4 col-sm-6\">\n                                    Level 2: .col-4 .col-sm-6\n                                </div>\n                              </div>\n                          </div>\n                        </div>\n                    </div>\n                  </div>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-notification/ui-notification.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-notification/ui-notification.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiNotificationUiNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Notifications</h4>\n            </div>\n            <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>\n            <div class=\"toast fade show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                <div class=\"toast-header\">\n                    <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                    <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                    </svg>\n                    <strong class=\"mr-auto\">Bootstrap</strong>\n                    <small>11 mins ago</small>\n                    <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    </button>\n                </div>\n                <div class=\"toast-body\">\n                    Hello, world! This is a toast message.\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Stacking</h4>\n            </div>\n            <p>When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>\n            <div class=\"toast fade show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                <div class=\"toast-header\">\n                    <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                    <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                    </svg>\n                    <strong class=\"mr-auto\">Bootstrap</strong>\n                    <small class=\"text-muted\">just now</small>\n                    <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"toast-body\">\n                    See? Just like this.\n                </div>\n            </div>\n            <div class=\"toast fade show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                <div class=\"toast-header\">\n                    <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                    <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                    </svg>\n                    <strong class=\"mr-auto\">Bootstrap</strong>\n                    <small class=\"text-muted\">2 seconds ago</small>\n                    <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"toast-body\">\n                    Heads up, toasts will stack automatically\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Notifications horizontally and/or vertically </h4>\n            </div>\n            <p>You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</p>\n            <div class=\"p-3 bg-dark\">\n                <!-- Flexbox container for aligning the toasts -->\n                <div aria-live=\"polite\" aria-atomic=\"true\" class=\"d-flex justify-content-center align-items-center\" style=\"min-height: 200px;\">\n                    <!-- Then put toasts within -->\n                    <div class=\"toast fade show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                    <div class=\"toast-header\">\n                        <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                            <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                        </svg>\n                        <strong class=\"mr-auto\">Bootstrap</strong>\n                        <small>11 mins ago</small>\n                        <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"toast-body\">\n                        Hello, world! This is a toast message.\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n    </div>\n    <div class=\"col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Notifications</h4>\n            </div>\n            <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the <code>backdrop-filter</code> CSS property, we’ll also attempt to blur the elements under a toast.</p>\n            <div class=\"p-3 bg-dark\">\n                <div class=\"toast fade show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                    <div class=\"toast-header\">\n                    <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                        <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                    </svg>\n                    <strong class=\"mr-auto\">Bootstrap</strong>\n                    <small>11 mins ago</small>\n                    <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    </button>\n                    </div>\n                    <div class=\"toast-body\">\n                    Hello, world! This is a toast message.\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Stacking Placement</h4>\n            </div>\n            <p>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.</p>\n            <div class=\"bg-dark p-3\">\n                <div aria-live=\"polite\" aria-atomic=\"true\" style=\"position: relative; min-height: 200px;\">\n                    <div class=\"toast fade show\" style=\"position: absolute; top: 0; right: 0;\">\n                    <div class=\"toast-header\">\n                        <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                            <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                        </svg>\n                        <strong class=\"mr-auto\">Bootstrap</strong>\n                        <small>11 mins ago</small>\n                        <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"toast-body\">\n                        Hello, world! This is a toast message.\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <p class=\"mt-3\">For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>\n            <div class=\"bg-dark p-3 mt-3\">\n                <div aria-live=\"polite\" aria-atomic=\"true\" style=\"position: relative; min-height: 200px;\">\n                    <!-- Position it -->\n                    <div style=\"position: absolute; top: 0; right: 0;\">\n                    <!-- Then put toasts within -->\n                    <div class=\"toast fade show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                        <div class=\"toast-header\">\n                            <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                                <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                            </svg>\n                            <strong class=\"mr-auto\">Bootstrap</strong>\n                            <small class=\"text-muted\">just now</small>\n                            <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"toast-body\">\n                            See? Just like this.\n                        </div>\n                    </div>\n                    <div class=\"toast fade show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                        <div class=\"toast-header\">\n                            <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                                <rect width=\"100%\" height=\"100%\" fill=\"#007aff\"></rect>\n                            </svg>\n                            <strong class=\"mr-auto\">Bootstrap</strong>\n                            <small class=\"text-muted\">2 seconds ago</small>\n                            <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"toast-body\">\n                            Heads up, toasts will stack automatically\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Notifications</h4>\n            </div>\n            <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>\n            <div class=\"toast fade show bg-primary text-white border-0\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                <div class=\"toast-header bg-primary text-white\">\n                    <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                    <rect width=\"100%\" height=\"100%\" fill=\"#fff\"></rect>\n                    </svg>\n                    <strong class=\"mr-auto text-white\">Bootstrap</strong>\n                    <small>11 mins ago</small>\n                    <button type=\"button\" class=\"ml-2 mb-1 close text-white\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    </button>\n                </div>\n                <div class=\"toast-body\">\n                    Hello, world! This is a toast message.\n                </div>\n            </div>\n            <div class=\"toast fade show bg-success text-white border-0 mt-3\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                <div class=\"toast-header bg-success text-white\">\n                    <svg class=\"bd-placeholder-img rounded mr-2\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n                    <rect width=\"100%\" height=\"100%\" fill=\"#fff\"></rect>\n                    </svg>\n                    <strong class=\"mr-auto text-white\">Bootstrap</strong>\n                    <small>11 mins ago</small>\n                    <button type=\"button\" class=\"ml-2 mb-1 close text-white\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    </button>\n                </div>\n                <div class=\"toast-body\">\n                    Hello, world! This is a toast message.\n                </div>\n            </div>\n        </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-pagination/ui-pagination.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-pagination/ui-pagination.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiPaginationUiPaginationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Pagination Examples</h4>\n     </div>\n     <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label=\"Search results pages\"</code>.</p>\n     <nav aria-label=\"Page navigation example\">\n        <pagination [totalItems]=\"30\"></pagination>\n      </nav>\n    </app-iq-card>\n    <app-iq-card>\n      <div class-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Disabled and active states</h4>\n     </div>\n     <p>Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.</p>\n      <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code>tabindex=\"-1\"</code> on disabled links and use custom JavaScript to fully disable their functionality.</p>\n      <nav aria-label=\"...\">\n        <pagination [totalItems]=\"30\" [(ngModel)]=\"currentPage\"></pagination>\n      </nav>\n      <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>\n      <nav aria-label=\"...\">\n        <pagination [totalItems]=\"30\"></pagination>\n      </nav>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Pagination With Color</h4>\n     </div>\n     <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label=\"Search results pages\"</code>.</p>\n      <nav aria-label=\"Page navigation example\">\n        <pagination class=\"pagination\" [totalItems]=\"30\" class=\"iq-page-primary\"></pagination>\n      </nav>\n      <nav aria-label=\"Page navigation example\">\n        <pagination class=\"pagination\" [totalItems]=\"30\" class=\"iq-page-success\"></pagination>\n      </nav>\n      <nav aria-label=\"Page navigation example\">\n        <pagination class=\"pagination\" [totalItems]=\"30\" class=\"iq-page-info\"></pagination>\n      </nav>\n    </app-iq-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Working with icons</h4>\n     </div>\n     <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>\n      <nav aria-label=\"Page navigation example\">\n        <pagination class=\"pagination\" [boundaryLinks]=\"true\"  [directionLinks]=\"false\" [totalItems]=\"30\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n      </nav>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Pagination Sizing</h4>\n     </div>\n     <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>\n      <nav aria-label=\"...\">\n        <pagination [totalItems]=\"30\"></pagination>\n      </nav>\n      <nav aria-label=\"...\">\n        <ul class=\"pagination\">\n            <li class=\"page-item active\" aria-current=\"page\">\n              <span class=\"page-link\">\n              1\n              <span class=\"sr-only\">(current)</span>\n              </span>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">3</a></li>\n        </ul>\n      </nav>\n      <nav aria-label=\"...\">\n        <ul class=\"pagination pagination-sm\">\n            <li class=\"page-item active\" aria-current=\"page\">\n              <span class=\"page-link\">\n              1\n              <span class=\"sr-only\">(current)</span>\n              </span>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">3</a></li>\n        </ul>\n      </nav>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Alignment</h4>\n     </div>\n     <p>Change the alignment of pagination components with <a href=\"/docs/4.3/utilities/flex/\">flexbox utilities</a>.</p>\n      <h6>left</h6>\n      <nav aria-label=\"Page navigation example\">\n        <ul class=\"pagination\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"javascript:void(0);\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">3</a></li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"javascript:void(0);\">Next</a>\n            </li>\n        </ul>\n      </nav>\n      <h6 class=\"text-center\">Center</h6>\n      <nav aria-label=\"Page navigation example\">\n        <ul class=\"pagination justify-content-center\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"javascript:void(0);\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">3</a></li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"javascript:void(0);\">Next</a>\n            </li>\n        </ul>\n      </nav>\n      <h6 class=\"text-right\">Right</h6>\n      <nav aria-label=\"Page navigation example\">\n        <ul class=\"pagination justify-content-end\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"javascript:void(0);\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">3</a></li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"javascript:void(0);\">Next</a>\n            </li>\n        </ul>\n      </nav>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-popovers/ui-popovers.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-popovers/ui-popovers.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiPopoversUiPopoversComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Popovers</h4>\n     </div>\n     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      <button type=\"button\" class=\"btn btn-lg btn-danger\" placement=\"right\" title=\"Popover title\" popover=\"And here's some amazing content. It's very engaging. Right?\">Click to toggle popover</button>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Dismiss on next click</h4>\n     </div>\n     <p>Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>\n      <a tabindex=\"0\" class=\"btn btn-danger\" triggers=\"focus\" title=\"Dismissible popover\" popover=\"And here's some amazing content. It's very engaging. Right?\">Dismissible popover</a>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Disabled elements</h4>\n     </div>\n     <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</p>\n      <span class=\"d-inline-block\" popover=\"Disabled popover\" placement=\"right\">\n      <button class=\"btn btn-primary\" style=\"pointer-events: none;\" disabled>Disabled button</button>\n      </span>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Hover elements</h4>\n     </div>\n     <p>For disabled popover triggers, you may also prefer <code>data-trigger=\"hover\"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>\n      <span class=\"d-inline-block\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popover=\"Disabled popover\">\n      <button class=\"btn btn-primary\" style=\"pointer-events: none;\" type=\"button\" disabled>Disabled button</button>\n      </span>\n    </app-iq-card>\n\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Four directions</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on top\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary ml-1\" placement=\"right\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on right\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary ml-1\" placement=\"bottom\" popover=\"Vivamus\n        sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on bottom\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary mt-1\" placement=\"left\"  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on left\n      </button>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Popovers With Color</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <button type=\"button\" class=\"btn btn-primary\" placement=\"top\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on top\n      </button>\n      <button type=\"button\" class=\"btn btn-success ml-1\" placement=\"right\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on right\n      </button>\n      <button type=\"button\" class=\"btn btn-danger ml-1\" placement=\"bottom\" popover=\"Vivamus\n        sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on bottom\n      </button>\n      <button type=\"button\" class=\"btn btn-info mt-1\" placement=\"left\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on left\n      </button>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Popovers With Color</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <button type=\"button\" class=\"btn iq-bg-primary\" placement=\"top\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on top\n      </button>\n      <button type=\"button\" class=\"btn iq-bg-success ml-1\" placement=\"right\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on right\n      </button>\n      <button type=\"button\" class=\"btn iq-bg-danger ml-1\" placement=\"bottom\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on bottom\n      </button>\n      <button type=\"button\" class=\"btn iq-bg-info mt-1\" placement=\"left\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Popover on left\n      </button>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-progressbars/ui-progressbars.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-progressbars/ui-progressbars.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiProgressbarsUiProgressbarsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Examples</h4>\n     </div>\n     <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress\">the HTML5 <code>&lt;progress&gt;</code> element</a>, ensuring you can stack progress bars, animate them, and place text labels over them.</p>\n      <ul>\n        <li>We use the <code>.progress</code> as a wrapper to indicate the max value of the progress bar.</li>\n        <li>We use the inner <code>.progress-bar</code> to indicate the progress so far.</li>\n        <li>The <code>.progress-bar</code> requires an inline style, utility class, or custom CSS to set their width.</li>\n        <li>The <code>.progress-bar</code> also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>\n      </ul>\n      <p>Put that all together, and you have the following examples.</p>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"0\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"25\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"50\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"75\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar [value]=\"100\"></progressbar>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Height</h4>\n     </div>\n     <p>We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>\n      <div class=\"progress mb-3\" style=\"height: 3px;\">\n        <progressbar [value]=\"25\">25%</progressbar>\n      </div>\n      <div class=\"progress mb-3\" style=\"height: 10px;\">\n        <progressbar [value]=\"50\">50%</progressbar>\n      </div>\n      <div class=\"progress mb-3\" style=\"height: 15px;\">\n        <progressbar [value]=\"75\">75%</progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar [value]=\"99\">99%</progressbar>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Animated stripes</h4>\n     </div>\n     <p>The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>\n      <div class=\"progress mb-3\">\n        <progressbar max=\"100\" [value]=\"75\" type=\"primary\" [striped]=\"true\" [animate]=\"true\"><i></i></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar max=\"100\" [value]=\"75\" type=\"success\" [striped]=\"true\" [animate]=\"true\"><i></i></progressbar>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Labels</h4>\n     </div>\n     <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"25\">25%</progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"50\">50%</progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"75\">75%</progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar [value]=\"99\">99%</progressbar>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Backgrounds</h4>\n     </div>\n     <p>Use background utility classes to change the appearance of individual progress bars.</p>\n      <div class=\"progress mb-3\">\n        <progressbar type=\"success\" [value]=\"25\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar type=\"info\" [value]=\"50\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar type=\"warning\" [value]=\"50\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar type=\"danger\" [value]=\"100\"></progressbar>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Multiple bars</h4>\n     </div>\n     <p>Include multiple progress bars in a progress component if you need.</p>\n      <div class=\"progress\">\n        <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Striped</h4>\n     </div>\n     <p>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"10\" type=\"primary\" [striped]=\"true\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"25\" type=\"success\" [striped]=\"true\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"50\" type=\"info\" [striped]=\"true\"></progressbar>\n      </div>\n      <div class=\"progress mb-3\">\n        <progressbar [value]=\"75\" type=\"warning\" [striped]=\"true\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar [value]=\"100\" type=\"danger\" [striped]=\"true\"></progressbar>\n      </div>\n    </app-iq-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-tabs/ui-tabs.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-tabs/ui-tabs.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiTabsUiTabsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Tabs</h4>\n      </div>\n      <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <tabset>\n        <tab heading=\"Home\" id=\"tab1\">Lorem1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n        <tab heading=\"Profile\" id=\"tab2\">Lorem2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n        <tab heading=\"Contact\" id=\"tab3\">Lorem3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      </tabset>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Tabs Style 3</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n     <tabset>\n      <tab heading=\"Home\" id=\"tab4\">Lorem1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      <tab heading=\"Profile\" id=\"tab5\">Lorem2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      <tab heading=\"Contact\" id=\"tab6\">Lorem3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n    </tabset>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Tabs Vertical Pills</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <div class=\"nav flex-column nav-pills text-center\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n            <a class=\"nav-link active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">Home</a>\n            <a class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">Profile</a>\n            <a class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\">Messages</a>\n            <a class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\">Settings</a>\n          </div>\n        </div>\n        <div class=\"col-sm-9\">\n          <div class=\"tab-content mt-0\" id=\"v-pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Tabs Justify Center</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <ul class=\"nav nav-tabs justify-content-center\" id=\"myTab-41\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" id=\"home-tab-end1\" data-toggle=\"tab\" href=\"#home-end\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"profile-tab-end1\" data-toggle=\"tab\" href=\"#profile-end\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab-end1\" data-toggle=\"tab\" href=\"#contact-end\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\" id=\"myTabContent-51\">\n        <div class=\"tab-pane fade show active\" id=\"home-end1\" role=\"tabpanel\" aria-labelledby=\"home-tab-end1\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"profile-end1\" role=\"tabpanel\" aria-labelledby=\"profile-tab-end1\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"contact-end1\" role=\"tabpanel\" aria-labelledby=\"contact-tab-end1\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Tabs Style 2</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n     <tabset type=\"pills\">\n      <tab heading=\"Home\" id=\"tab14\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      <tab heading=\"Profile\" id=\"tab15\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      <tab heading=\"Contact\" id=\"tab16\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n    </tabset>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Tabs Style 4</h4>\n      </div>\n      <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <tabset>\n        <tab heading=\"Home\" id=\"tab17\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n        <tab heading=\"Profile\" id=\"tab18\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n        <tab heading=\"Contact\" id=\"tab19\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      </tabset>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Tabs Fill and justify</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n     <tabset type=\"pills\" [justified] = true>\n      <tab heading=\"Home\" id=\"tab20\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      <tab heading=\"Profile\" id=\"tab21\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n      <tab heading=\"Contact\" id=\"tab22\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</tab>\n    </tabset>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Tabs Justify Right</h4>\n     </div>\n     <p>Four options are available: top, right, bottom, and left aligned.</p>\n      <ul class=\"nav nav-tabs justify-content-end\" id=\"myTab-4\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" id=\"home-tab-end\" data-toggle=\"tab\" href=\"#home-end\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"profile-tab-end\" data-toggle=\"tab\" href=\"#profile-end\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab-end\" data-toggle=\"tab\" href=\"#contact-end\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\" id=\"myTabContent-5\">\n        <div class=\"tab-pane fade show active\" id=\"home-end\" role=\"tabpanel\" aria-labelledby=\"home-tab-end\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"profile-end\" role=\"tabpanel\" aria-labelledby=\"profile-tab-end\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"contact-end\" role=\"tabpanel\" aria-labelledby=\"contact-tab-end\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-tooltips/ui-tooltips.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-tooltips/ui-tooltips.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiTooltipsUiTooltipsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n          <div card-header class=\"iq-header-title\">\n            <h4 class=\"card-title\">Tooltips</h4>\n         </div>\n         <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>\n         <button type=\"button\" class=\"btn btn-default btn-secondary m-1\" tooltip=\"Tooltip on top\" placement=\"top\">\n            Tooltip on top\n         </button>\n         <button type=\"button\" class=\"btn btn-default btn-secondary m-1\" tooltip=\"Tooltip on right\" placement=\"right\">\n            Tooltip on right\n         </button>\n         <button type=\"button\" class=\"btn btn-default btn-secondary m-1\" tooltip=\"Tooltip on bottom\" placement=\"bottom\">\n          Tooltip on bottom\n         </button>\n         <button type=\"button\" class=\"btn btn-default btn-secondary m-1\" tooltip=\"Tooltip on left\" placement=\"left\">\n          Tooltip on left\n         </button>\n        </app-iq-card>\n        <app-iq-card>\n          <div card-header class=\"iq-header-title\">\n            <h4 class=\"card-title\">Disabled elements</h4>\n         </div>\n         <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex=\"0\"</code>, and override the <code>pointer-events</code> on the disabled element.</p>\n          <span class=\"d-inline-block\" tabindex=\"0\" data-toggle=\"tooltip\" title=\"Disabled tooltip\">\n            <button type=\"button\" class=\"btn btn-default btn-primary m-1 disabled\" tooltip=\"Disabled tooltip\" placement=\"top\">\n              Disabled button\n           </button>\n          </span>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n      <app-iq-card>\n        <div card-header class=\"iq-header-title\">\n          <h4 class=\"card-title\">Tooltips</h4>\n       </div>\n       <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>\n       <button type=\"button\" class=\"btn btn-default btn-primary m-1\" tooltip=\"Tooltip on top\" placement=\"top\">\n        Tooltip on top\n       </button>\n       <button type=\"button\" class=\"btn btn-default btn-success m-1\" tooltip=\"Tooltip on right\" placement=\"right\">\n        Tooltip on right\n       </button>\n       <button type=\"button\" class=\"btn btn-default btn-danger m-1\" tooltip=\"Tooltip on bottom\" placement=\"bottom\">\n        Tooltip on bottom\n       </button>\n       <button type=\"button\" class=\"btn btn-default btn-info m-1\" tooltip=\"Tooltip on left\" placement=\"left\">\n        Tooltip on left\n       </button>\n      </app-iq-card>\n      <app-iq-card>\n        <div card-header class=\"iq-header-title\">\n          <h4 class=\"card-title\">Tooltips</h4>\n       </div>\n       <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>\n       <button type=\"button\" class=\"btn btn-default iq-bg-primary m-1\" tooltip=\"Tooltip on top\" placement=\"top\">\n        Tooltip on top\n       </button>\n       <button type=\"button\" class=\"btn btn-default iq-bg-success m-1\" tooltip=\"Tooltip on right\" placement=\"right\">\n        Tooltip on right\n       </button>\n       <button type=\"button\" class=\"btn btn-default iq-bg-danger m-1\" tooltip=\"Tooltip on bottom\" placement=\"bottom\">\n        Tooltip on bottom\n       </button>\n       <button type=\"button\" class=\"btn btn-default iq-bg-info m-1\" tooltip=\"Tooltip on left\" placement=\"left\">\n        Tooltip on left\n       </button>\n      </app-iq-card>\n    </div>\n    <div class=\"col-lg-12\">\n      <app-iq-card>\n        <div card-header class=\"iq-header-title\">\n          <h4 class=\"card-title\">Disabled elements</h4>\n       </div>\n       <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger.</p>\n        <!-- HTML to write -->\n        <a href=\"javascript:void(0);\"  tooltip=\"Some tooltip text!\" placement=\"top\">Hover over me</a>\n        <!-- Generated markup by the plugin -->\n      </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-typography/ui-typography.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-typography/ui-typography.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiTypographyUiTypographyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Display headings</h4>\n            </div>\n            <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style. Keep in mind these headings are not responsive by default, but it’s possible to enable <a href=\"#responsive-font-sizes\">responsive font sizes</a>.</p>\n            <h1 class=\"display-1\">Display headings</h1>\n            <h1 class=\"display-2\">Display headings</h1>\n            <h1 class=\"display-3\">Display headings</h1>\n            <h1 class=\"display-4\">Display headings</h1>\n            <h1 class=\"display-5\">Display headings</h1>\n            <h1 class=\"display-6 mb-0\">Display headings</h1>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Typography</h4>\n             </div>\n             <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>\n             <h1>h1. Bootstrap heading</h1>\n             <h2>h2. Bootstrap heading</h2>\n             <h3>h3. Bootstrap heading</h3>\n             <h4>h4. Bootstrap heading</h4>\n             <h5>h5. Bootstrap heading</h5>\n             <h6 class=\"mb-0\">h6. Bootstrap heading</h6>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Inline text elements</h4>\n            </div>\n            <p>Styling for common inline HTML5 elements.</p>\n            <p>You can use the mark tag to <mark>highlight</mark> text.</p>\n            <p><del>This line of text is meant to be treated as deleted text.</del></p>\n            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n            <p><u>This line of text will render as underlined</u></p>\n            <p><small>This line of text is meant to be treated as fine print.</small></p>\n            <p><strong>This line rendered as bold text.</strong></p>\n            <p><em>This line rendered as italicized text.</em></p>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Lists Inline</h4>\n            </div>\n            <p>Remove a list’s bullets and apply some light <code>margin</code> with a combination of two classes, <code>.list-inline</code> and <code>.list-inline-item</code>.</p>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">Lorem ipsum</li>\n                <li class=\"list-inline-item\">Phasellus iaculis</li>\n                <li class=\"list-inline-item\">Nulla volutpat</li>\n            </ul>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Headings</h4>\n            </div>\n            <p><code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font\n                styling of a heading but cannot use the associated HTML element.</p>\n            <p class=\"h1 mb-3\">h1. Bootstrap heading</p>\n            <p class=\"h2 mb-3\">h2. Bootstrap heading</p>\n            <p class=\"h3 mb-3\">h3. Bootstrap heading</p>\n            <p class=\"h4 mb-3\">h4. Bootstrap heading</p>\n            <p class=\"h5 mb-3\">h5. Bootstrap heading</p>\n            <p class=\"h6 mb-0\">h6. Bootstrap heading</p>\n            \n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Lists Unstyled</h4>\n            </div>\n            <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>\n            <ul class=\"list-unstyled\">\n                <li>Lorem ipsum dolor sit amet</li>\n                <li>Consectetur adipiscing elit</li>\n                <li>Integer molestie lorem at massa</li>\n                <li>Facilisis in pretium nisl aliquet</li>\n                <li>\n                    Nulla volutpat aliquam velit\n                    <ul>\n                    <li>Phasellus iaculis neque</li>\n                    <li>Purus sodales ultricies</li>\n                    <li>Vestibulum laoreet porttitor sem</li>\n                    <li>Ac tristique libero volutpat at</li>\n                    </ul>\n                </li>\n                <li>Faucibus porta lacus fringilla vel</li>\n                <li>Aenean sit amet erat nunc</li>\n                <li>Eget porttitor lorem</li>\n            </ul>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Blockquotes</h4>\n             </div>\n             <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class=\"blockquote\"&gt;</code> around any <abbr title=\"HyperText Markup Language\">HTML</abbr> as the quote.</p>\n            <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n            </blockquote>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Description list alignment</h4>\n             </div>\n             <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to truncate the text with an ellipsis.</p>\n            <dl class=\"row\">\n                <dt class=\"col-sm-3\">Description lists</dt>\n                <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\n                <dt class=\"col-sm-3\">Euismod</dt>\n                <dd class=\"col-sm-9\">\n                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>\n                    <p>Donec id elit non mi porta gravida at eget metus.</p>\n                </dd>\n                <dt class=\"col-sm-3\">Malesuada porta</dt>\n                <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\n                <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\n                <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n                <dt class=\"col-sm-3\">Nesting</dt>\n                <dd class=\"col-sm-9\">\n                    <dl class=\"row\">\n                    <dt class=\"col-sm-4\">Nested definition list</dt>\n                    <dd class=\"col-sm-8\">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\n                    </dl>\n                </dd>\n            </dl>\n        </app-iq-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-video/ui-video.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-video/ui-video.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCoreUiVideoUiVideoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Embeds Video</h4>\n            </div>\n            <p>Wrap any embed like an <code class=\"highlighter-rouge\">&lt;iframe&gt;</code> in a parent element with <code class=\"highlighter-rouge\">.embed-responsive</code> and an aspect ratio. The <code class=\"highlighter-rouge\">.embed-responsive-item</code> isn’t strictly required, but we encourage it.</p>\n            <div class=\"embed-responsive embed-responsive-16by9\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpOULjyy-n8?rel=0\" allowfullscreen></iframe>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Responsive Aspect ratios 4:3</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <!-- 4:3 aspect ratio -->\n            <div class=\"embed-responsive embed-responsive-4by3\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpOULjyy-n8?rel=0\" allowfullscreen></iframe>\n            </div>\n        </app-iq-card>\n    </div>\n    <div class=\"col-sm-12 col-lg-6\">\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Responsive Aspect ratios 21:9</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <!-- 21:9 aspect ratio -->\n            <div class=\"embed-responsive embed-responsive-21by9\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpOULjyy-n8?rel=0\" allowfullscreen></iframe>\n            </div>\n        </app-iq-card>\n        <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n                <h4 class=\"card-title\">Responsive Aspect ratios 1:1</h4>\n            </div>\n            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>\n            <!-- 1:1 aspect ratio -->\n            <div class=\"embed-responsive embed-responsive-1by1\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpOULjyy-n8?rel=0\" allowfullscreen></iframe>\n            </div>\n        </app-iq-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/views/core/core-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/core/core-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CoreRoutingModule */

  /***/
  function srcAppViewsCoreCoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function () {
      return CoreRoutingModule;
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


    var _ui_colors_ui_colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui-colors/ui-colors.component */
    "./src/app/views/core/ui-colors/ui-colors.component.ts");
    /* harmony import */


    var _ui_typography_ui_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ui-typography/ui-typography.component */
    "./src/app/views/core/ui-typography/ui-typography.component.ts");
    /* harmony import */


    var _ui_alert_ui_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ui-alert/ui-alert.component */
    "./src/app/views/core/ui-alert/ui-alert.component.ts");
    /* harmony import */


    var _ui_badges_ui_badges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui-badges/ui-badges.component */
    "./src/app/views/core/ui-badges/ui-badges.component.ts");
    /* harmony import */


    var _ui_breadcrumb_ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui-breadcrumb/ui-breadcrumb.component */
    "./src/app/views/core/ui-breadcrumb/ui-breadcrumb.component.ts");
    /* harmony import */


    var _ui_grid_ui_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ui-grid/ui-grid.component */
    "./src/app/views/core/ui-grid/ui-grid.component.ts");
    /* harmony import */


    var _ui_images_ui_images_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ui-images/ui-images.component */
    "./src/app/views/core/ui-images/ui-images.component.ts");
    /* harmony import */


    var _ui_list_group_ui_list_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ui-list-group/ui-list-group.component */
    "./src/app/views/core/ui-list-group/ui-list-group.component.ts");
    /* harmony import */


    var _ui_media_ui_media_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ui-media/ui-media.component */
    "./src/app/views/core/ui-media/ui-media.component.ts");
    /* harmony import */


    var _ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ui-notification/ui-notification.component */
    "./src/app/views/core/ui-notification/ui-notification.component.ts");
    /* harmony import */


    var _ui_video_ui_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ui-video/ui-video.component */
    "./src/app/views/core/ui-video/ui-video.component.ts");
    /* harmony import */


    var _ui_cards_ui_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ui-cards/ui-cards.component */
    "./src/app/views/core/ui-cards/ui-cards.component.ts");
    /* harmony import */


    var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ui-modal/ui-modal.component */
    "./src/app/views/core/ui-modal/ui-modal.component.ts");
    /* harmony import */


    var _ui_pagination_ui_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ui-pagination/ui-pagination.component */
    "./src/app/views/core/ui-pagination/ui-pagination.component.ts");
    /* harmony import */


    var _ui_popovers_ui_popovers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./ui-popovers/ui-popovers.component */
    "./src/app/views/core/ui-popovers/ui-popovers.component.ts");
    /* harmony import */


    var _ui_progressbars_ui_progressbars_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ui-progressbars/ui-progressbars.component */
    "./src/app/views/core/ui-progressbars/ui-progressbars.component.ts");
    /* harmony import */


    var _ui_tabs_ui_tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./ui-tabs/ui-tabs.component */
    "./src/app/views/core/ui-tabs/ui-tabs.component.ts");
    /* harmony import */


    var _ui_tooltips_ui_tooltips_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ui-tooltips/ui-tooltips.component */
    "./src/app/views/core/ui-tooltips/ui-tooltips.component.ts");
    /* harmony import */


    var _ui_buttons_ui_buttons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ui-buttons/ui-buttons.component */
    "./src/app/views/core/ui-buttons/ui-buttons.component.ts");
    /* harmony import */


    var _ui_carousel_ui_carousel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./ui-carousel/ui-carousel.component */
    "./src/app/views/core/ui-carousel/ui-carousel.component.ts");

    var routes = [{
      path: 'colors',
      component: _ui_colors_ui_colors_component__WEBPACK_IMPORTED_MODULE_3__["UiColorsComponent"]
    }, {
      path: 'typography',
      component: _ui_typography_ui_typography_component__WEBPACK_IMPORTED_MODULE_4__["UiTypographyComponent"]
    }, {
      path: 'alert',
      component: _ui_alert_ui_alert_component__WEBPACK_IMPORTED_MODULE_5__["UiAlertComponent"]
    }, {
      path: 'badges',
      component: _ui_badges_ui_badges_component__WEBPACK_IMPORTED_MODULE_6__["UiBadgesComponent"]
    }, {
      path: 'breadcrumb',
      component: _ui_breadcrumb_ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["UiBreadcrumbComponent"]
    }, {
      path: 'grid',
      component: _ui_grid_ui_grid_component__WEBPACK_IMPORTED_MODULE_8__["UiGridComponent"]
    }, {
      path: 'images',
      component: _ui_images_ui_images_component__WEBPACK_IMPORTED_MODULE_9__["UiImagesComponent"]
    }, {
      path: 'list-group',
      component: _ui_list_group_ui_list_group_component__WEBPACK_IMPORTED_MODULE_10__["UiListGroupComponent"]
    }, {
      path: 'media',
      component: _ui_media_ui_media_component__WEBPACK_IMPORTED_MODULE_11__["UiMediaComponent"]
    }, {
      path: 'notification',
      component: _ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_12__["UiNotificationComponent"]
    }, {
      path: 'video',
      component: _ui_video_ui_video_component__WEBPACK_IMPORTED_MODULE_13__["UiVideoComponent"]
    }, {
      path: 'cards',
      component: _ui_cards_ui_cards_component__WEBPACK_IMPORTED_MODULE_14__["UiCardsComponent"]
    }, {
      path: 'modal',
      component: _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_15__["UiModalComponent"]
    }, {
      path: 'pagination',
      component: _ui_pagination_ui_pagination_component__WEBPACK_IMPORTED_MODULE_16__["UiPaginationComponent"]
    }, {
      path: 'popovers',
      component: _ui_popovers_ui_popovers_component__WEBPACK_IMPORTED_MODULE_17__["UiPopoversComponent"]
    }, {
      path: 'progressbars',
      component: _ui_progressbars_ui_progressbars_component__WEBPACK_IMPORTED_MODULE_18__["UiProgressbarsComponent"]
    }, {
      path: 'tabs',
      component: _ui_tabs_ui_tabs_component__WEBPACK_IMPORTED_MODULE_19__["UiTabsComponent"]
    }, {
      path: 'tooltips',
      component: _ui_tooltips_ui_tooltips_component__WEBPACK_IMPORTED_MODULE_20__["UiTooltipsComponent"]
    }, {
      path: 'buttons',
      component: _ui_buttons_ui_buttons_component__WEBPACK_IMPORTED_MODULE_21__["UiButtonsComponent"]
    }, {
      path: 'carousel',
      component: _ui_carousel_ui_carousel_component__WEBPACK_IMPORTED_MODULE_22__["UiCarouselComponent"]
    }];

    var CoreRoutingModule = function CoreRoutingModule() {
      _classCallCheck(this, CoreRoutingModule);
    };

    CoreRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CoreRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/core/core.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/views/core/core.module.ts ***!
    \*******************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppViewsCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
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


    var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core-routing.module */
    "./src/app/views/core/core-routing.module.ts");
    /* harmony import */


    var _ui_colors_ui_colors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ui-colors/ui-colors.component */
    "./src/app/views/core/ui-colors/ui-colors.component.ts");
    /* harmony import */


    var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/sofbox/sofbox.module */
    "./src/app/components/sofbox/sofbox.module.ts");
    /* harmony import */


    var _ui_typography_ui_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui-typography/ui-typography.component */
    "./src/app/views/core/ui-typography/ui-typography.component.ts");
    /* harmony import */


    var _ui_alert_ui_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui-alert/ui-alert.component */
    "./src/app/views/core/ui-alert/ui-alert.component.ts");
    /* harmony import */


    var _ui_badges_ui_badges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ui-badges/ui-badges.component */
    "./src/app/views/core/ui-badges/ui-badges.component.ts");
    /* harmony import */


    var _ui_breadcrumb_ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ui-breadcrumb/ui-breadcrumb.component */
    "./src/app/views/core/ui-breadcrumb/ui-breadcrumb.component.ts");
    /* harmony import */


    var _ui_grid_ui_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ui-grid/ui-grid.component */
    "./src/app/views/core/ui-grid/ui-grid.component.ts");
    /* harmony import */


    var _ui_images_ui_images_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ui-images/ui-images.component */
    "./src/app/views/core/ui-images/ui-images.component.ts");
    /* harmony import */


    var _ui_list_group_ui_list_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ui-list-group/ui-list-group.component */
    "./src/app/views/core/ui-list-group/ui-list-group.component.ts");
    /* harmony import */


    var _ui_media_ui_media_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ui-media/ui-media.component */
    "./src/app/views/core/ui-media/ui-media.component.ts");
    /* harmony import */


    var _ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ui-notification/ui-notification.component */
    "./src/app/views/core/ui-notification/ui-notification.component.ts");
    /* harmony import */


    var _ui_video_ui_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ui-video/ui-video.component */
    "./src/app/views/core/ui-video/ui-video.component.ts");
    /* harmony import */


    var _ui_cards_ui_cards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ui-cards/ui-cards.component */
    "./src/app/views/core/ui-cards/ui-cards.component.ts");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ui-modal/ui-modal.component */
    "./src/app/views/core/ui-modal/ui-modal.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _ui_pagination_ui_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ui-pagination/ui-pagination.component */
    "./src/app/views/core/ui-pagination/ui-pagination.component.ts");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ui_popovers_ui_popovers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./ui-popovers/ui-popovers.component */
    "./src/app/views/core/ui-popovers/ui-popovers.component.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _ui_progressbars_ui_progressbars_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ui-progressbars/ui-progressbars.component */
    "./src/app/views/core/ui-progressbars/ui-progressbars.component.ts");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var _ui_tabs_ui_tabs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./ui-tabs/ui-tabs.component */
    "./src/app/views/core/ui-tabs/ui-tabs.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _ui_tooltips_ui_tooltips_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ui-tooltips/ui-tooltips.component */
    "./src/app/views/core/ui-tooltips/ui-tooltips.component.ts");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _ui_buttons_ui_buttons_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./ui-buttons/ui-buttons.component */
    "./src/app/views/core/ui-buttons/ui-buttons.component.ts");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _ui_carousel_ui_carousel_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./ui-carousel/ui-carousel.component */
    "./src/app/views/core/ui-carousel/ui-carousel.component.ts");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ui_colors_ui_colors_component__WEBPACK_IMPORTED_MODULE_4__["UiColorsComponent"], _ui_typography_ui_typography_component__WEBPACK_IMPORTED_MODULE_6__["UiTypographyComponent"], _ui_alert_ui_alert_component__WEBPACK_IMPORTED_MODULE_7__["UiAlertComponent"], _ui_badges_ui_badges_component__WEBPACK_IMPORTED_MODULE_8__["UiBadgesComponent"], _ui_breadcrumb_ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["UiBreadcrumbComponent"], _ui_grid_ui_grid_component__WEBPACK_IMPORTED_MODULE_10__["UiGridComponent"], _ui_images_ui_images_component__WEBPACK_IMPORTED_MODULE_11__["UiImagesComponent"], _ui_list_group_ui_list_group_component__WEBPACK_IMPORTED_MODULE_12__["UiListGroupComponent"], _ui_media_ui_media_component__WEBPACK_IMPORTED_MODULE_13__["UiMediaComponent"], _ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_14__["UiNotificationComponent"], _ui_video_ui_video_component__WEBPACK_IMPORTED_MODULE_15__["UiVideoComponent"], _ui_cards_ui_cards_component__WEBPACK_IMPORTED_MODULE_16__["UiCardsComponent"], _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_18__["UiModalComponent"], _ui_pagination_ui_pagination_component__WEBPACK_IMPORTED_MODULE_20__["UiPaginationComponent"], _ui_popovers_ui_popovers_component__WEBPACK_IMPORTED_MODULE_23__["UiPopoversComponent"], _ui_progressbars_ui_progressbars_component__WEBPACK_IMPORTED_MODULE_25__["UiProgressbarsComponent"], _ui_tabs_ui_tabs_component__WEBPACK_IMPORTED_MODULE_27__["UiTabsComponent"], _ui_tooltips_ui_tooltips_component__WEBPACK_IMPORTED_MODULE_29__["UiTooltipsComponent"], _ui_buttons_ui_buttons_component__WEBPACK_IMPORTED_MODULE_31__["UiButtonsComponent"], _ui_carousel_ui_carousel_component__WEBPACK_IMPORTED_MODULE_33__["UiCarouselComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"], _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_17__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__["PaginationModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_24__["PopoverModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__["ProgressbarModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_28__["TabsModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_30__["TooltipModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_32__["ButtonsModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_34__["CarouselModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]],
      exports: [_ui_colors_ui_colors_component__WEBPACK_IMPORTED_MODULE_4__["UiColorsComponent"], _ui_typography_ui_typography_component__WEBPACK_IMPORTED_MODULE_6__["UiTypographyComponent"], _ui_alert_ui_alert_component__WEBPACK_IMPORTED_MODULE_7__["UiAlertComponent"], _ui_badges_ui_badges_component__WEBPACK_IMPORTED_MODULE_8__["UiBadgesComponent"], _ui_breadcrumb_ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["UiBreadcrumbComponent"], _ui_grid_ui_grid_component__WEBPACK_IMPORTED_MODULE_10__["UiGridComponent"], _ui_images_ui_images_component__WEBPACK_IMPORTED_MODULE_11__["UiImagesComponent"], _ui_list_group_ui_list_group_component__WEBPACK_IMPORTED_MODULE_12__["UiListGroupComponent"], _ui_media_ui_media_component__WEBPACK_IMPORTED_MODULE_13__["UiMediaComponent"], _ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_14__["UiNotificationComponent"], _ui_video_ui_video_component__WEBPACK_IMPORTED_MODULE_15__["UiVideoComponent"], _ui_cards_ui_cards_component__WEBPACK_IMPORTED_MODULE_16__["UiCardsComponent"], _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_18__["UiModalComponent"], _ui_pagination_ui_pagination_component__WEBPACK_IMPORTED_MODULE_20__["UiPaginationComponent"], _ui_popovers_ui_popovers_component__WEBPACK_IMPORTED_MODULE_23__["UiPopoversComponent"], _ui_progressbars_ui_progressbars_component__WEBPACK_IMPORTED_MODULE_25__["UiProgressbarsComponent"], _ui_tabs_ui_tabs_component__WEBPACK_IMPORTED_MODULE_27__["UiTabsComponent"], _ui_tooltips_ui_tooltips_component__WEBPACK_IMPORTED_MODULE_29__["UiTooltipsComponent"], _ui_buttons_ui_buttons_component__WEBPACK_IMPORTED_MODULE_31__["UiButtonsComponent"], _ui_carousel_ui_carousel_component__WEBPACK_IMPORTED_MODULE_33__["UiCarouselComponent"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/views/core/ui-alert/ui-alert.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/core/ui-alert/ui-alert.component.ts ***!
    \***********************************************************/

  /*! exports provided: UiAlertComponent */

  /***/
  function srcAppViewsCoreUiAlertUiAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiAlertComponent", function () {
      return UiAlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiAlertComponent = /*#__PURE__*/function () {
      function UiAlertComponent() {
        _classCallCheck(this, UiAlertComponent);
      }

      _createClass(UiAlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiAlertComponent;
    }();

    UiAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-alert',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-alert/ui-alert.component.html"))["default"]
    })], UiAlertComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-badges/ui-badges.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/core/ui-badges/ui-badges.component.ts ***!
    \*************************************************************/

  /*! exports provided: UiBadgesComponent */

  /***/
  function srcAppViewsCoreUiBadgesUiBadgesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiBadgesComponent", function () {
      return UiBadgesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiBadgesComponent = /*#__PURE__*/function () {
      function UiBadgesComponent() {
        _classCallCheck(this, UiBadgesComponent);
      }

      _createClass(UiBadgesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiBadgesComponent;
    }();

    UiBadgesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-badges',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-badges.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-badges/ui-badges.component.html"))["default"]
    })], UiBadgesComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-breadcrumb/ui-breadcrumb.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/core/ui-breadcrumb/ui-breadcrumb.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UiBreadcrumbComponent */

  /***/
  function srcAppViewsCoreUiBreadcrumbUiBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiBreadcrumbComponent", function () {
      return UiBreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiBreadcrumbComponent = /*#__PURE__*/function () {
      function UiBreadcrumbComponent() {
        _classCallCheck(this, UiBreadcrumbComponent);
      }

      _createClass(UiBreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiBreadcrumbComponent;
    }();

    UiBreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-breadcrumb',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-breadcrumb/ui-breadcrumb.component.html"))["default"]
    })], UiBreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-buttons/ui-buttons.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/core/ui-buttons/ui-buttons.component.ts ***!
    \***************************************************************/

  /*! exports provided: UiButtonsComponent */

  /***/
  function srcAppViewsCoreUiButtonsUiButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiButtonsComponent", function () {
      return UiButtonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiButtonsComponent = /*#__PURE__*/function () {
      function UiButtonsComponent() {
        _classCallCheck(this, UiButtonsComponent);
      }

      _createClass(UiButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiButtonsComponent;
    }();

    UiButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-buttons',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-buttons/ui-buttons.component.html"))["default"]
    })], UiButtonsComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-cards/ui-cards.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/core/ui-cards/ui-cards.component.ts ***!
    \***********************************************************/

  /*! exports provided: UiCardsComponent */

  /***/
  function srcAppViewsCoreUiCardsUiCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiCardsComponent", function () {
      return UiCardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiCardsComponent = /*#__PURE__*/function () {
      function UiCardsComponent() {
        _classCallCheck(this, UiCardsComponent);
      }

      _createClass(UiCardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiCardsComponent;
    }();

    UiCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-cards',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-cards/ui-cards.component.html"))["default"]
    })], UiCardsComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-carousel/ui-carousel.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/views/core/ui-carousel/ui-carousel.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UiCarouselComponent */

  /***/
  function srcAppViewsCoreUiCarouselUiCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiCarouselComponent", function () {
      return UiCarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiCarouselComponent = /*#__PURE__*/function () {
      function UiCarouselComponent() {
        _classCallCheck(this, UiCarouselComponent);
      }

      _createClass(UiCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiCarouselComponent;
    }();

    UiCarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-carousel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-carousel/ui-carousel.component.html"))["default"]
    })], UiCarouselComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-colors/ui-colors.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/core/ui-colors/ui-colors.component.ts ***!
    \*************************************************************/

  /*! exports provided: UiColorsComponent */

  /***/
  function srcAppViewsCoreUiColorsUiColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiColorsComponent", function () {
      return UiColorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiColorsComponent = /*#__PURE__*/function () {
      function UiColorsComponent() {
        _classCallCheck(this, UiColorsComponent);
      }

      _createClass(UiColorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiColorsComponent;
    }();

    UiColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-colors',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-colors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-colors/ui-colors.component.html"))["default"]
    })], UiColorsComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-grid/ui-grid.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/core/ui-grid/ui-grid.component.ts ***!
    \*********************************************************/

  /*! exports provided: UiGridComponent */

  /***/
  function srcAppViewsCoreUiGridUiGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiGridComponent", function () {
      return UiGridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiGridComponent = /*#__PURE__*/function () {
      function UiGridComponent() {
        _classCallCheck(this, UiGridComponent);
      }

      _createClass(UiGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiGridComponent;
    }();

    UiGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-grid',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-grid/ui-grid.component.html"))["default"]
    })], UiGridComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-images/ui-images.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/core/ui-images/ui-images.component.ts ***!
    \*************************************************************/

  /*! exports provided: UiImagesComponent */

  /***/
  function srcAppViewsCoreUiImagesUiImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiImagesComponent", function () {
      return UiImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiImagesComponent = /*#__PURE__*/function () {
      function UiImagesComponent() {
        _classCallCheck(this, UiImagesComponent);
      }

      _createClass(UiImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiImagesComponent;
    }();

    UiImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-images',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-images/ui-images.component.html"))["default"]
    })], UiImagesComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-list-group/ui-list-group.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/core/ui-list-group/ui-list-group.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UiListGroupComponent */

  /***/
  function srcAppViewsCoreUiListGroupUiListGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiListGroupComponent", function () {
      return UiListGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiListGroupComponent = /*#__PURE__*/function () {
      function UiListGroupComponent() {
        _classCallCheck(this, UiListGroupComponent);
      }

      _createClass(UiListGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiListGroupComponent;
    }();

    UiListGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-list-group',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-list-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-list-group/ui-list-group.component.html"))["default"]
    })], UiListGroupComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-media/ui-media.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/core/ui-media/ui-media.component.ts ***!
    \***********************************************************/

  /*! exports provided: UiMediaComponent */

  /***/
  function srcAppViewsCoreUiMediaUiMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiMediaComponent", function () {
      return UiMediaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiMediaComponent = /*#__PURE__*/function () {
      function UiMediaComponent() {
        _classCallCheck(this, UiMediaComponent);
      }

      _createClass(UiMediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiMediaComponent;
    }();

    UiMediaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-media',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-media.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-media/ui-media.component.html"))["default"]
    })], UiMediaComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-modal/ui-modal.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/core/ui-modal/ui-modal.component.ts ***!
    \***********************************************************/

  /*! exports provided: UiModalComponent */

  /***/
  function srcAppViewsCoreUiModalUiModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiModalComponent", function () {
      return UiModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiModalComponent = /*#__PURE__*/function () {
      function UiModalComponent() {
        _classCallCheck(this, UiModalComponent);
      }

      _createClass(UiModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiModalComponent;
    }();

    UiModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-modal/ui-modal.component.html"))["default"]
    })], UiModalComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-notification/ui-notification.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/views/core/ui-notification/ui-notification.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UiNotificationComponent */

  /***/
  function srcAppViewsCoreUiNotificationUiNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiNotificationComponent", function () {
      return UiNotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiNotificationComponent = /*#__PURE__*/function () {
      function UiNotificationComponent() {
        _classCallCheck(this, UiNotificationComponent);
      }

      _createClass(UiNotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiNotificationComponent;
    }();

    UiNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-notification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-notification/ui-notification.component.html"))["default"]
    })], UiNotificationComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-pagination/ui-pagination.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/core/ui-pagination/ui-pagination.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UiPaginationComponent */

  /***/
  function srcAppViewsCoreUiPaginationUiPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiPaginationComponent", function () {
      return UiPaginationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiPaginationComponent = /*#__PURE__*/function () {
      function UiPaginationComponent() {
        _classCallCheck(this, UiPaginationComponent);

        this.currentPage = 2;
      }

      _createClass(UiPaginationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiPaginationComponent;
    }();

    UiPaginationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-pagination',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-pagination.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-pagination/ui-pagination.component.html"))["default"]
    })], UiPaginationComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-popovers/ui-popovers.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/views/core/ui-popovers/ui-popovers.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UiPopoversComponent */

  /***/
  function srcAppViewsCoreUiPopoversUiPopoversComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiPopoversComponent", function () {
      return UiPopoversComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiPopoversComponent = /*#__PURE__*/function () {
      function UiPopoversComponent() {
        _classCallCheck(this, UiPopoversComponent);
      }

      _createClass(UiPopoversComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiPopoversComponent;
    }();

    UiPopoversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-popovers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-popovers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-popovers/ui-popovers.component.html"))["default"]
    })], UiPopoversComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-progressbars/ui-progressbars.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/views/core/ui-progressbars/ui-progressbars.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UiProgressbarsComponent */

  /***/
  function srcAppViewsCoreUiProgressbarsUiProgressbarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiProgressbarsComponent", function () {
      return UiProgressbarsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiProgressbarsComponent = /*#__PURE__*/function () {
      function UiProgressbarsComponent() {
        _classCallCheck(this, UiProgressbarsComponent);

        this.stacked = [{
          value: 15,
          type: 'primary',
          label: ''
        }, {
          value: 30,
          type: 'success',
          label: ''
        }, {
          value: 30,
          type: 'info',
          label: ''
        }];
      }

      _createClass(UiProgressbarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiProgressbarsComponent;
    }();

    UiProgressbarsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-progressbars',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-progressbars.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-progressbars/ui-progressbars.component.html"))["default"]
    })], UiProgressbarsComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-tabs/ui-tabs.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/core/ui-tabs/ui-tabs.component.ts ***!
    \*********************************************************/

  /*! exports provided: UiTabsComponent */

  /***/
  function srcAppViewsCoreUiTabsUiTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiTabsComponent", function () {
      return UiTabsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiTabsComponent = /*#__PURE__*/function () {
      function UiTabsComponent() {
        _classCallCheck(this, UiTabsComponent);

        this.TabNavItems = [{
          link: 'v-pills-home-tab',
          label: 'Home',
          icon: '',
          isActive: true
        }, {
          link: 'v-pills-profile-tab',
          label: 'Profile',
          icon: '',
          isActive: false
        }, {
          link: 'v-pills-message-tab',
          label: 'Messages',
          icon: '',
          isActive: false
        }, {
          link: 'v-pills-setting-tab',
          label: 'Settings',
          icon: '',
          isActive: false
        }];
      }

      _createClass(UiTabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiTabsComponent;
    }();

    UiTabsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-tabs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-tabs/ui-tabs.component.html"))["default"]
    })], UiTabsComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-tooltips/ui-tooltips.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/views/core/ui-tooltips/ui-tooltips.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UiTooltipsComponent */

  /***/
  function srcAppViewsCoreUiTooltipsUiTooltipsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiTooltipsComponent", function () {
      return UiTooltipsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiTooltipsComponent = /*#__PURE__*/function () {
      function UiTooltipsComponent() {
        _classCallCheck(this, UiTooltipsComponent);
      }

      _createClass(UiTooltipsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiTooltipsComponent;
    }();

    UiTooltipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-tooltips',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-tooltips.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-tooltips/ui-tooltips.component.html"))["default"]
    })], UiTooltipsComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-typography/ui-typography.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/core/ui-typography/ui-typography.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UiTypographyComponent */

  /***/
  function srcAppViewsCoreUiTypographyUiTypographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiTypographyComponent", function () {
      return UiTypographyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiTypographyComponent = /*#__PURE__*/function () {
      function UiTypographyComponent() {
        _classCallCheck(this, UiTypographyComponent);
      }

      _createClass(UiTypographyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiTypographyComponent;
    }();

    UiTypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-typography',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-typography.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-typography/ui-typography.component.html"))["default"]
    })], UiTypographyComponent);
    /***/
  },

  /***/
  "./src/app/views/core/ui-video/ui-video.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/core/ui-video/ui-video.component.ts ***!
    \***********************************************************/

  /*! exports provided: UiVideoComponent */

  /***/
  function srcAppViewsCoreUiVideoUiVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiVideoComponent", function () {
      return UiVideoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiVideoComponent = /*#__PURE__*/function () {
      function UiVideoComponent() {
        _classCallCheck(this, UiVideoComponent);
      }

      _createClass(UiVideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiVideoComponent;
    }();

    UiVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-video',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ui-video.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/core/ui-video/ui-video.component.html"))["default"]
    })], UiVideoComponent);
    /***/
  }
}]);
//# sourceMappingURL=views-core-core-module-es5.js.map