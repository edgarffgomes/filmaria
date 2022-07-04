import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./favoritos.css";
const Favoritos = () =>{
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, [])

  function navegarFilme(filme){
    navigate(`/filme/${filme.id}`)
  }
  return(
    <div className="meus-filmes">
      <h1>Meus filmes:</h1>
      <ul>
        {filmes.map((filme)=>{
          return(
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <button onClick={()=>navegarFilme(filme)}>Ver detalhes</button>
                <button>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Favoritos;
