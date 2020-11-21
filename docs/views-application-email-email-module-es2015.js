(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-application-email-email-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-compose-body/email-compose-body.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-compose-body/email-compose-body.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-iq-card [cardClass]=\"'iq-card iq-border-radius-20 ' + cardClass\" [isCardHeader]=false>\n  <div class=\"iq-card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-3\">\n        <h5 [classList]=\"'text-primary ' + cardTitle\"><i class=\"ri-pencil-fill\"></i> Compose Message</h5>\n        <ng-content select=\"[modal-close]\"></ng-content>\n      </div>\n    </div>\n    <form class=\"email-form\">\n      <div class=\"form-group row\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">To:</label>\n        <div class=\"col-sm-10\">\n          <select id=\"inputEmail3\" class=\"select2jsMultiSelect form-control\" multiple=\"multiple\">\n            <option value=\"Petey Cruiser\">Petey Cruiser</option>\n            <option value=\"Bob Frapples\">Bob Frapples</option>\n            <option value=\"Barb Ackue\">Barb Ackue</option>\n            <option value=\"Greta Life\">Greta Life</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"cc\" class=\"col-sm-2 col-form-label\">Cc:</label>\n        <div class=\"col-sm-10\">\n          <select id=\"cc\" class=\"select2jsMultiSelect form-control\" multiple=\"multiple\">\n            <option value=\"Brock Lee\">Brock Lee</option>\n            <option value=\"Rick O'Shea\">Rick O'Shea</option>\n            <option value=\"Cliff Hanger\">Cliff Hanger</option>\n            <option value=\"Barb Dwyer\">Barb Dwyer</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"subject\" class=\"col-sm-2 col-form-label\">Subject:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" id=\"subject\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"subject\" class=\"col-sm-2 col-form-label\">Your Message:</label>\n        <div class=\"col-md-10\">\n          <textarea class=\"textarea form-control\" rows=\"5\">Next, use our Get Started docs to setup Tiny!</textarea>\n        </div>\n      </div>\n      <div class=\"form-group row align-items-center\">\n        <div class=\"d-flex flex-grow-1 align-items-center\">\n          <div class=\"send-btn pl-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n          </div>\n          <div class=\"send-panel\">\n            <label class=\"ml-2 mb-0 iq-bg-primary rounded\" for=\"file\"> <input type=\"file\" id=\"file\"\n                                                                              style=\"display: none\"> <a><i\n              class=\"ri-attachment-line\"></i> </a> </label>\n            <label class=\"ml-2 mb-0 iq-bg-primary rounded\"> <a href=\"javascript:void();\"> <i\n              class=\"ri-map-pin-user-line text-primary\"></i></a> </label>\n            <label class=\"ml-2 mb-0 iq-bg-primary rounded\"> <a href=\"javascript:void();\"> <i\n              class=\"ri-drive-line text-primary\"></i></a> </label>\n            <label class=\"ml-2 mb-0 iq-bg-primary rounded\"> <a href=\"javascript:void();\"> <i\n              class=\"ri-camera-line text-primary\"></i></a> </label>\n            <label class=\"ml-2 mb-0 iq-bg-primary rounded\"> <a href=\"javascript:void();\"> <i\n              class=\"ri-user-smile-line text-primary\"></i></a> </label>\n          </div>\n        </div>\n        <div class=\"d-flex mr-3 align-items-center\">\n          <div class=\"send-panel float-right\">\n            <label class=\"ml-2 mb-0 iq-bg-primary rounded\"><a href=\"javascript:void();\"><i\n              class=\"ri-settings-2-line text-primary\"></i></a></label>\n            <label class=\"ml-2 mb-0 iq-bg-primary rounded\"><a href=\"javascript:void();\"> <i\n              class=\"ri-delete-bin-line text-primary\"></i></a> </label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-iq-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-compose/email-compose.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-compose/email-compose.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row row-eq-height\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <app-email-compose-body></app-email-compose-body>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-item-details/email-item-details.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-item-details/email-item-details.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [classList]=\"'email-app-details' + (isDetailsShow ? ' show' : '')\">\r\n  <div class=\"iq-card\">\r\n    <div class=\"iq-card-body p-0\">\r\n      <div class=\"\">\r\n        <div class=\"iq-email-to-list p-3\">\r\n          <div class=\"d-flex justify-content-between\">\r\n            <ul>\r\n              <li class=\"mr-3\">\r\n                <a href=\"javascript: void(0);\" (click)=\"hideDetailsClicked()\">\r\n                  <h4 class=\"m-0\"><i class=\"ri-arrow-left-line\"></i></h4>\r\n                </a>\r\n              </li>\r\n              <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-mail-open-line\"></i></a></li>\r\n              <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-information-line\"></i></a></li>\r\n              <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-delete-bin-line\"></i></a></li>\r\n              <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-mail-unread-line\"></i></a></li>\r\n              <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-folder-transfer-line\"></i></a></li>\r\n              <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-bookmark-line\"></i></a></li>\r\n            </ul>\r\n            <div class=\"iq-email-search d-flex\">\r\n              <ul>\r\n                <li class=\"mr-3\">\r\n                  <a class=\"font-size-14\" href=\"javascript:void(0);\">1 of 505</a>\r\n                </li>\r\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-arrow-left-s-line\"></i></a></li>\r\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"><a href=\"javascript:void(0);\"><i class=\"ri-arrow-right-s-line\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mt-0\">\r\n        <div class=\"iq-inbox-subject p-3\">\r\n          <h5 class=\"mt-0\">Your elite author Graphic Optimization reward is ready!</h5>\r\n          <div class=\"iq-inbox-subject-info\">\r\n            <div class=\"iq-subject-info\">\r\n              <img src=\"./assets/images/user/user-1.jpg\" class=\"img-fluid rounded-circle\" alt=\"#\">\r\n              <div class=\"iq-subject-status align-self-center\">\r\n                <h6 class=\"mb-0\">Sofbox team <a href=\"dummy@sofbox.com\">dummy@sofbox.com></a></h6>\r\n                <div class=\"dropdown\">\r\n                  <a class=\"dropdown-toggle\" href=\"javascript:void(0);\"  id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    to Me\r\n                  </a>\r\n                  <div class=\"dropdown-menu font-size-12\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <table class=\"iq-inbox-details\">\r\n                      <tbody>\r\n                      <tr>\r\n                        <td>from:</td>\r\n                        <td>Medium Daily Digest</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>reply-to:</td>\r\n                        <td>noreply@gmail.com</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>to:</td>\r\n                        <td>iqonicdesigns@gmail.com</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>date:</td>\r\n                        <td>13 Dec 2019, 08:30</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>subject:</td>\r\n                        <td>The Golden Rule</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>security:</td>\r\n                        <td>Standard encryption</td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <span class=\"float-right align-self-center\">Jan 15, 2029, 10:20AM</span>\r\n            </div>\r\n            <div class=\"iq-inbox-body mt-5\">\r\n              <p>Hi Jopour Xiong,</p>\r\n              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>\r\n              <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n              <p class=\"mt-5 mb-0\">Regards,<span class=\"d-inline-block w-100\">John Deo</span></p>\r\n            </div>\r\n            <hr>\r\n            <div class=\"attegement\">\r\n              <h6 class=\"mb-2\">ATTACHED FILES:</h6>\r\n              <ul>\r\n                <li class=\"icon icon-attegment\">\r\n                  <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> <span class=\"ml-1\">mydoc.doc</span>\r\n                </li>\r\n                <li class=\"icon icon-attegment\">\r\n                  <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> <span class=\"ml-1\">mydoc.pdf</span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-item/email-item.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-item/email-item.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-self-center\">\n  <div class=\"iq-email-sender-info\">\n    <div class=\"iq-checkbox-mail\">\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\"></label>\n      </div>\n    </div>\n    <span [classList]=\"'ri-star-line iq-star-toggle' + (item.favorite ?  ' text-warning ' : '')\"></span>\n    <a href=\"javascript: void(0);\" class=\"iq-email-title\">{{ item.user }}</a>\n  </div>\n  <div class=\"iq-email-content\">\n    <a href=\"javascript: void(0);\" class=\"iq-email-subject\">{{ item.subject }} &nbsp;–&nbsp;\n      <span>{{ item.description }}</span>\n    </a>\n    <div class=\"iq-email-date\">{{ item.emailTime }}</div>\n  </div>\n  <ul class=\"iq-social-media\">\n    <li><a href=\"javascript:void(0);\"><i class=\"ri-delete-bin-2-line\"></i></a></li>\n    <li><a href=\"javascript:void(0);\"><i class=\"ri-mail-line\"></i></a></li>\n    <li><a href=\"javascript:void(0);\"><i class=\"ri-file-list-2-line\"></i></a></li>\n    <li><a href=\"javascript:void(0);\"><i class=\"ri-time-line\"></i></a></li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/index/index.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/index/index.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-3\">\n    <div class=\"iq-card\">\n      <div class=\"iq-card-body\">\n        <div class=\"\">\n          <div class=\"iq-email-list\">\n            <button class=\"btn btn-primary btn-lg btn-block mb-3 font-size-16 p-3\" (click)=\"openModal(composeEmail)\">\n              <i class=\"ri-send-plane-line mr-2\"></i>New Message\n            </button>\n            <app-tab-nav\n              tabClass=\"iq-email-ui nav flex-column nav-pills\"\n              tagToggleType=\"pill\"\n              [tabNavItems]=\"tabNavItems\">\n            </app-tab-nav>\n\n            <h6 class=\"mt-4 mb-3\">Labels</h6>\n            <ul class=\"iq-email-ui iq-email-label\">\n              <li><a href=\"javascript:void(0);\"><i class=\"ri-focus-fill text-primary\"></i>Personal</a></li>\n              <li><a href=\"javascript:void(0);\"><i class=\"ri-focus-fill text-danger\"></i>Company</a></li>\n              <li><a href=\"javascript:void(0);\"><i class=\"ri-focus-fill text-success\"></i>Important</a></li>\n              <li><a href=\"javascript:void(0);\"><i class=\"ri-focus-fill text-info\"></i>Private</a></li>\n              <li><a href=\"javascript:void(0);\"><i class=\"ri-focus-fill text-warning\"></i>Private</a></li>\n              <li><a href=\"javascript:void(0);\"><i class=\"ri-add-circle-line\"></i>Add New Labels</a></li>\n            </ul>\n            <div class=\"iq-progress-bar-linear d-inline-block w-100\">\n              <h6 class=\"mt-4 mb-3\">Storage</h6>\n              <div class=\"iq-progress-bar\">\n                <span class=\"bg-danger\" data-percent=\"90\"></span>\n              </div>\n              <span class=\"mt-1 d-inline-block w-100\">7.02 GB (46%) of 15 GB used</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-9 mail-box-detail\">\n    <div class=\"iq-card\">\n      <div class=\"iq-card-body p-0\">\n        <div class=\"\">\n          <div class=\"iq-email-to-list p-3\">\n            <div class=\"d-flex justify-content-between\">\n              <ul>\n                <li>\n                  <a href=\"javascript:void(0);\" data-toggle=\"dropdown\">\n                    <div class=\"custom-control custom-checkbox\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                      <label class=\"custom-control-label\" for=\"customCheck1\"><i\n                        class=\"ri-arrow-down-s-line\"></i></label>\n                    </div>\n                  </a>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n                  </div>\n                </li>\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Reload\"><a href=\"javascript:void(0);\"><i\n                  class=\"ri-restart-line\"></i></a></li>\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Archive\"><a href=\"javascript:void(0);\"><i\n                  class=\"ri-mail-open-line\"></i></a></li>\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Spam\"><a href=\"javascript:void(0);\"><i\n                  class=\"ri-information-line\"></i></a></li>\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\"><a href=\"javascript:void(0);\"><i\n                  class=\"ri-delete-bin-line\"></i></a></li>\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Inbox\"><a href=\"javascript:void(0);\"><i\n                  class=\"ri-mail-unread-line\"></i></a></li>\n                <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Zoom\"><a href=\"javascript:void(0);\"><i\n                  class=\"ri-drag-move-2-line\"></i></a></li>\n              </ul>\n              <div class=\"iq-email-search d-flex\">\n                <form class=\"mr-3 position-relative\">\n                  <div class=\"form-group mb-0\">\n                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                           placeholder=\"Search\">\n                    <a class=\"search-link\" href=\"javascript:void(0);\"><i class=\"ri-search-line\"></i></a>\n                  </div>\n                </form>\n                <ul>\n                  <li class=\"mr-3\">\n                    <a class=\"font-size-14\" href=\"javascript:void(0);\" data-toggle=\"dropdown\">\n                      1 - 50 of 505\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\">20 per page</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\">50 per page</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\">100 per page</a>\n                    </div>\n                  </li>\n                  <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Privious\"><a href=\"javascript:void(0);\"><i\n                    class=\"ri-arrow-left-s-line\"></i></a></li>\n                  <li data-toggle=\"tooltip\" data-placement=\"top\" title=\"Next\"><a href=\"javascript:void(0);\"><i\n                    class=\"ri-arrow-right-s-line\"></i></a></li>\n                  <li class=\"mr-0\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Setting\"><a href=\"javascript:void(0);\"><i\n                    class=\"ri-list-settings-line\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"iq-email-listbox\">\n            <div class=\"tab-content\">\n              <div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"mail-inbox\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let inboxItem of inboxItems\"\n                    [classList]=\"(inboxItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"inboxItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"mail-starred\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let starredItem of starredItems\"\n                    [classList]=\"(starredItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"starredItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"mail-snoozed\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let snoozedItem of snoozedItems\"\n                    [classList]=\"(snoozedItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"snoozedItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"mail-draft\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let draftItem of draftItems\"\n                    [classList]=\"(draftItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"draftItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"mail-sent\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let sentItem of sentItems\"\n                    [classList]=\"(sentItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"sentItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"mail-trash\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let trashItem of trashItems\"\n                    [classList]=\"(trashItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"trashItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"mail-important\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let importantItem of importantItems\"\n                    [classList]=\"(importantItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"importantItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"mail-spam\">\n                <ul class=\"iq-email-sender-list\">\n                  <li (click)=\"showEmailDetails('')\"\n                    *ngFor=\"let spamItem of spamItems\"\n                    [classList]=\"(spamItem.is_unread ? 'iq-unread' : '')\">\n                    <app-email-item [item]=\"spamItem\"></app-email-item>\n                  </li>\n                </ul>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <app-email-item-details\n      [isDetailsShow]=\"emailDetailsActive\"\n      (hideDetailsClick)=\"showEmailDetails($event)\"></app-email-item-details>\n  </div>\n\n\n  <ng-template #composeEmail>\n    <div id=\"compose-email-popup\">\n      <app-email-compose-body [isCloseModal]=true cardClass=\"mb-0\" cardTitle=\"float-left\">\n        <button type=\"button\" class=\"float-right close\" modal-close aria-label=\"Close\" (click)=\"modalRef.hide()\">\n          <i class=\"ri-close-fill\"></i>\n        </button>\n      </app-email-compose-body>\n    </div>\n  </ng-template>\n\n</div>\n");

