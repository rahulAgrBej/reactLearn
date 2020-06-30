import React, { Component } from 'react';
import Counter from "./counter"

class CounterList extends Component {

    render() { 
        return (
            <React.Fragment>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button><br />
                {
                    this.props.counters.map(
                        counter => 
                        <Counter
                            key={counter.id}
                            onDelete={this.props.onDelete}
                            onIncrement={this.props.onIncrement}
                            counterObj = {counter}
                        />
                    )
                }
            </React.Fragment>
        );
    }
}
 
export default CounterList;