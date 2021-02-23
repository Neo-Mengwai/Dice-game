import React, { Component } from 'react';
import Die from './Die';


class RollDice extends Component{
    static defaultProps = {
        value : ["one","two","three","four","five","six"]
    }
    constructor(props){
       super(props);
       this.state = {
           firstDie : "one",
           secondDie : "three"
       };

       this.roll = this.roll.bind(this);
    }

    roll(){
      let firstVal = this.props.value[Math.floor((Math.random() * this.props.value.length))];
      let secondVal = this.props.value[Math.floor((Math.random() * this.props.value.length))];
        
      this.setState({
          firstDie: firstVal,
          secondDie: secondVal
      })
      
    }

    render() {
        
        return (
            <div className="container">
                <div className="dice__container">
                    <Die num={this.state.firstDie}/>
                    <Die num={this.state.secondDie}/>
                </div>
                <div className="button__container">
                    <button className="dice__button" onClick={this.roll}>Roll dice</button>
                </div>  
            </div>
        )
    }
}

export default RollDice;
