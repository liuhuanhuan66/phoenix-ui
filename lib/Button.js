'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

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