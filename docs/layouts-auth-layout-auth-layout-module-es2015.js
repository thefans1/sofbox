(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/index/index.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/index/index.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader></app-loader>\n\n<section class=\"sign-in-page bg-white\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-sm-6 align-self-center\">\n          <router-outlet></router-outlet>\n      </div>\n      <div class=\"col-sm-6 text-center\">\n        <div class=\"sign-in-detail text-white\" style=\"background: url(/assets/images/login/2.jpg) no-repeat 0 0; background-size: cover;\">\n          <a class=\"sign-in-logo mb-5\" href=\"javascript:void(0);\"><img src=\"/assets/images/logo-white.png\" class=\"img-fluid\" alt=\"logo\"></a>\n          <owl-carousel-o [options]=\"authSlideOptions\">\n            <ng-template carouselSlide *ngFor=\"let slide of authSlides\">\n              <div class=\"item\">\n                <img [src]=\"slide.image\" class=\"img-fluid mb-4\" alt=\"logo\">\n                <h4 class=\"mb-1 text-white\">{{ slide.title }}</h4>\n                <p>{{ slide.description }}</p>\n              </div>\n            </ng-template>\n          </owl-carousel-o>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AuthLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutingModule", function() { return AuthLayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/layouts/auth-layout/index/index.component.ts");




const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | views-auth-pages-auth-pages-module */ "views-auth-pages-auth-pages-module").then(__webpack_require__.bind(null, /*! ../../views/auth-pages/auth-pages.module */ "./src/app/views/auth-pages/auth-pages.module.ts")).then(m => m.AuthPagesModule),
            }
        ]
    }
];
let AuthLayoutRoutingModule = class AuthLayoutRoutingModule {
};
AuthLayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthLayoutRoutingModule);



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-layout-routing.module */ "./src/app/layouts/auth-layout/auth-layout-routing.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/layouts/auth-layout/index/index.component.ts");
/* harmony import */ var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sofbox/sofbox.module */ "./src/app/components/sofbox/sofbox.module.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");







let AuthLayoutModule = class AuthLayoutModule {
};
AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutRoutingModule"],
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]
        ],
        exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]
    })
], AuthLayoutModule);



/***/ }),

/***/ "./src/app/layouts/auth-layout/index/index.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/index/index.component.ts ***!
  \**************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../plugins.service */ "./src/app/plugins.service.ts");



let IndexComponent = class IndexComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.authSlideOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: true
        };
        this.authSlides = [
            {
                id: 1,
                image: '/assets/images/login/1.png',
                title: 'Manage your orders',
                description: 'It is a long established fact that a reader will be distracted by the readable content.'
            },
            {
                id: 2,
                image: '/assets/images/login/1.png',
                title: 'Manage your orders',
                description: 'It is a long established fact that a reader will be distracted by the readable content.'
            },
            {
                id: 3,
                image: '/assets/images/login/1.png',
                title: 'Manage your orders',
                description: 'It is a long established fact that a reader will be distracted by the readable content.'
            },
            {
                id: 4,
                image: '/assets/images/login/1.png',
                title: 'Manage your orders',
                description: 'It is a long established fact that a reader will be distracted by the readable content.'
            }
        ];
    }
    ngOnInit() {
        // Init all plugins...
        const current = this;
        setTimeout(() => current.plugins.index(), 200);
    }
};
IndexComponent.ctorParameters = () => [
    { type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/index/index.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], IndexComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module-es2015.js.map