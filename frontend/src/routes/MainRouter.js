import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactView from '../views/Contact';
import LandingPage from '../views/Landing';
import Resume from '../views/Resume';
import Blog from '../views/Blog';
import Login from '../components/login/LoginBox'
// import Callback from '../auth/Callback'


const MainRouter = (props) => (
    <Switch>
        <Route exact path='/' render={(routeProps) => (
            <LandingPage {...routeProps} {...props} />
        )}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/blog' render={(routeProps) => (
            <Blog {...routeProps} {...props} />
        )}/>
        <Route path='/contact' render={(routeProps) => (
            <ContactView {...routeProps} {...props} />
        )}/>
        <Route exact path='/login' render={(routeProps) => (
            <Login {...routeProps} {...props}/>
        )}/>
    </Switch>
)

export default MainRouter;