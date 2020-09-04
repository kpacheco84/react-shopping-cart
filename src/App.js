//feature-1
import React from "react";
//import data from "./data.json"; now comes from backend

import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  // constructor() {
  // super();
  ///this.state = {
  //comes from redux products: data.products,
  //  comes from redux store size: "",
  //comes from redux store sort: "",
  /*cartItems: JSON.parse(localStorage.getItem("cartItems"))
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],*/
  //  };
  // }

  /* no longer needed this is provided by redux store
  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();

    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };

  addToCart = (product) => {
    console.log("addToCart is being clicked");
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
*/
  /* no longer needing these parameters in FILTER component , this will come from redux store
                 count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                */
  /* no longer needing these parameters in Products component coming from redux store products={this.state.products}*/
  /*no longer needed in Cart component cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}*/
  /* no longer needed in Products component addToCart={this.addToCart}*/

  /* this has moved to product actions
  sortProducts = (event) => {
    //impl
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };
  */
  /* this has moved to product actions
  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
*/
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/"> React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <div></div>
            <footer>All rights reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
