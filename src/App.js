import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/CheckOut/CheckOut';
import {Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              {/*<BurgerBuilder/>*/}
              {/*<Checkout/>*/}

              <Switch>
              <Route path='/' exact component={BurgerBuilder}/>
              <Route path='/Checkout' exact component={Checkout}/>
              </Switch>


          </Layout>
      </div>
    );
  }
}

export default App;
