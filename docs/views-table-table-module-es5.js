function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-table-table-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/data-table/data-table.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/data-table/data-table.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTableDataTableDataTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Bootstrap Datatables</h4>\n      </div>\n      <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and\n        <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>\n      <div class=\"table-responsive\">\n        <table id=\"datatable\" class=\"table table-striped table-bordered\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Position</th>\n              <th>Office</th>\n              <th>Age</th>\n              <th>Start date</th>\n              <th>Salary</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Tiger Nixon</td>\n              <td>System Architect</td>\n              <td>Edinburgh</td>\n              <td>61</td>\n              <td>2011/04/25</td>\n              <td>$320,800</td>\n            </tr>\n            <tr>\n              <td>Garrett Winters</td>\n              <td>Accountant</td>\n              <td>Tokyo</td>\n              <td>63</td>\n              <td>2011/07/25</td>\n              <td>$170,750</td>\n            </tr>\n            <tr>\n              <td>Ashton Cox</td>\n              <td>Junior Technical Author</td>\n              <td>San Francisco</td>\n              <td>66</td>\n              <td>2009/01/12</td>\n              <td>$86,000</td>\n            </tr>\n            <tr>\n              <td>Cedric Kelly</td>\n              <td>Senior Javascript Developer</td>\n              <td>Edinburgh</td>\n              <td>22</td>\n              <td>2012/03/29</td>\n              <td>$433,060</td>\n            </tr>\n            <tr>\n              <td>Airi Satou</td>\n              <td>Accountant</td>\n              <td>Tokyo</td>\n              <td>33</td>\n              <td>2008/11/28</td>\n              <td>$162,700</td>\n            </tr>\n            <tr>\n              <td>Brielle Williamson</td>\n              <td>Integration Specialist</td>\n              <td>New York</td>\n              <td>61</td>\n              <td>2012/12/02</td>\n              <td>$372,000</td>\n            </tr>\n            <tr>\n              <td>Herrod Chandler</td>\n              <td>Sales Assistant</td>\n              <td>San Francisco</td>\n              <td>59</td>\n              <td>2012/08/06</td>\n              <td>$137,500</td>\n            </tr>\n            <tr>\n              <td>Rhona Davidson</td>\n              <td>Integration Specialist</td>\n              <td>Tokyo</td>\n              <td>55</td>\n              <td>2010/10/14</td>\n              <td>$327,900</td>\n            </tr>\n            <tr>\n              <td>Colleen Hurst</td>\n              <td>Javascript Developer</td>\n              <td>San Francisco</td>\n              <td>39</td>\n              <td>2009/09/15</td>\n              <td>$205,500</td>\n            </tr>\n            <tr>\n              <td>Sonya Frost</td>\n              <td>Software Engineer</td>\n              <td>Edinburgh</td>\n              <td>23</td>\n              <td>2008/12/13</td>\n              <td>$103,600</td>\n            </tr>\n            <tr>\n              <td>Jena Gaines</td>\n              <td>Office Manager</td>\n              <td>London</td>\n              <td>30</td>\n              <td>2008/12/19</td>\n              <td>$90,560</td>\n            </tr>\n            <tr>\n              <td>Quinn Flynn</td>\n              <td>Support Lead</td>\n              <td>Edinburgh</td>\n              <td>22</td>\n              <td>2013/03/03</td>\n              <td>$342,000</td>\n            </tr>\n            <tr>\n              <td>Charde Marshall</td>\n              <td>Regional Director</td>\n              <td>San Francisco</td>\n              <td>36</td>\n              <td>2008/10/16</td>\n              <td>$470,600</td>\n            </tr>\n            <tr>\n              <td>Haley Kennedy</td>\n              <td>Senior Marketing Designer</td>\n              <td>London</td>\n              <td>43</td>\n              <td>2012/12/18</td>\n              <td>$313,500</td>\n            </tr>\n            <tr>\n              <td>Tatyana Fitzpatrick</td>\n              <td>Regional Director</td>\n              <td>London</td>\n              <td>19</td>\n              <td>2010/03/17</td>\n              <td>$385,750</td>\n            </tr>\n            <tr>\n              <td>Michael Silva</td>\n              <td>Marketing Designer</td>\n              <td>London</td>\n              <td>66</td>\n              <td>2012/11/27</td>\n              <td>$198,500</td>\n            </tr>\n            <tr>\n              <td>Paul Byrd</td>\n              <td>Chief Financial Officer (CFO)</td>\n              <td>New York</td>\n              <td>64</td>\n              <td>2010/06/09</td>\n              <td>$725,000</td>\n            </tr>\n            <tr>\n              <td>Gloria Little</td>\n              <td>Systems Administrator</td>\n              <td>New York</td>\n              <td>59</td>\n              <td>2009/04/10</td>\n              <td>$237,500</td>\n            </tr>\n            <tr>\n              <td>Bradley Greer</td>\n              <td>Software Engineer</td>\n              <td>London</td>\n              <td>41</td>\n              <td>2012/10/13</td>\n              <td>$132,000</td>\n            </tr>\n            <tr>\n              <td>Dai Rios</td>\n              <td>Personnel Lead</td>\n              <td>Edinburgh</td>\n              <td>35</td>\n              <td>2012/09/26</td>\n              <td>$217,500</td>\n            </tr>\n            <tr>\n              <td>Jenette Caldwell</td>\n              <td>Development Lead</td>\n              <td>New York</td>\n              <td>30</td>\n              <td>2011/09/03</td>\n              <td>$345,000</td>\n            </tr>\n            <tr>\n              <td>Yuri Berry</td>\n              <td>Chief Marketing Officer (CMO)</td>\n              <td>New York</td>\n              <td>40</td>\n              <td>2009/06/25</td>\n              <td>$675,000</td>\n            </tr>\n            <tr>\n              <td>Caesar Vance</td>\n              <td>Pre-Sales Support</td>\n              <td>New York</td>\n              <td>21</td>\n              <td>2011/12/12</td>\n              <td>$106,450</td>\n            </tr>\n            <tr>\n              <td>Doris Wilder</td>\n              <td>Sales Assistant</td>\n              <td>Sydney</td>\n              <td>23</td>\n              <td>2010/09/20</td>\n              <td>$85,600</td>\n            </tr>\n            <tr>\n              <td>Angelica Ramos</td>\n              <td>Chief Executive Officer (CEO)</td>\n              <td>London</td>\n              <td>47</td>\n              <td>2009/10/09</td>\n              <td>$1,200,000</td>\n            </tr>\n            <tr>\n              <td>Gavin Joyce</td>\n              <td>Developer</td>\n              <td>Edinburgh</td>\n              <td>42</td>\n              <td>2010/12/22</td>\n              <td>$92,575</td>\n            </tr>\n            <tr>\n              <td>Jennifer Chang</td>\n              <td>Regional Director</td>\n              <td>Singapore</td>\n              <td>28</td>\n              <td>2010/11/14</td>\n              <td>$357,650</td>\n            </tr>\n            <tr>\n              <td>Brenden Wagner</td>\n              <td>Software Engineer</td>\n              <td>San Francisco</td>\n              <td>28</td>\n              <td>2011/06/07</td>\n              <td>$206,850</td>\n            </tr>\n            <tr>\n              <td>Fiona Green</td>\n              <td>Chief Operating Officer (COO)</td>\n              <td>San Francisco</td>\n              <td>48</td>\n              <td>2010/03/11</td>\n              <td>$850,000</td>\n            </tr>\n            <tr>\n              <td>Shou Itou</td>\n              <td>Regional Marketing</td>\n              <td>Tokyo</td>\n              <td>20</td>\n              <td>2011/08/14</td>\n              <td>$163,000</td>\n            </tr>\n            <tr>\n              <td>Michelle House</td>\n              <td>Integration Specialist</td>\n              <td>Sydney</td>\n              <td>37</td>\n              <td>2011/06/02</td>\n              <td>$95,400</td>\n            </tr>\n            <tr>\n              <td>Suki Burks</td>\n              <td>Developer</td>\n              <td>London</td>\n              <td>53</td>\n              <td>2009/10/22</td>\n              <td>$114,500</td>\n            </tr>\n            <tr>\n              <td>Prescott Bartlett</td>\n              <td>Technical Author</td>\n              <td>London</td>\n              <td>27</td>\n              <td>2011/05/07</td>\n              <td>$145,000</td>\n            </tr>\n            <tr>\n              <td>Gavin Cortez</td>\n              <td>Team Leader</td>\n              <td>San Francisco</td>\n              <td>22</td>\n              <td>2008/10/26</td>\n              <td>$235,500</td>\n            </tr>\n            <tr>\n              <td>Martena Mccray</td>\n              <td>Post-Sales support</td>\n              <td>Edinburgh</td>\n              <td>46</td>\n              <td>2011/03/09</td>\n              <td>$324,050</td>\n            </tr>\n            <tr>\n              <td>Unity Butler</td>\n              <td>Marketing Designer</td>\n              <td>San Francisco</td>\n              <td>47</td>\n              <td>2009/12/09</td>\n              <td>$85,675</td>\n            </tr>\n            <tr>\n              <td>Howard Hatfield</td>\n              <td>Office Manager</td>\n              <td>San Francisco</td>\n              <td>51</td>\n              <td>2008/12/16</td>\n              <td>$164,500</td>\n            </tr>\n            <tr>\n              <td>Hope Fuentes</td>\n              <td>Secretary</td>\n              <td>San Francisco</td>\n              <td>41</td>\n              <td>2010/02/12</td>\n              <td>$109,850</td>\n            </tr>\n            <tr>\n              <td>Vivian Harrell</td>\n              <td>Financial Controller</td>\n              <td>San Francisco</td>\n              <td>62</td>\n              <td>2009/02/14</td>\n              <td>$452,500</td>\n            </tr>\n            <tr>\n              <td>Timothy Mooney</td>\n              <td>Office Manager</td>\n              <td>London</td>\n              <td>37</td>\n              <td>2008/12/11</td>\n              <td>$136,200</td>\n            </tr>\n            <tr>\n              <td>Jackson Bradshaw</td>\n              <td>Director</td>\n              <td>New York</td>\n              <td>65</td>\n              <td>2008/09/26</td>\n              <td>$645,750</td>\n            </tr>\n            <tr>\n              <td>Olivia Liang</td>\n              <td>Support Engineer</td>\n              <td>Singapore</td>\n              <td>64</td>\n              <td>2011/02/03</td>\n              <td>$234,500</td>\n            </tr>\n            <tr>\n              <td>Bruno Nash</td>\n              <td>Software Engineer</td>\n              <td>London</td>\n              <td>38</td>\n              <td>2011/05/03</td>\n              <td>$163,500</td>\n            </tr>\n            <tr>\n              <td>Sakura Yamamoto</td>\n              <td>Support Engineer</td>\n              <td>Tokyo</td>\n              <td>37</td>\n              <td>2009/08/19</td>\n              <td>$139,575</td>\n            </tr>\n            <tr>\n              <td>Thor Walton</td>\n              <td>Developer</td>\n              <td>New York</td>\n              <td>61</td>\n              <td>2013/08/11</td>\n              <td>$98,540</td>\n            </tr>\n            <tr>\n              <td>Finn Camacho</td>\n              <td>Support Engineer</td>\n              <td>San Francisco</td>\n              <td>47</td>\n              <td>2009/07/07</td>\n              <td>$87,500</td>\n            </tr>\n            <tr>\n              <td>Serge Baldwin</td>\n              <td>Data Coordinator</td>\n              <td>Singapore</td>\n              <td>64</td>\n              <td>2012/04/09</td>\n              <td>$138,575</td>\n            </tr>\n            <tr>\n              <td>Zenaida Frank</td>\n              <td>Software Engineer</td>\n              <td>New York</td>\n              <td>63</td>\n              <td>2010/01/04</td>\n              <td>$125,250</td>\n            </tr>\n            <tr>\n              <td>Zorita Serrano</td>\n              <td>Software Engineer</td>\n              <td>San Francisco</td>\n              <td>56</td>\n              <td>2012/06/01</td>\n              <td>$115,000</td>\n            </tr>\n            <tr>\n              <td>Jennifer Acosta</td>\n              <td>Junior Javascript Developer</td>\n              <td>Edinburgh</td>\n              <td>43</td>\n              <td>2013/02/01</td>\n              <td>$75,650</td>\n            </tr>\n            <tr>\n              <td>Cara Stevens</td>\n              <td>Sales Assistant</td>\n              <td>New York</td>\n              <td>46</td>\n              <td>2011/12/06</td>\n              <td>$145,600</td>\n            </tr>\n            <tr>\n              <td>Hermione Butler</td>\n              <td>Regional Director</td>\n              <td>London</td>\n              <td>47</td>\n              <td>2011/03/21</td>\n              <td>$356,250</td>\n            </tr>\n            <tr>\n              <td>Lael Greer</td>\n              <td>Systems Administrator</td>\n              <td>London</td>\n              <td>21</td>\n              <td>2009/02/27</td>\n              <td>$103,500</td>\n            </tr>\n            <tr>\n              <td>Jonas Alexander</td>\n              <td>Developer</td>\n              <td>San Francisco</td>\n              <td>30</td>\n              <td>2010/07/14</td>\n              <td>$86,500</td>\n            </tr>\n            <tr>\n              <td>Shad Decker</td>\n              <td>Regional Director</td>\n              <td>Edinburgh</td>\n              <td>51</td>\n              <td>2008/11/13</td>\n              <td>$183,000</td>\n            </tr>\n            <tr>\n              <td>Michael Bruce</td>\n              <td>Javascript Developer</td>\n              <td>Singapore</td>\n              <td>29</td>\n              <td>2011/06/27</td>\n              <td>$183,000</td>\n            </tr>\n            <tr>\n              <td>Donna Snider</td>\n              <td>Customer Support</td>\n              <td>New York</td>\n              <td>27</td>\n              <td>2011/01/25</td>\n              <td>$112,000</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th>Name</th>\n              <th>Position</th>\n              <th>Office</th>\n              <th>Age</th>\n              <th>Start date</th>\n              <th>Salary</th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/table-basic/table-basic.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/table-basic/table-basic.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTableTableBasicTableBasicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Tables</h4>\n      </div>\n      <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>\n      <table class=\"table\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Table Head Options</h4>\n      </div>\n      <p>Similar to tables and dark tables, use the modifier classes <code class=\"highlighter-rouge\">.thead-light</code> or <code class=\"highlighter-rouge\">.thead-dark</code> to make <code class=\"highlighter-rouge\">&lt;thead&gt;</code>s appear light or dark gray.</p>\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n      <table class=\"table\">\n        <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Borderless table</h4>\n      </div>\n      <p>Add <code class=\"highlighter-rouge\">.table-borderless</code> for a table without borders.</p>\n      <table class=\"table table-borderless\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n      <p><code class=\"highlighter-rouge\">.table-borderless</code> can also be used on dark tables.</p>\n      <table class=\"table table-borderless table-dark\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Small table</h4>\n      </div>\n      <p>Add <code class=\"highlighter-rouge\">.table-sm</code> to make tables more compact by cutting cell padding in half.</p>\n      <table class=\"table table-sm\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n      <table class=\"table table-sm table-dark\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Captions</h4>\n      </div>\n      <p>A <code class=\"highlighter-rouge\">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>\n      <table class=\"table\">\n        <caption>List of users</caption>\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12 col-lg-6\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Table Dark</h4>\n      </div>\n      <p>You can also invert the colors—with light text on dark backgrounds—with <code class=\"highlighter-rouge\">.table-dark</code>.</p>\n      <table class=\"table table-dark\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Striped Rows</h4>\n      </div>\n      <p>Use <code class=\"highlighter-rouge\">.table-striped</code> to add zebra-striping to any table row within the <code class=\"highlighter-rouge\">&lt;tbody&gt;</code>.</p>\n      <table class=\"table table-striped\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n      <table class=\"table table-striped table-dark\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Hoverable rows</h4>\n      </div>\n      <p>Add <code class=\"highlighter-rouge\">.table-hover</code> to enable a hover state on table rows within a <code class=\"highlighter-rouge\">&lt;tbody&gt;</code>.</p>\n      <table class=\"table table-hover\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n      <table class=\"table table-hover table-dark\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">First</th>\n              <th scope=\"col\">Last</th>\n              <th scope=\"col\">Handle</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Contextual classes</h4>\n      </div>\n      <p>Use contextual classes to color table rows or individual cells.</p>\n      <table class=\"table\">\n        <thead>\n            <tr>\n              <th scope=\"col\">Class</th>\n              <th scope=\"col\">Heading</th>\n              <th scope=\"col\">Heading</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"table-active\">\n              <th scope=\"row\">Active</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Default</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"table-primary\">\n              <th scope=\"row\">Primary</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"table-secondary\">\n              <th scope=\"row\">Secondary</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"table-success\">\n              <th scope=\"row\">Success</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"table-danger\">\n              <th scope=\"row\">Danger</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"table-warning\">\n              <th scope=\"row\">Warning</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"table-info\">\n              <th scope=\"row\">Info</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n        </tbody>\n      </table>\n      <p>Regular table background variants are not available with the dark table, however, you may use <a href=\"/docs/4.3/utilities/colors/\">text or background utilities</a> to achieve similar styles.</p>\n      <table class=\"table table-dark\">\n        <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Heading</th>\n              <th scope=\"col\">Heading</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"bg-primary\">\n              <th scope=\"row\">1</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"bg-success\">\n              <th scope=\"row\">3</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">4</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"bg-info\">\n              <th scope=\"row\">5</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">6</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"bg-warning\">\n              <th scope=\"row\">7</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">8</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n            <tr class=\"bg-danger\">\n              <th scope=\"row\">9</th>\n              <td>Cell</td>\n              <td>Cell</td>\n            </tr>\n        </tbody>\n      </table>\n    </app-iq-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Responsive tables</h4>\n      </div>\n      <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code class=\"highlighter-rouge\">.table</code> with <code class=\"highlighter-rouge\">.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code class=\"highlighter-rouge\">.table-responsive-sm|-md|-lg|-xl</code>.</p>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n              <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n                  <th scope=\"col\">Heading</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                  <th scope=\"row\">1</th>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n              </tr>\n              <tr>\n                  <th scope=\"row\">2</th>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n              </tr>\n              <tr>\n                  <th scope=\"row\">3</th>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n                  <td>Cell</td>\n              </tr>\n            </tbody>\n        </table>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/table-editable/table-editable.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/table-editable/table-editable.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTableTableEditableTableEditableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Editable Table</h4>\n      </div>\n      <div id=\"table\" class=\"table-editable\">\n        <span class=\"table-add float-right mb-3 mr-2\">\n           <button class=\"btn btn-success\"><i\n              class=\"fa fa-plus fa-2x pr-2\" aria-hidden=\"true\"><span class=\"pl-3\">Add New</span></i></button></span>\n        <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n          <thead>\n            <tr>\n              <th class=\"text-center\">Name</th>\n              <th class=\"text-center\">Age</th>\n              <th class=\"text-center\">Company Name</th>\n              <th class=\"text-center\">Country</th>\n              <th class=\"text-center\">City</th>\n              <th class=\"text-center\">Sort</th>\n              <th class=\"text-center\">Remove</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Gio Metric</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">25</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Deepends</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Spain</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Madrid</td>\n              <td class=\"pt-3-half\">\n                <span class=\"table-up\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-up\" aria-hidden=\"true\"></i></a></span>\n                <span class=\"table-down\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-down\" aria-hidden=\"true\"></i></a></span>\n              </td>\n              <td>\n                <span class=\"table-remove\"><button type=\"button\"\n                    class=\"btn btn-danger btn-rounded btn-sm my-0\">Remove</button></span>\n              </td>\n            </tr>\n            <!-- This is our clonable table line -->\n            <tr>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Manny Petty</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">45</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Insectus</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">France</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">San Francisco</td>\n              <td class=\"pt-3-half\">\n                <span class=\"table-up\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-up\" aria-hidden=\"true\"></i></a></span>\n                <span class=\"table-down\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-down\" aria-hidden=\"true\"></i></a></span>\n              </td>\n              <td>\n                <span class=\"table-remove\"><button type=\"button\"\n                    class=\"btn btn-danger btn-rounded btn-sm my-0\">Remove</button></span>\n              </td>\n            </tr>\n            <!-- This is our clonable table line -->\n            <tr>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Lucy Tania</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">26</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Isotronic</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Germany</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Frankfurt am Main</td>\n              <td class=\"pt-3-half\">\n                <span class=\"table-up\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-up\" aria-hidden=\"true\"></i></a></span>\n                <span class=\"table-down\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-down\" aria-hidden=\"true\"></i></a></span>\n              </td>\n              <td>\n                <span class=\"table-remove\"><button type=\"button\"\n                    class=\"btn btn-danger btn-rounded btn-sm my-0\">Remove</button></span>\n              </td>\n            </tr>\n            <!-- This is our clonable table line -->\n            <tr class=\"hide\">\n              <td class=\"pt-3-half\" contenteditable=\"true\">Anna Mull</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">35</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">Portica</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">USA</td>\n              <td class=\"pt-3-half\" contenteditable=\"true\">London</td>\n              <td class=\"pt-3-half\">\n                <span class=\"table-up\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-up\" aria-hidden=\"true\"></i></a></span>\n                <span class=\"table-down\"><a href=\"#!\" class=\"indigo-text\"><i class=\"fa fa-long-arrow-down\" aria-hidden=\"true\"></i></a></span>\n              </td>\n              <td>\n                <span class=\"table-remove\"><button type=\"button\"\n                    class=\"btn btn-danger btn-rounded btn-sm my-0\">Remove</button></span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/views/table/data-table/data-table.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/views/table/data-table/data-table.component.ts ***!
    \****************************************************************/

  /*! exports provided: DataTableComponent */

  /***/
  function srcAppViewsTableDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableComponent", function () {
      return DataTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DataTableComponent = /*#__PURE__*/function () {
      function DataTableComponent() {
        _classCallCheck(this, DataTableComponent);
      }

      _createClass(DataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DataTableComponent;
    }();

    DataTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data-table',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./data-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/data-table/data-table.component.html"))["default"]
    })], DataTableComponent);
    /***/
  },

  /***/
  "./src/app/views/table/table-basic/table-basic.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/views/table/table-basic/table-basic.component.ts ***!
    \******************************************************************/

  /*! exports provided: TableBasicComponent */

  /***/
  function srcAppViewsTableTableBasicTableBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableBasicComponent", function () {
      return TableBasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TableBasicComponent = /*#__PURE__*/function () {
      function TableBasicComponent() {
        _classCallCheck(this, TableBasicComponent);
      }

      _createClass(TableBasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TableBasicComponent;
    }();

    TableBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-basic',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./table-basic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/table-basic/table-basic.component.html"))["default"]
    })], TableBasicComponent);
    /***/
  },

  /***/
  "./src/app/views/table/table-editable/table-editable.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/views/table/table-editable/table-editable.component.ts ***!
    \************************************************************************/

  /*! exports provided: TableEditableComponent */

  /***/
  function srcAppViewsTableTableEditableTableEditableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableEditableComponent", function () {
      return TableEditableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TableEditableComponent = /*#__PURE__*/function () {
      function TableEditableComponent() {
        _classCallCheck(this, TableEditableComponent);
      }

      _createClass(TableEditableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TableEditableComponent;
    }();

    TableEditableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-editable',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./table-editable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/table/table-editable/table-editable.component.html"))["default"]
    })], TableEditableComponent);
    /***/
  },

  /***/
  "./src/app/views/table/table-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/table/table-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TableRoutingModule */

  /***/
  function srcAppViewsTableTableRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function () {
      return TableRoutingModule;
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


    var _table_basic_table_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table-basic/table-basic.component */
    "./src/app/views/table/table-basic/table-basic.component.ts");
    /* harmony import */


    var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data-table/data-table.component */
    "./src/app/views/table/data-table/data-table.component.ts");
    /* harmony import */


    var _table_editable_table_editable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./table-editable/table-editable.component */
    "./src/app/views/table/table-editable/table-editable.component.ts");

    var routes = [{
      path: 'table-basic',
      component: _table_basic_table_basic_component__WEBPACK_IMPORTED_MODULE_3__["TableBasicComponent"]
    }, {
      path: 'data-table',
      component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"]
    }, {
      path: 'table-editable',
      component: _table_editable_table_editable_component__WEBPACK_IMPORTED_MODULE_5__["TableEditableComponent"]
    }];

    var TableRoutingModule = function TableRoutingModule() {
      _classCallCheck(this, TableRoutingModule);
    };

    TableRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TableRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/table/table.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/views/table/table.module.ts ***!
    \*********************************************/

  /*! exports provided: TableModule */

  /***/
  function srcAppViewsTableTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableModule", function () {
      return TableModule;
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


    var _table_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./table-routing.module */
    "./src/app/views/table/table-routing.module.ts");
    /* harmony import */


    var _table_basic_table_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./table-basic/table-basic.component */
    "./src/app/views/table/table-basic/table-basic.component.ts");
    /* harmony import */


    var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data-table/data-table.component */
    "./src/app/views/table/data-table/data-table.component.ts");
    /* harmony import */


    var _table_editable_table_editable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./table-editable/table-editable.component */
    "./src/app/views/table/table-editable/table-editable.component.ts");

    var TableModule = function TableModule() {
      _classCallCheck(this, TableModule);
    };

    TableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_table_basic_table_basic_component__WEBPACK_IMPORTED_MODULE_5__["TableBasicComponent"], _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"], _table_editable_table_editable_component__WEBPACK_IMPORTED_MODULE_7__["TableEditableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _table_routing_module__WEBPACK_IMPORTED_MODULE_4__["TableRoutingModule"], _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]],
      exports: [_table_basic_table_basic_component__WEBPACK_IMPORTED_MODULE_5__["TableBasicComponent"], _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"], _table_editable_table_editable_component__WEBPACK_IMPORTED_MODULE_7__["TableEditableComponent"]]
    })], TableModule);
    /***/
  }
}]);
//# sourceMappingURL=views-table-table-module-es5.js.map