import SearchHeader from "./components/SearchHeader/SearchHeader";

import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <article className="page-container">
          <div className="page-container__inner">
            <Switch>
              <Route path="/" component={Warehouses} exact />
              <Route path="/warehouses" component={Warehouses} />
              <Route path="/warehouses/:id" component={Warehouses} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/inventory/:id" component={Inventory} />
            </Switch>
          </div>
        </article>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