/***/ }),

/***/ "./src/app/fake-api/json/Email.json":
/*!******************************************!*\
  !*** ./src/app/fake-api/json/Email.json ***!
  \******************************************/
/*! exports provided: tabItems, inbox, starred, deleted, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tabItems\":[{\"isActive\":true,\"link\":\"#mail-inbox\",\"icon\":\"ri-mail-line\",\"label\":\"Inbox\",\"append\":\"<span class='badge badge-primary ml-2'>4</span>\"},{\"isActive\":false,\"link\":\"#mail-starred\",\"icon\":\"ri-star-line\",\"label\":\"Starred\",\"append\":\"\"},{\"isActive\":false,\"link\":\"#mail-snoozed\",\"icon\":\"ri-mail-line\",\"label\":\"Snoozed\",\"append\":\"\"},{\"isActive\":false,\"link\":\"#mail-draft\",\"icon\":\"ri-file-list-2-line\",\"label\":\"Draft\",\"append\":\"\"},{\"isActive\":false,\"link\":\"#mail-sent\",\"icon\":\"ri-mail-send-line\",\"label\":\"Sent Mail\",\"append\":\"\"},{\"isActive\":false,\"link\":\"#mail-trash\",\"icon\":\"ri-delete-bin-line\",\"label\":\"Trash\",\"append\":\"\"},{\"isActive\":false,\"link\":\"#mail-important\",\"icon\":\"ri-bookmark-line\",\"label\":\"Important\",\"append\":\"\"},{\"isActive\":false,\"link\":\"#mail-spam\",\"icon\":\"ri-spam-line\",\"label\":\"Spam\",\"append\":\"\"}],\"inbox\":[{\"is_selected\":false,\"is_unread\":true,\"favorite\":true,\"user\":\"Jopour Xiong (Me)\",\"subject\":\"Mackenzie Niko (@Mackenzieniko) has sent you a direct message on Twitter!  – \",\"emailTime\":\"08:00 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Deray Billings\",\"subject\":\"Megan Allen (@meganallen) has sent you a direct message on Twitter!  \",\"emailTime\":\"08:00 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":true,\"user\":\"Lauren Drury (Me)\",\"subject\":\"Dixa Horton (@dixahorton) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Fabian Ros (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":true,\"user\":\"Megan Allen (Me)\",\"subject\":\"Eb Begg (@ebbegg) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Jopour Xiong (Me)\",\"subject\":\"Mackenzie Niko (@mackenzieniko) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":true,\"user\":\"Deray Billings (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":true,\"user\":\"Deray Billings\",\"subject\":\"Megan Allen (@meganallen) has sent you a direct message on Twitter!  \",\"emailTime\":\"08:00 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":true,\"user\":\"Lauren Drury (Me)\",\"subject\":\"Dixa Horton (@dixahorton) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Fabian Ros (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Megan Allen (Me)\",\"subject\":\"Eb Begg (@ebbegg) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Jopour Xiong (Me)\",\"subject\":\"Mackenzie Niko (@mackenzieniko) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Deray Billings (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"}],\"starred\":[{\"is_selected\":false,\"is_unread\":true,\"favorite\":false,\"user\":\"Deray Billings (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Deray Billings\",\"subject\":\"Megan Allen (@meganallen) has sent you a direct message on Twitter!  \",\"emailTime\":\"08:00 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Lauren Drury (Me)\",\"subject\":\"Dixa Horton (@dixahorton) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Fabian Ros (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":true,\"favorite\":false,\"user\":\"Megan Allen (Me)\",\"subject\":\"Eb Begg (@ebbegg) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Jopour Xiong (Me)\",\"subject\":\"Mackenzie Niko (@mackenzieniko) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Deray Billings (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"}],\"deleted\":[{\"is_selected\":false,\"is_unread\":true,\"favorite\":false,\"user\":\"Megan Allen (Me)\",\"subject\":\"Eb Begg (@ebbegg) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Jopour Xiong (Me)\",\"subject\":\"Mackenzie Niko (@mackenzieniko) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Deray Billings (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Fabian Ros (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Deray Billings (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Deray Billings\",\"subject\":\"Megan Allen (@meganallen) has sent you a direct message on Twitter!  \",\"emailTime\":\"08:00 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Lauren Drury (Me)\",\"subject\":\"Dixa Horton (@dixahorton) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":false,\"favorite\":false,\"user\":\"Fabian Ros (Me)\",\"subject\":\"Jecno Mac (@jecnomac) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"},{\"is_selected\":false,\"is_unread\":true,\"favorite\":false,\"user\":\"Megan Allen (Me)\",\"subject\":\"Eb Begg (@ebbegg) has sent you a direct message on Twitter!  \",\"emailTime\":\"11:49 am\"}]}");

/***/ }),

