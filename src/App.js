import React, { useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Routing from './components/Routing';
import './components/css/Login.css';
import './components/css/Navbar.css';
import './components/css/Home.css';
import './components/css/Vaccine.css';
import './components/css/Booked.css';
import './components/css/MediaQuery.css';
import './components/css/Error.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const ref = useRef(null);

  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Login refer={ref} />} />
        <Routing />
      </Switch>
    </>
  )
}

export default App;
