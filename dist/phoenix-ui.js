(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Button2 = __webpack_require__(2);

	var _Button3 = _interopRequireDefault(_Button2);

	exports.Button = _Button3['default'];

	var _Input2 = __webpack_require__(12);

	var _Input3 = _interopRequireDefault(_Input2);

	exports.Input = _Input3['default'];

	var _Switch2 = __webpack_require__(13);

	var _Switch3 = _interopRequireDefault(_Switch2);

	exports.Switch = _Switch3['default'];

	var _Row2 = __webpack_require__(14);

	var _Row3 = _interopRequireDefault(_Row2);

	exports.Row = _Row3['default'];

	var _Col2 = __webpack_require__(15);

	var _Col3 = _interopRequireDefault(_Col2);

	exports.Col = _Col3['default'];

	var _TableView2 = __webpack_require__(16);

	var _TableView3 = _interopRequireDefault(_TableView2);

	exports.TableView = _TableView3['default'];

	var _FormGroup2 = __webpack_require__(17);

	var _FormGroup3 = _interopRequireDefault(_FormGroup2);

	exports.FormGroup = _FormGroup3['default'];

	window['Phoenix'] = {};

	['Button', 'Input', 'Switch', 'Row', 'TableView', 'FormGroup'].forEach(function (name) {
	    Phoenix[name] = exports[name];
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(4);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Button = (function (_Component) {
	    _inherits(Button, _Component);

	    _createClass(Button, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 按钮尺寸,分别为xs、sm、lg
	             * @property egSize
	             * @type String
	             * @default sm
	             * */
	            phSize: _react.PropTypes.string,
	            /**
	             * 颜色[error、warning、danger、link、gray、white、success、'']
	             * @property egStyle
	             * @type Boolean
	             * @default ''
	             * */
	            phStyle: _react.PropTypes.string,
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 块级显示
	             * @property block
	             * @type Boolean
	             * @default false
	             * */
	            block: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            egSize: '',
	            classPrefix: '',
	            componentTag: 'button',
	            classMapping: {
	                'block': 'btn-block',
	                'primary': 'btn-primary',
	                'info': 'btn-info',
	                'success': 'btn-success',
	                'error': 'btn-error',
	                'warning': 'btn-warning',
	                'danger': 'btn-danger',
	                'link': 'btn-link'
	            }
	        },
	        enumerable: true
	    }]);

	    function Button(props, context) {
	        _classCallCheck(this, Button);

	        _Component.call(this, props, context);
	        this.setProperty('hollow', 'hollow');
	    }

	    Button.prototype.render = function render() {
	        var Component = this.props.componentTag;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.otherProps, { className: _classnames2['default']('btn', this.getProperty(), this.props.className), style: this.getStyles(this.props.style) }),
	            this.props.children
	        );
	    };

	    return Button;
	})(_utilsComponent2['default']);

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(6);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _PropertyMixin = __webpack_require__(8);

	var _PropertyMixin2 = _interopRequireDefault(_PropertyMixin);

	var _MethodMixin = __webpack_require__(10);

	var _MethodMixin2 = _interopRequireDefault(_MethodMixin);

	var _extend = __webpack_require__(11);

	var _extend2 = _interopRequireDefault(_extend);

	//import 'babel-polyfill';

	var BaseComponent = (function (_Component) {
	    _inherits(BaseComponent, _Component);

	    function BaseComponent(props, context, defaultState) {
	        _classCallCheck(this, _BaseComponent);

	        _Component.call(this, props, context);

	        if (defaultState) {
	            this.setDefaultState(defaultState);
	        }
	        this._properties = [];
	        this._styles = [];
	        this.otherProps = {};
	        this.initCallback(this);
	        //验证
	        this.replaceProperties();
	        //注册
	        this.registerMethod(this.otherProps);
	    }

	    BaseComponent.prototype.setDefaultState = function setDefaultState(obj) {

	        this.state = _extend2['default']({}, {
	            _isShow: false,
	            _checked: false,
	            _active: false
	        }, obj || {});
	    };

	    BaseComponent.prototype.uniqueId = function uniqueId() {
	        return (this.classPrefix || 'unique') + '_' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
	    };

	    BaseComponent.prototype.initCallback = function initCallback() {
	        this.props.initCallback && this.props.initCallback(this);
	    };

	    BaseComponent.prototype.componentWillMount = function componentWillMount() {};

	    BaseComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        this.replaceProperties(nextProps);
	        return true;
	    };

	    BaseComponent.prototype.componentDidMount = function componentDidMount() {
	        this.loadedCallback && this.loadedCallback(this);
	    };

	    //注册回调

	    BaseComponent.prototype.registerMethod = function registerMethod(methods) {
	        //注册回调
	        var method = null,
	            methodName = '',
	            other = {};
	        for (var item in methods) {
	            method = this.methods[item];
	            if (method) {
	                this.setMethod(item, methods[item]);
	            }
	        }
	    };

	    BaseComponent.prototype.setMethod = function setMethod(methodName, method) {

	        if (methodName.match('Callback') == null) {
	            throw new Error('The callback method name format is wrong, should be ' + methodName + 'Callback');
	        }
	        if (!this[methodName]) {
	            this[methodName] = (function (method) {
	                var m = method;
	                return function () {
	                    return m.apply(m, Array.prototype.slice.call(arguments, 0));
	                };
	            })(method);
	        }
	    };

	    BaseComponent.prototype.execMethod = function execMethod(method) {
	        var data,
	            args$2$0 = arguments;
	        return regeneratorRuntime.async(function execMethod$(context$2$0) {
	            while (1) switch (context$2$0.prev = context$2$0.next) {
	                case 0:
	                    data = null;

	                    method = method.indexOf('Callback') != -1 ? method : method + 'Callback';

	                    if (!this[method]) {
	                        context$2$0.next = 6;
	                        break;
	                    }

	                    context$2$0.next = 5;
	                    return regeneratorRuntime.awrap(this[method].apply(this[method], Array.prototype.slice.call(args$2$0, 1).concat(this)));

	                case 5:
	                    data = context$2$0.sent;

	                case 6:
	                    return context$2$0.abrupt('return', data);

	                case 7:
	                case 'end':
	                    return context$2$0.stop();
	            }
	        }, null, this);
	    };

	    BaseComponent.prototype.setProperty = function setProperty(prop, val) {
	        if (val !== undefined) {
	            this.properties[prop] = val;
	            if (this.props[prop] !== undefined) {
	                this.updateProperty({ key: prop, value: val }, this._properties, this._styles, this.otherProps);
	            }
	        }
	    };

	    BaseComponent.prototype.filterClass = function filterClass(key) {
	        var value = typeof key == 'string' ? this.props.classMapping[key] : key;

	        return value ? value : key;
	    };

	    BaseComponent.prototype.updateProperty = function updateProperty(props, propList, styleList, otherProps) {
	        var propKey = props.key,
	            propValue = props.value,
	            propConfig = this.properties[propKey];

	        var type = 'property';
	        if (propConfig) {
	            this.filterClass();
	            switch (typeof propConfig) {
	                case 'boolean':
	                    if (propValue) {
	                        propList.push(this.filterClass(propKey));
	                    }
	                    break;
	                case 'function':
	                    var param = propConfig.call(this, propValue);
	                    if (typeof param == 'string') {
	                        propList.push(this.filterClass(param));
	                    } else if (param.type && param.type == type) {
	                        this[propKey] = param.value;
	                    } else {
	                        //{
	                        //    border:val
	                        //}
	                        styleList.push(param);
	                    }
	                    break;
	                default:
	                    propList.push(this.filterClass(propConfig));
	                    break;
	            }
	        } else {
	            otherProps[propKey] = propValue;
	        }
	    };

	    BaseComponent.prototype.replaceProperties = function replaceProperties(props) {
	        // 整体替换
	        var propList = [],
	            styleList = [],
	            otherProps = {};
	        props = props ? props : this.props;
	        for (var key in props) {
	            this.updateProperty({ key: key, value: props[key] }, propList, styleList, otherProps);
	        }
	        this._properties = propList;
	        this._styles = styleList;
	        this.otherProps = otherProps;
	    };

	    BaseComponent.prototype.getProperty = function getProperty() {
	        var withPrefix = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	        var p = this.classPrefix ? this.classPrefix + ' ' : '';
	        p += this._properties.join(' ');
	        /*if(withPrefix){
	            return this.getClassName(p);
	        }else{
	            return this.getClassName(p,false);
	        }*/
	        return this.getClassName(p, false); //+' '+this.getClassName(p);
	    };

	    BaseComponent.prototype.getStyles = function getStyles() {
	        var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var obj = {},
	            styles = this._styles;

	        /*propertyMixn里设置的和style相关的属性，比如*/
	        for (var i = 0, len = styles.length; i < len; i++) {
	            obj = _extend2['default']({}, obj, styles[i]);
	        }
	        /*用户设置的style*/
	        return _extend2['default']({}, obj, style);
	    };

	    BaseComponent.prototype.show = function show() {
	        this.setState({
	            _isShow: true
	        });
	    };

	    BaseComponent.prototype.hide = function hide() {
	        this.setState({
	            _isShow: false
	        });
	    };

	    BaseComponent.prototype.trim = function trim(str) {
	        return str.replace(/(^\s*)|(\s*$)/g, "");
	    };

	    BaseComponent.prototype.getDisplay = function getDisplay() {
	        return this.state._isShow;
	    };

	    BaseComponent.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'h1',
	            null,
	            '请重写父类render()方法'
	        );
	    };

	    var _BaseComponent = BaseComponent;
	    BaseComponent = _MethodMixin2['default'](BaseComponent) || BaseComponent;
	    BaseComponent = _PropertyMixin2['default'](BaseComponent) || BaseComponent;
	    BaseComponent = _ClassNameMixin2['default'](BaseComponent) || BaseComponent;
	    return BaseComponent;
	})(_react.Component);

	exports['default'] = BaseComponent;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(7);

	var consts = _constantsJs.classConstants;

	exports['default'] = function (obj) {
	    /**
	     * 给className添加前缀后返回className
	     * @method getClassName
	     * @param name {String} 从该字符串中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassName = function (name) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        name = name ? name : '';
	        name = (name + '').split(' ');
	        var list = [],
	            _this = this;
	        name.forEach(function (item) {
	            list.push(_this.setPrefix(item, pre));
	        });

	        return list.join(' ');
	    };
	    /**
	     * 验证props中的样式是否符合规则
	     * @method getClassNames
	     * @param props {Object} 从该对象中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassNames = function (props) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var clazz = {};
	        for (var item in props) {
	            if (props[item] && item === consts[item]) {
	                clazz[this.getClassName(item, pre)] = true;
	            }
	        }
	        return clazz;
	    };
	    /**
	     * 给多个className添加前缀后返回
	     * @method getClassNamesForArguments
	     * @param arguments {Arguments String} 多个class参数
	     * @return {String}
	     * */
	    obj.prototype.getClassNamesForArguments = function () {
	        var arg = arguments;
	        var arr = [];
	        var _this = this;

	        if (arg && arg.length > 0) {
	            for (var i = 0, len = arg.length; i < len; i++) {
	                if (arg[i]) {
	                    arr.push(_this.getClassName(arg[i]));
	                }
	            }
	        }

	        return arr.join(' ');
	    };
	    /**
	     * 设置css类名前缀
	     * @method setPrefix
	     * @param name{String} class名字
	     * @param pre{Boolean} 是否添加前缀
	     * @return {String}
	     * */
	    obj.prototype.setPrefix = function (name) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var classArray = consts.classNameNamespace ? [consts.classNameNamespace] : [];

	        if (pre && this.props.classPrefix) {
	            classArray.push(this.props.classPrefix);
	        }
	        if (name && name != this.props.classPrefix) {
	            classArray.push(name);
	        }

	        return classArray.join(classArray.length > 1 ? '-' : '');
	    };

	    /**
	     * 检查元素是否存在样式名
	     * @method hasClass
	     * @param obj {Object} 元素
	     * @param cls {String} 需要检查的样式名
	     * @return {Boolean}
	     * */
	    obj.prototype.hasClass = function (obj, cls) {
	        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	    };

	    /**
	     * 给元素增加一个样式名
	     * @method addClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.addClass = function (obj, cls) {
	        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	    };
	    /**
	     * 给元素删除一个样式名
	     * @method removeClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.removeClass = function (obj, cls) {
	        if (this.hasClass(obj, cls)) {
	            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	            obj.className = obj.className.replace(reg, ' ');
	        }
	    };
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by mac on 15/9/7.
	 */
	//classname前缀

	'use strict';

	exports.__esModule = true;
	function setNamespace(className) {
	    return '' + className;
	}
	var CLASS_NAME_NAMESPACE = '';
	var classConstants = {
	    /**
	     * 状态
	     * */
	    //标签新增命名空间
	    //标签启用
	    positive: setNamespace('positive'),
	    //标签灰色
	    negative: setNamespace('negative'),
	    //标签灰白
	    modest: setNamespace('modest'),
	    //提示框暖色(黄色)
	    warm: setNamespace('warm'),
	    //标签灰色
	    //标签无背景色
	    neutral: setNamespace('neutral'),

	    //theme
	    // 白色
	    light: setNamespace('light'),
	    // 橘红色
	    assertive: setNamespace('assertive'),
	    //绿色
	    balanced: setNamespace('balanced'),
	    //按钮是否需要添加边框
	    outline: setNamespace('outline'),
	    //按钮是否处于待唤醒状态
	    awaiting: setNamespace('awaiting'),
	    //禁用
	    disabled: setNamespace('disabled'),
	    //启用
	    enable: setNamespace('enable'),
	    block: setNamespace('block'),
	    //垂直
	    tacked: setNamespace('tacked'),
	    //宽度自适应
	    justify: setNamespace('justify'),
	    //选中
	    active: setNamespace('active'),
	    //行内样式
	    inline: setNamespace('inline'),
	    //大小
	    size: setNamespace('size'),
	    //圆形样式
	    radius: setNamespace('radius'),
	    //隨圆
	    round: setNamespace('round'),
	    //向上箭头
	    'arrow-up': setNamespace('arrow-up'),
	    //向下箭头
	    'arrow-down': setNamespace('arrow-down'),
	    /**
	     * 颜色
	     * */
	    //成功样式
	    success: setNamespace('success'),
	    //错误红色
	    error: setNamespace('error'),
	    //警告warning
	    warning: setNamespace('warning'),
	    //危险danger
	    danger: setNamespace('danger'),
	    //展示
	    show: setNamespace('show'),
	    white: setNamespace('white'),
	    /**
	     * form列表相关
	     * */
	    //必填
	    require: setNamespace('require'),
	    //跳转链接
	    jump: setNamespace('link'),
	    //最后一个item是否浮动
	    right: setNamespace('lastItem'),
	    classNameNamespace: CLASS_NAME_NAMESPACE,
	    /**
	     * tab
	     * */
	    vertical: setNamespace('vertical')
	};
	exports.classConstants = classConstants;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 16/1/3.
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(9);

	var _warning2 = _interopRequireDefault(_warning);

	exports['default'] = function (obj) {

	    var getVal = function getVal(vals, val) {
	        var result = (vals.join(',') + ',').match(val.toLowerCase() + ',') != null ? val : '';
	        if (!result) {
	            _warning2['default']('属性的取值 %s 不在设定集合 %s 里', val, vals.join(','));
	        }
	        return result;
	    };

	    var properties = {
	        /*以下属性都是数组里固定值*/
	        phSize: function phSize(val) {
	            return getVal(['lg', 'sm', 'default', 'xs', 'md'], val);
	        },
	        phStyle: function phStyle(val) {
	            return getVal(['primary', 'info', 'success', 'error', 'warning', 'danger', 'link', 'light', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'lightbrown', 'lightgray'], val);
	        },
	        status: function status(val) {
	            getVal(['diabled', 'active', 'enable'], val);
	        },
	        align: function align(val) {
	            return getVal(['center', 'left', 'middle', 'auto', 'top', 'right', 'bottom'], val);
	        },
	        /*以下属性没有取值，需要的时候添加对应的属性即可*/
	        disabled: true,
	        active: true,
	        radius: true,
	        round: true,
	        clearfix: true,
	        clear: true,
	        phHref: true,
	        show: true,
	        hide: true,
	        block: true,

	        /*以下属性相当于css属性的快速赋值，比如设置zIndex="2",则会被merge进style里，如果只有属性zIndex没有设置取值，则会被放入props列表中*/
	        zIndex: function zIndex(val) {
	            if (typeof val == 'string') {
	                return {
	                    zIndex: val
	                };
	            }
	            return 'zindex';
	        },
	        border: function border(val) {
	            if (typeof val == 'string') {
	                return {
	                    border: val
	                };
	            }
	            return 'border';
	        },
	        padding: function padding(val) {
	            if (typeof val == 'string') {
	                return {
	                    padding: val
	                };
	            }
	            return 'padding';
	        },
	        margin: function margin(val) {
	            if (typeof val == 'string') {
	                return {
	                    margin: val
	                };
	            }
	            return 'margin';
	        },
	        radiusSize: function radiusSize(val) {
	            return {
	                WebkitBorderRadius: val,
	                borderRadius: val
	            };
	        },
	        offset: (function (val) {
	            return '-offset-' + val;
	        }).bind(obj),
	        /*以下属性会被直接挂载在component上，可以不用通过component.props获取*/
	        classPrefix: function classPrefix(val) {
	            return {
	                type: 'property',
	                value: val
	            };
	        },
	        componentTag: function componentTag(val) {
	            return {
	                type: 'property',
	                value: val
	            };
	        },
	        params: function params(val) {
	            return {
	                type: 'property',
	                value: val
	            };
	        }
	    };

	    obj.prototype.properties = properties;
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    if (format === undefined) {
	        throw new Error('`warning(format, ...args)` requires a warning ' + 'message argument');
	    }
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	        console.warn(message);
	    }
	    try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	    } catch (x) {}
	};

	;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by mac on 16/1/3.
	 */
	"use strict";

	exports.__esModule = true;

	exports["default"] = function (obj) {
	    var methods = {
	        initCallback: true,
	        loadedCallback: true,
	        closeCallback: true,
	        successCallback: true,
	        cancelCallback: true,
	        checkedCallback: true,
	        activeCallback: true,
	        getValueCallback: true,

	        updateCallback: true,
	        deleteCallback: true,
	        queryCallback: true,
	        addCallback: true,
	        insertCallback: true,
	        ajaxCallback: true,

	        defaultCallback: true

	        //method
	    };

	    obj.prototype.methods = methods;
	};

	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(4);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    _createClass(Input, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            egSize: '',
	            classPrefix: '',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Input(props, context) {
	        _classCallCheck(this, Input);

	        _Component.call(this, props, context);
	    }

	    Input.prototype.otherView = function otherView(type) {
	        return _react2['default'].createElement(
	            'label',
	            { className: 'multi-group' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'ui-' + type },
	                _react2['default'].createElement('input', this.props),
	                _react2['default'].createElement('i', null)
	            ),
	            _react2['default'].createElement(
	                'span',
	                null,
	                this.props.label || ''
	            )
	        );
	    };

	    Input.prototype.renderInput = function renderInput(type) {
	        var html = _react2['default'].createElement('div', null);

	        if (type == 'checkbox' || type == 'radio') {
	            html = this.otherView(type);
	        } else {
	            html = _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default']('form-input', this.getProperty(), this.props.className) }));
	        }

	        return html;
	    };

	    Input.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var type = _props.type;

	        return this.renderInput(type ? type : 'text');
	    };

	    return Input;
	})(_utilsComponent2['default']);

	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(4);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Switch = (function (_Component) {
	    _inherits(Switch, _Component);

	    _createClass(Switch, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            egSize: '',
	            classPrefix: '',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Switch(props, context) {
	        _classCallCheck(this, Switch);

	        _Component.call(this, props, context);
	    }

	    Switch.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'label',
	            { className: _classnames2['default']('label-switch', this.getProperty(), this.props.className) },
	            _react2['default'].createElement('input', _extends({ type: 'checkbox' }, this.props)),
	            _react2['default'].createElement('div', { className: 'checkbox' })
	        );
	    };

	    return Switch;
	})(_utilsComponent2['default']);

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 行
	 * @class Row
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Row = (function (_Component) {
	    _inherits(Row, _Component);

	    function Row() {
	        _classCallCheck(this, Row);

	        _Component.apply(this, arguments);
	    }

	    Row.prototype.render = function render() {
	        var _props = this.props;
	        var align = _props.align;

	        var others = _objectWithoutProperties(_props, ['align']);

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, others, { className: _classnames2['default']('row', this.props.align ? this.props.classPrefix + '-' + align : '', this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Row, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
	             * @property offset，默认不偏移
	             * @type Integer
	             * */
	            align: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'center', 'stretch', 'baseline'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'row'
	        },
	        enumerable: true
	    }]);

	    return Row;
	})(_react.Component);

	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 列
	 * @class Col
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Col = (function (_Component) {
	    _inherits(Col, _Component);

	    function Col() {
	        _classCallCheck(this, Col);

	        _Component.apply(this, arguments);
	    }

	    Col.prototype.render = function render() {
	        var _props = this.props;
	        var width = _props.width;
	        var offset = _props.offset;
	        var align = _props.align;
	        var classPrefix = _props.classPrefix;

	        var others = _objectWithoutProperties(_props, ['width', 'offset', 'align', 'classPrefix']);

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, others, { className: _classnames2['default']('col', this.props.width ? classPrefix + '-' + width : '', this.props.offset ? classPrefix + '-offset-' + offset : '', this.props.align ? classPrefix + '-' + align : '', this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Col, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
	             * @property width
	             * @type Integer
	             * */
	            width: _react.PropTypes.string,
	            /**
	             * 偏移多少，，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
	             * @property offset，默认不偏移
	             * @type Integer
	             * */
	            offset: _react.PropTypes.string,
	            /**
	             * 竖直方向的排列是靠上、居中还是靠下
	             * @property offset，默认不偏移
	             * @type Integer
	             * */
	            align: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'center'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'col'
	        },
	        enumerable: true
	    }]);

	    return Col;
	})(_react.Component);

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(4);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 展现形式如表格一般,用来组织数据，显示链接的集合，或一系列的控件。<br />
	 * 使用时需注意组件的子元素需要跳转功能需加上href标签并赋予正确的url，不论什么标签
	 * @class TableView
	 * @module UI
	 * @extends Component
	 * @constructor
	 * @demo table-view.js {展示}
	 * @demo table-view.js {源码}
	 * @show true
	 * */

	var TableView = (function (_Component) {
	    _inherits(TableView, _Component);

	    _createClass(TableView, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: '',
	            componentTag: 'ul',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function TableView(props, context) {
	        _classCallCheck(this, TableView);

	        _Component.call(this, props, context);
	    }

	    TableView.prototype.renderItem = function renderItem() {
	        var items = _react2['default'].Children.map(this.props.children, function (options, index) {
	            var _options$props = options.props;
	            var href = _options$props.href;

	            var other = _objectWithoutProperties(_options$props, ['href']);

	            return _react2['default'].createElement(
	                'li',
	                { className: 'table-view-cell' },
	                href && href != '' ? _react2['default'].createElement(
	                    'a',
	                    _extends({ href: href, className: 'navigate-right' }, other, { className: _classnames2['default']('navigate-right', options.props.className) }),
	                    options.props.children
	                ) : options.props.children
	            );
	        }, this);

	        return items;
	    };

	    TableView.prototype.render = function render() {
	        var Component = this.props.componentTag;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.otherProps, { className: _classnames2['default']('table-view', this.getProperty(), this.props.className), style: this.getStyles(this.props.style) }),
	            this.renderItem()
	        );
	    };

	    return TableView;
	})(_utilsComponent2['default']);

	exports['default'] = TableView;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(4);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Row = __webpack_require__(14);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(15);

	var _Col2 = _interopRequireDefault(_Col);

	var FormGroup = (function (_Component) {
	    _inherits(FormGroup, _Component);

	    _createClass(FormGroup, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            egSize: '',
	            classPrefix: '',
	            componentTag: 'form',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function FormGroup(props, context) {
	        _classCallCheck(this, FormGroup);

	        _Component.call(this, props, context);
	    }

	    FormGroup.prototype.renderItem = function renderItem() {
	        var _this = this;

	        var items = _react2['default'].Children.map(this.props.children, function (options, index) {

	            return _react2['default'].cloneElement(options, {
	                className: _classnames2['default']({
	                    'input-row': !options.props.single
	                }, _this.props.className)

	            });
	        }, this);

	        return items;
	    };

	    FormGroup.prototype.render = function render() {
	        var Component = this.props.componentTag;

	        return _react2['default'].createElement(
	            Component,
	            { className: _classnames2['default']('input-group', this.getProperty(), this.props.className) },
	            this.renderItem()
	        );
	    };

	    return FormGroup;
	})(_utilsComponent2['default']);

	exports['default'] = FormGroup;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;