import React, {Component} from "react";
import Counter from "./counter"

class Counters extends Component {
    state = { 
        counters : [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }
    handleIncrement = counter => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter)
       counters[index] = {...counter}
       counters[index].value++;
       console.log(this.state.counters[index]) 
       this.setState({counters});
    }   

    handleReset = () => {
        // we are reseting the structure but not the DOM
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters})
    }

    handleDecrease = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.handleReset}className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDecrease={this.handleDecrease} 
                onIncrement={this.handleIncrement}
                counter={counter} 
                />))}
            </div>
         );
    }
}
 
export default Counters;