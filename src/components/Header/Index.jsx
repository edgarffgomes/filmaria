import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
const Header = ()=>{

  return(
    <header>
      <Link to="" className="logo"><span className="prime">Prime</span><span className="flix">Flix</span></Link>
      <Link to="/favoritos" className="favoritos">Meus filmes</Link>
    </header>
  )
}
export default Header;
