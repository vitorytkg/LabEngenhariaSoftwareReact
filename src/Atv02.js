import ContadorDePessoas from "./components/ContadorDePessoas";
import { Link } from "react-router-dom";

export default function Atv02(){
    return (
        <>
          <h2> Atividade 02</h2>
          <Link className="voltar" to="/">Voltar para a página inicial</Link>
          <ContadorDePessoas />
        </>
    );
}