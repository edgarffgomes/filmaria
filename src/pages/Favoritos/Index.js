import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify"
import "./favoritos.css";
const Favoritos = () =>{
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, [])

  function navegarFilme(id){
    navigate(`/filme/${id}`);
  }

  function excluirFilme(id){
    let filtroFilmes = filmes.filter((filme)=>{
      return (filme.id !== id)
    })
    setFilmes(filtroFilmes);

    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
    toast.error("Filme removido!");
  }
  return(
    <div className="meus-filmes">
      <h1>Meus filmes:</h1>

      {filmes.length === 0 && <strong>Você não possui nenhum filme salvo! :( </strong>}
      <ul>
        {filmes.map((filme)=>{
          return(
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <button onClick={()=>navegarFilme(filme.id)}>Detalhes</button>
                <button onClick={()=>excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Favoritos;
