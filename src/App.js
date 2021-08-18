import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from './Pages/Products';
import ItemPage from './Pages/ItemPage';
import BasketPage from './Pages/BasketPage';
import EditCartItem from './Pages/EditCartItem';
import CreateItem from './Pages/Admin Pages/CreateItem';
import CreateCategory from './Pages/Admin Pages/CategoryPages/CreateCategory';
import CreateSubCategory from './Pages/Admin Pages/SubCategoryPages/CreateSubCategory';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="col-xl-2 col-lg-3 col-md-12 p-0">
          <NavBar />
        </div>

        <div className="col-xl-10 col-lg-9 col-md-12 p-0">
          <Switch>

            <Route exact path="/Products">
              <Products />
            </Route>
            <Route exact path="/Item">
              <ItemPage />
            </Route>
            <Route exact path="/Cart">
              <BasketPage />
            </Route>
            <Route exact path="/EditCartItem">
              <EditCartItem />
            </Route>


            <Route exact path="/Admin/ProductManager/CreateItem">
              <CreateItem />
            </Route>



            <Route exact path="/Admin/CategoryManager/CreateCategory">
              <CreateCategory />
            </Route>

            <Route exact path="/Admin/SubCategoryManager/CreateSubCategory">
              <CreateSubCategory />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