/***/ "./src/app/views/application/email/email-compose-body/email-compose-body.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/application/email/email-compose-body/email-compose-body.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EmailComposeBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposeBodyComponent", function() { return EmailComposeBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmailComposeBodyComponent = class EmailComposeBodyComponent {
    constructor() {
        this.cardClass = '';
        this.cardTitle = 'card-title';
        this.isCloseModal = false;
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailComposeBodyComponent.prototype, "cardClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailComposeBodyComponent.prototype, "cardTitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailComposeBodyComponent.prototype, "isCloseModal", void 0);
EmailComposeBodyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-compose-body',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-compose-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-compose-body/email-compose-body.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], EmailComposeBodyComponent);



/***/ }),

/***/ "./src/app/views/application/email/email-compose/email-compose.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/application/email/email-compose/email-compose.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposeComponent", function() { return EmailComposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmailComposeComponent = class EmailComposeComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmailComposeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-compose',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-compose.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-compose/email-compose.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], EmailComposeComponent);



/***/ }),

/***/ "./src/app/views/application/email/email-item-details/email-item-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/application/email/email-item-details/email-item-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EmailItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailItemDetailsComponent", function() { return EmailItemDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmailItemDetailsComponent = class EmailItemDetailsComponent {
    constructor() {
        this.hideDetailsClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    hideDetailsClicked() {
        this.hideDetailsClick.emit('hide');
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EmailItemDetailsComponent.prototype, "hideDetailsClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailItemDetailsComponent.prototype, "isDetailsShow", void 0);
EmailItemDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-item-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-item-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-item-details/email-item-details.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], EmailItemDetailsComponent);



/***/ }),

