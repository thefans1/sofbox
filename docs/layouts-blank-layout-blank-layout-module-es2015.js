(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-blank-layout-blank-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank-layout/index/index.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank-layout/index/index.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/blank-layout/blank-layout-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layouts/blank-layout/blank-layout-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BlankLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutRoutingModule", function() { return BlankLayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/layouts/blank-layout/index/index.component.ts");




const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | views-pages-pages-module */ "views-pages-pages-module").then(__webpack_require__.bind(null, /*! ../../views/pages/pages.module */ "./src/app/views/pages/pages.module.ts")).then(m => m.PagesModule),
            }
        ]
    }
];
let BlankLayoutRoutingModule = class BlankLayoutRoutingModule {
};
BlankLayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BlankLayoutRoutingModule);



/***/ }),

/***/ "./src/app/layouts/blank-layout/blank-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/blank-layout/blank-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: BlankLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutModule", function() { return BlankLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _blank_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-layout-routing.module */ "./src/app/layouts/blank-layout/blank-layout-routing.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/layouts/blank-layout/index/index.component.ts");





let BlankLayoutModule = class BlankLayoutModule {
};
BlankLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _blank_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlankLayoutRoutingModule"]
        ],
        exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]
    })
], BlankLayoutModule);



/***/ }),

/***/ "./src/app/layouts/blank-layout/index/index.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/blank-layout/index/index.component.ts ***!
  \***************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank-layout/index/index.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], IndexComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-blank-layout-blank-layout-module-es2015.js.map