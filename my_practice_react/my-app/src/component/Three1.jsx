import React, { Component } from 'react'

export class Three1 extends Component {
    state={
        msg:"this is sunitanrathod"
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
        <button onClick={()=>{this.handler()}}>click me!</button>
        </div>
    
    )
  }
}

export default Three1