/***/ "./src/app/views/application/email/email-item/email-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/application/email/email-item/email-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: EmailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailItemComponent", function() { return EmailItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmailItemComponent = class EmailItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailItemComponent.prototype, "item", void 0);
EmailItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/email-item/email-item.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], EmailItemComponent);



/***/ }),

/***/ "./src/app/views/application/email/email-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/application/email/email-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/application/email/index/index.component.ts");
/* harmony import */ var _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-compose/email-compose.component */ "./src/app/views/application/email/email-compose/email-compose.component.ts");





const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    },
    {
        path: 'compose',
        component: _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_4__["EmailComposeComponent"]
    }
];
let EmailRoutingModule = class EmailRoutingModule {
};
EmailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmailRoutingModule);



/***/ }),

/***/ "./src/app/views/application/email/email.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/application/email/email.module.ts ***!
  \*********************************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/views/application/email/email-routing.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/application/email/index/index.component.ts");
/* harmony import */ var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/sofbox/sofbox.module */ "./src/app/components/sofbox/sofbox.module.ts");
/* harmony import */ var _email_item_email_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-item/email-item.component */ "./src/app/views/application/email/email-item/email-item.component.ts");
/* harmony import */ var _email_item_details_email_item_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-item-details/email-item-details.component */ "./src/app/views/application/email/email-item-details/email-item-details.component.ts");
/* harmony import */ var _email_compose_body_email_compose_body_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-compose-body/email-compose-body.component */ "./src/app/views/application/email/email-compose-body/email-compose-body.component.ts");
/* harmony import */ var _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email-compose/email-compose.component */ "./src/app/views/application/email/email-compose/email-compose.component.ts");










