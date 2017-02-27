import React,{PropTypes} from 'react';
import Component from '../utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from '../utils/Tool';

import Icon from '../Icon';

/**
 * 菜单头部组件<br/>
 * - 通过align设置菜单按钮的位置, 可选[left, right]。
 *
 * 主要属性和接口：
 * - align:设置菜单按钮的位置,默认left。 <br/>
 * 如：
 * ```code
 *     <Menu scrollCeiling={100} visible={true} onChange={(visible)=>{console.log(visible);}}>
 *         <Menu.Header align="right">
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body width={60} placement={this.state.placement} closeButton>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuHeader
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo menu|menu.js {展示}
 * @show true
 * */
export default class MenuHeader extends Component {
    constructor(props, context){
        super(props, context);
    }

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu-header'
         * */
        classPrefix: PropTypes.string,
        /**
         * 菜单按钮位置, 可选[left,right], left
         * @property align
         * @type String
         * @default 'left'
         * */
        align: PropTypes.string,
    };

    static defaultProps = {
        align: 'left',
        classPrefix:'menu-header',
        classMapping : {
            'left':'left',
            'right':'right'
        }
    };

    onChange(){
        this.props.changeVisible(()=>{
            if(this.props.onChange) this.props.onChange(this.props.visible);
        });
    }

    render(){
        let {className} = this.props;

        return (
            <div className={classnames(
                    this.getProperty(true),
                    className
                )}
                {...this.props}
            >
                <Icon phIcon="menu" onClick={::this.onChange}/>
                <div className={setPhoenixPrefix('menu-header-content')}>{this.props.children}</div>
            </div>
        );
    }
};