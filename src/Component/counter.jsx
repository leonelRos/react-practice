import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 0
    };
    getIncrement = () => {
        console.log("this is incrementing", this)
    }
    render (){
        
        return (
            <div>
                {/* // we can write any javascript syntax in the curly braces */}
                <span className={this.getBadgeColorClasses()}>{this.createFormat()}</span>
                <button onClick={this.getIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
            </div>
        )
    }

    getBadgeColorClasses() { //is the method to change color og className once is different than zero
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    createFormat(){
        // we can ssign a variable in curly brackets instead of this.state.count
        const {count} = this.state
        //this statemtn says if count is equal to 0 return the word ZERO otherwise return count
        return count === 0 ? "zero" : count;
    }
}
 
export default Counter;


