import React from 'react';
import "./Nav.css";
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <div className="nav">
            <NavLink to="/" exact activeClassName="active" >  <p className="nav_personal single"   >Personal Details</p></NavLink>
            <NavLink to="/companydetails" activeClassName="active">  <p className="nav_company single" >Company Details</p></NavLink>
            <NavLink to="/emailverification" activeClassName="active"> <p className="nav_email single" >Email Verification</p></NavLink>
          
        
           
        </div>
    )
}

export default Nav
