import React, { Component } from 'react'
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Empoyees from './ListRendering/Empoyees'
import Employee from './ListRendering/Empoyees'
// import Navbar from './Navbar/Navbar'
// import About from './Navbar/component/About'
// import Contact from './Navbar/component/Contact'
// import Home from './Navbar/component/Home'
// import Services from './Navbar/component/Services'


//  class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar/>
//         <Switch>
//             <Route exact Path="/home" component={Home}/>
//             <Route exact Path="/about" component={About}/>
//             <Route exact Path="/services" component={Services}/>
//             <Route exact Path="/contact" component={Contact}/>
//         </Switch>
//         </Router>

//       </div>
//     )
//   }

// }
//  export default App



export class App extends Component {
  render() {
    return (
      <div>
        <Empoyees/>
      </div>
    )
  }
}

export default App