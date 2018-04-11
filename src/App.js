import React, { Component, Fragment } from 'react'
import { Link, Route, Redirect, Switch, withRouter } from 'react-router-dom'

import Home from './Home'
import Product from './Product'
import Category from './Category'
import Page404 from './Page404'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello React!</h1>
        {console.log(this.props.match)}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/category" component={Category}/>
          <Route path='/404' component={Page404} />
          <Route exact path='*' component={Page404} />
        </Switch>
      </Fragment>
    )
  }
}

export default  withRouter(App)
