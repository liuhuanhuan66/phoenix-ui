import React from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix, getClientHeight, getScrollTop, getDocumentHeight, preventDefault} from '../utils/Tool'
import Logger from '../utils/logger'

import Button from '../button'
import Icon from '../icon'

import '../style'
import 'phoenix-styles/less/modules/pullup.less'

/**
 * 加载更多组件<br/>
 * - 书写时PullUp组件在可加载列表的后面。
 * - 通过mode设置加载更多的模式，有点击按钮加载更多，以及滑到最底端自动加载，可选 [auto,button] 2种参数。
 * - 通过status设置当前状态，只需要在请求结束返回相应状态，包含请求成功返回2，请求成功并再没有数据返回4，请求失败返回3。
 * - 可通过tips设置按钮文字和状态提示语，默认['加载更多','','加载成功','加载失败','没有更多']，分别对应status的状态。
 * - 可通过phStyle设置按钮的样式，如果当前mode为auto设置无效。
 * - 可通过loadCallback设置点击按钮加载或滑到底部自动加载的回调函数，如果状态为4不执行。
 * - 如果当前列表存在自定义的滚动条，需要通过getTarget传递滚动的目标，且滚动元素的子元素必须只有一个。
 *
 * 主要属性和接口：
 * - mode:加载更多的模式，默认auto。
 * - status:当前状态:0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多。
 * - tips:按钮文字和状态提示语，默认['加载更多','','加载成功','加载失败','没有更多']。
 * - phStyle:按钮的样式，默认'primary'。
 * - loadCallback:点击按钮加载或滑到底部自动加载的回调函数。
 * - getTarget: 如果当前列表存在自定义的滚动条，需要传递滚动的目标。
 * 
 * 示例：
 * ```code
 *  <div style={{height:'300px',overflow:'auto'}} ref={(list)=>this.list=list}> // 用到getTarget需要保证只有一个子元素，包裹住滚动的所有内容
 *      <div> 
 *          <List>...</List> // 可加载列表的位置
 *          <PullUp mode='button' status={this.state.status} 
 *              tips={['点击加载更多','加载中...','加载成功！','加载失败！','没有更多']} 
 *              phStyle='primary' 
 *              loadCallback={this.loadCallback.bind(this)}
 *              getTarget={()=>{return list;}} />
 *      </div>
 *  </div>
 * ```
 * 
 * @class PullUp
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo pullup|pullup.js {展示}
 * @show true
 * */
const MAX_HEIGHT = 800

