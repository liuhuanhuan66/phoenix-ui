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

/**
 * 按钮组组件<br/>
 * - 按钮组组件配合Button组件,提供了横、竖两种排列方式, 可选justify,tacked。
 * - 可通过onButtongroupChange实现点击回调。
 *
 * 主要属性和接口：
 * - phType:是否自适应宽度或者垂直排列, 默认justify <br/>
 * 如:
 * ```code
 *     <ButtonGroup phType="tacked">
 *         <Button block>tacked1</Button>
 *         <Button block>tacked2</Button>
 *     </ButtonGroup>
 * ```
 * - onButtongroupChange:点击按钮组的回调函数。<br/>
 * ```code
 *     <ButtonGroup onButtongroupChange={function(target,html){console.log(target,html);}}>
 *         <Button>tacked1</Button>
 *         <Button>tacked2</Button>
 *     </ButtonGroup>
 * ```
 *
 * @class ButtonGroup
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.4
 * @demo buttongroup|button-group.js {展示}
 * @show true
 * */

var ButtonGroup = (function (_Component) {
    _inherits(ButtonGroup, _Component);

    _createClass(ButtonGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'button-group'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 是否有自适应宽度，垂直排列等属性，取值为justify(水平排列)或者tacked(垂直排列)
             * @property phType
             * @type String
             * @default 'justify'
             * */
            phType: _react.PropTypes.string,
            /**
             * 按钮被按下后的回调
             * @method onButtongroupChange
             * @type Function
             * */
            onButtongroupChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'button-group',
            phType: 'justify',
            componentTag: 'div',
            classMapping: {
                'justify': 'justify',
                'tacked': 'tacked'
            }
        },
        enumerable: true
    }]);

    function ButtonGroup(props, context) {
        _classCallCheck(this, ButtonGroup);

        _Component.call(this, props, context);

        this.state = {
            active: this.props.active
        };
    }

    ButtonGroup.prototype.clickHandler = function clickHandler(e) {
        var target = e.target;
        this.props.onButtongroupChange && this.props.onButtongroupChange(target, target.innerHTML);
        this.setState({
            active: target.innerHTML
        });
    };

    ButtonGroup.prototype.render = function render() {
        var _this = this;

        var Component = this.props.componentTag;

        var options = _react2['default'].Children.map(this.props.children, function (option) {

            var opt = _react2['default'].cloneElement(option, {
                clickHandle: _this.clickHandler.bind(_this),
                active: _this.state.active == option.props.children
            });
            return opt;
        }, this);

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), 'clearfix') }),
            options
        );
    };

    return ButtonGroup;
})(_utilsComponent2['default']);

exports['default'] = ButtonGroup;
module.exports = exports['default'];