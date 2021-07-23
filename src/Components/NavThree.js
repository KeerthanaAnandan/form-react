import React from 'react';
import "./Nav.css";
// import { NavLink } from "react-router-dom"
import CheckIcon from '@material-ui/icons/Check';
//import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function Nav() {
    return (
        <div className="nav">
            <div  >  <p className="nav_personal single" >
                <CheckIcon className="nav-btn" />
                {/* <span className="num-btn"> 1</span> */}
                Personal Details</p></div>
                {/* <svg height="210" width="500">
                <line x1="100" y1="0" x2="310" y2="0" style={{stroke:"rgb(255,250,0)",strokeWidth:2}} />
</svg> */}
<h2><span></span></h2>

            <div >  <p className="nav_company single" >
                <CheckIcon  className="nav-btn"/>
                Company Details</p></div>
                <h2><span></span></h2>
            <div > <p className="nav_email single" >
            {/* <CheckIcon  className="nav-btn"/> */}
            <span className="num-btn"> 3</span>
            Email Verification</p></div>
          
        
           
        </div>
    )
}

export default Nav