export default class PullUp extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'pullup'
         * */
        classPrefix: PropTypes.string,
         /**
         * 加载更多的模式，可选[auto,button], 默认auto
         * @property mode
         * @type String
         * @default 'auto'
         **/
        mode:PropTypes.string,
        /**
         * 加载状态：0初始状态, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
         * @property status
         * @type Number
         * @default 0
         **/
        status: PropTypes.number,
        /**
         * 加载5个状态的文字描述，默认['加载更多','','加载成功','加载失败','没有更多']
         * @property tips
         * @type Array
         * @default ['加载更多','加载中','加载成功','加载失败','没有更多']
         **/
        tips: PropTypes.array,
        /**
         * 按钮颜色，默认primary
         * @property phStyle
         * @type Array
         * @default 'primary'
         **/
        phStyle: PropTypes.string,
        /**
         * 滑到底部自动加载的回调函数，用户在该函数内自定义请求
         * @method loadCallback
         * @type Function
         * @default null
         **/
        loadCallback: PropTypes.func,
        /**
         * 如果当前列表存在自定义的滚动条，需要传递滚动的目标
         * @method getTarget
         * @type Function
         * @default null
         * @return {object} 目标元素的ref
         **/
        getTarget: PropTypes.func
    }

    static defaultProps ={
        status: 4, // 0初始状态, 1加载中, 2加载成功, 3加载失败, 4没有更多
        mode: 'auto',
        phStyle: 'primary',
        tips: ['加载更多','','加载成功','加载失败','没有更多'],
        classPrefix:'pullup',
        hardware: true,
        classMapping : {}
    }

    constructor(props,context){ // 记得做数据没有触底的判断
        super(props,context)
        new Logger('PullUp')

        this.state = {
            status: props.status
        }

        if(props.mode=='button') return

        this.touchBottom = false
        this.distanceY = 0
    }

    scrollHandler(e){
        let {status} = this.state,
            {getTarget} = this.props,
            target = e.target
        
        if(getTarget){
            this.scrollTop = target.scrollTop
            this.bodyHeight = target.clientHeight
            this.documentHeight = target.children[0].offsetHeight
        }else{
            this.scrollTop = getScrollTop()
            this.bodyHeight = getClientHeight()
            this.documentHeight = getDocumentHeight()
        }
        // console.log('this.scrollTop', this.scrollTop)
        // console.log('this.bodyHeight', this.bodyHeight)
        // console.log('this.documentHeight', this.documentHeight)

        this.pullTop = this.documentHeight - this.pullUp.offsetHeight
        // if(!this.pullHeight) this.pullHeight = this.pullUp.offsetHeight

        if(this.scrollTop + this.bodyHeight >= this.pullTop){
            this.touchBottom = true
            
            if(status==3) return 
            this.loadCallback()
        }else{
            this.touchBottom = false
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.status !== this.state.status){
            this.setState({
                status: nextProps.status
            })
        }
    }

    componentDidMount(){
        let pullUpElem = findDOMNode(this.pullUp)

        this.scrollHandle = this.scrollHandler.bind(this)
        this.scrollElem = window

        this.dragElem = pullUpElem.parentNode
        this.prevElem = pullUpElem.previousElementSibling
        this.addClass(this.dragElem, 'animated')
        this.props.hardware && this.addClass(this.prevElem, 'hardware')

        this.dragEventHandle(this.dragElem)

        if(this.props.getTarget){
            setTimeout(()=>{
                this.scrollElem = this.props.getTarget()
                this.scrollElem.addEventListener('scroll', this.scrollHandle, false)
            },0);  
        }else{
            this.scrollElem.addEventListener('scroll', this.scrollHandle, false)
        }              
    }

    dragEventHandle(elem){
        this.touchStartHandle = this.touchStartHandle.bind(this)
        elem.addEventListener('touchstart', this.touchStartHandle, false)

        this.touchMoveHandle = this.touchMoveHandle.bind(this)
        elem.addEventListener('touchmove', this.touchMoveHandle, false)

        this.touchEndHandle = this.touchEndHandle.bind(this)
        elem.addEventListener('touchend', this.touchEndHandle, false)

        this.touchCancelHandle = this.touchCancelHandle.bind(this)
        elem.addEventListener('touchcancel', this.touchCancelHandle, false)
    }

    componentDidUpdate(){
        let {status} = this.state

        // 只有加载成功并传值才重置状态
        if(status==2){
            this.setState({
                status: 0
            })
        }
    }

    loadCallback(){
        this.touchBottom = false

        let {loadCallback} = this.props,
            {status} = this.state

        // 如果已经没有更多，不再继续请求数据的操作
        if(status==4 || status==1) return

        // 状态置为加载中(状态为0或3时执行)
        this.setState({
            status: 1
        }, ()=>{
            if(loadCallback) loadCallback()
        })
    }

    touchStartHandle(e){
        // preventDefault(e)
        if(!this.touchBottom) return
        
        this.distanceY = 0
        this.starY = event.touches[0].pageY
    }

    touchMoveHandle(e){
        // preventDefault(e)
        if(!this.touchBottom) return

        this.moveY = event.touches[0].pageY
        this.distanceY = this.moveY - this.starY

        if(this.distanceY>=0) return

        this.distanceY = Math.abs(this.distanceY)

        this.transform = Math.min(1, MAX_HEIGHT/this.distanceY) * Math.min(MAX_HEIGHT, this.distanceY)
        this.dragElem.style.transform = 'translateY('+(-this.transform)+'px)'   
    }

    touchEndHandle(e){
        // preventDefault(e)
        if(!this.touchBottom) return

        this.starY = this.moveY

        this.dragElem.style.transform = 'translateY(0)'
        
        if(Math.abs(this.distanceY) <= 80 || this.distanceY>=0) return

        this.loadCallback()
    }

    touchCancelHandle(){
        this.dragElem.style.transform = 'translateY(0)'
    }

    componentWillUnmount(){
        if(this.props.mode=='button') return

        this.scrollElem.removeEventListener('scroll', this.scrollHandle, false)

        this.dragElem.removeEventListener('touchstart', this.touchStartHandle, false)
        this.dragElem.removeEventListener('touchmove', this.touchMoveHandle, false)
        this.dragElem.removeEventListener('touchend', this.touchEndHandle, false)
    }

    renderContent(){
        let {mode, tips, phStyle} = this.props,
            {status} = this.state

        if(mode=='button'){
            return (
                <Button phStyle={status==3?'error':phStyle} disabled={status==4||status==1} 
                    onClick={this.loadCallback.bind(this)}>
                    {this.renderIcon(status)}
                    {tips[status]}
                </Button>
            )            
        }else{
            return (
                <div className={setPhPrefix('pullup-tip')}>
                    {this.renderIcon(status)}
                    {tips[status]}
                </div>
            )
        }        
    }

    renderIcon(status){
        if(status==1){
            return <Icon className='gfs-icon-loading' phIcon='loading-gray' phSize='sm' />;
        }    
    }

    renderPullUp(){
        return (
            <div {...this.otherProps} ref={(pullUp)=>{this.pullUp=pullUp}} className={classnames(this.getProperty(true),this.props.className)}>
                {this.renderContent()}
            </div>
        )
    }

    render(){
        return this.renderPullUp()
    }
}