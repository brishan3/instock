import './styles/App.scss';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Inventory from './pages/Inventory/Inventory';
import Warehouses from './pages/Warehouses/Warehouses';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={Warehouses} exact />
            <Route path="/warehouses" component={Warehouses} />
            <Route path="/warehouses/:id" component={Warehouses} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={Inventory} />            
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
