/*! jiaxinyingwebpack搭建，可以在github中下载 */
webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

var _black = __webpack_require__(5);

var _black2 = _interopRequireDefault(_black);

var _jiaxinying = __webpack_require__(6);

var _jiaxinying2 = _interopRequireDefault(_jiaxinying);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

{
    var JiaXinying = "hello jiaxinying";
    document.getElementById('test').innerHTML = JiaXinying;
}
(0, _jiaxinying2.default)();
$('#test').html('hello 测试打包第三方类库');
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function jiaxinying() {
    console.log('测试模块化');
}
module.exports = jiaxinying;

/***/ })
],[3]);
//# sourceMappingURL=entry.js.map