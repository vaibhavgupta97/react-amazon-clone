import React,{useEffect}from 'react';
import Header from './Header';
import Footer from './Footer';
import Footer2 from './Footer2';
import Header2 from './Header2';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
import Login from './Login';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';
import Prime from './Prime';
import Signin from './Signin';


const promise=loadStripe
('pk_test_51HUofUHkIt24lxOh2yosWOI38U4sXMffGuP9tVkujC5DIw8snG9OTk5BJcwknv00Gpy7vawldlqsSXuQCXzZ5lYj00sZdQ3JuX');
function App() {
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
    console.log('THE USER IS>>', authUser);
  if(authUser){
dispatch(
  {type:'SET_USER',
user:authUser})
  }
else{dispatch(
  {type:'SET_USER',
user:null})}})
  },[])
  const [{}, dispatch] = useStateValue();
return (
<Router>
<div className="app">
<Switch>
<Route path="/login">
<Login />
</Route>
<Route path="/prime">
<Prime />
</Route>
<Route path="/signin">
<Signin />
</Route>
<Route path="/orders">
<Header />
<Orders />
<Footer />
</Route>
<Route path="/checkout">
<Header />
<Checkout/>
<Footer />
</Route>
<Route path="/payment">
<Header />
<Elements stripe={promise}>
<Payment/>
</Elements>
<Footer />
</Route>
<Route path="/">

<Header />
<Header2 />
<Home />

<Footer2 />
<Footer />
</Route>
</Switch>
</div>
</Router>
);
}

export default App;
