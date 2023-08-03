// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Home from './components/HomePage';

const App = () => {
  const [user,setLoginUser]=useState({});

  return (
    <Router>
       
      {(!user || !user._id) && 

        <nav className="bg-blue-500 p-4 text-white text-center">
          <div className="mt-0">
            <Link to="/login" className="mx-2 text-white font-semibold hover:underline">
              Login
            </Link>
            <Link to="/register" className="mx-2 text-white font-semibold hover:underline">
              Register
            </Link>
            
          </div>
        </nav> 
      
      }
       
      <Switch>
        <Route exact path="/login"> <LoginForm setLoginUser={setLoginUser} /></Route>
        <Route exact path="/register" component={RegisterForm} />
        {/* Add other routes if needed */}
        <Route exact path="/" > {
            user && user._id ? <Home setLoginUser={setLoginUser} /> : <LoginForm setLoginUser={setLoginUser} />
          }
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
