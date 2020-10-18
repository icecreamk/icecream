import React, {Component} from 'react';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }
    render() {
        return (
            <div>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this.handleClick()}>自增</button>
            </div>
        )
    }
}
