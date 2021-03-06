'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

var _FilterContainerJs = require('./FilterContainer.js');

var _FilterContainerJs2 = _interopRequireDefault(_FilterContainerJs);

var _FilterPanelCheckboxJs = require('./FilterPanelCheckbox.js');

var _FilterPanelCheckboxJs2 = _interopRequireDefault(_FilterPanelCheckboxJs);

/**
 * 多条件筛选组件<br/>
 * - 可通过groupIndex设置主菜单索引值，默认0，即第一个。
 * - 可通过choose设置初始选中的的id的字符串，以逗号隔开。
 * - 可通过buttons设置底部按钮，以数组的格式传入，如`[{text:'取消', phStyle:'info', onHandle:this.cancelChoose.bind(this), otherProps: {hollow:true}}]`。
 *
 * 主要属性和接口：
 * - groupIndex: 主菜单索引值。
 * - choose: 选中id的字符串。
 * - buttons: 底部按钮数组。
 * 如：
 * ```code
 *  <FilterCheckbox choose={this.state.choose} groupIndex={2} buttons={buttons}>
 *      {
 *          this.state.filterData.map((cityShopList,index)=>{
 *              return (
 *                  <ItemGroup key={cityShopList.cityId} mainKey={cityShopList.cityId} label={cityShopList.cityName}>
 *                      {
 *                          cityShopList.shopInfoDTOList.map((shopInfo)=>{
 *                              return  <Item disabled={shopInfo.status==1} key={shopInfo.shopId} itemKey={shopInfo.shopId}>{shopInfo.shopName}</Item>
 *                          })
 *                      }
 *                  </ItemGroup>
 *              );
 *          })
 *      }
 *  </FilterCheckbox>
 * ```
 *
 * @class FilterCheckbox
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo ph-filter-checkbox|ph-filter-checkbox.js {展示}
 * @show true
 * */

var FilterCheckbox = (function (_Component) {
    _inherits(FilterCheckbox, _Component);

    function FilterCheckbox(props, context) {
        _classCallCheck(this, FilterCheckbox);

        _Component.call(this, props, context);

        this.choose = props.choose;
    }

    FilterCheckbox.prototype.render = function render() {
        var _props = this.props;
        var choose = _props.choose;
        var index = _props.index;
        var buttons = _props.buttons;
        var children = _props.children;
        var className = _props.className;
        var style = _props.style;
        var showExtra = _props.showExtra;

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ph-checkbox-filter', className, showExtra ? 'ph-checkbox-filter-extra' : '') },
            _react2['default'].createElement(
                _FilterContainerJs2['default'],
                { index: 0, hideCat: true },
                _react2['default'].createElement(
                    _FilterPanelCheckboxJs2['default'],
                    {
                        index: index,
                        buttons: buttons,
                        selected: { key: choose, value: '' },
                        choose: choose,
                        showExtra: showExtra
                    },
                    children
                )
            )
        );
    };

    _createClass(FilterCheckbox, null, [{
        key: 'propTypes',
        value: {
            /**
             * 默认选中的侧边栏的索引值
             * @property index
             * @type Number
             * @default 0
             * */
            index: _propTypes2['default'].number,
            /**
             * 选中的id字符串，逗号隔开
             * @property choose
             * @type String
             * @default -1
             * */
            choose: _propTypes2['default'].string,
            /**
             * 按钮数组
             * @property buttons
             * @type Array
             * */
            buttons: _propTypes2['default'].array,
            /**
             *  显示按钮额外文字的格式，目前仅支持文字
             * @property showExtra
             * @type Array
             * @default null
             * */
            showExtra: _propTypes2['default'].string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            index: 0,
            choose: [],
            showExtra: null
        },
        enumerable: true
    }]);

    return FilterCheckbox;
})(_react.Component);

exports['default'] = FilterCheckbox;
module.exports = exports['default'];