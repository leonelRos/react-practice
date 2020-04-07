import React, {Component} from "react";

class Counter extends Component {
    // state = {
    //     value : this.props.counter.value
    // };
    //by using arrow function i sae myself from using constructor. THIS is a relation of the object 
    // getIncrement = () => {       
    //     //this increments the state by 1
    //     this.setState({ value: this.state.value + 1}) 
    // }
    render (){
        
        return (
            <div>
                {/* // we can write any javascript syntax in the curly braces */}
                <span className={this.getBadgeColorClasses()}>{this.createFormat()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
                <button onClick={() => this.props.onDecrease(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }

    getBadgeColorClasses() { //is the method to change color og className once is different than zero
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    createFormat(){
        // we can ssign a variable in curly brackets instead of this.state.count
        const {value} = this.props.counter;
        //this statemtn says if count is equal to 0 return the word ZERO otherwise return count
        return value === 0 ? "zero" : value;
    }
}
 
export default Counter;


