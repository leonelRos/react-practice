import React, {Component} from "react";
import NavBar from "../src/Component/navbar"
import "./App.css";
import Counters from "./Component/counters";

class App extends Component {
    state = { 
        counters : [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }
    handleInDecrease = () => {
        
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
//this deletes the state
    handleDecrease = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
    render() { 
        return ( 
        <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
            <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDecrease}
            />
        </main>
        </React.Fragment>
        );
    }
}
 
export default App;