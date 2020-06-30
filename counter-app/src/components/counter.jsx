import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        this.setState(
            {value: this.state.value + 1}
            );
    }

    render() {
        
        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={ this.handleIncrement } className="btn btn-seconday btn-sm">Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
                <br/>
            </React.Fragment>
        );
    }

    formatCount() {
        return this.state.value === 0 ? 'Zero' : this.state.value;
    }

    getBadgeClasses() {
        let classes  ="badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;