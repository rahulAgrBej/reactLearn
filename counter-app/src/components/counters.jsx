import React, { Component } from 'react';
import Counter from "./counter"

class CounterList extends Component {

    render() { 

        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <React.Fragment>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button><br />
                {
                    counters.map(
                        counter => 
                        <Counter
                            key={counter.id}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            counterObj = {counter}
                        />
                    )
                }
            </React.Fragment>
        );
    }
}
 
export default CounterList;