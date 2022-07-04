import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../../services/api"
import "./filme.css";
const Filme = ()=>{
	const { id } = useParams();
	const [filme, setFilme] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		async function loadFilme(){
			await api.get(`movie/${id}`, {
				params:{
					api_key: '0872d21dc9c996bc89d07ecf09909025',
					language: 'pt-br',
				}})
			.then((response)=>{
				setFilme(response.data);
				setLoading(false);
			})
			.catch(()=>{})
			}

			loadFilme();

			return ()=> {
				console.log("Componente desmonatdo")
			}
	},[])


	if(loading){
		return(
			<div className="filme-info">
				<strong>Carregando detalhes...</strong>
			</div>
		)
	}
	return(
		<div className="filme-info">
				<h1>{filme.title}</h1>

				<img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={`Pôster do filme ${filme.title}`}/>

				<h3>Sinopse:</h3>
				<p>{filme.overview}</p>

				<h3>Avaliação:</h3>
				<span>{filme.vote_average} / 10</span>

				<div className="area-buttons">
					<button>
						Salvar
					</button>

					<button>
						<a href="#">
							Trailer
						</a>
					</button>
				</div>
				
		</div>
		)
}
export default Filme;
