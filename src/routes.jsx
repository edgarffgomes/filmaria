import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Index.js";
import Filme from "./pages/Filme/Index.js";

const MainRoutes = ()=>{
	return(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<Home />}/>
			<Route exact path="/filme" element={<Filme />}/>
		</Routes>
	</BrowserRouter>
	)
}
export default MainRoutes;
