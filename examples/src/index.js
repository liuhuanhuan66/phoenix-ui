/**
 * Created by panqianjin on 16/5/19.
 */
import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import { Redirect, Router, Route } from 'react-router';
import History from 'history/lib/createHashHistory';
import Tab from './tab.js';
import Button from './button.js';
import ButtonGroup from './button-group.js';
import Input from './input.js';
import Textarea from './textarea.js';
import Switch from './switch.js';
import Grid from './grid.js';
import TableView from './table-view.js';
import FormGroup from './form-group.js';
import Label from './label.js';
import Badge from './badge.js';
import StarDemo from './star.js';
import Swipe from './swipe.js';
import Slider from './slider.js';
import Dialog from './dialog.js';
import Toast from './toast.js';
import Popup from './popup.js';
import Popover from './popover.js';
import Accordion from './accordion.js';
import Detail from './detailDemo.js';
import ListDemo from './list-demo.js';

let Card = class Card extends Component {
    onstructor(props, context){
        super(props, context);
    }

    render(){
        let {href, title, desp} = this.props;
        return (
            <a className="list-card" href={href}>
                <h3>{title}</h3>
                <p>{desp}</p>
            </a>
        )
    }
};

let Index = class index extends Component {
    render() {
        return (
            <div className="menu">
                <h1>Phoenix-UI</h1>
                <h2>基础组件</h2>
                <div className="menu-panel">
                    <Card href="#/button" title="Button" desp="按钮" />
                    <Card href="#/buttongroup" title="ButtonGroup" desp="按钮组" />
                    <Card href="#/badge" title="Badge" desp="徽章" />
                    <Card href="#/label" title="Label" desp="标签" />
                    <Card href="#/star" title="Star" desp="星星" />
                </div>
                <h2>表单</h2>
                <div className="menu-panel">
                    <Card href="#/formgroup" title="FormGroup" desp="表单组" />
                    <Card href="#/input" title="Input" desp="文本框" />
                    <Card href="#/textarea" title="Textarea" desp="多行文本" />
                    <Card href="#/switch" title="Switch" desp="开关" />
                </div>
                <h2>布局</h2>
                <div className="menu-panel">
                    <Card href="#/grid" title="Grid/Row/Col" desp="布局" />
                    <Card href="#/tableview" title="TableView" desp="表格" />
                </div>
                <h2>功能组件</h2>
                <div className="menu-panel">
                    <Card href="#/accordion" title="Accordion" desp="手风琴" />
                    <Card href="#/dialog" title="Dialog" desp="弹框" />
                    <Card href="#/popup" title="Popup" desp="弹层" />
                    <Card href="#/popover" title="Whisper/Popover" desp="气泡" />
                    <Card href="#/tab" title="Tab" desp="选项卡" />
                    <Card href="#/slider" title="Slider" desp="滑动输入条" />
                    <Card href="#/swipe" title="Swipe" desp="左滑动" />
                </div>
                <h2>辅助</h2>
                <div className="menu-panel">
                    <Card href="#/animate" title="Animate" desp="动画" />
                    <Card href="#/drag" title="Drag" desp="拖拽" />
                </div>
                <h2>示例</h2>
                <div className="menu-panel">
                    <Card href="#/list-demo" title="列表页示例" desp="" />
                    <Card href="#/detail" title="详情页示例" desp="" />
                </div>
            </div>
        );
    }
};

let AppRouter = class AppRouter extends Component {
    constructor(props, context) {
        super(props, context);
        this.history = new History({
            queryKey: false
        });
    }

    render() {
        return (
            <Router history={this.history}>
                <Route path="/index" name="index" component={Index} />
                <Route path="/tableview" name="TableView" component={TableView} />
                <Route path="/formgroup" name="FormGroup" component={FormGroup} />
                <Route path="/button" name="button" component={Button} />
                <Route path="/buttongroup" name="buttongroup" component={ButtonGroup} />
                <Route path="/input" name="input" component={Input} />
                <Route path="/textarea" name="textarea" component={Textarea} />
                <Route path="/switch" name="switch" component={Switch} />
                <Route path="/grid" name="grid" component={Grid} />
                <Route path="/tab" name="tab" component={Tab} />
                <Route path="/label" name="label" component={Label} />
                <Route path="/badge" name="badge" component={Badge} />
                <Route path="/star" name="star" component={StarDemo} />
                <Route path="/swipe" name="swipe" component={Swipe} />
                <Route path="/slider" name="slider" component={Slider} />
                <Route path="/dialog" name="dialog" component={Dialog} />
                <Route path="/toast" name="toast" component={Toast} />
                <Route path="/popup" name="popup" component={Popup} />
                <Route path="/popover" name="popover" component={Popover} />
                <Route path="/accordion" name="accordion" component={Accordion} />
                <Route path="/detail" name="detail" component={Detail} />
                <Route path="/list-demo" name="list-demo" component={ListDemo} />
                <Redirect from="/" to="/index" />
            </Router>
        );
    }
};

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

