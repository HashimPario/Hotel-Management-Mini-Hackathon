import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Login from '../screen/Login'
import Register from '../screen/Register'
import Home from '../screen/home'
import PrivateRoute from './privateRoute';
import AdminLogin from "../screen/adminLogin";
import AdminRegister from "../screen/adminRegister";
import About from '../screen/about'
import Contact from '../screen/contact'
import AdminPanel from "../screen/adminPanel";
import ViewDetails from "../screen/viewdetails";
import Booking from "../screen/booking";
import Payment from "../screen/payment";



function AppRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home /> 
                </Route>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/viewdetails">
                    <ViewDetails />
                </Route>
                <Route path="/booking">
                    <Booking />
                </Route>

                <Route path="/payment">
                    <Payment />
                </Route>

                <Route path="/about">
                    <About />
                </Route>
                
                <Route path="/contact">
                    <Contact />
                </Route>
                
                    


                <Route path="/adminlogin">
                    <AdminLogin />
                </Route>

                <Route path="/adminregister">
                    <AdminRegister />
                </Route>

                <PrivateRoute path="/adminpanel">
                    <AdminPanel />
                </PrivateRoute>

               


            </Switch>
        </Router>
    )
}



export default AppRoute