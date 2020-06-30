import React, { Component } from 'react';
import Counter from "./counter"

class CounterList extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    handleDelete() {
        console.log("event handler called")
    };

    render() { 
        return (
            <React.Fragment>
                {
                    this.state.counters.map(
                        counter => 
                        <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete} />
                    )
                }
            </React.Fragment>
        );
    }
}
 
export default CounterList;