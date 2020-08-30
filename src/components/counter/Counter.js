import React, {Component} from "react"

class Counter extends Component{
    constructor(props){
        super(props);
        console.log('[Counter.js] constructor called');
    }

    render(){
        console.log('[Counter.js] render called');
        return(
            <div>Counter</div>
        )
    }
}

export default Counter;