import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Index.js";
import Filme from "./pages/Filme/Index.js";
import Header from "./components/Header/Index.jsx"
import Erro from "./pages/Erro/index.js"
import Favoritos from "./pages/Favoritos/Index.js"

const MainRoutes = ()=>{
	return(
	<BrowserRouter>
	<Header/>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/filme/:id" element={<Filme />}/>
			<Route path="/favoritos" element={<Favoritos/>}/>


			<Route path="*" element={<Erro />}/>
		</Routes>
	</BrowserRouter>
	)
}
export default MainRoutes;
