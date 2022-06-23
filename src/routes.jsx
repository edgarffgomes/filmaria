import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Index.js";
import Filme from "./pages/Filme/Index.js";
import Header from "./components/Header/Index.jsx"

const MainRoutes = ()=>{
	return(
	<BrowserRouter>
	<Header/>
		<Routes>
			<Route exact path="/" element={<Home />}/>
			<Route exact path="/filme" element={<Filme />}/>
		</Routes>
	</BrowserRouter>
	)
}
export default MainRoutes;
