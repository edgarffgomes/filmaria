import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
const Header = ()=>{

  return(
    <header>
      <Link to="" className="logo">PrimeFlix</Link>
      <Link to="/favoritos" className="favoritos">Meus filmes</Link>
    </header>
  )
}
export default Header;
