function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forms-forms-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-checkbox/form-checkbox.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-checkbox/form-checkbox.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFormsFormCheckboxFormCheckboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Checkbox</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"checkbox d-inline-block mr-2\">\n        <input type=\"checkbox\" class=\"checkbox-input\" id=\"checkbox1\" >\n        <label for=\"checkbox1\">Primary / Inactive</label>\n      </div>\n      <div class=\"checkbox d-inline-block mr-2\">\n        <input type=\"checkbox\" class=\"checkbox-input\" id=\"checkbox2\" checked=\"\" >\n        <label for=\"checkbox2\">Primary / Active</label>\n      </div>\n      <div class=\"checkbox d-inline-block mr-2\">\n        <input type=\"checkbox\" class=\"checkbox-input\" id=\"checkbox3\" disabled=\"\">\n        <label for=\"checkbox3\">Disable / Inactive</label>\n      </div>\n      <div class=\"checkbox d-inline-block mr-2\">\n        <input type=\"checkbox\" class=\"checkbox-input\" id=\"checkbox4\" checked=\"\" disabled=\"\">\n        <label for=\"checkbox4\">Active / Disable</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Custom Color</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-primary\" id=\"customCheck-11\">\n        <label class=\"custom-control-label\" for=\"customCheck-11\">Primary </label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-success\" id=\"customCheck-22\">\n        <label class=\"custom-control-label\" for=\"customCheck-22\">Success</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-danger\" id=\"customCheck-33\">\n        <label class=\"custom-control-label\" for=\"customCheck-33\">Danger</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-warning\" id=\"customCheck-44\">\n        <label class=\"custom-control-label\" for=\"customCheck-44\">Warning</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-dark\" id=\"customCheck-55\">\n        <label class=\"custom-control-label\" for=\"customCheck-55\">Dark</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-info\" id=\"customCheck-66\">\n        <label class=\"custom-control-label\" for=\"customCheck-66\"> Info</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Boolean Checkbox</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-checkbox custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-t\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-t\">True</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-f\">\n        <label class=\"custom-control-label\" for=\"customCheck-f\">False</label>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Custom Checkbox</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-checkbox custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck5\">\n        <label class=\"custom-control-label\" for=\"customCheck5\">Primary / Inactive</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck6\" Checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck6\">Primary - active</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck7\"  disabled=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck7\">Primary - inactive - disabled</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck8\"  checked=\"\" disabled=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck8\">Primary - active - disabled</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Color</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color-check custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-primary\" id=\"customCheck-1\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-1\"> Primary</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color-check custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-success\" id=\"customCheck-2\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-2\">Success</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color-check custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-danger\" id=\"customCheck-3\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-3\">Danger</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color-check custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-warning\" id=\"customCheck-4\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-4\">Warning</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color-check custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-dark\" id=\"customCheck-5\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-5\">Dark</label>\n      </div>\n      <div class=\"custom-control custom-checkbox custom-checkbox-color-check custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-info\" id=\"customCheck-6\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-6\">Info</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Change Icon</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-checkbox checkbox-icon custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-10\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-10\"><i class=\"fa fa-music\"></i>Music</label>\n      </div>\n      <div class=\"custom-control custom-checkbox checkbox-icon custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-20\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-20\"><i class=\"fa fa-commenting-o\"></i>SMS</label>\n      </div>\n      <div class=\"custom-control custom-checkbox checkbox-icon custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-30\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-30\"><i class=\"fa fa-times\"></i>Cancle</label>\n      </div>\n      <div class=\"custom-control custom-checkbox checkbox-icon custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-40\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-40\"><i class=\"fa fa-file\"></i>File</label>\n      </div>\n      <div class=\"custom-control custom-checkbox checkbox-icon custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-50\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-50\"><i class=\"fa fa-bold\"></i>Bold</label>\n      </div>\n      <div class=\"custom-control custom-checkbox checkbox-icon custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-60\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-60\"><i class=\"fa fa-map-marker\"></i>Location</label>\n      </div>\n      <div class=\"custom-control custom-checkbox checkbox-icon custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck-70\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck-70\"><i class=\"fa fa-camera\"></i>Camera</label>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-layout/form-layout.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-layout/form-layout.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFormsFormLayoutFormLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Basic Form</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form>\n        <div class=\"form-group\">\n            <label for=\"email\">Email address:</label>\n            <input type=\"email\" class=\"form-control\" id=\"email1\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"pwd\">Password:</label>\n            <input type=\"password\" class=\"form-control\" id=\"pwd\">\n        </div>\n        <div class=\"checkbox mb-3\">\n            <label><input type=\"checkbox\"> Remember me</label>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <button type=\"submit\" class=\"btn ml-1 iq-bg-danger\">cancel</button>\n      </form>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Form Grid</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form>\n        <div class=\"row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n            </div>\n        </div>\n      </form>\n    </app-iq-card>\n  <app-iq-card>\n    <div card-header class=\"iq-header-title\">\n      <h4 class=\"card-title\">Input</h4>\n    </div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n    <form>\n      <div class=\"form-group\">\n          <label for=\"exampleInputText1\">Input Text </label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputText1\" value=\"Mark Jhon\" placeholder=\"Enter Name\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputEmail3\">Email Input</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail3\" value=\"markjhon@gmail.com\" placeholder=\"Enter Email\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputurl\">Url Input</label>\n          <input type=\"url\" class=\"form-control\" id=\"exampleInputurl\" value=\"https://getbootstrap.com\" placeholder=\"Enter Url\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputphone\">Teliphone Input</label>\n          <input type=\"tel\" class=\"form-control\" id=\"exampleInputphone\" value=\"1-(555)-555-5555\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputNumber1\">Number Input</label>\n          <input type=\"number\" class=\"form-control\" id=\"exampleInputNumber1\" value=\"2356\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputPassword3\">Password Input</label>\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword3\" value=\"markjhon123\" placeholder=\"Enter Password\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputdate\">Date Input</label>\n          <input type=\"date\" class=\"form-control\" id=\"exampleInputdate\" value=\"2019-12-18\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputmonth\">Month Input</label>\n          <input type=\"month\" class=\"form-control\" id=\"exampleInputmonth\" value=\"2019-12\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputweek\">Week Input</label>\n          <input type=\"week\" class=\"form-control\" id=\"exampleInputweek\" value=\"2019-W46\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputtime\">Time Input</label>\n          <input type=\"time\" class=\"form-control\" id=\"exampleInputtime\" value=\"13:45\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputdatetime\">Date and Time Input</label>\n          <input type=\"datetime-local\" class=\"form-control\" id=\"exampleInputdatetime\" value=\"2019-12-19T13:45:00\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"5\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      <button type=\"submit\" class=\"btn ml-1 iq-bg-danger\">cancel</button>\n    </form>\n  </app-iq-card>\n  <app-iq-card>\n    <div card-header class=\"iq-header-title\">\n      <h4 class=\"card-title\">Input Size</h4>\n    </div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n    <form>\n      <div class=\"form-group\">\n          <label for=\"colFormLabelSm\">Small</label>\n          <input type=\"email\" class=\"form-control form-control-sm\" id=\"colFormLabelSm\" placeholder=\"form-control-sm\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"colFormLabel\">Default</label>\n          <input type=\"email\" class=\"form-control\" id=\"colFormLabel\" placeholder=\"form-control\">\n      </div>\n      <div class=\"form-group mb-0\">\n          <label for=\"colFormLabelLg\" class=\"pb-0\">Large</label>\n          <input type=\"email\" class=\"form-control form-control-lg\" id=\"colFormLabelLg\" placeholder=\"form-control-lg\">\n      </div>\n    </form>\n  </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Horizontal Form</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form class=\"form-horizontal\" action=\"/action_page.php\">\n        <div class=\"form-group row\">\n            <label class=\"control-label col-sm-2 align-self-center mb-0\" for=\"email\">Email:</label>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Your  email\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"control-label col-sm-2 align-self-center mb-0\" for=\"pwd1\">Password:</label>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" class=\"form-control\" id=\"pwd1\" placeholder=\"Enter Your password\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n              <div class=\"checkbox\">\n                  <label><input type=\"checkbox\"> Remember me</label>\n              </div>\n        </div>\n        <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n              <button type=\"submit\" class=\"btn ml-1 iq-bg-danger\">cancel</button>\n        </div>\n      </form>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Form row</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form>\n        <div class=\"form-row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n            </div>\n        </div>\n      </form>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Input</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form>\n        <div class=\"form-group\">\n            <label for=\"exampleInputDisabled1\">Disabled Input</label>\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputDisabled1\" disabled=\"\" value=\"Mark Jhon\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputPlaceholder\">Placeholder</label>\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputPlaceholder\" placeholder=\"This is Placeholder\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputReadonly\">Readonly</label>\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputReadonly\" readonly=\"\" value=\"Mark Jhon\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputcolor\">Input Color </label>\n            <input type=\"color\" class=\"form-control\" id=\"exampleInputcolor\" value=\"#0084ff\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Select Input</label>\n            <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option selected=\"\" disabled=\"\">Select your age</option>\n              <option>0-18</option>\n              <option>18-26</option>\n              <option>26-46</option>\n              <option>46-60</option>\n              <option>Above 60</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n            <select multiple=\"\" class=\"form-control\" id=\"exampleFormControlSelect2\">\n              <option>select-1</option>\n              <option>select-2</option>\n              <option>select-3</option>\n              <option>select-4</option>\n              <option>select-5</option>\n              <option>select-6</option>\n              <option>select-7</option>\n              <option>select-8</option>\n            </select>\n        </div>\n        <div class=\"form-groupp\">\n            <label for=\"customRange1\">Range Input</label>\n            <input type=\"range\" class=\"custom-range\" id=\"customRange1\">\n        </div>\n        <div class=\"form-group\">\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n              <label class=\"custom-control-label\" for=\"customCheck1\">Default checkbox</label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" Checked=\"\">\n              <label class=\"custom-control-label\" for=\"customCheck2\">Checked</label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\"  disabled=\"\">\n              <label class=\"custom-control-label\" for=\"customCheck3\">Disabled checkbox</label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\"  checked=\"\" disabled=\"\">\n              <label class=\"custom-control-label\" for=\"customCheck4\">Disabled checkbox</label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck5\">\n              <label class=\"custom-control-label\" for=\"customCheck5\">Default checkbox</label>\n            </div>\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck6\" Checked=\"\">\n              <label class=\"custom-control-label\" for=\"customCheck6\">Checked</label>\n            </div>\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck7\"  disabled=\"\">\n              <label class=\"custom-control-label\" for=\"customCheck7\">Disabled checkbox</label>\n            </div>\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck8\"  checked=\"\" disabled=\"\">\n              <label class=\"custom-control-label\" for=\"customCheck8\">Disabled checkbox</label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-check\">\n              <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\"> Default radio</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\"> Default radio</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio3\" name=\"customRadio3\" class=\"custom-control-input\" checked=\"\">\n                  <label class=\"custom-control-label\" for=\"customRadio3\"> Selected radio</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio4\" name=\"customRadio4\" class=\"custom-control-input\" disabled=\"\">\n                  <label class=\"custom-control-label\" for=\"customRadio4\"> disabled radio</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio5\" name=\"customRadio5\" class=\"custom-control-input\" disabled=\"\" checked=\"\">\n                  <label class=\"custom-control-label\" for=\"customRadio5\"> Selected and  disabled radio</label>\n              </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"customRadio6\" name=\"customRadio1\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"customRadio6\"> Default radio</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"customRadio7\" name=\"customRadio1\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"customRadio7\"> Default radio</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"customRadio8\" name=\"customRadio6\" class=\"custom-control-input\" checked=\"\">\n              <label class=\"custom-control-label\" for=\"customRadio8\"> Selected radio</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"customRadio9\" name=\"customRadio7\" class=\"custom-control-input\" disabled=\"\">\n              <label class=\"custom-control-label\" for=\"customRadio9\"> disabled radio</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"customRadio10\" name=\"customRadio8\" class=\"custom-control-input\" disabled=\"\" checked=\"\">\n              <label class=\"custom-control-label\" for=\"customRadio10\"> Selected and  disabled radio</label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\n              <label class=\"custom-control-label\" for=\"customSwitch1\">Toggle this switch element</label>\n            </div>\n            <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch2\" checked=\"\">\n              <label class=\"custom-control-label\" for=\"customSwitch2\">Toggle this switch element</label>\n            </div>\n            <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" class=\"custom-control-input\" disabled id=\"customSwitch3\">\n              <label class=\"custom-control-label\" for=\"customSwitch3\">Disabled switch element</label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\">Example file input</label>\n            <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\n        </div>\n        <div class=\"form-group\">\n            <div class=\"custom-file\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n              <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <button type=\"submit\" class=\"btn ml-1 iq-bg-danger\">cancel</button>\n      </form>\n    </app-iq-card>\n    <app-iq-card>\n      <div acrd-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Select Size</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"form-group\">\n        <label>Small</label>\n        <select class=\"form-control form-control-sm mb-3\">\n            <option selected=\"\">Open this select menu</option>\n            <option value=\"1\">One</option>\n            <option value=\"2\">Two</option>\n            <option value=\"3\">Three</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Default</label>\n        <select class=\"form-control mb-3\">\n            <option selected=\"\">Open this select menu</option>\n            <option value=\"1\">One</option>\n            <option value=\"2\">Two</option>\n            <option value=\"3\">Three</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Large</label>\n        <select class=\"form-control form-control-lg\">\n            <option selected=\"\">Open this select menu</option>\n            <option value=\"1\">One</option>\n            <option value=\"2\">Two</option>\n            <option value=\"3\">Three</option>\n        </select>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-radio/form-radio.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-radio/form-radio.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFormsFormRadioFormRadioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Default Radio Buttons</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"radio d-inline-block mr-2\">\n        <input type=\"radio\" name=\"bsradio\" id=\"radio1\" checked=\"\">\n        <label for=\"radio1\">Active</label>\n      </div>\n      <div class=\"radio d-inline-block mr-2\">\n        <input type=\"radio\" name=\"bsradio\" id=\"radio2\">\n        <label for=\"radio2\">Inactive</label>\n      </div>\n      <div class=\"radio d-inline-block mr-2\">\n        <input type=\"radio\" name=\"bsradio1\" id=\"radio3\" disabled=\"\" checked=\"\">\n        <label for=\"radio3\">Active - Disabled</label>\n      </div>\n      <div class=\"radio d-inline-block mr-2\">\n        <input type=\"radio\" name=\"bsradio1\" id=\"radio4\" disabled=\"\">\n        <label for=\"radio3\">Inactive - Disabled</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Custom Colored Radio Buttons</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-radio custom-radio-color custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio01\" name=\"customRadio-11\" class=\"custom-control-input bg-primary\">\n        <label class=\"custom-control-label\" for=\"customRadio01\"> Primary </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio02\" name=\"customRadio-11\" class=\"custom-control-input bg-success\">\n        <label class=\"custom-control-label\" for=\"customRadio02\"> Success </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio03\" name=\"customRadio-11\" class=\"custom-control-input bg-danger\">\n        <label class=\"custom-control-label\" for=\"customRadio03\"> Danger </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio04\" name=\"customRadio-11\" class=\"custom-control-input bg-warning\">\n        <label class=\"custom-control-label\" for=\"customRadio04\"> Warning </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio05\" name=\"customRadio-11\" class=\"custom-control-input bg-dark\">\n        <label class=\"custom-control-label\" for=\"customRadio05\"> Dark </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio06\" name=\"customRadio-11\" class=\"custom-control-input bg-info\">\n        <label class=\"custom-control-label\" for=\"customRadio06\"> Info </label>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Custom Radio Buttons</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-radio custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio6\" name=\"customRadio-1\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio6\"> One </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio7\" name=\"customRadio-1\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio7\"> Two </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio8\" name=\"customRadio-1\" class=\"custom-control-input\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customRadio8\"> Three </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio-8\" name=\"customRadio-2\" class=\"custom-control-input\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customRadio-8\"> Four Checked </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio9\" name=\"customRadio-3\" class=\"custom-control-input\" disabled=\"\">\n        <label class=\"custom-control-label\" for=\"customRadio9\"> Five disabled</label>\n      </div>\n      <div class=\"custom-control custom-radio custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio10\" name=\"customRadio-4\" class=\"custom-control-input\" disabled=\"\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customRadio10\"> Six Selected and  disabled</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Colored Radio Buttons</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-radio custom-radio-color-checked custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio-1\" name=\"customRadio-10\" class=\"custom-control-input bg-primary\">\n        <label class=\"custom-control-label\" for=\"customRadio-1\"> Primary </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color-checked custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio-2\" name=\"customRadio-10\" class=\"custom-control-input bg-success\">\n        <label class=\"custom-control-label\" for=\"customRadio-2\"> Success </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color-checked custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio-3\" name=\"customRadio-10\" class=\"custom-control-input bg-danger\">\n        <label class=\"custom-control-label\" for=\"customRadio-3\"> Danger </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color-checked custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio-4\" name=\"customRadio-10\" class=\"custom-control-input bg-warning\">\n        <label class=\"custom-control-label\" for=\"customRadio-4\"> Warning </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color-checked custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio-5\" name=\"customRadio-10\" class=\"custom-control-input bg-dark\">\n        <label class=\"custom-control-label\" for=\"customRadio-5\"> Dark </label>\n      </div>\n      <div class=\"custom-control custom-radio custom-radio-color-checked custom-control-inline\">\n        <input type=\"radio\" id=\"customRadio-6\" name=\"customRadio-10\" class=\"custom-control-input bg-info\">\n        <label class=\"custom-control-label\" for=\"customRadio-6\"> Info </label>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-switch/form-switch.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-switch/form-switch.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFormsFormSwitchFormSwitchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">State</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-switch custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\n        <label class=\"custom-control-label\" for=\"customSwitch1\">false / Inactive</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch2\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customSwitch2\">true / active</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" disabled checked=\"\" id=\"customSwitch3\">\n        <label class=\"custom-control-label\" for=\"customSwitch3\">disable / active</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input\" disabled id=\"customSwitch4\">\n        <label class=\"custom-control-label\" for=\"customSwitch4\">disable / Inactive</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Text</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-switch custom-switch-text custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Primary </p>\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch-11\" checked=\"\">\n            <label class=\"custom-control-label\" for=\"customSwitch-11\" data-off-label=\"Off\">\n            </label>\n        </div>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Success </p>\n            <input type=\"checkbox\" class=\"custom-control-input bg-success\" id=\"customSwitch-22\" checked=\"\" >\n            <label class=\"custom-control-label\" for=\"customSwitch-22\" data-off-label=\"Fal\">\n            </label>\n        </div>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Danger </p>\n            <input type=\"checkbox\" class=\"custom-control-input bg-danger\" id=\"customSwitch-33\" checked=\"\">\n            <label class=\"custom-control-label\" for=\"customSwitch-33\" data-off-label=\"No\" >\n            </label>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Color</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-switch custom-switch-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-primary\" id=\"customSwitch01\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customSwitch01\">Primary</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-success\" id=\"customSwitch02\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customSwitch02\">Success</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-danger\" id=\"customSwitch03\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customSwitch03\">Danger</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-waring\" id=\"customSwitch04\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customSwitch04\">Waring</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-dark\" id=\"customSwitch05\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customSwitch05\">Dark</label>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-color custom-control-inline\">\n        <input type=\"checkbox\" class=\"custom-control-input bg-info\" id=\"customSwitch06\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customSwitch06\">Info</label>\n      </div>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Icon</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <div class=\"custom-control custom-switch custom-switch-icon custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Primary </p>\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch-1\">\n            <label class=\"custom-control-label\" for=\"customSwitch-1\">\n            <span class=\"switch-icon-left\"><i class=\"fa fa-check\"></i></span>\n            <span class=\"switch-icon-right\"><i class=\"fa fa-check\"></i></span>\n            </label>\n        </div>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Success </p>\n            <input type=\"checkbox\" class=\"custom-control-input bg-success\" id=\"customSwitch-2\" >\n            <label class=\"custom-control-label\" for=\"customSwitch-2\">\n            <span class=\"switch-icon-left\"><i class=\"fa fa-check\"></i></span>\n            <span class=\"switch-icon-right\"><i class=\"fa fa-check\"></i></span>\n            </label>\n        </div>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Danger </p>\n            <input type=\"checkbox\" class=\"custom-control-input bg-danger\" id=\"customSwitch-3\">\n            <label class=\"custom-control-label\" for=\"customSwitch-3\">\n            <span class=\"switch-icon-left\"><i class=\"fa fa-times\"></i></span>\n            <span class=\"switch-icon-right\"><i class=\"fa fa-times\"></i></span>\n            </label>\n        </div>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Warning </p>\n            <input type=\"checkbox\" class=\"custom-control-input bg-warning\" id=\"customSwitch-4\">\n            <label class=\"custom-control-label\" for=\"customSwitch-4\">\n            <span class=\"switch-icon-left\"><i class=\"fa fa-exclamation-triangle\"></i></span>\n            <span class=\"switch-icon-right\"><i class=\"fa fa-exclamation-triangle\"></i></span>\n            </label>\n        </div>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Dark </p>\n            <input type=\"checkbox\" class=\"custom-control-input bg-dark\" id=\"customSwitch-5\">\n            <label class=\"custom-control-label\" for=\"customSwitch-5\">\n            <span class=\"switch-icon-left\"><i class=\"fa fa-thumb-tack\"></i></span>\n            <span class=\"switch-icon-right\"><i class=\"fa fa-thumb-tack\"></i></span>\n            </label>\n        </div>\n      </div>\n      <div class=\"custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline\">\n        <div class=\"custom-switch-inner\">\n            <p class=\"mb-0\"> Info </p>\n            <input type=\"checkbox\" class=\"custom-control-input bg-info\" id=\"customSwitch-6\">\n            <label class=\"custom-control-label\" for=\"customSwitch-6\">\n            <span class=\"switch-icon-left\"><i class=\"fa fa-info\"></i></span>\n            <span class=\"switch-icon-right\"><i class=\"fa fa-info\"></i></span>\n            </label>\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-validation/form-validation.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-validation/form-validation.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFormsFormValidationFormValidationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\"> Default Validation</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form>\n        <div class=\"form-row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault01\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault01\" required>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault02\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault02\" required>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefaultUsername\">Username</label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend2\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"validationDefaultUsername\"  aria-describedby=\"inputGroupPrepend2\" required>\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault03\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault03\" required>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault04\">State</label>\n              <select class=\"custom-select\" id=\"validationDefault04\" required>\n                  <option selected disabled value=\"\">Choose...</option>\n                  <option>...</option>\n              </select>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault05\">Zip</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault05\" required>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck2\" required>\n              <label class=\"form-check-label\" for=\"invalidCheck2\">\n              Agree to terms and conditions\n              </label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n        </div>\n      </form>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\"> Supported elements</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form class=\"was-validated\">\n        <div class=\"mb-3\">\n            <label for=\"validationTextarea\">Textarea</label>\n            <textarea class=\"form-control is-invalid\" id=\"validationTextarea\" placeholder=\"Required example textarea\" required></textarea>\n            <div class=\"invalid-feedback\">\n              Please enter a message in the textarea.\n            </div>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlValidation1\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation1\">Check this custom checkbox</label>\n            <div class=\"invalid-feedback\">Example invalid feedback text</div>\n        </div>\n        <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"customControlValidation2\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation2\">Toggle this custom radio</label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"customControlValidation3\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation3\">Or toggle this other custom radio</label>\n            <div class=\"invalid-feedback\">More example invalid feedback text</div>\n        </div>\n        <div class=\"form-group\">\n            <select class=\"custom-select\" required>\n              <option value=\"\">Open this select menu</option>\n              <option value=\"1\">One</option>\n              <option value=\"2\">Two</option>\n              <option value=\"3\">Three</option>\n            </select>\n            <div class=\"invalid-feedback\">Example invalid custom select feedback</div>\n        </div>\n        <div class=\"custom-file\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"validatedCustomFile\" required>\n            <label class=\"custom-file-label\" for=\"validatedCustomFile\">Choose file...</label>\n            <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n        </div>\n      </form>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Custom Validation</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form class=\"needs-validation\" novalidate>\n        <div class=\"form-row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationCustom01\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationCustom01\"  required>\n              <div class=\"valid-feedback\">\n                  Looks good!\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationCustom02\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationCustom02\"  required>\n              <div class=\"valid-feedback\">\n                  Looks good!\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationCustomUsername\">Username</label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"validationCustomUsername\" aria-describedby=\"inputGroupPrepend\" required>\n                  <div class=\"invalid-feedback\">\n                    Please choose a username.\n                  </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationCustom03\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationCustom03\" required>\n              <div class=\"invalid-feedback\">\n                  Please provide a valid city.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationCustom04\">State</label>\n              <select class=\"custom-select\" id=\"validationCustom04\" required>\n                  <option selected disabled value=\"\">Choose...</option>\n                  <option>...</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                  Please select a valid state.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationCustom05\">Zip</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationCustom05\" required>\n              <div class=\"invalid-feedback\">\n                  Please provide a valid zip.\n              </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck\" required>\n              <label class=\"form-check-label\" for=\"invalidCheck\">\n              Agree to terms and conditions\n              </label>\n              <div class=\"invalid-feedback\">\n                  You must agree before submitting.\n              </div>\n            </div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n      </form>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Tooltips</h4>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>\n      <form class=\"needs-validation\" novalidate>\n        <div class=\"form-row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationTooltip01\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" value=\"Mark\" required>\n              <div class=\"valid-tooltip\">\n                  Looks good!\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationTooltip02\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationTooltip02\" value=\"Jhon\" required>\n              <div class=\"valid-tooltip\">\n                  Looks good!\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationTooltipUsername\">Username</label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"validationTooltipUsernamePrepend\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"validationTooltipUsername\" aria-describedby=\"validationTooltipUsernamePrepend\" required>\n                  <div class=\"invalid-tooltip\">\n                    Please choose a unique and valid username.\n                  </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationTooltip03\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationTooltip03\" required>\n              <div class=\"invalid-tooltip\">\n                  Please provide a valid city.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationTooltip04\">State</label>\n              <select class=\"custom-select\" id=\"validationTooltip04\" required>\n                  <option selected disabled value=\"\">Choose...</option>\n                  <option>...</option>\n              </select>\n              <div class=\"invalid-tooltip\">\n                  Please select a valid state.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationTooltip05\">Zip</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationTooltip05\" required>\n              <div class=\"invalid-tooltip\">\n                  Please provide a valid zip.\n              </div>\n            </div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n      </form>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-wizard/form-wizard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-wizard/form-wizard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFormsFormWizardFormWizardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Simple Wizard</h4>\n      </div>\n      <form id=\"form-wizard1\" class=\"text-center mt-4\">\n        <ul id=\"top-tab-list\" class=\"p-0\">\n          <li id=\"account\" [class]=\"currentTab === 'a-form' ? 'active': account ? 'active done' : ''\">\n            <a href=\"javascript:void(0);\">\n              <i class=\"ri-lock-unlock-line\"></i><span>Account</span>\n            </a>\n          </li>\n          <li id=\"personal\" [class]=\"currentTab === 'p-form' ? 'active': personal ? 'active done' : ''\">\n            <a href=\"javascript:void(0);\">\n              <i class=\"ri-user-fill\"></i><span>Personal</span>\n            </a>\n          </li>\n          <li id=\"image\" [class]=\"currentTab === 'i-form' ? 'active': image ? 'active done' : ''\">\n            <a href=\"javascript:void(0);\">\n              <i class=\"ri-camera-fill\"></i><span>Image</span>\n            </a>\n          </li>\n          <li id=\"confirm\" [class]=\"currentTab === 'f-form' ? 'active': ''\">\n            <a href=\"javascript:void(0);\">\n              <i class=\"ri-check-fill\"></i><span>Finish</span>\n            </a>\n          </li>\n        </ul>\n        <!-- fieldsets -->\n        <fieldset [class]=\"currentTab === 'a-form' ? 'd-block': 'd-none'\">\n          <div class=\"form-card text-left\">\n            <div class=\"row\">\n              <div class=\"col-7\">\n                <h3 class=\"mb-4\">Account Information:</h3>\n              </div>\n              <div class=\"col-5\">\n                <h2 class=\"steps\">Step 1 - 4</h2>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email: *</label>\n                  <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email Id\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"uname\">Username: *</label>\n                  <input type=\"text\" class=\"form-control\" name=\"uname\" placeholder=\"UserName\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"pwd\">Password: *</label>\n                  <input type=\"password\" class=\"form-control\" name=\"pwd\" placeholder=\"Password\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"cpwd\">Confirm Password: *</label>\n                  <input type=\"password\" class=\"form-control\" name=\"cpwd\" placeholder=\"Confirm Password\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"button\" name=\"next\" (click)=\"currentTab = 'p-form';account = true;\" class=\"btn btn-primary next action-button float-right\" value=\"Next\" >Next</button>\n        </fieldset>\n        <fieldset [class]=\"currentTab === 'p-form' ? 'd-block': 'd-none'\">\n          <div class=\"form-card text-left\">\n            <div class=\"row\">\n              <div class=\"col-7\">\n                <h3 class=\"mb-4\">Personal Information:</h3>\n              </div>\n              <div class=\"col-5\">\n                <h2 class=\"steps\">Step 2 - 4</h2>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"fname\">First Name: *</label>\n                  <input type=\"text\" class=\"form-control\" name=\"fname\" placeholder=\"First Name\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"lname\">Last Name: *</label>\n                  <input type=\"text\" class=\"form-control\" name=\"lname\" placeholder=\"Last Name\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"phno\">Contact No.: *</label>\n                  <input type=\"text\" class=\"form-control\" name=\"phno\" placeholder=\"Contact No.\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"phno_2\">Alternate Contact No.: *</label>\n                  <input type=\"text\" class=\"form-control\" name=\"phno_2\" placeholder=\"Alternate Contact No.\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"button\" name=\"next\" (click)=\"currentTab = 'i-form';personal = true;\" class=\"btn btn-primary next action-button float-right\" value=\"Next\" >Next</button>\n          <button type=\"button\" name=\"previous\" (click)=\"currentTab = 'a-form';\" class=\"btn btn-dark previous action-button-previous float-right mr-3\" value=\"Previous\" >Previous</button>\n        </fieldset>\n        <fieldset [class]=\"currentTab === 'i-form' ? 'd-block': 'd-none'\">\n          <div class=\"form-card text-left\">\n            <div class=\"row\">\n              <div class=\"col-7\">\n                <h3 class=\"mb-4\">Image Upload:</h3>\n              </div>\n              <div class=\"col-5\">\n                <h2 class=\"steps\">Step 3 - 4</h2>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"pic\">Upload Your Photo:</label>\n              <input type=\"file\" class=\"form-control\" name=\"pic\" accept=\"image/*\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"pic-2\">Upload Signature Photo:</label>\n              <input type=\"file\" class=\"form-control\" name=\"pic-2\" accept=\"image/*\">\n            </div>\n          </div>\n          <button type=\"button\" name=\"next\" (click)=\"currentTab = 'f-form';image = true;\" class=\"btn btn-primary next action-button float-right\" value=\"Submit\" >Submit</button>\n          <button type=\"button\" name=\"previous\" (click)=\"currentTab = 'p-form';\" class=\"btn btn-dark previous action-button-previous float-right mr-3\" value=\"Previous\" >Previous</button>\n        </fieldset>\n        <fieldset [class]=\"currentTab === 'f-form' ? 'd-block': 'd-none'\">\n          <div class=\"form-card\">\n            <div class=\"row\">\n              <div class=\"col-7\">\n                <h3 class=\"mb-4 text-left\">Finish:</h3>\n              </div>\n              <div class=\"col-5\">\n                <h2 class=\"steps\">Step 4 - 4</h2>\n              </div>\n            </div> <br><br>\n            <h2 class=\"text-success text-center\"><strong>SUCCESS !</strong></h2> <br>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-3\"> <img src=\"../../../..assets/images/page-img/img-success.png\" class=\"fit-image\"> </div>\n            </div> <br><br>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-7 text-center\">\n                <h5 class=\"purple-text text-center\">You Have Successfully Signed Up</h5>\n              </div>\n            </div>\n          </div>\n        </fieldset>\n      </form>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/views/forms/form-checkbox/form-checkbox.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/views/forms/form-checkbox/form-checkbox.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FormCheckboxComponent */

  /***/
  function srcAppViewsFormsFormCheckboxFormCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormCheckboxComponent", function () {
      return FormCheckboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormCheckboxComponent = /*#__PURE__*/function () {
      function FormCheckboxComponent() {
        _classCallCheck(this, FormCheckboxComponent);
      }

      _createClass(FormCheckboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormCheckboxComponent;
    }();

    FormCheckboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-checkbox',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form-checkbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-checkbox/form-checkbox.component.html"))["default"]
    })], FormCheckboxComponent);
    /***/
  },

  /***/
  "./src/app/views/forms/form-layout/form-layout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/views/forms/form-layout/form-layout.component.ts ***!
    \******************************************************************/

  /*! exports provided: FormLayoutComponent */

  /***/
  function srcAppViewsFormsFormLayoutFormLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormLayoutComponent", function () {
      return FormLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormLayoutComponent = /*#__PURE__*/function () {
      function FormLayoutComponent() {
        _classCallCheck(this, FormLayoutComponent);
      }

      _createClass(FormLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormLayoutComponent;
    }();

    FormLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-layout/form-layout.component.html"))["default"]
    })], FormLayoutComponent);
    /***/
  },

  /***/
  "./src/app/views/forms/form-radio/form-radio.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/views/forms/form-radio/form-radio.component.ts ***!
    \****************************************************************/

  /*! exports provided: FormRadioComponent */

  /***/
  function srcAppViewsFormsFormRadioFormRadioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormRadioComponent", function () {
      return FormRadioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormRadioComponent = /*#__PURE__*/function () {
      function FormRadioComponent() {
        _classCallCheck(this, FormRadioComponent);
      }

      _createClass(FormRadioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormRadioComponent;
    }();

    FormRadioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-radio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form-radio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-radio/form-radio.component.html"))["default"]
    })], FormRadioComponent);
    /***/
  },

  /***/
  "./src/app/views/forms/form-switch/form-switch.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/views/forms/form-switch/form-switch.component.ts ***!
    \******************************************************************/

  /*! exports provided: FormSwitchComponent */

  /***/
  function srcAppViewsFormsFormSwitchFormSwitchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormSwitchComponent", function () {
      return FormSwitchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormSwitchComponent = /*#__PURE__*/function () {
      function FormSwitchComponent() {
        _classCallCheck(this, FormSwitchComponent);
      }

      _createClass(FormSwitchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormSwitchComponent;
    }();

    FormSwitchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-switch',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form-switch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-switch/form-switch.component.html"))["default"]
    })], FormSwitchComponent);
    /***/
  },

  /***/
  "./src/app/views/forms/form-validation/form-validation.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/views/forms/form-validation/form-validation.component.ts ***!
    \**************************************************************************/

  /*! exports provided: FormValidationComponent */

  /***/
  function srcAppViewsFormsFormValidationFormValidationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function () {
      return FormValidationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormValidationComponent = /*#__PURE__*/function () {
      function FormValidationComponent() {
        _classCallCheck(this, FormValidationComponent);
      }

      _createClass(FormValidationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormValidationComponent;
    }();

    FormValidationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-validation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form-validation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-validation/form-validation.component.html"))["default"]
    })], FormValidationComponent);
    /***/
  },

  /***/
  "./src/app/views/forms/form-wizard/form-wizard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/views/forms/form-wizard/form-wizard.component.ts ***!
    \******************************************************************/

  /*! exports provided: FormWizardComponent */

  /***/
  function srcAppViewsFormsFormWizardFormWizardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function () {
      return FormWizardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormWizardComponent = /*#__PURE__*/function () {
      function FormWizardComponent() {
        _classCallCheck(this, FormWizardComponent);

        this.account = false;
        this.personal = false;
        this.image = false;
        this.finish = false;
        this.currentTab = 'a-form';
      }

      _createClass(FormWizardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormWizardComponent;
    }();

    FormWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-wizard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form-wizard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-wizard/form-wizard.component.html"))["default"]
    })], FormWizardComponent);
    /***/
  },

  /***/
  "./src/app/views/forms/forms-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/forms/forms-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FormsRoutingModule */

  /***/
  function srcAppViewsFormsFormsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function () {
      return FormsRoutingModule;
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


    var _form_layout_form_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-layout/form-layout.component */
    "./src/app/views/forms/form-layout/form-layout.component.ts");
    /* harmony import */


    var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form-validation/form-validation.component */
    "./src/app/views/forms/form-validation/form-validation.component.ts");
    /* harmony import */


    var _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-switch/form-switch.component */
    "./src/app/views/forms/form-switch/form-switch.component.ts");
    /* harmony import */


    var _form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-checkbox/form-checkbox.component */
    "./src/app/views/forms/form-checkbox/form-checkbox.component.ts");
    /* harmony import */


    var _form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./form-radio/form-radio.component */
    "./src/app/views/forms/form-radio/form-radio.component.ts");
    /* harmony import */


    var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./form-wizard/form-wizard.component */
    "./src/app/views/forms/form-wizard/form-wizard.component.ts");

    var routes = [{
      path: 'form-layout',
      component: _form_layout_form_layout_component__WEBPACK_IMPORTED_MODULE_3__["FormLayoutComponent"]
    }, {
      path: 'form-validation',
      component: _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_4__["FormValidationComponent"]
    }, {
      path: 'form-switch',
      component: _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_5__["FormSwitchComponent"]
    }, {
      path: 'form-checkbox',
      component: _form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["FormCheckboxComponent"]
    }, {
      path: 'form-radio',
      component: _form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_7__["FormRadioComponent"]
    }, {
      path: 'form-wizard',
      component: _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_8__["FormWizardComponent"]
    }];

    var FormsRoutingModule = function FormsRoutingModule() {
      _classCallCheck(this, FormsRoutingModule);
    };

    FormsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormsRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/forms/forms.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/views/forms/forms.module.ts ***!
    \*********************************************/

  /*! exports provided: FormsModule */

  /***/
  function srcAppViewsFormsFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
      return FormsModule;
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


    var _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forms-routing.module */
    "./src/app/views/forms/forms-routing.module.ts");
    /* harmony import */


    var _form_layout_form_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form-layout/form-layout.component */
    "./src/app/views/forms/form-layout/form-layout.component.ts");
    /* harmony import */


    var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/sofbox/sofbox.module */
    "./src/app/components/sofbox/sofbox.module.ts");
    /* harmony import */


    var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-validation/form-validation.component */
    "./src/app/views/forms/form-validation/form-validation.component.ts");
    /* harmony import */


    var _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./form-switch/form-switch.component */
    "./src/app/views/forms/form-switch/form-switch.component.ts");
    /* harmony import */


    var _form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./form-checkbox/form-checkbox.component */
    "./src/app/views/forms/form-checkbox/form-checkbox.component.ts");
    /* harmony import */


    var _form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./form-radio/form-radio.component */
    "./src/app/views/forms/form-radio/form-radio.component.ts");
    /* harmony import */


    var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./form-wizard/form-wizard.component */
    "./src/app/views/forms/form-wizard/form-wizard.component.ts");

    var FormsModule = function FormsModule() {
      _classCallCheck(this, FormsModule);
    };

    FormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_form_layout_form_layout_component__WEBPACK_IMPORTED_MODULE_4__["FormLayoutComponent"], _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_6__["FormValidationComponent"], _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_7__["FormSwitchComponent"], _form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["FormCheckboxComponent"], _form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_9__["FormRadioComponent"], _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_10__["FormWizardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormsRoutingModule"], _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"]],
      exports: [_form_layout_form_layout_component__WEBPACK_IMPORTED_MODULE_4__["FormLayoutComponent"], _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_6__["FormValidationComponent"], _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_7__["FormSwitchComponent"], _form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["FormCheckboxComponent"], _form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_9__["FormRadioComponent"], _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_10__["FormWizardComponent"]]
    })], FormsModule);
    /***/
  }
}]);
//# sourceMappingURL=views-forms-forms-module-es5.js.map