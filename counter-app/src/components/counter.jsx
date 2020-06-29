import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: '20px',
        fontWeight: "bold"
    };
    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-seconday btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;