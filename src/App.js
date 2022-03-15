import './styles/App.scss';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderNav from './components/HeaderNav/HeaderNav';
import Inventory from './pages/Inventory/Inventory';
import Warehouses from './pages/Warehouses/Warehouses';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <HeaderNav />
          <Switch>
            <Route path="/" component={Warehouses} exact />
            <Route path="/warehouses" component={Warehouses} />
            <Route path="/warehouses/:id" component={Warehouses} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={Inventory} />            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
