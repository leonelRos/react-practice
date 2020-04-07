import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 3
    };
    render (){
        
        return (
            <div>
                {/* // we can write any javascript syntax in the curly braces */}
                <span className={this.getBadgeColor()}>{this.createFormat()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )
    }
    getBadgeColor() { //is the method to change color once is different than zero
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


