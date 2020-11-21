function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-maps-maps-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maps/pages-map/pages-map.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maps/pages-map/pages-map.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsMapsPagesMapPagesMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic</h4>\n      </div>\n      <p>Creating basic google map</p>\n      <iframe class=\"w-100\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902543.2003194243!2d-118.04220880485131!3d36.56083290513502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sInyo%20National%20Forest!5e0!3m2!1sen!2sin!4v1576668158879!5m2!1sen!2sin\"  height=\"500\" allowfullscreen=\"\"></iframe>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Street View</h4>\n      </div>\n      <p>Street View google map</p>\n      <iframe class=\"w-100\" src=\"https://www.google.com/maps/embed?pb=!4v1576670414304!6m8!1m7!1sCAoSLEFGMVFpcFBmeGNVWUhFYmRqNWFzLTlsTjgyQUVMbTY1ckNqcmdMRDFjcy16!2m2!1d37.41885!2d-122.0798!3f191.60895907234024!4f-16.305518968749!5f0.4000000000000002\"  height=\"500\"  allowfullscreen=\"\"></iframe>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Stellite</h4>\n      </div>\n      <p>Stellite View google map</p>\n      <iframe class=\"w-100\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.6523460203307!2d-121.8326811833386!3d38.44960145310393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085259f4fcf781d%3A0x80a4c8c2bb5a0123!2s835%20Woodvale%20Dr%2C%20Dixon%2C%20CA%2095620%2C%20USA!5e1!3m2!1sen!2sin!4v1576670825530!5m2!1sen!2sin\"  height=\"500\"  allowfullscreen=\"\"></iframe>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/views/maps/maps-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/maps/maps-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MapsRoutingModule */

  /***/
  function srcAppViewsMapsMapsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function () {
      return MapsRoutingModule;
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


    var _pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages-map/pages-map.component */
    "./src/app/views/maps/pages-map/pages-map.component.ts");

    var routes = [{
      path: 'map',
      component: _pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_3__["PagesMapComponent"]
    }];

    var MapsRoutingModule = function MapsRoutingModule() {
      _classCallCheck(this, MapsRoutingModule);
    };

    MapsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapsRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/maps/maps.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/views/maps/maps.module.ts ***!
    \*******************************************/

  /*! exports provided: MapsModule */

  /***/
  function srcAppViewsMapsMapsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsModule", function () {
      return MapsModule;
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


    var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/sofbox/sofbox.module */
    "./src/app/components/sofbox/sofbox.module.ts");
    /* harmony import */


    var _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./maps-routing.module */
    "./src/app/views/maps/maps-routing.module.ts");
    /* harmony import */


    var _pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages-map/pages-map.component */
    "./src/app/views/maps/pages-map/pages-map.component.ts");

    var MapsModule = function MapsModule() {
      _classCallCheck(this, MapsModule);
    };

    MapsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_5__["PagesMapComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapsRoutingModule"], _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]],
      exports: [_pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_5__["PagesMapComponent"]]
    })], MapsModule);
    /***/
  },

  /***/
  "./src/app/views/maps/pages-map/pages-map.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/maps/pages-map/pages-map.component.ts ***!
    \*************************************************************/

  /*! exports provided: PagesMapComponent */

  /***/
  function srcAppViewsMapsPagesMapPagesMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesMapComponent", function () {
      return PagesMapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagesMapComponent = /*#__PURE__*/function () {
      function PagesMapComponent() {
        _classCallCheck(this, PagesMapComponent);
      }

      _createClass(PagesMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagesMapComponent;
    }();

    PagesMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages-map',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pages-map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maps/pages-map/pages-map.component.html"))["default"]
    })], PagesMapComponent);
    /***/
  }
}]);
//# sourceMappingURL=views-maps-maps-module-es5.js.map