import React, {Component} from 'react'

export class State extends Component {

    state={ msg: "hello"}

    gmHandler = () => {
        this.setState({msg:"gm"})
    }
    render(){
    return (
      <div>
        <h3> {this.state.msg}</h3>
        <button onClick={this.gmHandler}> Click Me </button>
    </div>
    )
    }
}

export default State