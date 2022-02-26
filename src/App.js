import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from './Pages/Products';
import ItemPage from './Pages/ItemPage';
import BasketPage from './Pages/BasketPage';
import EditCartItem from './Pages/EditCartItem';
import CreateItem from './Pages/Admin Pages/ItemPages/CreateItem';
import CreateCategory from './Pages/Admin Pages/CategoryPages/CreateCategory';
import CreateSubCategory from './Pages/Admin Pages/SubCategoryPages/CreateSubCategory';
import CreateSizeChart from './Pages/Admin Pages/SizeChartPages/CreateSizeChart';
import Home from './Pages/Home';
import Logo from '../src/Content/Logos/LogoOriginal.png';

function App() {
  return (
    <div className="">
      {/* <div style={{textAlign: 'center'}}>
        <img src={Logo} className="site-logo" />
      </div> */}
      <Router>
          <NavBar />
          
          <Switch>
            <div className="">
              <Route exact path="/">
                <Home />
              </Route>
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

              <Route exact path="/Admin/SizeChartManager/CreateSizeChart">
                <CreateSizeChart />
              </Route>

            </div>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

/* 
  https://www.frankbody.com/us/shop/best-sellers/
*/