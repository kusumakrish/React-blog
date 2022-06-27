import "./css.css"
import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <div>
        <p className="the">The</p>
        <span className="siren">Siren</span><br /><br />
        <nav>
            <b><Link to="/home" className="home">Home</Link>
            <Link to="/category/tourism" className="Tourism">Tourism</Link>
            <Link to="/category/fitness" className="Tourism">Fitness</Link>
            <Link to="/category/techonology" className="Tourism">Technology</Link>
            <Link to="/category/bollywood" className="Tourism">Bollywood</Link>
            <Link to="/category/food" className="Tourism">Food</Link></b>   
        </nav> <br/><br />
        <hr className="hr"></hr>    
        </div>
    )
}

export default Nav;