import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import Login from './Login'
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51KLhpISEcZwIqVhY4Et2nhlMpFbC96K3xmYhGmy10EKf7jNlsweQrMycWR1b7TI24MvFPgNEuqAnTdlfKAMk2Nbm00qnLnPXCH"
);

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {

      if(authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><Home/><Footer/></>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/checkout' element={<><Header/><Checkout/><Footer/></>} />
          <Route 
          path='/payment' 
          element={<><Header/><Elements stripe={promise}><Payment/></Elements></>} 
          />
          <Route path='/orders' element={<><Header/><Orders/></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;