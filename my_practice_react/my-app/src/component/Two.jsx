import React, { Component } from 'react'

export class Two extends Component {
    state={
        msg:"hi im sunita rathod"
    }

    handler=()=>{
        this.setState({
            msg:"this is now sunita lamani"
        })
    }
  render() {
    return (
      <div>
        <h1> {this.state.msg} </h1>
        <button onClick={()=>{this.handler()}}> click me!</button>
      </div>
    )
  }
}

export default Two