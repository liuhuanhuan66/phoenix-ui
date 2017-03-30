import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix,getDeviceInfo} from './utils/Tool';

/**
 * 拖拽组件<br/>
 * - 兼容移动端的touch和pc端的mouse事件。
 * - 可通过onDrag设置抓取的回调函数, 返回抓取在屏幕上的位置, 分别保存在start和move中, 以x和y的形式展示。
 * - 可通过onDrop设置松开瞬间的回调函数, 返回松开时在屏幕上的位置, 保存在end中, 以x和y的形式展示。
 *
 * 示例:
 * ```code
 *     <Drag onDrag={::this.onDrag} onDrop={::this.onDrop} style={{height:0}}>
 *         <div className="box" ref={(box)=>{this.box = box}}>Drag</div>
 *     </Drag>
 * ```
 * ```code
 *     onDrag(event,position){
 *         this.prePosition = position.start;
 *         this.nowPosition = position.move;
 *
 *         this.distanceX = this.preDistanceX + this.nowPosition.x - this.prePosition.x;
 *         this.distanceY = this.preDistanceY + this.nowPosition.y - this.prePosition.y;
 *         console.log(this.distanceX, this.distanceY);
 *     }
 *     onDrop(event,position){
 *         this.preDistanceX = this.distanceX;
 *         this.preDistanceY = this.distanceY;
 *     }
 * ```
 *
 * @class Drag
 * @module 辅助组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo drag|drag.js {展示}
 * @show true
 * */

export default class Drag extends Component{

    static propTypes = {
        /**
         * 抓取的执行函数,对应TouchStart/TouchMove
         * @method onDrag
         * @type Function
         * */
        onDrag: PropTypes.func,
        /**
         * 放开的执行函数,对应TouchEnd
         * @method onDrop
         * @type Function
         * */
        onDrop: PropTypes.func
    };

    static defaultProps = {
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.mobile = getDeviceInfo('mobile');

        this.state = {
            position: {}
        };

        this.onMouseMoveHandle = this.onMouseMove.bind(this);
        this.onMouseEndHandle = this.onMouseEnd.bind(this);   

        this.isMouseDown = false;
    }

    onTouchStart(event){
        let {onDrag, onDragStart} = this.props;
        event.stopPropagation();
        // event.preventDefault();

        this.state.position.start = {x:event.touches[0].pageX, y: event.touches[0].pageY};
        this.state.position.move = this.state.position.start;

        if(onDrag) onDrag(event, this.state.position);
        if(onDragStart) onDragStart(event, this.state.position);

        return false;
    }

    onMouseStart(event){
        let {onDrag, onDragStart} = this.props;
        this.isMouseDown = true;
        event.stopPropagation();
        // event.preventDefault();

        this.state.position.start = {x:event.pageX, y: event.pageY};
        this.state.position.move = this.state.position.start;

        if(onDrag) onDrag(event, this.state.position);
        if(onDragStart) onDragStart(event, this.state.position);

        if(!this.mobile){
            document.addEventListener('mousemove',this.onMouseMoveHandle,false);
            document.addEventListener('mouseup',this.onMouseEndHandle,false);
        } 

        return false;
    }

    onTouchMove(event){
        event.stopPropagation();
        // event.preventDefault();

        this.state.position.move = {x:event.touches[0].pageX, y: event.touches[0].pageY};

        if(this.props.onDrag) this.props.onDrag(event, this.state.position);

        return false;
    }

    onMouseMove(event){
        if(!this.isMouseDown) return;
        event.stopPropagation();
        // event.preventDefault();

        this.state.position.move = {x:event.pageX, y: event.pageY};

        if(this.props.onDrag) this.props.onDrag(event, this.state.position);
        
        return false;
    }

    onTouchEnd(event){
        event.stopPropagation();
        // event.preventDefault();

        this.state.position.end = {x:event.changedTouches[0].pageX, y: event.changedTouches[0].pageY};
        this.state.position.start = this.state.position.move;

        if(this.props.onDrop) this.props.onDrop(event, this.state.position);

        return false;
    }

    onMouseEnd(event){
        event.stopPropagation();
        // event.preventDefault();

        this.state.position.end = {x:event.pageX, y: event.pageY};
        this.state.position.start = this.state.position.move;

        if(this.props.onDrop) this.props.onDrop(event, this.state.position);
        this.isMouseDown = false;
        
        if(!this.mobile){
            document.removeEventListener('mousemove',this.onMouseMoveHandle,false);
            document.removeEventListener('mouseup',this.onMouseEndHandle,false);
        }
        return false;
    }

    onTouchCancel(event){
        // 触屏取消:忽然来电话等情况
    }

    componentWillUnmount(){
        if(!this.mobile){
            document.removeEventListener('mousemove',this.onMouseMoveHandle,false);
            document.removeEventListener('mouseup',this.onMouseEndHandle,false);
        }
    }

    render(){
        return (
            <div {...this.props} className={classnames(setPhoenixPrefix("drag-action"), this.props.className)}
                onTouchStart={(event)=>{this.onTouchStart(event)}}
                onTouchMove={(event)=>{this.onTouchMove(event)}}
                onTouchEnd={(event)=>{this.onTouchEnd(event)}}
                onTouchCancel={(event)=>{this.onTouchCancel(event)}}

                onMouseDown={(event)=>{this.onMouseStart(event)}}

                ref={(dragAction)=>{this.dragAction = dragAction;}}
            >
                {this.props.children}
            </div>
        );
    }

}