let EmailModule = class EmailModule {
};
EmailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _email_item_email_item_component__WEBPACK_IMPORTED_MODULE_6__["EmailItemComponent"], _email_item_details_email_item_details_component__WEBPACK_IMPORTED_MODULE_7__["EmailItemDetailsComponent"], _email_compose_body_email_compose_body_component__WEBPACK_IMPORTED_MODULE_8__["EmailComposeBodyComponent"], _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_9__["EmailComposeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _email_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailRoutingModule"],
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"]
        ],
        exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _email_item_email_item_component__WEBPACK_IMPORTED_MODULE_6__["EmailItemComponent"], _email_item_details_email_item_details_component__WEBPACK_IMPORTED_MODULE_7__["EmailItemDetailsComponent"], _email_compose_body_email_compose_body_component__WEBPACK_IMPORTED_MODULE_8__["EmailComposeBodyComponent"], _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_9__["EmailComposeComponent"]]
    })
], EmailModule);



/***/ }),

/***/ "./src/app/views/application/email/index/index.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/application/email/index/index.component.ts ***!
  \******************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../fake-api/json/Email.json */ "./src/app/fake-api/json/Email.json");
var _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../fake-api/json/Email.json */ "./src/app/fake-api/json/Email.json", 1);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");




let IndexComponent = class IndexComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.tabNavItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.tabItems;
        this.inboxItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.inbox;
        this.starredItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.starred;
        this.snoozedItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.inbox;
        this.draftItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.starred;
        this.sentItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.inbox;
        this.trashItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.deleted;
        this.importantItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.starred;
        this.spamItems = _fake_api_json_Email_json__WEBPACK_IMPORTED_MODULE_2__.deleted;
        this.emailDetailsActive = false;
    }
    ngOnInit() {
    }
    showEmailDetails($event) {
        this.emailDetailsActive = $event !== 'hide';
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'compose-popup modal-sticky-bottom-right modal-sticky-lg', id: 'compose-email-popup' }));
    }
};
IndexComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/application/email/index/index.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], IndexComponent);



/***/ })

}]);
//# sourceMappingURL=views-application-email-email-module-es2015.js.map