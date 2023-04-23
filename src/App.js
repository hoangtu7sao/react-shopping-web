// import logo from './logo.svg';
import './App.css';
import Homepage from './component/index';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import CartPage from './component/cart/cart';
import Checkout from './component/checkout/checkout';
 import SingleProductWoman from './component/single-product-woman/single-product-woman';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <Header/>
        <Switch>
          <Route exact path='/'><Homepage/></Route>
          <Route path='/cart'><CartPage/></Route>
          <Route path='/check-out'><Checkout/></Route>
          <Route path='/single-product-woman'><SingleProductWoman/></Route>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
