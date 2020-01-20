import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";

class App extends Component {
  state = { product: null };

  setProduct = product => {
    this.setState({ product: product });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/Products"
              render={() => <Products setProduct={this.setProduct} />}
            />
            <Route
              exact
              path="/Product"
              render={() => <Product product={this.state.product} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
