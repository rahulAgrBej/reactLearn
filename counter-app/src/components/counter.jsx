import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };


    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-seconday btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

    getBadgeClasses() {
        let classes  ="badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;