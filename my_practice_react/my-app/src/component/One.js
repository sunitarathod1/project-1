import React, { Component } from 'react';

export class One extends Component {
state= {
            msg:"hello welcome to the world"
        }
        subscribe=() =>{
            this.setState({
                msg:"good morning"
            })
        }
        
        
        
    
  render() {
    return (
      <div>
        <h1> {this.state.msg}</h1>
        <button onClick= { () => {this.subscribe() }}>click</button>
      </div>
    )
  }
}


export default One