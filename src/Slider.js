import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

import Drag from './Drag';

/**
 * 滑动输入条 Slider
 * @class Slider
 * @module Action
 * @extends Component
 * @constructor
 * @demo slider.js {展示}
 * @demo slider.js {源码}
 * @show true
 * */
export default class Slider extends Component{

    static propTypes = {
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        progress:PropTypes.number
    };

    static defaultProps = {
        placement: 'top',
        progress: 0,
        componentTag:'div',
        classMapping : {
            'disabled': 'slider-disabled',
            'top': 'slider-tip-top',
            'bottom': 'slider-tip-bottom'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            newProgress: this.props.progress,
            tipVisible: false
        }
    }

    componentDidMount(){
        this.sliderLength = parseInt(this.sliderLine.offsetWidth);
        this.newProgressWidth = this.sliderLength * this.props.progress / 100;

        this.setSliderPosition(this.newProgressWidth + 'px');
    }

    setSliderPosition(distance){
        this.sliderProgress.style.width = distance;
        this.sliderBtn.style.left = distance;
    }

    onDrag(event, position){
        this.preX = position.start.x;
        this.X = position.move.x;
        this.distance = this.X - this.preX;

        this.prevProgressWidth = this.newProgressWidth + this.distance;

        if(this.newProgressWidth + this.distance <= 0) this.prevProgressWidth = 0;
        if(this.newProgressWidth + this.distance >= this.sliderLength) this.prevProgressWidth = this.sliderLength;

        this.setSliderPosition(this.prevProgressWidth + 'px');

        this.setState({
            tipVisible: true,
            newProgress: parseInt(this.prevProgressWidth/this.sliderLength * 100)
        });
    }

    onDrop(event, position){
        this.setState({
            tipVisible: false
        });

        this.newProgressWidth = this.prevProgressWidth;

        this.props.onChange(this.state.newProgress);
    }

    render(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                'slider',
                this.getProperty(),
                className
            )}>
                <div className="slider-line" ref={(sliderLine)=>{this.sliderLine=sliderLine}}>
                    <div className="slider-progress" ref={(sliderProgress)=>{this.sliderProgress=sliderProgress}}></div>
                    <div className="slider-drag" ref={(sliderBtn)=>{this.sliderBtn=sliderBtn}}>
                        <div className={classnames("slider-tip", this.state.tipVisible?'show':'hide')}>{this.state.newProgress}</div>
                        <Drag className="slider-btn" onDrag={::this.onDrag} onDrop={::this.onDrop}></Drag>
                    </div>
                </div>
            </Component>
        );
    }

}