import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import api from "../../services/api"
import "./filme.css";
const Filme = ()=>{
	const { id } = useParams();
	const navigate = useNavigate()
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
				.catch(()=>{
					navigate("/", { replace: true });
					return;
				})
			}

			loadFilme();

			return ()=> {
				console.log("Componente desmonatdo")
			}
	},[id, navigate])

	function salvarFilme(){
		const minhaLista = localStorage.getItem("@primeflix")

		let filmesSalvos = JSON.parse(minhaLista) || [];

		const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

		if(hasFilme){
			alert('Esse filme já está na lista');
			return;
		}

		filmesSalvos.push(filme);
		localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
		alert('Filme salvo com sucesso!');
	}


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
					<button onClick={salvarFilme}>
						Salvar
					</button>

					<button>
						<a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
							Trailer
						</a>
					</button>
				</div>

		</div>
		)
}
export default Filme;
