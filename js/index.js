(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"));
	else
		root["RGUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _rguiBase = __webpack_require__(1);\n\nObject.keys(_rguiBase).forEach(function (key) {\n  if (key === \"default\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _rguiBase[key];\n    }\n  });\n});\n\nvar _index = __webpack_require__(7);\n\nObject.keys(_index).forEach(function (key) {\n  if (key === \"default\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _index[key];\n    }\n  });\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./.rgui-cache/js/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./.rgui-cache/js/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports._ = exports.Component = undefined;\n\nvar _component = __webpack_require__(2);\n\nvar _component2 = _interopRequireDefault(_component);\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Component = _component2.default;\nexports._ = _util2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regularjs = __webpack_require__(3);\n\nvar _regularjs2 = _interopRequireDefault(_regularjs);\n\nvar _filter = __webpack_require__(4);\n\nvar _filter2 = _interopRequireDefault(_filter);\n\nvar _directive = __webpack_require__(5);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Component\n * @extend Regular\n * @param {boolean=false}           options.data.readonly            => 是否只读\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Component = _regularjs2.default.extend({\n    /**\n     * @protected\n     */\n\n    config: function config() {\n        this.data = Object.assign({\n            readonly: false,\n            disabled: false,\n            visible: true,\n            'class': '',\n            console: typeof console === 'undefined' ? undefined : console\n        }, this.data);\n        this.supr();\n    }\n}).filter(_filter2.default).directive(_directive2.default);\n\nexports.default = Component;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/component/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/component/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"Regular\",\"amd\":\"Regular\",\"commonjs\":\"regularjs\",\"commonjs2\":\"regularjs\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22Regular%22,%22amd%22:%22Regular%22,%22commonjs%22:%22regularjs%22,%22commonjs2%22:%22regularjs%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar filter = {};\n\nfilter.dateFormat = function () {\n    function fix() {\n        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n\n        str = str + '';\n        return str.length <= 1 ? '0' + str : str;\n    }\n\n    var MAPS = {\n        yyyy: function yyyy(date) {\n            return date.getFullYear();\n        },\n        MM: function MM(date) {\n            return fix(date.getMonth() + 1);\n        },\n        dd: function dd(date) {\n            return fix(date.getDate());\n        },\n        HH: function HH(date) {\n            return fix(date.getHours());\n        },\n        mm: function mm(date) {\n            return fix(date.getMinutes());\n        },\n        ss: function ss(date) {\n            return fix(date.getSeconds());\n        }\n    };\n    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');\n\n    return function (value) {\n        var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd HH:mm' : arguments[1];\n\n        if (!value) return '';\n        value = new Date(value);\n\n        return format.replace(trunk, function (capture) {\n            return MAPS[capture] ? MAPS[capture](value) : '';\n        });\n    };\n}();\n\nfilter.format = function (value, type) {\n    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n    }\n\n    return filter[type + 'Format'].apply(filter, [value].concat(args));\n};\n\nexports.default = filter;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/filter/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/filter/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar directive = {};\n\nvar rClassGenerator = function rClassGenerator(rClass) {\n    directive[rClass] = function (elem, value) {\n        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') this.$watch(value, function (newValue, oldValue) {\n            _util2.default.dom[newValue ? 'addClass' : 'delClass'](elem, rClass);\n        });else if (!!value || value === '') _util2.default.dom.addClass(elem, rClass);\n    };\n};\n\nrClassGenerator('z-crt');\nrClassGenerator('z-sel');\nrClassGenerator('z-chk');\nrClassGenerator('z-dis');\nrClassGenerator('z-divider');\n\ndirective['r-show'] = function (elem, value) {\n    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type == 'expression') this.$watch(value, function (newValue, oldValue) {\n        if (!newValue == !oldValue) return;\n\n        if (typeof newValue === 'string') elem.style.display = newValue;else elem.style.display = newValue ? 'block' : '';\n    });else if (!!value || value === '') {\n        if (typeof value === 'string' && value !== '') elem.style.display = value;else elem.style.display = value ? 'block' : '';\n    }\n};\n\ndirective['r-autofocus'] = function (elem, value) {\n    setTimeout(function () {\n        return elem.focus();\n    }, 0);\n};\n\ndirective['r-attr'] = function (elem, value) {\n    var ATTRS = {\n        'INPUT': ['autocomplete', 'autofocus', 'checked', 'disabled', 'max', 'maxlength', 'min', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'step', 'type'],\n        'TEXTAREA': ['autofocus', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'wrap'],\n        'SELECT': ['autofocus', 'disabled', 'multiple', 'name', 'required']\n    };\n\n    this.$watch(value, function (newValue, oldValue) {\n        ATTRS[elem.tagName].forEach(function (attr) {\n            return newValue[attr] && _util2.default.dom.attr(elem, attr, newValue[attr]);\n        });\n    }, true);\n};\n\nexports.default = directive;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/directive/index.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/directive/index.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regularjs = __webpack_require__(3);\n\nvar _regularjs2 = _interopRequireDefault(_regularjs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar util = {};\n\nutil.noop = _regularjs2.default.util.noop;\nutil.dom = _regularjs2.default.dom;\n\nexports.default = util;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/util/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/util/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Overlay = undefined;\n\nvar _overlay = __webpack_require__(8);\n\nvar _overlay2 = _interopRequireDefault(_overlay);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Overlay = _overlay2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiBase = __webpack_require__(1);\n\nvar _index = __webpack_require__(9);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Overlay\n * @extend Component\n * @param {object}                  options.data                     =  绑定属性\n * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Overlay = _rguiBase.Component.extend({\n    name: 'overlay',\n    template: _index2.default,\n    /**\n     * @protected\n     */\n    config: function config() {\n        this.data = Object.assign({\n            open: false,\n            direction: 'bottomleft',\n            animation: 'on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;'\n        }, this.data);\n        this.supr();\n    },\n\n    /**\n     * @method toggle(open) 展开/收起\n     * @public\n     * @param  {boolean} open 展开/收起状态。如果无此参数，则在两种状态之间切换。\n     * @return {void}\n     */\n    toggle: function toggle(open) {\n        if (this.data.disabled) return;\n\n        if (open === undefined) open = !this.data.open;\n        this.data.open = open;\n\n        // 根据状态在Overlay.opens列表中添加/删除管理项\n        var index = Overlay.opens.indexOf(this);\n        if (open && index < 0) Overlay.opens.push(this);else if (!open && index >= 0) Overlay.opens.splice(index, 1);\n\n        /**\n         * @event toggle  展开/收起时触发\n         * @property {object} sender 事件发送对象\n         * @property {object} open 展开/收起状态\n         */\n        this.$emit('toggle', {\n            sender: this,\n            open: open\n        });\n    },\n    destroy: function destroy() {\n        var index = Overlay.opens.indexOf(this);\n        index >= 0 && Overlay.opens.splice(index, 1);\n        this.supr();\n    }\n});\n\n// 处理点击toggle之外的地方后的收起事件。\nOverlay.opens = [];\n_rguiBase._.dom.on(document, 'click', function (e) {\n    Overlay.opens.forEach(function (overlay, index) {\n        // 这个地方不能用stopPropagation来处理，因为展开一个overlay的同时要收起其他overlay\n        var element = overlay.$refs.element;\n        var element2 = e.target;\n        while (element2) {\n            if (element === element2) return;\n            element2 = element2.parentElement;\n        }\n        overlay.toggle(false);\n        overlay.$update();\n    });\n});\n\nOverlay.Head = _rguiBase.Component.extend({\n    name: 'overlay.head',\n    template: '<div class=\"overlay_hd\" on-click={this.$outer.toggle()}>{#inc this.$body}</div>'\n});\n\nOverlay.Body = _rguiBase.Component.extend({ //  r-animation={@(this.$outer.data.animation)}\n    name: 'overlay.body',\n    template: '<div class=\"overlay_bd\" r-show={this.$outer.data.open}>{#inc this.$body}</div>'\n});\n\nexports.default = Overlay;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./overlay/index.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./overlay/index.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":{\"type\":\"expression\",\"body\":\"['u-overlay u-overlay-',c._sg_('direction', d, e),' ',c._sg_('class', d, e)].join('')\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', d, e))\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"ref\",\"value\":\"element\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}},{\"type\":\"text\",\"text\":\"\\n\"}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./overlay/index.rgl\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./overlay/index.rgl?");

/***/ }
/******/ ])
});
;