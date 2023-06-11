import logo from './logo.svg';
import {
  Routes,
  Route} from 'react-router-dom'
import './App.css';

import TopNav from './components/TopNav'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SearchResults from './components/SearchResults';
import ShoppingCart from './components/ShoppingCart';
import AccountInfo from './components/AccountInfo';
import OrderHistory from './components/OrderHistory';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <TopNav></TopNav>
        <Routes>
          <Route path = "/" element= {<MainContent/>}>
            <Route path = "" element= {<Home/>}/>
            <Route path = "signin" element= {<SignIn/>}/>
            <Route path = "search-results" element= {<SearchResults/>}/>
            <Route path = "shopping-cart" element= {<ShoppingCart/>}/>
            <Route path = "account-info" element= {<AccountInfo/>}/>
            <Route path = "order-history" element= {<OrderHistory/>}/>
          </Route>
        </Routes>
        <Footer></Footer>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
