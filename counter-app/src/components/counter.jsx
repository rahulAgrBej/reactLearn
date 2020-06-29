import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        )
    }

    handleIncrement() {
        this.setState(
            {count: this.state.count + 1}
            );
    }
    render() { 

        
        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={ this.handleIncrement } className="btn btn-seconday btn-sm">Increment</button>
                
                <ul>
                    { this.renderTags() }
                </ul>
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