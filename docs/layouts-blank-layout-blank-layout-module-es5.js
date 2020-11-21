function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-blank-layout-blank-layout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank-layout/index/index.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank-layout/index/index.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsBlankLayoutIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/layouts/blank-layout/blank-layout-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layouts/blank-layout/blank-layout-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: BlankLayoutRoutingModule */

  /***/
  function srcAppLayoutsBlankLayoutBlankLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankLayoutRoutingModule", function () {
      return BlankLayoutRoutingModule;
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


    var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/layouts/blank-layout/index/index.component.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-pages-pages-module */
          "views-pages-pages-module").then(__webpack_require__.bind(null,
          /*! ../../views/pages/pages.module */
          "./src/app/views/pages/pages.module.ts")).then(function (m) {
            return m.PagesModule;
          });
        }
      }]
    }];

    var BlankLayoutRoutingModule = function BlankLayoutRoutingModule() {
      _classCallCheck(this, BlankLayoutRoutingModule);
    };

    BlankLayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BlankLayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/layouts/blank-layout/blank-layout.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layouts/blank-layout/blank-layout.module.ts ***!
    \*************************************************************/

  /*! exports provided: BlankLayoutModule */

  /***/
  function srcAppLayoutsBlankLayoutBlankLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankLayoutModule", function () {
      return BlankLayoutModule;
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


    var _blank_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blank-layout-routing.module */
    "./src/app/layouts/blank-layout/blank-layout-routing.module.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/layouts/blank-layout/index/index.component.ts");

    var BlankLayoutModule = function BlankLayoutModule() {
      _classCallCheck(this, BlankLayoutModule);
    };

    BlankLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _blank_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlankLayoutRoutingModule"]],
      exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]
    })], BlankLayoutModule);
    /***/
  },

  /***/
  "./src/app/layouts/blank-layout/index/index.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layouts/blank-layout/index/index.component.ts ***!
    \***************************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppLayoutsBlankLayoutIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent() {
        _classCallCheck(this, IndexComponent);
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndexComponent;
    }();

    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank-layout/index/index.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })], IndexComponent);
    /***/
  }
}]);
//# sourceMappingURL=layouts-blank-layout-blank-layout-module-es5.js.map