import React, { Component } from 'react';

class Counter extends Component {



    render() {
        
        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counterObj)} className="btn btn-seconday btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counterObj.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <br/>
            </React.Fragment>
        );
    }

    formatCount() {
        return this.props.counterObj.value === 0 ? 'Zero' : this.props.counterObj.value;
    }

    getBadgeClasses() {
        let classes  ="badge m-2 badge-";
        classes += (this.props.counterObj.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;