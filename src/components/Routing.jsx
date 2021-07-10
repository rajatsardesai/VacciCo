import React, { useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Vaccine from './Vaccine';
import Error from './Error';

const Routing = () => {
    const ref = useRef(null);

    return (
        <>
            <Navbar refer={ref} />
            <Switch>
                <Route exact path='/home' render={() => <Home refer={ref} />} />
                <Route exact path='/get-vaccinated' render={() => <Vaccine refer={ref} />} />
                <Route component={Error} />
            </Switch>
        </>
    )
}

export default Routing
