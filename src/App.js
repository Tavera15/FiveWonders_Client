import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from './Pages/Products';
import Item from './Pages/Item';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="col-lg-3 col-md-12">
        </div>

        <div className="col-lg-9 col-md-12">
          <Switch>

            <Route exact path="/Products">
              <Products />
            </Route>

            <Route exact path="/Item">
              <Item />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
