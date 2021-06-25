import React, { useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Vaccine from './components/Vaccine';
import Error from './components/Error';
import './App.css';
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

  const ref = useRef(null)

  return (
    <>
      <Navbar refer={ref} />
      <Switch>
        <Route exact path='/' render={() => <Home refer={ref} />} />
        <Route exact path='/get-vaccinated' render={() => <Vaccine refer={ref} />} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;
