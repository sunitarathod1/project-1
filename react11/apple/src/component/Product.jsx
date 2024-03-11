import React, { Component } from 'react'

export class Product extends Component {

     state = {
               Product_Name:"Boult Z40 Ultra 32dB ANC, Dual Device Pairing, 100H Bat...",
               Product_Image:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/w/2/c/-original-imagynxtap2be2ff.jpeg?q=70",
               Product_Ratings:"4.1",
               Product_Price:"₹1,199",
               Product_Qty:"1",
              }

    incrHandler = () =>{
        this.setState({
            Product_Qty:this.state.Product_Qty +1
        })
    }

    decrHandler = () => {
        this.setState({
            Product_Qty:this.state.Product_Qty -1
        })
    }
    

  render() {
    return (
      <div>
        <table>
            <thead>
                <th> Product_Name </th>
                <th> Product_Image </th>
                <th> Product_Ratings</th>
                <th> Product_Price</th>
                <th>Product_Qty</th>                

            </thead>
            <tbody>
                <tr>
                    <td> {this.state.Product_Name} </td>
                    <td> <img src={this.state.Product_Image} height="100px" width="100px"alt=""/> </td>
                    <td> {this.state.Product_Ratings} </td>
                    <td> {this.state.Product_Price} </td>
                    <td> {this.state.Product_Qty} </td>
                    <td><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>{this.state.Product_Qty} <i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                <td>{this.state.Product_Price *  this.state.Product_Qty} </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }

}
export default Product