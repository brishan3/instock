import "./styles/App.scss";
import EditInven from "./components/EditInven/EditInven";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Inventory from "./pages/Inventory/Inventory";
import Warehouses from "./pages/Warehouses/Warehouses";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <article className="page-container">
          {/* <div className="page-container__inner"> */}
          <Switch>
            <Route path="/" component={Warehouses} exact />
            <Route path="/warehouses" component={Warehouses} />
            <Route path="/warehouses/:id" component={Warehouses} />
            <Route path="/inventory" component={EditInven} />
            <Route path="/inventory/:id" component={Inventory} />
          </Switch>
          {/* </div> */}
        </article>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
