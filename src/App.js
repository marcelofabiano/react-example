import React, { Component, Fragment } from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Product from './Product'
import Category from './Category'
import Page404 from './404'

class App extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.macth)
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <h1>Hello React!</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/category" component={Category}/>
            <Route component={Page404}/>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
