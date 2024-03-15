import React, { Component } from 'react'
import Employee from "./ListRendering/Data"

export class Empoyees extends Component {
    constructor(props){
        super(props)
        this.state = {
            Empoyee:Employee
        }
    }

    displayAlert = (name) =>{
        alert(`hii ${name} gm`)

    }
  render() {
    return (
      <div>
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>gender</th>
            </thead>
            
            <tbody>
                    {
                        this.state.employees.map((emp)=>{
                            return <tr key={emp.id}  onClick={this.displayAlert.bind(this,emp.name)} >
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                    </tr>

                        })
                    }
                </tbody>
            </table>
                </div>
          

   ) }
    
}


export default Empoyees