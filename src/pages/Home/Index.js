import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import api from "../../services/api";
import "./home.css";
// url da api: https://api.themoviedb.org/3/movie/now_playing?api_key=0872d21dc9c996bc89d07ecf09909025&language=pt-br
const Home = ()=>{
	const [filmes, setFilmes] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		async function loadFilmes (){
			const response = await api.get("movie/now_playing",{
				params:{
					api_key: '0872d21dc9c996bc89d07ecf09909025',
					language: 'pt-br',
					page: 1,
				}
			})
			setFilmes(response.data.results.slice(0, 10));
			setLoading(false)
		}
	loadFilmes();
	}, [])

	if(loading === true){
		return(
			<div className="loading">
				<h2>Carregando filmes...</h2>
			</div>
		)
	}else{
		return(
			<div className="container">
				<div className="lista-filmes">
					{filmes.map((filme) =>{
							return(
								<article key={filme.id}>
									<strong>{filme.title}</strong>
									<img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`Pôster do filme ${filme.title}`}/>
									<Link to={`/filme/${filme.id}`}>Acessar</Link>
								</article>
							)
						})
					}
				</div>
			</div>
			)
	}
}
export default Home;
