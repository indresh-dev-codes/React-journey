import { Component } from "react";
class Counter extends Component
{
    state = {
        count:0
    };
    render()
    {
        return(
            <h2>{this.state.count}</h2>
        )
    }
}
export default Counter;