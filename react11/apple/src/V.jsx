import React, { Component } from 'react'

class V extends Component {
    state={
        product:{
            name:"Apple iPhone 15 (Blue, 128 GB)",
            price:66499,
            ratings:"4.6",
            color:"grey",
            qty:1

        }
    }
    
    decHandler=()=>{
        this.setState({
            product:{...this.state.product,qty:this.state.product.qty -1}
        })
    }
    incrHandler = () => {
        this.setState({
            product:{...this.state.product,qty:this.state.product.qty +1}
        })
 }

  render() {
    return (
      <div>
        <table className='table'>
            <thead>
                <th> name </th>
                <th> price </th>
                <th> ratings </th>
                <th> color </th>
                <th> qty </th>
            </thead>
            <tbody>
                <tr>
                    <td> {this.state.product.name} </td>
                    <td> {this.state.product.price} </td>
                    <td> {this.state.product.ratings} </td>
                    <td> {this.state.product.color} </td>
                    
                    <button onClick={this.decHandler}>decr</button>
                    
                    <td> {this.state.product.qty} </td>
                    <button onClick={this.incrHandler}>Incr</button>
                    <td> { this.state.product.price * this.state.product.qty}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
export default V