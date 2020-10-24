import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../../redux/actions/counter';
import './page1.css'
import img from './img.png'

class Page1 extends Component {
    render() {
        return (
            <div className="page1">
                <img src={img} alt=""/>
                <div>当前计数为：{this.props.counter.count}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
