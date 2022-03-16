import "./styles/App.scss";
import Inventory from "./pages/Inventory/Inventory";
import Warehouses from "./pages/Warehouses/Warehouses";
import EditInven from "./components/EditInven/EditInven";
import AddInven from "./components/AddInven/AddInven";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <article className="page-container">
          <div className="page-container__inner">
            <Switch>
              <Route path="/" component={Warehouses} exact />
              <Route path="/warehouses" component={WarehouseDetails} />
              <Route path="/warehouses/:id" component={Warehouses} />
              <Route path="/inventory" exact component={EditInven} />
              <Route path="/inventory/add" component={AddInven} />
              <Route path="/inventory/:id" component={Inventory} />
            </Switch>
          </div>
          <Footer />
        </article>
      </div>
    </BrowserRouter>
  );
}

export default App;
