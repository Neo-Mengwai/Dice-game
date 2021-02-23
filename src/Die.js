import React, { Component } from 'react';

class Die extends Component{
    render() {
        return (
        <div className="dice">
            <i  class={`fas fa-dice-${this.props.num}`}></i>
        </div>
        )
    }
}
export default Die;
