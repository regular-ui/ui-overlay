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

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _rguiUiBase = __webpack_require__(1);\n\nObject.keys(_rguiUiBase).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _rguiUiBase[key];\n    }\n  });\n});\n\nvar _index = __webpack_require__(7);\n\nObject.keys(_index).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _index[key];\n    }\n  });\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./.rgui-cache/js/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./.rgui-cache/js/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports._ = exports.Component = undefined;\n\nvar _component = __webpack_require__(2);\n\nvar _component2 = _interopRequireDefault(_component);\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Component = _component2.default;\nexports._ = _util2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regularjs = __webpack_require__(3);\n\nvar _regularjs2 = _interopRequireDefault(_regularjs);\n\nvar _filter = __webpack_require__(4);\n\nvar _filter2 = _interopRequireDefault(_filter);\n\nvar _directive = __webpack_require__(5);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Component\n * @extend Regular\n * @param {boolean=false}           options.data.readonly            => 是否只读\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Component = _regularjs2.default.extend({\n    /**\n     * @protected\n     */\n    config: function config() {\n        this.data = Object.assign({\n            readonly: false,\n            disabled: false,\n            visible: true,\n            'class': ''\n        }, this.data);\n        this.supr();\n    }\n}).filter(_filter2.default).directive(_directive2.default);\n\nexports.default = Component;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/component/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/component/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"Regular\",\"amd\":\"Regular\",\"commonjs\":\"regularjs\",\"commonjs2\":\"regularjs\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22Regular%22,%22amd%22:%22Regular%22,%22commonjs%22:%22regularjs%22,%22commonjs2%22:%22regularjs%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar filter = {};\n\nfilter.dateFormat = function () {\n    var fix = function fix() {\n        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n\n        str = str + '';\n        return str.length <= 1 ? '0' + str : str;\n    };\n\n    var MAPS = {\n        yyyy: function yyyy(date) {\n            return date.getFullYear();\n        },\n        MM: function MM(date) {\n            return fix(date.getMonth() + 1);\n        },\n        dd: function dd(date) {\n            return fix(date.getDate());\n        },\n        HH: function HH(date) {\n            return fix(date.getHours());\n        },\n        mm: function mm(date) {\n            return fix(date.getMinutes());\n        },\n        ss: function ss(date) {\n            return fix(date.getSeconds());\n        }\n    };\n\n    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');\n\n    return function (value) {\n        var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd HH:mm' : arguments[1];\n\n        if (!value) return '';\n        value = new Date(value);\n\n        return format.replace(trunk, function (capture) {\n            return MAPS[capture] ? MAPS[capture](value) : '';\n        });\n    };\n}();\n\nfilter.format = function (value, type) {\n    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n    }\n\n    return filter[type + 'Format'].apply(filter, [value].concat(args));\n};\n\nexports.default = filter;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/filter/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/filter/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar directive = {};\n\ndirective['z-crt'] = _util2.default.createBoolClassDirective('z-crt');\ndirective['z-sel'] = _util2.default.createBoolClassDirective('z-sel');\ndirective['z-chk'] = _util2.default.createBoolClassDirective('z-chk');\ndirective['z-dis'] = _util2.default.createBoolClassDirective('z-dis');\n\ndirective['r-show'] = _util2.default.createBoolDirective(function (elem, value) {\n    elem.style.display = value ? 'block' : '';\n});\n\ndirective['r-autofocus'] = _util2.default.createBoolDirective(function (elem, value) {\n    value && setTimeout(function () {\n        return elem.focus();\n    }, 0);\n});\n\nexports.default = directive;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/directive/index.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/directive/index.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _regularjs = __webpack_require__(3);\n\nvar _ = {};\n\n_.createBoolDirective = function (func) {\n    return function (elem, value) {\n        var _this = this;\n\n        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') {\n            this.$watch(value, function (newValue, oldValue) {\n                if (!newValue === !oldValue) return;\n                func.call(_this, elem, newValue);\n            });\n        } else if (!!value || value === '') func.call(this, elem, true);\n    };\n};\n\n_.createBoolClassDirective = function (boolClass) {\n    return _.createBoolDirective(function (elem, value) {\n        _regularjs.dom[value ? 'addClass' : 'delClass'](elem, boolClass);\n    });\n};\n\nexports.default = _;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/util/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/util/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Overlay = undefined;\n\nvar _overlay = __webpack_require__(8);\n\nvar _overlay2 = _interopRequireDefault(_overlay);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Overlay = _overlay2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiUiBase = __webpack_require__(1);\n\nvar _index = __webpack_require__(9);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _head = __webpack_require__(10);\n\nvar _head2 = _interopRequireDefault(_head);\n\nvar _body = __webpack_require__(11);\n\nvar _body2 = _interopRequireDefault(_body);\n\nvar _regularjs = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Overlay\n * @extend Component\n * @param {object}                  options.data                     =  绑定属性\n * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态\n * @param {string='click'}          options.data.trigger             => 触发方式。支持3种方式：`click`, `dblclick`, `hover`，默认为`click`。\n * @param {string='bottom-left'}    options.data.direction           => 展开方向。有12种方向：`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left-top`, `left-center`, `left-bottom`, `right-top`, `right-center`, `right-bottom`，默认为`bottom-left`。\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Overlay = _rguiUiBase.Component.extend({\n    name: 'overlay',\n    template: _index2.default,\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            open: false,\n            trigger: 'click',\n            direction: 'bottom-left'\n        }, this.data);\n        this.supr();\n        this.watch();\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    watch: function watch() {\n        var _this = this;\n\n        this.$watch('open', function (newValue, oldValue) {\n            // 根据状态在Overlay.opens列表中添加/删除管理项\n            var index = Overlay.opens.indexOf(_this);\n            if (newValue && index < 0) Overlay.opens.push(_this);else if (!newValue && index >= 0) Overlay.opens.splice(index, 1);\n\n            /**\n             * @event change 展开/收起状态改变时触发\n             * @property {object} sender 事件发送对象\n             * @property {boolean} open 改变后的状态\n             * @property {string} trigger 触发方式\n             * @property {string} direction 展开方向\n             */\n            _this.$emit('change', {\n                sender: _this,\n                open: newValue,\n                trigger: _this.data.trigger,\n                direction: _this.data.direction\n            });\n        });\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    destroy: function destroy() {\n        var index = Overlay.opens.indexOf(this);\n        index >= 0 && Overlay.opens.splice(index, 1);\n        this.supr();\n    },\n\n    /**\n     * @method toggle(open) 展开/收起\n     * @public\n     * @param  {boolean} open 展开/收起状态。如果无此参数，则在两种状态之间切换。\n     * @return {void}\n     */\n    toggle: function toggle(open) {\n        if (this.data.disabled) return;\n\n        if (open === undefined) open = !this.data.open;\n        this.data.open = open;\n\n        /**\n         * @event toggle 展开/收起时触发\n         * @property {object} sender 事件发送对象\n         * @property {boolean} open 展开/收起状态\n         * @property {string} trigger 触发方式\n         * @property {string} direction 展开方向\n         */\n        this.$emit('toggle', {\n            sender: this,\n            open: open,\n            trigger: this.data.trigger,\n            direction: this.data.direction\n        });\n    }\n});\n\n// 处理点击toggle之外的地方后的收起事件。\nOverlay.opens = [];\n_regularjs.dom.on(document, 'click', function (e) {\n    Overlay.opens.forEach(function (overlay, index) {\n        // 这个地方不能用stopPropagation来处理，因为展开一个overlay的同时要收起其他overlay\n        var element = overlay.$refs.element;\n        var element2 = e.target;\n        while (element2) {\n            if (element === element2) return;\n            element2 = element2.parentElement;\n        }\n        overlay.toggle(false);\n        overlay.$update();\n    });\n});\n\nOverlay.Head = _rguiUiBase.Component.extend({\n    name: 'overlay.head',\n    template: _head2.default\n});\n\nOverlay.Body = _rguiUiBase.Component.extend({ // @TODO r-animation={@(this.$outer.data.animation)}\n    name: 'overlay.body',\n    template: _body2.default\n});\n\nexports.default = Overlay;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./overlay/index.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./overlay/index.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":{\"type\":\"expression\",\"body\":\"['u-overlay u-overlay-',c._sg_('direction', d, e),' ',c._sg_('class', d, e)].join('')\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', d, e))\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"ref\",\"value\":\"element\"},{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('trigger', d, e)==='hover'\",\"constant\":false,\"setbody\":false},\"consequent\":[[{\"type\":\"attribute\",\"name\":\"on-mouseleave\",\"value\":{\"type\":\"expression\",\"body\":\"c['toggle'](false)\",\"constant\":false,\"setbody\":false}}]],\"alternate\":[]}],\"children\":[{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}},{\"type\":\"text\",\"text\":\"\\n\"}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./overlay/index.rgl\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./overlay/index.rgl?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"overlay_hd\"},{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='click'\",\"constant\":false,\"setbody\":false},\"consequent\":[[{\"type\":\"attribute\",\"name\":\"on-click\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('$outer', c)['toggle']()\",\"constant\":false,\"setbody\":false}}]],\"alternate\":[{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='dblclick'\",\"constant\":false,\"setbody\":false},\"consequent\":[[{\"type\":\"attribute\",\"name\":\"on-dblclick\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('$outer', c)['toggle']()\",\"constant\":false,\"setbody\":false}}]],\"alternate\":[{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='hover'\",\"constant\":false,\"setbody\":false},\"consequent\":[[{\"type\":\"attribute\",\"name\":\"on-mouseenter\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('$outer', c)['toggle'](true)\",\"constant\":false,\"setbody\":false}}]],\"alternate\":[]}]}]}],\"children\":[{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./overlay/head.rgl\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./overlay/head.rgl?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"overlay_bd\"},{\"type\":\"attribute\",\"name\":\"r-show\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('open', c._sg_('data', c._sg_('$outer', c)))\",\"constant\":false,\"setbody\":\"c._ss_('open',p_,c._sg_('data', c._sg_('$outer', c)), '=', 0)\"}}],\"children\":[{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./overlay/body.rgl\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./overlay/body.rgl?");

/***/ }
/******/ ])
});
;